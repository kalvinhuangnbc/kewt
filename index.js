const Kewt = require('./lib/Kewt');
const KewtDOM = require('./lib/KewtDOM');

module.exports = {
  Kewt: () => new Kewt(),
  KewtDOM: () => new KewtDOM(),
};
