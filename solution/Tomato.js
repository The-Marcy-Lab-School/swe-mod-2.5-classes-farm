const Crop = require('./Crop');

class Tomato extends Crop {
  constructor(variety) {
    super(`${variety} Tomato`, 2, '🍅')
  }
}

module.exports = Tomato;
