const Triangle = require('../lib/triangle.js');

//Testing suite for the Triangle class.

describe('Triangle', () => {
  test('Should create an instance of the Triangle class', ()=>{
    const triangle = new Triangle();
    expect(triangle instanceof Triangle).toBe(true);
  })
  test('Should set the shapeColor property of a Triangle instance to "blue"', () => {
    const triangle = new Triangle("blue");
    expect(triangle.shapeColor).toEqual("blue");
  });
  test('Should generate an XML element with the attributes set to generate a svg image of a triangle of the given color("fill" attribute)', () => {
    const triangle = new Triangle("red");
    const expectedXml = `<polygon points="150, 0 300, 182 0, 182" fill="red" />`;
    expect(triangle.render()).toEqual(expectedXml);
  });
 
});