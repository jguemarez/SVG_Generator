const { isValidLogoText, isValidHexRGBColorCode, isValidSVGColorKeyword } = require('../lib/validate_input.js');
const SVGcolors = require('../lib/SVGcolors.js');

//Testing suite for validate_input module

//Tests suite for isValidLogoText

describe('isValidLogoText(text) function', () => {
    test('Should return false if text.length is zero', () => {
        const text = '';
        expect(isValidLogoText(text)).toEqual(false);
    })
    test('Should return false if text.length > 3', () => {
        const text = 'ARMG';
        expect(isValidLogoText(text)).toEqual(false);
    })
    test('Should return true if text is nonempty and text.length <= 3', () => {
        const text = 'JMG';
        expect(isValidLogoText(text)).toEqual(true);
    })
})

//Tests for isValidHexRGBColorCode

describe('isValidHexRGBColorCode(str) function', () => {
    test('Should return false if the first character is not "#".', () => {
        const str = '$ff00ff';
        expect(isValidHexRGBColorCode(str)).toEqual(false);
    })
    test('Should return false if any of the reamaining characters is not a digit 0-9 or a letter a-f(case insensitive).', () => {
        const str = '#ff00f&';
        expect(isValidHexRGBColorCode(str)).toEqual(false);
    })
    test('Should return false if it has more than 7 characters in total.', () => {
        const str = '#ff00ff0';
        expect(isValidHexRGBColorCode(str)).toEqual(false);
    })
    test('Should return false if it has less than 7 characters in total.', () => {
        const str = '#ff00f';
        expect(isValidHexRGBColorCode(str)).toEqual(false);
    })
    test('Should return true if the first character is a hashtag and the final 6 are in the class[A-Fa-f0-9].', () => {
        const str = '#ff00ff';
        expect(isValidHexRGBColorCode(str)).toEqual(true);
    })

})

// Tests for isValidSVGColorKeyword

describe('isValidSVGColorKeyword', () => {

    for (const keyword of SVGcolors) {
        test('Should return true if "keyword" is a binding for any string in the SVGcolors array', () => {
            expect(isValidSVGColorKeyword(keyword)).toEqual(true);
        })
    };

    test('Should return false if "keyword" is the empty string.', () => {
        const keyword = '';
        expect(isValidSVGColorKeyword(keyword)).toEqual(false);
    })
    test('Should return false if "keyword" contains any string not included in SVGcolors array.', () => {
        const keyword = 'transparent';
        expect(isValidSVGColorKeyword(keyword)).toEqual(false);
    })
})


