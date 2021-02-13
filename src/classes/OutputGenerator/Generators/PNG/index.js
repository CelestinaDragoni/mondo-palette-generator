const fs    = require('fs');
const PngJS = require('pngjs').PNG;

const PNGGenerator = (file, colors) => {

  const png = new PngJS({
    width: colors.length * 16,
    height: 16,
    filterType: -1
  });

  let idx = 0;

  for (let y = 0; y < 16; y++) {
    for (let color of colors) {
      color = color.replace('#', '');
      color = color.match(/.{1,2}/g);
      for (let x = 0; x < 16; x++) {
        for (const value of color) {
          png.data[idx] = parseInt(value, 16);
          idx++;
        }
      }
    }
  }

  const buffer = PngJS.sync.write(png);
  fs.writeFileSync(file, buffer);

}

module.exports = PNGGenerator;
