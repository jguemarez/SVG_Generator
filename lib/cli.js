const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const createSVG = require('./SVG');

class CLI {

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'The text conetent of the logo must not be empty and it can be up to three characters long. Please enter the desired text for your logo: ',
        },
        {
          type: 'input',
          name: 'color',
          message: '(\nIf needed, press Ctrl+click to follow this reference url:https://commons.wikimedia.org/wiki/File:SVG_Recognized_color_keyword_names.svg)\nPlease enter the color keyword or hexadecimal code for the color in which you want your text: '
        },
        {
          type: 'list',
          name:'shape',
          message: 'Choose the desired shape for your logo: ',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          type:'input',
          name: 'fill',
          message:'(If needed, press Ctrl+click to follow this reference url:https://commons.wikimedia.org/wiki/File:SVG_Recognized_color_keyword_names.svg)\nPlease enter the color keyword or hexadecimal code for the color with which you want the shape to be filled-in: '
        }
      ])
     /* .then(({ text, color, shape, fill }) => {

        validateText(text);
        validateColor(color);
        validateFill(fill);

      })*/
      .then(({text, color, shape, fill}) => {
    
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          createSVG(text, color, shape.toLowerCase(), fill)
        );
      })
      .then(() => console.log('\u001b[32m\n\nSuccess: Created "logo.svg" file. You can press Alt+B in order to render the logo in Google Chrome browser.\u001b[0m'))
      .catch((err) => {
        console.log('\u001b[31m\nFail: Unfortunately, something went wrong.\n\u001b[0m');
        console.error(err);
      });
  }
}

module.exports = CLI;
