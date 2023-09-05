const CLI = require('./lib/cli.js');

const cli = new CLI();

console.log("\u001b[33m Welcome to the SVG Logo App.\n\nPlease, follow instructions while answering the following questions in order to generate a personal, custom logo for yourself or your project.\u001b[0m\u001b[35m\n\nNB: You can press Crtl+C at any point in order to exit the app\n\n\u001b[0m")

cli.run();
