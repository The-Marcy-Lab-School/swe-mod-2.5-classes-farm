const Crop = require('./Crop');

class Grain extends Crop {
  constructor() {
    super(`Grain`, 1, '🌾')
  }
}

module.exports = Grain;
