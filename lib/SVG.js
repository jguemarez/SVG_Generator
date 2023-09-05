const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function createSVG(text, textColor, shape, shapeColor){

    const openingTag = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    let textTag; 
    const closingTag = `</svg>`;

    switch(shape){

        case 'circle':  const circle = new Circle(shapeColor);
        textTag =  `<text x="100" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        return openingTag + circle.render() + textTag + closingTag;

        case 'square':  const square = new Square(shapeColor);
        textTag =  `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        return openingTag + square.render() + textTag + closingTag;

        case 'triangle': const triangle = new Triangle(shapeColor);
        textTag =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
        return openingTag + triangle.render() + textTag + closingTag;
    };
}

module.exports = createSVG;