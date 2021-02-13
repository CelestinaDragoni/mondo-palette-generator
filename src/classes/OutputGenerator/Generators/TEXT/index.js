const fs = require('fs');

const TEXTGenerator = (file, colors) => {
  let buffer = [];
  for (const color of colors) {
    buffer.push(color);
  }
  fs.writeFileSync(file, buffer.join("\n"));
}

module.exports = TEXTGenerator;
