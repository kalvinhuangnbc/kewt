'use strict';

var Kewt = require('./Kewt');
var KewtDOM = require('./KewtDOM');

module.exports = {
  Kewt: function () {
    return new Kewt();
  }(),
  KewtDOM: function () {
    return new KewtDOM();
  }()
};