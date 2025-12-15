// test.js
// This file demonstrates how to use our farm simulator classes.
// Note: We're using procedural code here (not a class) because this is just
// a demo script. The important OOP design is in the Farmer, Farm, and Crop classes.

const Farmer = require('./Farmer');
const Kale = require('./Kale');
const Tomato = require('./Tomato');
const Grain = require('./Grain');

const farmerAda = new Farmer('Ada');
farmerAda.startFarm('Stardew Valley');

const kale = new Kale('Lacinato');
const tomato = new Tomato('Cherry');
const wheat = new Grain('Farro');

farmerAda.plantCrop(kale);
farmerAda.plantCrop(tomato);
farmerAda.plantCrop(wheat);

farmerAda.viewFarm();

farmerAda.waterCrops();

