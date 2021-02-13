const fs = require('fs');
const path = require('path');

const HTMLGenerator = (file, colors) => {

  const html = fs.readFileSync(path.resolve(__dirname, 'templates/index.html'), 'utf8');

  let buffer = [];
  for (const color of colors) {
    buffer.push(`  <div class='box'><div class='color' style='background-color:${color};'></div></div>`);
  }

  fs.writeFileSync(
    file,
    html.replace('<PaletteGeneratorCode/>', buffer.join("\n"))
  );

}

module.exports = HTMLGenerator;

