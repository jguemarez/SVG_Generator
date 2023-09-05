const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(triangleColor){
        super(triangleColor);
    }
    render(){
        return `<polygon points="150, 0 300, 182 0, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = Triangle;

