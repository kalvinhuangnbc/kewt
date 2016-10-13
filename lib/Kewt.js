const assign = require('lodash.assign');
const KewtStore = require('./KewtStore');

class Kewt {
  constructor() {
    assign(KewtStore, KewtStore.defaults || KewtStore.DEFAULTS);
  }
  /**
   * reset - resets all caption properties to their default values
   *
   * @return {Kewt}
   */
  reset() {
    assign(KewtStore, KewtStore.defaults || KewtStore.DEFAULTS);
    return this;
  }
  /**
   * get - gets the property, if specified, or all the properties
   *
   * @param  {string} [property] - the property to get
   * @return {string|object} - the property, if specified, or all the properties
   */
  get(property) {
    return property ? KewtStore[property] : KewtStore;
  }
  /**
   * set - sets a property or properties
   *
   * @param  {string|object} property - the property to set
   * @param  {string} [value] - the value for the property if property is a string
   * @return {Kewt}
   */
  set(property, value) {
    if (typeof property === 'object') {
      Object.keys(property).forEach((key) => this.setProperty(key, property[key]));
      return KewtStore;
    }
    return this.setProperty(property, value);
  }
  /**
  * setProperty - sets a property
  *
  * @param  {string} property - the property to set
  * @param  {string} value - the value for the property
  * @return {Kewt}
  */
  setProperty(property, value) {
    const valueString = value.toString();
    if (!KewtStore.isValid({ property, value })) {
      throw new Error(`${valueString} is not an accepted value for ${property}`);
    }
    KewtStore[property] = valueString;
    return this;
  }
}

module.exports = Kewt;
