# 11-12-21

## Today's Agenda

- More on Arrays and Objects
- Intro to Local Storage

## Key Takeaways

Declaring variables
- Variables are used for tracking values within an app over different scopes and locations for maintaining information

// The old way of declaring variables. No restrictions. Easy use.
> var name = 'John Doe'

// A constant variable that cannot be reassigned value. These variables will maintain their initial value throughout the app.
> const name = 'John Doe'

// A changeable variable that can have its value mutated at any time after its declaration.
> let name = 'John Doe'

--------------------------------------

Writing functions
- Functions are used to create re-usable logic systems throughout your app to allow for simplicity in your code writing.

// A function called 'adder' takes in two parameter. These two parameters are named 'a' and 'b'. The instructions of the function say to log the sum of the two to the console.

// This is a function expression. It allows for things like hoisting in an app to call a function before it is defined.
> function adder (a, b) { console.log(a + b) }

// This is a function declaration, or arrow function. Hoisting cannot be done, and strict order of operations is enforced
> const adder = (a, b) => console.log(a + b)

// The function adder is called. The number 5 is passed first, making 5 be treated as 'a' in the function. The number 7 is passed second, making 7 be treated as 'b'.
> adder(5, 7)

------------------------------------

Arrays and Objects
- Arrays are used for collecting quantities of data under the same location.
- Objects are used for expressing more complex data in a meaningful way.

// An array named 'nums' is written with the values 1-5 separated by commas
> const nums = [1, 2, 3, 4, 5]

// The quantity of nums can be found under the length property
> nums.length

// A specific element can be grabbed from an array at its index. Note: Arrays are 0 indexed, meaning that in this case index 3 would reveal the 4th element.
> nums[3]

// An object called dog is given key-value pairs for 'name' and 'age'.
> const dog = { name: 'Beef', age: 2 }

// Individual properties can be grabbed off an object by using dot notation. First specify the name of the object, then a '.', then the name of the key 
> console.log(dog.name)

--------------------------------------

DOM Manipulation
- The Document Object Model (DOM) is a representation of the webpage of your app inside of your javascript. It functions as an interface for you to write to/on your actual page through your code.

// An h1 tag is given an id of 'heading' so it can be easily grabbed through javascript
> <`h1` id="heading">Hello World</`h1`>

// The specific h1 can be grabbed by its id and manipulated in any way seen fit. Here the text of the tag is changed from 'Hello World' to 'Goodbye World'
> document.getElementById('heading').textContent = 'Goodbye World'

// A button tag is given an id of 'clicky' so it can be easily grabbed through javascript
> <`button` id="clicky">Click Me</`button`>

// The button is grabbed by its id. An event listener, which allows for connection logic systems to user events that occur on an element, is assigned to the button. The event handled is called 'click', and emits each time the user clicks the button. The function attached to the click event logs the word 'hi' to the console.
> document.getElementById('clicky').addEventListener('click', () => { console.log('hi') })


