const Crop = require('./Crop');

class Tomato extends Crop {
  constructor() {
    super('Tomato', 2, '🍅')
  }
}

module.exports = Tomato;
