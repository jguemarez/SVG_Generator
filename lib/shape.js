class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }

    render(){
        throw new Error('Each child class has its own render method with varying functionality (different XML element).');
    }
}

module.exports = Shape;

