"use strict";

var Png = require("png").Png;
var fs  = require("fs");

var gretro = require("gretro");

gretro.use(require("../gretro-text"));

var asciiTable = function(size) {
  var padding = (size - 8) >> 1;
  var offset  = size;

  for (var i = 0; i < 16; i++) {
    this
      .stroke(14)
      .text(i.toString(16).toUpperCase(), padding, i * size + offset + padding)
      .text(i.toString(16).toUpperCase(), i * size + offset + padding, padding)
      .stroke(8)
      .line( 0, i * size + offset, this.getWidth(), i * size + offset)
      .line(i * size + offset, 0, i * size + offset, this.getHeight());
  }

  this
    .stroke(7)
    .line( 0, offset, this.getWidth(), offset)
    .line(offset, 0, offset, this.getHeight());

  for (var i = 0; i < 128; i++) {
    var x = ((i / 16)|0) * size + offset + padding;
    var y = ((i % 16)|0) * size + offset + padding;
    this
      .stroke(13)
      .char(i, x, y);
  }
};

var size = 10;

var cnv = new gretro.Canvas(size * 17, size * 17).draw(asciiTable, size);
var png = new Png(new Buffer(cnv.toRGB()), cnv.getWidth(), cnv.getHeight(), "rgb");
var png_image = png.encodeSync();

fs.writeFileSync(__dirname + "/ascii-table.png", png_image.toString("binary"), "binary");
