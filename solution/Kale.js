const Crop = require('./Crop');

class Kale extends Crop {
  constructor(variety) {
    super(`${variety} Kale`, 1, '🥬')
  }
}

module.exports = Kale;
