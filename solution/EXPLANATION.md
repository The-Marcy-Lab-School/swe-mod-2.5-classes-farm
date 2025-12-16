# OOP Concepts and Class Structure

UML Diagram: https://docs.google.com/drawings/d/1IQBy7Eg5rmJoN9yxYKm-oNkiGc7NIwOHgIeBwevvrx4/edit?usp=sharing

This solution implements a farming simulation with the following class hierarchy:

```
Crop (base class)
- Kale (extends Crop)
- Tomato (extends Crop)
- Grain (extends Crop)

Farm (independent class)

Farmer (independent class, has-a relationship with Farm)
```

## Key OOP Concepts Demonstrated

### 1. **Encapsulation**

Each class encapsulates its own data and behavior:

- **`Crop.js`**: Encapsulates `species`, `height`, `icon` properties and a `grow()` method
- **`Farm.js`**: Encapsulates the farm grid (`plot`), farm `name`, and methods to manage crops
- **`Farmer.js`**: Encapsulates farmer's `name`, their `farm`, and farming actions

### 2. **Inheritance** (Parent-Child Relationship)

The crop classes demonstrate classical inheritance:

- **Base Class**: `Crop.js` - The parent class with shared properties and methods
- **Derived Classes**: `Kale.js`, `Tomato.js`, `Grain.js` - Child classes that extend Crop

Each child class uses `extends` to inherit from Crop and calls `super()` to invoke the parent constructor.

### 3. **Composition** (Has-A Relationship)

- A `Farmer` **has-a** `Farm`
- A `Farm` **has-many** `Crop` instances stored in its 2D array

### 4. **Static Properties**

The `Farm` class uses static properties for shared configuration:

```javascript
static numRows = 5;
static numColumns = 5;
```

These are accessed via `Farm.numRows` and define the grid dimensions for all Farm instances.

### 5. **Constructor Pattern**

Each class uses constructors to initialize instances:

- **Crop**: Accepts `species`, `height`, and `icon`
- **Kale/Tomato/Grain**: Use `super()` to call parent constructor with preset values
- **Farm**: Initializes name and creates a 5x5 grid
- **Farmer**: Initializes name and sets farm to null

## Class Responsibilities

### `Crop.js` (Base Class)
- Stores: species name, height, display icon
- Behavior: `grow()` method to increase height

### Child Crop Classes
- **`Kale`**: Starts at height 1, uses 🥬 icon
- **`Tomato`**: Starts at height 2, uses 🍅 icon
- **`Grain`**: Starts at height 1, uses 🌾 icon

Each provides a specialized constructor that simplifies creating that crop type.

### `Farm.js`
- Manages a 5x5 grid for planting crops
- `addCrop(crop, row, column)`: Places crop with validation
- `print()`: Displays the farm grid visually

### `Farmer.js`
- Represents a farmer who manages a farm
- `startFarm(farmName)`: Creates a new Farm instance
- `plantCrop(crop)`: Automatically finds first available spot
- `waterCrops()`: Waters all planted crops
- `viewFarm()`: Delegates to farm's print method

## How It All Works Together

The `test.js` file demonstrates the complete workflow:

1. Create a Farmer instance
2. Farmer starts a new Farm
3. Create specific crop instances (Kale, Tomato, Grain)
4. Farmer plants crops (automatically finds positions)
5. View the farm layout
6. Water all crops to make them grow

This design demonstrates good separation of concerns: crops know how to grow, farms know how to store crops, and farmers know how to manage farming operations.
