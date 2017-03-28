require('core-js/fn/array/includes');

const KewtStore = {};

Object.defineProperties(KewtStore, {
  isValid: {
    value({ property, value }) {
      switch (property) {
        case 'font':
          return KewtStore.options.fonts.includes(value);
        case 'fontSize':
          return KewtStore.options.fontSizes.includes(value);
        case 'fontEdge':
          return KewtStore.options.fontEdges.includes(value);
        case 'edgeHighlight':
        case 'textColor':
        case 'backgroundColor':
          return KewtStore.options.colors.includes(value);
        case 'edgeOpacity':
        case 'textOpacity':
        case 'backgroundOpacity':
          return value >= KewtStore.options.opacityRange.min && value <= KewtStore.options.opacityRange.max;
        case 'windowColor':
          return KewtStore.options.colors.includes(value);
        case 'windowOpacity':
          return value >= KewtStore.options.opacityRange.min && value <= KewtStore.options.opacityRange.max;
        default:
          throw new Error(`${property} is not a configurable property`);
      }
    },
  },
});

module.exports = KewtStore;
