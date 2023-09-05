const Shape = require('../lib/shape.js');

//Testing suite for the Shape class.

describe('Shape', () => {
  test('Should create an instance of the Shape class', ()=>{
    const shape = new Shape();
    expect(shape instanceof Shape).toBe(true);
  })
  test('Should set the shapeColor property of a Shape instance to "magenta"', () => {
    const shape = new Shape("magenta");
    expect(shape.shapeColor).toEqual("magenta");
  });
  test('Should throw an error to the console, indicating that each child class has its own implementation of the render() method.', () => {
    const shape = new Shape("cyan");
    expect(() => shape.render()).toThrowError('Each child class has its own render method with varying functionality (different XML elements are generated).');
  });
 
});