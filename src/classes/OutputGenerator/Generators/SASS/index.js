const fs = require('fs');

const SASSGenerator = (file, colors, scss=false) => {
  let buffer = [];
  const delim = scss ? ';' : '';
  for (i=0;i<colors.length;i++) {
    buffer.push(`$color${i+1}: ${colors[i]}${delim}`);
  }
  fs.writeFileSync(file, buffer.join("\n"));
}

module.exports = SASSGenerator;

