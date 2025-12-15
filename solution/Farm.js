class Farm {
  static numRows = 5;
  static numColumns = 5;

  constructor(name) {
    this.name = name;
    this.plot = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ];
  }

  addCrop(crop, row, column) {
    // Added protection to avoid adding things in the wrong place
    if (row < 0 || row >= Farm.numRows) {
      console.log(`Invalid Row. Row must be ≥0 and <${Farm.numRows}`);
      return;
    }
    if (column < 0 || column >= Farm.numColumns) {
      console.log(`Invalid Column. Column must be ≥0 and <${Farm.numColumns}`);
      return;
    }
    if (this.plot[row][column]) {
      console.log('There is already a crop there, try another location.');
      return;
    }

    console.log(`planting ${crop.species} at row ${row + 1}, column ${column + 1}`);
    this.plot[row][column] = crop;
  }

  print() {
    console.log(`⚪️ 1 2 3 4 5`); // header row
    this.plot.forEach((row, i) => {
      const cropIcons = row.map((crop) => {
        return crop ? crop.icon : '⚪️';
      });
      console.log(`${i + 1}: ${cropIcons.join('')}`);
    });
  }
}

module.exports = Farm;
