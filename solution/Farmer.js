const Farm = require('./Farm');

class Farmer {
  constructor(name) {
    this.name = name;
    this.farm = null;
  }

  startFarm(farmName) {
    this.farm = new Farm(farmName);
  }

  plantCrop(crop) {
    console.log(`${this.name} is planting ${crop.species}...`);

    // look for the first row with a null space
    const row = this.farm.plot.findIndex((row) => row.includes(null));
    if (row === -1) {
      console.log(`${this.farm.name} has no more available space!`);
      return;
    }

    // get the first column in that row that is null
    const column = this.farm.plot[row].indexOf(null);

    this.farm.addCrop(crop, row, column);
  }

  waterCrops() {
    console.log('Watering the crops.');
    this.farm.plot.forEach((row) => {
      row.forEach((crop) => crop?.grow());
    });
  }

  viewFarm() {
    this.farm.print();
  }
}

module.exports = Farmer;
