const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(circleColor){
        super(circleColor);
    }
    render(){
        return `<circle cx="101" cy="101" r="99" fill="${this.shapeColor}" />`;
    }
}

module.exports = Circle;

