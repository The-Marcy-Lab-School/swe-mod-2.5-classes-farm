# App Investigation Questions

The `App` class is called an "orchestrator"/"coordinator" because it coordinates or "conducts" the other classes. The following questions will challenge you to understand how it works!

## Understanding the UI vs Data Layer Separation:

- The App class never directly stores or manages any crops. Instead, it always calls methods on the farmer object (lines 39, 45, 48). Why is this delegation important? What would happen if App stored its own array of crops separately from the Farmer?
- Compare the App class to the test.js file. Both create Farmer instances, but how are they used differently? Why might you want both in a real project?

## Understanding the Control Flow Logic:

- Trace through the code: When `start()` is called on line 14, what is the exact sequence of method calls that happens (just focus on the class methods)?
- In plain english, explain what the `while` loop is checking on line 23? What would happen if line 11 was `this.isRunning = false` instead of `true`? What causes `isRunning` to be set to `false`?
- The `getCropFromUser()` method (lines 54-71) can return null. Look at lines 42-44. What does the `while (!crop)` loop do? Why is this pattern useful for handling invalid input?

## Understanding Data Flow:

- Look at lines 18-20. Why does the App class store the farmer in `this.farmer` rather than just as a local variable in the `start()` method?
- In the `showMenu()` method (line 30), notice that the App class never directly creates or stores crops. Draw a diagram showing how a crop goes from user input → App class → Farmer class → stored in the farm.

## Design Patterns & Architecture:

- Imagine you wanted to add a new menu option "5. Sell Your Crops". Where would you add the menu display code? Where would you add the actual selling logic? Why are these in different places?