// Farming simulator

// Note: All farms in this app have 5x5 plots
const farmerAda = {
  name: 'Ada',
  farm: {
    name: 'Stardew Valley',
    plot: [
      // 1    2.    3.    4.     5
      [null, null, null, null, null], // 1
      [null, null, null, null, null], // 2
      [null, null, null, null, null], // 3
      [null, null, null, null, null], // 4
      [null, null, null, null, null], // 5
    ],
  }
}

// Q: How would you access the second row of this plot? How would you access the 2nd row and third column?

const plantCrop = (farm, crop) => {
  // look for the first row with a null space
  const row = farm.plot.findIndex((row) => row.includes(null));
  if (row === -1) {
    console.log(`${farm.name} has no more available space!`);
    return;
  }

  // get the first column in that row that is null
  const column = farm.plot[row].indexOf(null);

  // Then, put the crop in that location. 
  // Q: Why do we add 1 to the row and column when printing the message for the user?
  console.log(`planting ${crop.species} at row ${row + 1}, column ${column + 1}`);
  farm.plot[row][column] = crop;
}

const printFarm = (farm) => {
  console.log(`⚪️ 1 2 3 4 5`); // header row
  farm.plot.forEach((row, i) => {
    // Get an array of icons for each crop (or a blank icon if we have a null spot)
    const cropIcons = row.map((crop) => {
      return crop ? crop.icon : '⚪️';
    });
    // Print the row 
    console.log(`${i + 1}: ${cropIcons.join('')}`);
  });
}

const waterCrops = (farm) => {
  console.log('Watering the crops.');
  farm.plot.forEach((row) => {
    row.forEach((crop) => {
      if (crop) {
        crop.height++;
        console.log(`The ${crop.species} is now ${crop.height} feet tall!`);
      }
    });
  });
}

////////////////////////////
// TESTING CODE 
////////////////////////////

const kale = {
  species: 'Kale',
  height: 1,
  icon: '🥬'
};

const tomato = {
  species: 'Cherry Tomato',
  height: 2,
  icon: '🍅'
}

const wheat = {
  species: 'Wheat',
  height: 1,
  icon: '🌾'
}

plantCrop(farmerAda.farm, tomato);
plantCrop(farmerAda.farm, kale);
printFarm(farmerAda.farm);

plantCrop(farmerAda.farm, wheat);
plantCrop(farmerAda.farm, wheat);
printFarm(farmerAda.farm);

waterCrops(farmerAda.farm);

// Try: Making a new crop
// Try: Adding it to the farm
// Try: Printing the farm after you've added it
// Try: Watering all the crops

// Challenge: Refactor this program using OOP & class syntax
// 1. make a UML diagram by copying this diagram template: https://docs.google.com/drawings/d/1NEXCEPtRG3G68PXPSHSM7zGUpHtG6826jRt22IyadsY/edit
// Questions: 
// - for the "test" code that you see above, who should be responsible for performing those actions? (creating a crop, watering a crop, adding a crop to the farm, viewing the farm plot)
// 2. implement your system design!
// 3. What issues are there with this design? How might you address those issues?