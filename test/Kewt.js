const test = require('ava');
const { Kewt } = require('../src');

test.afterEach(() => {
  Kewt.reset();
});

test('instantiates with default values', t => {
  t.plan(1);
  t.is(Kewt.get('font'), 'monospace');
});

test('throws and does not set a state value if property is not supported', t => {
  t.plan(2);
  t.throws(
    () => (Kewt.set('language', 'es')),
    'language is not a configurable property'
  );
  t.is(Kewt.get('es'), undefined);
});

test('sets a state value if value is an acceptable state', t => {
  t.plan(1);
  Kewt.set('font', 'serif');
  t.is(Kewt.get('font'), 'serif');
});

test('throws and does not set a state value if value is not an acceptable state', t => {
  t.plan(4);
  t.throws(
    () => (Kewt.set('font', 'helvetica')),
    'helvetica is not an accepted value for font'
  );
  t.throws(
    () => (Kewt.set('edgeOpacity', '101')),
    '101 is not an accepted value for edgeOpacity'
  );
  t.is(Kewt.get('font'), 'monospace');
  t.is(Kewt.get('edgeOpacity'), '0');
});

test('sets color states', t => {
  t.plan(3);
  Kewt
    .set('edgeHighlight', 'yellow')
    .set('textColor', 'teal')
    .set('backgroundColor', 'purple');
  const {
    edgeHighlight,
    textColor,
    backgroundColor,
  } = Kewt.get();
  t.is(edgeHighlight, 'yellow');
  t.is(textColor, 'teal');
  t.is(backgroundColor, 'purple');
});

test('sets opacity states', t => {
  t.plan(3);
  Kewt
    .set('edgeOpacity', 50)
    .set('textOpacity', 0)
    .set('backgroundOpacity', '100');
  const {
    edgeOpacity,
    textOpacity,
    backgroundOpacity,
  } = Kewt.get();
  t.is(edgeOpacity, '50');
  t.is(textOpacity, '0');
  t.is(backgroundOpacity, '100');
});

test('gets entire store when get is called without parameters', t => {
  t.plan(1);
  t.deepEqual(Kewt.get(), {
    font: 'monospace',
    fontSize: '3',
    fontEdge: 'none',
    edgeHighlight: 'black',
    edgeOpacity: '0',
    textColor: 'white',
    textOpacity: '100',
    backgroundColor: 'black',
    backgroundOpacity: '100',
    windowColor: 'black',
    windowOpacity: '100',
  });
});

test('sets multiple properties at once', t => {
  t.plan(2);
  t.deepEqual(Kewt.set({
    font: 'sans-serif',
    fontSize: '3',
    fontEdge: 'shadow',
  }), {
    font: 'sans-serif',
    fontSize: '3',
    fontEdge: 'shadow',
    edgeHighlight: 'black',
    edgeOpacity: '0',
    textColor: 'white',
    textOpacity: '100',
    backgroundColor: 'black',
    backgroundOpacity: '100',
    windowColor: 'black',
    windowOpacity: '100',
  });
  t.deepEqual(Kewt.get(), {
    font: 'sans-serif',
    fontSize: '3',
    fontEdge: 'shadow',
    edgeHighlight: 'black',
    edgeOpacity: '0',
    textColor: 'white',
    textOpacity: '100',
    backgroundColor: 'black',
    backgroundOpacity: '100',
    windowColor: 'black',
    windowOpacity: '100',
  });
});
