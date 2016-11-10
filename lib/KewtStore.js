'use strict';

var includes = require('lodash.includes');

var KewtStore = {};

Object.defineProperties(KewtStore, {
  isValid: {
    value: function value(_ref) {
      var property = _ref.property,
          _value = _ref.value;

      switch (property) {
        case 'font':
          return includes(KewtStore.options.fonts, _value);
        case 'fontSize':
          return includes(KewtStore.options.fontSizes, _value);
        case 'fontEdge':
          return includes(KewtStore.options.fontEdges, _value);
        case 'edgeHighlight':
        case 'textColor':
        case 'backgroundColor':
          return includes(KewtStore.options.colors, _value);
        case 'edgeOpacity':
        case 'textOpacity':
        case 'backgroundOpacity':
          return _value >= KewtStore.options.opacityRange.min && _value <= KewtStore.options.opacityRange.max;
        default:
          throw new Error(property + ' is not a configurable property');
      }
    }
  }
});

module.exports = KewtStore;