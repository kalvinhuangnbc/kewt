const Kewt = require('./Kewt');
const KewtDOM = require('./KewtDOM');

module.exports = {
  Kewt: (() => new Kewt())(),
  KewtDOM: (() => new KewtDOM())(),
};
