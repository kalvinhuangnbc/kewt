'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('core-js/fn/object/assign');
var KewtStore = require('./KewtStore');
var OPTIONS = require('./OPTIONS');
var DEFAULTS = require('./DEFAULTS');

var Kewt = function () {
  /**
   * constructor - creates a new text track interface
   *
   * @param  {object} options  overrides for default options
   * @param  {object} defaults overrides for detault defaults
   */
  function Kewt(options, defaults) {
    _classCallCheck(this, Kewt);

    KewtStore.options = Object.assign({}, OPTIONS, options);
    KewtStore.defaults = Object.assign({}, DEFAULTS, defaults);
    KewtStore.active = Object.assign({}, KewtStore.defaults);
  }
  /**
   * reset - resets all caption properties to their default values
   *
   * @return {Kewt}
   */


  _createClass(Kewt, [{
    key: 'reset',
    value: function reset() {
      Object.assign(KewtStore.active, KewtStore.defaults);
      return this;
    }
    /**
     * get - gets the property, if specified, or all the properties
     *
     * @param  {string}        [property] the property to get
     * @return {string|object}            the property, if specified, or all the properties
     */

  }, {
    key: 'get',
    value: function get(property) {
      return property ? KewtStore.active[property] : KewtStore.active;
    }
    /**
     * set - sets a property or properties
     *
     * @param  {string|object} property the property to set
     * @param  {string}        [value]  the value for the property if property is a string
     * @return {Kewt}
     */

  }, {
    key: 'set',
    value: function set(property, value) {
      var _this = this;

      if ((typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object') {
        Object.keys(property).forEach(function (key) {
          return _this.setProperty(key, property[key]);
        });
        return KewtStore.active;
      }
      return this.setProperty(property, value);
    }
    /**
    * setProperty - sets a property
    *
    * @param  {string} property the property to set
    * @param  {string} value    the value for the property
    * @return {Kewt}
    */

  }, {
    key: 'setProperty',
    value: function setProperty(property, value) {
      var valueString = value.toString();
      if (!KewtStore.isValid({ property: property, value: value })) {
        console.log('Warning: ' + valueString + ' is not an accepted value for ' + property);
        return this;
      }
      KewtStore.active[property] = valueString;
      return this;
    }
  }]);

  return Kewt;
}();

module.exports = Kewt;