const Circle = require('../lib/circle.js');

//Testing suite for the Circle class.

describe('Circle', () => {
  test('Should create an instance of the Circle class', ()=>{
    const circle = new Circle();
    expect(circle instanceof Circle).toBe(true);
  })
  test('Should set the shapeColor property of a Circle instance to "green"', () => {
    const circle = new Circle("green");
    expect(circle.shapeColor).toEqual("green");
  });
  test('Should generate an XML element with the attributes set to generate a svg image of a Circle of the given color("fill" attribute)', () => {
    const circle = new Circle("yellow");
    const expectedXml = `<circle cx="101" cy="101" r="99" fill="yellow" />`;
    expect(circle.render()).toEqual(expectedXml);
  });
 
});