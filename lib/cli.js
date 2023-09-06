const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const createSVG = require('./SVG');
const {isValidLogoText, isValidSVGColorKeyword, isValidHexRGBColorCode} = require('./validate_input');

class CLI {
 
  run() {

    const questions = [
      {
        type: 'input',
        name: 'text',
        message: '\nThe text content of the logo must not be empty and it can be up to three characters long. Please enter the desired text for your logo: ',
      },
      {
        type: 'input',
        name: 'color',
        message: `\nTo select a color, you must enter the SVG color keyword or the hexadecimal rgb color code. 
        If needed, press Ctrl+click to follow the links to these references for the keywords and the hex codes, respectively: 
        \u001b[34;1m https://commons.wikimedia.org/wiki/File:SVG_Recognized_color_keyword_names.svg\u001b[0m  and  \u001b[34;1m https://www.rapidtables.com/web/color/RGB_Color.html#color-chart\u001b[0m.
        Please enter the color keyword or hexadecimal code for the color in which you want your text: `
      },
      {
        type: 'list',
        name:'shape',
        message: '\nChoose the desired shape for your logo: ',
        choices: ['Circle', 'Square', 'Triangle'],
      },
      {
        type:'input',
        name: 'fill',
        message:`\nTo select a color, you must enter the SVG color keyword or the hexadecimal rgb color code. 
        If needed, press Ctrl+click to follow the links to these references for the keywords and the hex codes, respectively: 
        \u001b[0;36m https://commons.wikimedia.org/wiki/File:SVG_Recognized_color_keyword_names.svg\u001b[0m  and  \u001b[0;36m https://www.rapidtables.com/web/color/RGB_Color.html#color-chart\u001b[0m.
        Please enter the color keyword or hexadecimal code for the color with which to fill your shape: `
      }
    ];

    return inquirer
      .prompt(questions)
      .then(({ text, color, shape, fill }) => {
        if(isValidLogoText(text) && (isValidSVGColorKeyword(color) || isValidHexRGBColorCode(color))&&(isValidSVGColorKeyword(fill) || isValidHexRGBColorCode(fill))){

          console.log('\u001b[32m\n\nSuccess: Created "logo.svg" file. You can press Alt+B in order to render the logo in Google Chrome browser.\u001b[0m');
          return writeFile(
            join(__dirname, '..', 'output', `${text}-logo.svg`),
            createSVG(text, color, shape.toLowerCase(), fill));

        } else {

        if(!isValidLogoText(text)) console.log('\u001b[31m\nInvalid text for the logo. Try again.\n\u001b[0m');
        if(!isValidSVGColorKeyword(color) && !isValidHexRGBColorCode(color)) console.log("\u001b[31m\nInvalid color for the logo's text. Try again.\n\u001b[0m");
        if(!isValidSVGColorKeyword(fill) && !isValidHexRGBColorCode(fill)) console.log("\u001b[31m\nInvalid color to fill the logo's shape. Try again.\n\u001b[0m");

        this.run();

        }
      })
      .catch((err) => {
        console.log('\u001b[31m\nFail: Unfortunately, something went wrong.\n\u001b[0m');
        console.error(err);
      });
  }
}

module.exports = CLI;
