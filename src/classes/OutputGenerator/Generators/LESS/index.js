const fs = require('fs');

const LESSGenerator = (file, colors) => {
  let buffer = [];
  for (i=0;i<colors.length;i++) {
    buffer.push(`@color${i+1}: ${colors[i]};`);
  }
  fs.writeFileSync(file, buffer.join("\n"));
}

module.exports = LESSGenerator;
