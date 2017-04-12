'use strict';

require('core-js/fn/array/includes');

var KewtStore = {};

Object.defineProperties(KewtStore, {
  isValid: {
    value: function value(_ref) {
      var property = _ref.property,
          _value = _ref.value;

      switch (property) {
        case 'font':
          return KewtStore.options.fonts.includes(_value);
        case 'fontSize':
          return KewtStore.options.fontSizes.includes(_value);
        case 'fontEdge':
          return KewtStore.options.fontEdges.includes(_value);
        case 'edgeHighlight':
        case 'textColor':
        case 'backgroundColor':
          return KewtStore.options.colors.includes(_value);
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