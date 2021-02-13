const Glob      = require("glob");
const PngJS     = require('pngjs').PNG;
const fs        = require('fs');
const tinycolor = require('tinycolor2');

class PaletteGenerator {

  /**
   * Makes an instance of PaletteGenerator
   * @constructor
   * @param {string} path - Path to which your files are.
   * @return {void}
   */
  constructor(path) {
    this.palette = [];
    this.path = path.trim().replace(/\/$/, '');
  }

  /**
   * Generates a glob of files and turns them into a palette array. Also sorts them by color.
   * @return {array}
   */
  getPalette() {

    if (this.palette.length !== 0) {
      return this.palette;
    }

    const files = Glob.sync(`${this.path}/**/*.png`);

    if (!files) {
      console.error('Error fetching files from directory.', error);
      return;
    }

    for (const file of files) {
      this.translatePixelsToPalette(file);
    }

    this.sortPalette();

    return this.palette;

  }

  /**
   * Reads the PNG and converts into into an array of hex values.
   * @param {string} file - PNG file in which to read from.
   * @return {void}
   */
  translatePixelsToPalette(file) {

    // Read file in sync (this is a command line app not a web app).
    const data = fs.readFileSync(file);
    const png = PngJS.sync.read(data);

    // Nothing to do, the PNG didn't load.
    if (!png) {
        console.error(`PNG could not be loaded: ${file}`);
        return;
    }

    // Read pixel data and transform into hex code.
    const pixels = png.data;
    for (let x=0;x<pixels.length;x=x+4) {

      let color = '#';
      for (let y = 0; y < 4; y++) {
        let hex = pixels[x+y].toString(16);
        if (hex.length === 1) {
          hex = '0' + hex;
        }
        color = color + hex;
      }

      if (!this.palette.includes(color)) {
          this.palette.push(color);
      }
    }

  }

  /**
   * Sorts the hex values in color order.
   * @return {void}
   */
  sortPalette() {

    if (this.palette.length === 0) {
      return;
    }

    this.palette = this.palette.sort(function(colorA, colorB) {
      return tinycolor(colorA).toHsv().h - tinycolor(colorB).toHsv().h;
    });

  }

}

module.exports = PaletteGenerator;
