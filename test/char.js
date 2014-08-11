"use strict";

var chai   = require("chai");
var expect = chai.expect;
var gretro = require("gretro");

gretro.use(require("../"));

var $$ = 15;
var __ =  0;

describe("Canvas#char", function() {

  var canvas = null;

  beforeEach(function() {
    canvas = new gretro.Canvas(8, 8);
  });

  it("should be able to stroke an ascii character", function() {
    canvas.stroke($$).noFill().char(65, 0, 0);

    expect(canvas.toIndexedColor()).to.eql(new Uint8Array([
      __,$$,$$,$$,__,__,__,__,
      $$,__,__,__,$$,__,__,__,
      $$,__,__,__,$$,__,__,__,
      $$,__,__,__,$$,__,__,__,
      $$,$$,$$,$$,$$,__,__,__,
      $$,__,__,__,$$,__,__,__,
      $$,__,__,__,$$,__,__,__,
      __,__,__,__,__,__,__,__,
    ]));
  })

  it("should NOT be able to stroke an non ascii character", function() {
    canvas.stroke($$).noFill().char("日本語".charCodeAt(0), 0, 0);

    expect(canvas.toIndexedColor()).to.eql(new Uint8Array([
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
    ]));
  });

  it("should NOT be able to fill an character", function() {
    canvas.noStroke().fill($$).char(65, 0, 0);

    expect(canvas.toIndexedColor()).to.eql(new Uint8Array([
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
      __,__,__,__,__,__,__,__,
    ]));
  });
});
