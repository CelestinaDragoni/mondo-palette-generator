// General includes
const PaletteGenerator  = require("./classes/PaletteGenerator");
const OutputGenerator  = require("./classes/OutputGenerator");

// Make Palette
const pInstance = new PaletteGenerator('images/');
const palette = pInstance.getPalette();

// Make Usable Objects
const oInstance = new OutputGenerator('output/', palette);
oInstance.makeAll();
