const prompt = require('prompt-sync')({ sigint: true });

const Farmer = require('./Farmer');
const Kale = require('./Kale')
const Tomato = require('./Tomato')
const Grain = require('./Grain')

class App {
  constructor() {
    this.farmer = null;
    this.isRunning = true;
  }

  start() {
    console.log('\nWelcome to the Farm Simulator!');

    // Setup the farmer
    const name = prompt('What is your name? ');
    const farmName = prompt(`Hi ${name} What do you want to call your farm? `);
    this.farmer = new Farmer(name, farmName);

    // Start the menu
    while (this.isRunning) {
      this.showMenu();
    }

    console.log(`\nThanks for farming ${name}! See you later :)`)
  }

  showMenu() {
    console.log('\nWhat would you like to do next?');
    console.log('1. View Your Farm');
    console.log('2. Plant a Crop');
    console.log('3. Water Your Crops');
    console.log('4. Quit\n');

    const choice = prompt('Choose your action (1-3): ').trim();
    if (choice === '1') {
      this.farmer.viewFarm();
    } else if (choice === '2') {
      let crop;
      while (!crop) {
        crop = this.getCropFromUser();
      }
      this.farmer.plantCrop(crop);
      this.farmer.viewFarm();
    } else if (choice === '3') {
      this.farmer.waterCrops();
    } else if (choice === '4') {
      this.stop();
    }
  }

  getCropFromUser() {
    const cropType = prompt('Choose your grain type — (K)ale, (T)omato, or (G)rain: ').toLowerCase().trim();
    let crop;
    if (cropType === 'k') {
      crop = new Kale();
    }
    else if (cropType === 't') {
      crop = new Tomato();
    }
    else if (cropType === 'g') {
      crop = new Grain();
    }
    else {
      console.log(`\nOops! Invalid crop type. Try "k", "t", or "g" to choose your crop type.`)
      return null;
    }
    return crop;
  }

  stop() {
    this.isRunning = false;
  }
}

module.exports = App;

/* 
Investigation Questions:

1. We call this class an "orchestrator" — explain in your own words what this means? What functionality does this class encapsulate?
2. From a project organization perspective, what purpose does the `App` class serve compared the to the `test.js` file?
2. How does the App class keep the menu continuously showing up in the console? What causes it to stop running?
3. How does the App class validate user input? Why is this important?

*/