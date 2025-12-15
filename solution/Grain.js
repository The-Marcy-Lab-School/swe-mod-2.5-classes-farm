const Crop = require('./Crop');

class Grain extends Crop {
  constructor(variety = 'Wheat') {
    super(`${variety} Grain`, 1, '🌾')
  }
}

module.exports = Grain;
