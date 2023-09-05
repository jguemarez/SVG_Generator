const Square = require('../lib/square.js');

//Testing suite for the Square class.

describe('Square', () => {
  test('Should create an instance of the Square class', ()=>{
    const square = new Square();
    expect(square instanceof Square).toBe(true);
  })
  test('Should set the shapeColor property of a Square instance to "orange"', () => {
    const square = new Square("orange");
    expect(square.shapeColor).toEqual("orange");
  });
  test('Should generate an XML element with the attributes set to generate a svg image of a Square of the given color("fill" attribute)', () => {
    const square = new Square("brown");
    const expectedXml = `<rect x="0" y="0" rx="10" ry="10" width="200" height="200" fill="brown"/>`;
    expect(square.render()).toEqual(expectedXml);
  });
 
});