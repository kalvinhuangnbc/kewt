const jsdom = require('jsdom');
const defaults = require('lodash.defaults');

const document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>');
const window = document.defaultView;
global.document = document;
global.window = window;

window.localStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    delete this[key];
  },
};

defaults(global, window);
