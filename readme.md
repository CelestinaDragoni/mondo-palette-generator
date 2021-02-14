![Circles](.github/no-legal-trouble-mondo.png)

## Mondo Palette Generator

A simple application that takes many screenshots and turns them into a working color palette for many uses.

## Outputs:

- Adobe Color Palette (ACO)
- CSS
- SASS/SCSS
- LESS
- Text
- JSON
- HTML
- PNG

You can use these outputs for all various things, for example `ACO` files work in Photoshop, Krita, etc. Or, `PNG` would work with an editor like PyxelEdit that takes those files for palettes. Whichever format you decide to use, you have options.

## What is the Purpose?
The intended focus is game development where if you like a color palette of a game you don't have to manually do all of that work of assembling one. It's also good for games that use a lot of colors and you need to take many references to get the full scope.

For example,

https://github.com/KernelZechs/zelda-link-to-the-past-color-palette.

## What You Need
- NodeJS 12 or 14
- Yarn

## How To Add Screenshots
Just add your images to the `images/` folder in the root of this project. You can nest these in folders if you want to keep it organized. The only accepted file format is PNG. Why? Because they are lossless and it's the only thing that makes sense here.

## How To Run
`yarn install` and then `yarn start` from your command line. This should work in Windows just fine but I haven't tested. I've only tested this in linux.

## Support
There is none, I did this for fun. Sorry mah dude.
