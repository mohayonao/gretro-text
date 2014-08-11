# gretro-text
[![NPM Version](http://img.shields.io/npm/v/gretro-text.svg?style=flat)](https://www.npmjs.org/package/gretro-text)
[![Dependency Status](http://img.shields.io/david/mohayonao/gretro-text.svg?style=flat)](https://david-dm.org/mohayonao/gretro-text)
[![devDependency Status](http://img.shields.io/david/dev/mohayonao/gretro-text.svg?style=flat)](https://david-dm.org/mohayonao/gretro-text)

> Gretro-text is a [gretro](https://github.com/mohayonao/gretro) plugin to draw a text.

![](https://raw.githubusercontent.com/mohayonao/gretro-text/master/examples/ascii-table.png)

## Installation

##### browser

include [gretro-text.js](https://raw.githubusercontent.com/mohayonao/gretro-text/master/gretro-text.js) after including `gretro.js`


```html
<script src="gretro.js"></script>
<script src="gretro-text.js"></script>
```

##### node.js

`gretro-text` is available on npm.

```sh
$ npm install gretro-text
```

```javascript
var gretro = require("gretro");
var gretroText = require("gretro-text");

gretro.use(gretroText);
```

## API Reference

## char

Draws a 5x7 character to the canvas.

#### Syntax

```javascript
canvas.char(ch, x, y);
```

#### Parameters

  - **ch**: int
    - ascii code (0x21 <= ch <= 0x7e)
  - **x**: int
    - x-coordinate of the character
  - **y**: int
    - y-coordinate of the character

#### Returns

  Canvas: self for method chaining

## text

Draws a text to the canvas.

#### Syntax

```javascript
canvas.text(text, x, y);
```

#### Parameters

  - **text**: string
  - **x**: int
    - x-coordinate of the text
  - **y**: int
    - y-coordinate of the text

#### Returns

  Canvas: self for method chaining
