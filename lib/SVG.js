function createSVG(text, textColor, shape, shapeColor){

    switch(shape){

        case 'circle':  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} cx="101" cy="101" r="99" fill="${shapeColor}" />
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>` ;
        case 'square':  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" rx="10" ry="10" width="200" height="200" fill="${shapeColor}"/>
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>` ;
        case 'triangle': return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        '<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />'
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>` ;
    };
}

module.exports = createSVG;