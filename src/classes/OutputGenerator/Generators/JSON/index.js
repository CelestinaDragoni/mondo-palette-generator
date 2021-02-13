const fs = require('fs');

const JSONGenerator = (file, colors) => {
  fs.writeFileSync(file, JSON.stringify(colors, null, 2));
}

module.exports = JSONGenerator;
