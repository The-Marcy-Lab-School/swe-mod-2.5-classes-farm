class Crop {
  constructor(species, height, icon) {
    this.species = species;
    this.height = height;
    this.icon = icon;
  }

  grow() {
    this.height++;
    console.log(`The ${this.species} is now ${this.height} feet tall!`);
  }
}

module.exports = Crop;
