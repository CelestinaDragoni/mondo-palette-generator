const fs = require('fs');

/**

This is based off the work by lemieuxster for the `node-aco` project (https://github.com/lemieuxster/node-aco).
This has been rewritten to be cleaner and for my use case. Also synchronous.

**/
class AdobeColorGenerator {

  /**
   * Takes an HEX string and turns it into RGBA format.
   * @param {string} hex - File stream being used.
   * @return {array}
   */
  _hexToRGBA(hex){
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
       parseInt(result[1], 16), //R
       parseInt(result[2], 16), //G
       parseInt(result[3], 16), //B
       parseInt(result[4], 16)  //A
    ] : null;
  };

  /**
   * Writes the value to the file pointer. Adobe ACO files only accept 16-bit WORDs
   * @param {string} writeStream - File stream being used.
   * @param {integer} value - WORD value.
   * @return {void}
   */
  _writeValue(file, value) {
    const buffer = Buffer.alloc(2);
    buffer.writeUInt16BE(value, 0);
    fs.appendFileSync(file, buffer);
  }

  /**
   * Writes RGBA values to file pointer.
   * @param {string} file - File stream being used.
   * @param {integer} value - RGBA value
   * @return {void}
   */
  _writeRGBAValue(file, value) {
    this._writeValue(file, value  * 256);
  }

  /**
   * Write zeroes (null) to file pointer.
   * @param {string} file - File stream being used.
   * @return {void}
   */
  _writeZero(file) {
    this._writeValue(file, 0);
  }

  /**
   * Writes values to ACO file.
   * @param {string} filename - File stream being used.
   * @return {string}
   */
  generate(file, colors) {

    try {

      // Clear File
      fs.writeFileSync(file, '');

      // Adobe ACO Version 2
      this._writeValue(file, 2);

      // Amount of colors in array
      this._writeValue(file, colors.length);

      for (const color of colors) {

        const name = color;
        const hex = color;
        let rgb = this._hexToRGBA(hex);

        // Non fatal, just default to white in this event.
        if (rgb.length < 3) {
          console.error('Bad RGBA data, default to white.', rgb);
          rgb = [0xFF, 0xFF, 0xFF, 0xFF];
        }

        this._writeZero(file);                            // Delimiter
        this._writeRGBAValue(file, rgb[0]);               // Red
        this._writeRGBAValue(file, rgb[1]);               // Green
        this._writeRGBAValue(file, rgb[2]);               // Blue
        this._writeRGBAValue(file, rgb[3]);               // Alpha
        this._writeZero(file);                            // Delimiter
        this._writeValue(file, name.length + 1);          // String Length

        for(let i = 0; i < name.length; i++) {            // Name Char[] Loop
          this._writeValue(file, name.charCodeAt(i));
        }

        this._writeZero(file);                            // Delimiter

      }
    } catch (e) {
      console.error('Error writing ACO file', e);
      return false;
    }

    return true;

  }


}


module.exports = AdobeColorGenerator;
