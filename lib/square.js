const Shape = require('./shape.js');

class Square extends Shape {
    constructor(squareColor){
        super(squareColor);
    }
    render(){
        return `<rect x="0" y="0" rx="10" ry="10" width="200" height="200" fill="${this.shapeColor}"/>`;
    }
}

module.exports = Square;
