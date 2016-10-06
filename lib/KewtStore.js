const KewtStore = {};

Object.defineProperties(KewtStore, {
  COLORS: {
    value: [
      'black',
      'blue',
      'green',
      'teal',
      'red',
      'purple',
      'yellow',
      'white',
    ],
  },
  OPACITY_RANGE: {
    value: {
      MIN: 0,
      MAX: 100,
    },
  },
  DEFAULTS: {
    value: {
      font: 'monospace',
      fontSize: '3',
      fontEdge: 'none',
      edgeHighlight: 'black',
      edgeOpacity: '0',
      textColor: 'white',
      textOpacity: '100',
      backgroundColor: 'black',
      backgroundOpacity: '100',
    },
  },
});

Object.defineProperties(KewtStore, {
  isValid: {
    value({ property, value }) {
      switch (property) {
        case 'font':
          return [
            'serif',
            'sans-serif',
            'monospace',
          ].includes(value);
        case 'fontSize':
          return [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
          ].includes(value);
        case 'fontEdge':
          return [
            'none',
            'uniform',
            'shadow',
          ].includes(value);
        case 'edgeHighlight':
        case 'textColor':
        case 'backgroundColor':
          return (this.colors || this.COLORS).includes(value);
        case 'edgeOpacity':
        case 'textOpacity':
        case 'backgroundOpacity':
          return value >= this.OPACITY_RANGE.MIN && value <= this.OPACITY_RANGE.MAX;
        default:
          throw new Error(`${property} is not a configurable property`);
      }
    },
  },
});

module.exports = KewtStore;
