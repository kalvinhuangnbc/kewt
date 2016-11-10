const includes = require('lodash.includes');

const KewtStore = {};

Object.defineProperties(KewtStore, {
  isValid: {
    value({ property, value }) {
      switch (property) {
        case 'font':
          return includes(KewtStore.options.fonts, value);
        case 'fontSize':
          return includes(KewtStore.options.fontSizes, value);
        case 'fontEdge':
          return includes(KewtStore.options.fontEdges, value);
        case 'edgeHighlight':
        case 'textColor':
        case 'backgroundColor':
          return includes(KewtStore.options.colors, value);
        case 'edgeOpacity':
        case 'textOpacity':
        case 'backgroundOpacity':
          return value >= KewtStore.options.opacityRange.min && value <= KewtStore.options.opacityRange.max;
        default:
          throw new Error(`${property} is not a configurable property`);
      }
    },
  },
});

module.exports = KewtStore;
