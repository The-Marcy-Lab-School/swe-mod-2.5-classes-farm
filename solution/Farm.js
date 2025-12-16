class Farm {
  #plot;

  constructor(name) {
    this.name = name;
    this.#plot = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ];
  }

  // Allows the Farmer to reference this.farm.plot as if it were a public property
  get plot() {
    // we need to ensure that the plot remains a 5x5 array of crops
    return [
      [...this.#plot[0]], // We need to copy each row into a new array too
      [...this.#plot[1]],
      [...this.#plot[2]],
      [...this.#plot[3]],
      [...this.#plot[4]],
    ]
  }

  // Alternatively, we would invoke this.farm.getPlot() to access the property
  getPlot() {
    return [
      ...this.#plot[0],
      ...this.#plot[1],
      ...this.#plot[2],
      ...this.#plot[3],
      ...this.#plot[4]
    ]
  }

  // Q: What protections can/should we add to this method?
  addCrop(crop, row, column) {
    console.log(`planting ${crop.species} at row ${row + 1}, column ${column + 1}`);
    this.#plot[row][column] = crop;
  }

  print() {
    console.log(`⚪️ 1 2 3 4 5`); // header row
    this.#plot.forEach((row, i) => {
      // get an array of crop icons (or blanks) for each spot in the row
      const cropIcons = row.map((crop) => {
        return crop ? crop.icon : '⚪️';
      });
      console.log(`${i + 1}: ${cropIcons.join('')}`);
    });
  }
}

module.exports = Farm;
