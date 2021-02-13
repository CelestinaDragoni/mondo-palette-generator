const fs = require('fs');

const CSSGenerator = (file, colors) => {
  let buffer = [];
  for (i=0;i<colors.length;i++) {
    buffer.push(`.color${i+1} { background: ${colors[i]}; }`);
  }
  fs.writeFileSync(file, buffer.join("\n"));
}

module.exports = CSSGenerator;

