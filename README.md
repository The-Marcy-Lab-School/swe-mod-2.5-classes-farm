# Farm Simulator - OOP Refactoring Challenge

- [Overview](#overview)
  - [Learning Objectives](#learning-objectives)
- [Getting Started](#getting-started)
- [Key Concepts](#key-concepts)
  - [Classes](#classes)
  - [Encapsulation](#encapsulation)
  - [Inheritance (Is-A Relationship)](#inheritance-is-a-relationship)
  - [Composition (Has-A Relationship)](#composition-has-a-relationship)
  - [Static Properties](#static-properties)
- [Activity Instructions](#activity-instructions)
  - [Step 1: Design Your Classes (UML Diagram)](#step-1-design-your-classes-uml-diagram)
  - [Step 2: Implement Your Design](#step-2-implement-your-design)
  - [Step 3: Test Your Design](#step-3-test-your-design)
  - [Step 4: Reflect on Your Design](#step-4-reflect-on-your-design)
- [Hints](#hints)
- [Solution](#solution)

## Overview

In this activity, you'll refactor a functional farming simulator from procedural code into an object-oriented design using JavaScript classes. This exercise will help you practice key OOP concepts including classes, encapsulation, inheritance, composition, and working with arrays of objects.

> Procedural code is a programming style where you write step-by-step instructions using functions and data that are separate from each other. The focus is on *procedures* (steps) rather than on objects.

### Learning Objectives

By completing this activity, you will:
- Practice creating and using JavaScript classes
- Apply inheritance to reduce code duplication
- Use composition to model relationships between objects
- Understand encapsulation and separation of concerns
- Work with 2D arrays and array methods (`.map()`, `.forEach()`, `.findIndex()`, `.indexOf()`)
- Learn to organize code into modules using `require()` and `module.exports`
- Think critically about software design decisions


## Getting Started

1. Review the code in [refactorMe.js](refactorMe.js) - it's a working farming simulator using objects and functions
2. Run the code to see how it works: `node refactorMe.js`
3. Your goal: Refactor this code using classes and OOP principles

## Key Concepts

### Classes
**Definition:** A blueprint for creating objects with shared properties and methods.

**Example:**
```javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.bark(); // "Buddy says woof!"
```

### Encapsulation
**Definition:** Bundling data (properties) and methods that operate on that data within a single class. Each class should be responsible for its own data and behavior.

**Example:**
```javascript
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // The BankAccount class is responsible for managing its own balance
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Insufficient funds!');
    }
  }
}
```

### Inheritance (Is-A Relationship)
**Definition:** A parent-child relationship where a child class extends a parent class, inheriting all its properties and methods.

**Example:**
```javascript
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

// Car IS-A Vehicle (child class extends parent)
class Car extends Vehicle {
  constructor(brand, year, numDoors) {
    super(brand, year); // Call parent constructor
    this.numDoors = numDoors;
  }

  honk() {
    console.log('Beep beep!');
  }
}

const myCar = new Car('Toyota', 2020, 4);
myCar.start(); // Inherited from Vehicle
myCar.honk();  // Defined in Car
```

### Composition (Has-A Relationship)
**Definition:** One class contains instances of another class as properties. This represents ownership or containment.

**Example:**
```javascript
class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }

  rev() {
    console.log('Vroom vroom!');
  }
}

class Car {
  constructor(brand, horsepower) {
    this.brand = brand;
    this.engine = new Engine(horsepower); // A Car HAS-AN Engine
  }

  start() {
    console.log(`${this.brand} is starting...`);
    this.engine.rev();
  }
}
```

### Static Properties
**Definition:** Properties that belong to the class itself, not to instances. Accessed via the class name.

**Example:**
```javascript
class MathHelper {
  static PI = 3.14159;
  static MAX_VALUE = 1000;

  static square(x) {
    return x * x;
  }
}

console.log(MathHelper.PI); // 3.14159 (accessed through the class)
console.log(MathHelper.square(5)); // 25

const helper = new MathHelper();
console.log(helper.PI); // undefined (static properties don't exist on instances)
```

## Activity Instructions

### Step 1: Design Your Classes (UML Diagram)

Before coding, plan your class structure. Answer these design questions:

**Guiding Questions:**
- What are the main "things" (nouns) in this program? Look at the data structures and what they represent.
- What properties (data) does each thing have?
- What actions (methods) can each thing perform?
- Are there any **is-a** relationships? (Look for entities that are specific types of a more general thing)
- Are there any **has-a** relationships? (Look for entities that contain or own other entities)
- Which class should be responsible for each behavior you see in the code?
- Which properties should be initialized in the constructor?
- Should any properties be static (shared across all instances)?

**Challenges to Consider:**
- Where should the logic for watering live? In the entity being watered, or the entity doing the watering?
- How should one class access another class's data? Directly, or through methods?
- How would you validate that operations are performed correctly?

**Task:** Make a copy of this [UML diagram template](https://docs.google.com/drawings/d/1NEXCEPtRG3G68PXPSHSM7zGUpHtG6826jRt22IyadsY/edit) showing your planned classes, their properties, methods, and relationships.

### Step 2: Implement Your Design

Create separate files for each class and refactor the code. Organize your files in the provided `src/` directory. 

### Step 3: Test Your Design

Then in a `test.js` file, import your classes and test them by simulating the following behavior:

1. Create the farm/farmer
2. Create three crops (kale, tomato, and grain/wheat)
3. Plant those crops
4. Water all of the crops

### Step 4: Reflect on Your Design

After implementing your solution, consider:

**Critical Thinking Questions:**
- What are the benefits of using classes vs. plain objects and functions?
- How does your design follow the principle of "separation of concerns"?
- If you wanted to add a new crop type, how easy would it be?
- What issues or limitations exist in your current design?
- How might you improve the design? (Consider encapsulation, error handling, etc.)

## Hints

<details>
<summary>Stuck? Click here for hints on identifying classes</summary>

**Finding the Main Classes:**
- Look at the existing objects and data structures. What do they represent in the real world?
- The `farmerAda` object represents a person who farms
- The nested `farm` object represents a place where crops are grown
- The `kale`, `tomato`, and `wheat` objects represent plants

**Identifying Inheritance Opportunities:**
- Do you see similar objects that share common properties?
- Look at the crop objects - do they all have the same structure?
- Could there be a general "parent" class that specific crops extend from?

**Identifying Composition Relationships:**
- What "contains" or "owns" what?
- Does a person have a place where they work?
- Does a place contain items?

**Method Responsibility:**
- `plantCrop()` - Who is performing this action? Who should be responsible?
- `waterCrops()` - Same question
- `printFarm()` - Which object knows how to display itself?

</details>

<details>
<summary>Need more help? Click for specific class suggestions</summary>

Consider creating these classes:
- A class to represent individual plants/crops
- Specific classes for each crop type (that extend a base crop class)
- A class to represent the farming area with the 5x5 grid
- A class to represent the person doing the farming

Think about which class should "own" each method from the original code.

</details>

## Solution

A complete solution with detailed explanations is available in the [solution](solution/) folder. Try to complete the activity on your own first before reviewing the solution.

The [EXPLANATION.md](solution/EXPLANATION.md) file contains detailed explanations of:
- The class hierarchy
- How each OOP concept is applied
- Design decisions and trade-offs
- How all the pieces work together
