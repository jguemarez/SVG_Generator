const svgColors = require('./SVGcolors.js');

function isValidLogoText(text){

    return text.length > 0 && text.length <=3;
}

function isValidSVGColorKeyword(keyword){
    
    return svgColors.includes(keyword);
}

function isValidHexRGBColorCode(str){
 regexp = /^#{1}[0-9a-fA-F]{6}$/;
  
        return regexp.test(str);
          
}

module.exports = {isValidSVGColorKeyword, isValidHexRGBColorCode, isValidLogoText}