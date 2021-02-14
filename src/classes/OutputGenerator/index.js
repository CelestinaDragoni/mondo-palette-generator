const fs = require('fs');

const AdobeColorGenerator = require('./Generators/ACO');
const JSONGenerator = require('./Generators/JSON');
const LESSGenerator = require('./Generators/LESS');
const SASSGenerator = require('./Generators/SASS');
const CSSGenerator = require('./Generators/CSS');
const HTMLGenerator = require('./Generators/HTML');
const PNGGenerator = require('./Generators/PNG');
const TEXTGenerator = require('./Generators/TEXT');

class OutputGenerator {

  /**
   * Makes an instance of OutputGenerator
   * @constructor
   * @param {string} path - Path to where files will go.
   * @param {array} palette - Palette generated in Palette Generator
   * @return {void}
   */
  constructor(path, palette) {
    this.path = path.trim().replace(/\/$/, '');
    this.palette = palette;
  }

  /**
   * Generates ACO (Adobe Color) output.
   * @return {void}
   */
  makeACO() {
    console.log(`Generating ACO File`);
    const instance = new AdobeColorGenerator();
    instance.generate(`${this.path}/palette.aco`, this.palette);
  }

  /**
   * Generates JSON output.
   * @return {void}
   */
  makeJSON() {
    console.log(`Generating JSON File`);
    JSONGenerator(`${this.path}/palette.json`, this.palette);
  }

  /**
   * Generates CSS output.
   * @return {void}
   */
  makeCSS() {
    console.log(`Generating CSS File`);
    CSSGenerator(`${this.path}/palette.css`, this.palette);
  }

  /**
   * Generates LESS output.
   * @return {void}
   */
  makeLESS() {
    console.log(`Generating LESS File`);
    LESSGenerator(`${this.path}/palette.less`, this.palette);
  }

  /**
   * Generates SASS/SCSS output.
   * @return {void}
   */
  makeSASS() {
    console.log(`Generating SASS/SCSS File`);
    SASSGenerator(`${this.path}/palette.sass`, this.palette);
    SASSGenerator(`${this.path}/palette.scss`, this.palette, true);
  }

  /**
   * Generates HTML output.
   * @return {void}
   */
  makeHTML() {
    console.log(`Generating HTML File`);
    HTMLGenerator(`${this.path}/palette.html`, this.palette);
  }

  /**
   * Generates PNG output.
   * @return {void}
   */
  makePNG() {
    console.log(`Generating PNG File`);
    PNGGenerator(`${this.path}/palette.png`, this.palette);
  }

  /**
   * Generates text output.
   * @return {void}
   */
  makeTEXT() {
    console.log(`Generating TEXT File`);
    TEXTGenerator(`${this.path}/palette.txt`, this.palette);
  }

  /**
   * Generates all of the things.
   * @return {void}
   */
  makeAll() {
    this.makeACO();
    this.makeJSON();
    this.makeCSS();
    this.makeLESS();
    this.makeSASS();
    this.makeHTML();
    this.makePNG();
    this.makeTEXT();
  }

}

module.exports = OutputGenerator;
