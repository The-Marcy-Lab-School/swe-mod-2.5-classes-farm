class Crop {
  #height = 0;

  constructor(species, height, icon) {
    this.#height = height;
    this.species = species;
    this.icon = icon;
  }

  grow() {
    this.#height++;
    console.log(`The ${this.species} is now ${this.#height} feet tall!`);
  }
}

module.exports = Crop;
