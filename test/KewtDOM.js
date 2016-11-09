const test = require('ava');
const { KewtDOM } = require('..');
const KewtDOMClass = require('../lib/KewtDOM');

test.afterEach(() => {
  KewtDOM.reset();
});

test('renders ::cue CSS', t => {
  t.plan(5);
  KewtDOM.render();
  const cssRules = document.getElementsByTagName('style')[0].sheet.cssRules[0];
  t.is(cssRules.style.fontFamily, 'Courier');
  t.is(cssRules.style.fontSize, '39px');
  t.is(cssRules.style.color, 'rgba(255,255,255,1)');
  t.is(cssRules.style.backgroundColor, 'rgba(0,0,0,1)');
  t.is(cssRules.style.textShadow, '');
});

test('renders shadows', t => {
  t.plan(2);
  KewtDOM
    .set('fontEdge', 'outline')
    .set('edgeOpacity', '75')
    .render();
  const cssRules = document.getElementsByTagName('style')[0].sheet.cssRules[0];
  /* eslint-disable max-len */
  t.is(cssRules.style.textShadow, '-1px -1px 0 rgba(0,0,0,0.75),1px -1px 0 rgba(0,0,0,0.75),-1px 1px 0 rgba(0,0,0,0.75),1px 1px 0 rgba(0,0,0,0.75)');
  /* eslint-enable max-len */
  KewtDOM
  .set('fontEdge', 'shadow')
  .set('edgeOpacity', '25')
  .render();
  t.is(cssRules.style.textShadow, '1px 1px 1px rgba(0,0,0,0.25)');
});

test('updates ::cue CSS', t => {
  t.plan(4);
  KewtDOM
    .render()
    .set('edgeHighlight', 'yellow')
    .set('textColor', 'teal')
    .set('backgroundColor', 'purple')
    .set('edgeOpacity', 50)
    .set('textOpacity', 0)
    .set('backgroundOpacity', '100')
    .render();
  const cssRules = document.getElementsByTagName('style')[0].sheet.cssRules[0];
  t.is(cssRules.style.fontFamily, 'Courier');
  t.is(cssRules.style.fontSize, '39px');
  t.is(cssRules.style.color, 'rgba(0,128,128,0)');
  t.is(cssRules.style.backgroundColor, 'rgba(128,0,128,1)');
});

test('persists state to localStorage', t => {
  t.plan(1);
  KewtDOM
    .set('edgeHighlight', 'yellow')
    .persist();
  t.is(JSON.parse(localStorage.getItem('kewtState')).edgeHighlight, 'yellow');
});

test('load state from localStorage on instantiation', t => {
  t.plan(1);
  localStorage.setItem('kewtState', JSON.stringify({ backgroundColor: 'purple' }));
  const instance = new KewtDOMClass();
  t.is(instance.get('backgroundColor'), 'purple');
});
