'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Kewt = require('./Kewt');

var KewtDOM = function (_Kewt) {
  _inherits(KewtDOM, _Kewt);

  _createClass(KewtDOM, null, [{
    key: 'getShadow',
    value: function getShadow(type, color, opacity) {
      var c = 'rgba(' + KewtDOM.RGB_COLORS[color] + ',' + opacity / 100 + ')';
      switch (type) {
        case 'uniform':
          return '-1px 1px ' + c + ',0 1px ' + c + ',1px 1px ' + c + ',-1px -1px ' + c + ',0 -1px ' + c + ',1px -1px ' + c + ',1px 0 ' + c + ',-1px 0 ' + c;
        case 'raised':
          return '1px 1px ' + c;
        case 'shadow':
          return '1px 1px 1px ' + c;
        default:
          return '';
      }
    }
  }]);

  function KewtDOM() {
    _classCallCheck(this, KewtDOM);

    var _this = _possibleConstructorReturn(this, (KewtDOM.__proto__ || Object.getPrototypeOf(KewtDOM)).call(this));

    var persistedState = localStorage.getItem('kewtState');
    if (persistedState) {
      _get(KewtDOM.prototype.__proto__ || Object.getPrototypeOf(KewtDOM.prototype), 'set', _this).call(_this, JSON.parse(persistedState));
    }
    return _this;
  }
  /**
   * reset - resets all caption properties to their default values and clears persisted state
   *
   * @return {undefined}
   */


  _createClass(KewtDOM, [{
    key: 'reset',
    value: function reset() {
      _get(KewtDOM.prototype.__proto__ || Object.getPrototypeOf(KewtDOM.prototype), 'reset', this).call(this);
      localStorage.removeItem('kewtState');
      return this;
    }
    /**
     * render - renders the style tag with styles to document head
     *
     * @return {undefined}
     */

  }, {
    key: 'render',
    value: function render() {
      if (!this.sheet || !this.node) {
        this.node = document.createElement('style');
        this.node.appendChild(document.createTextNode(''));
        document.head.appendChild(this.node);
        this.sheet = this.node.sheet;
        this.sheet.insertRule('::cue {}', 0);
      }

      var _get2 = this.get(),
          font = _get2.font,
          fontSize = _get2.fontSize,
          fontEdge = _get2.fontEdge,
          eColor = _get2.edgeHighlight,
          eOpacity = _get2.edgeOpacity,
          fColor = _get2.textColor,
          fOpacity = _get2.textOpacity,
          bColor = _get2.backgroundColor,
          bOpacity = _get2.backgroundOpacity;

      var FONTS = KewtDOM.FONTS,
          FONT_SIZES = KewtDOM.FONT_SIZES,
          RGB_COLORS = KewtDOM.RGB_COLORS;

      this.sheet.cssRules[0].style.fontFamily = FONTS[font];
      this.sheet.cssRules[0].style.fontSize = FONT_SIZES[fontSize];
      this.sheet.cssRules[0].style.color = 'rgba(' + RGB_COLORS[fColor] + ',' + fOpacity / 100 + ')';
      this.sheet.cssRules[0].style.backgroundColor = 'rgba(' + RGB_COLORS[bColor] + ',' + bOpacity / 100 + ')';
      this.sheet.cssRules[0].style.textShadow = KewtDOM.getShadow(fontEdge, eColor, eOpacity);
      return this;
    }
    /**
     * persist - persists the current Kewt state to localstorage
     *
     * @return {undefined}
     */

  }, {
    key: 'persist',
    value: function persist() {
      localStorage.setItem('kewtState', JSON.stringify(_get(KewtDOM.prototype.__proto__ || Object.getPrototypeOf(KewtDOM.prototype), 'get', this).call(this)));
      return this;
    }
  }]);

  return KewtDOM;
}(Kewt);

KewtDOM.RGB_COLORS = {
  black: '0,0,0',
  blue: '0,0,255',
  green: '0,128,0',
  teal: '0,128,128',
  red: '255,0,0',
  purple: '128,0,128',
  yellow: '255,255,0',
  white: '255,255,255'
};

KewtDOM.FONTS = {
  serif: 'Times New Roman',
  'sans-serif': 'Helvetica',
  monospace: 'Courier'
};

KewtDOM.FONT_SIZES = {
  1: '27px',
  2: '33px',
  3: '39px',
  4: '45px',
  5: '51px',
  6: '56px'
};

module.exports = KewtDOM;