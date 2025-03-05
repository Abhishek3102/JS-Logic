// 1. Basics of JavaScript
let username = "John";  // Assigning a string value to 'username'
const userAge = 30;  // Constant 'userAge' set to 30
let isAuthenticated = true;  // Boolean variable to track authentication

// 2. Control Flow (Conditionals)
if (userAge >= 18) {  
  console.log("User is an adult");
} else {
  console.log("User is a minor");
}

// 3. Loops
for (let i = 0; i < 10; i++) {  // Looping through numbers 0 to 9
  console.log(i);
}

// 4. Functions
function fetchUserData(userId) {  // Fetch user data from API
  return fetch(`/api/users/${userId}`).then(response => response.json());
}

// 5. Arrow Functions
const getUserName = user => user.name;  // Returning the name of the user

// 6. Objects
const user = {
  name: "Alice",
  age: 28,
  getDetails() {  // Method within the user object
    return `${this.name} is ${this.age} years old.`;
  }
};

// 7. Arrays
const users = ["Alice", "Bob", "Charlie"];  // Array of users
users.forEach(user => {  // Iterating through the array
  console.log(user);
});

// 8. ES6+ Features
const userObj = { name: "John", age: 30 };
const { name, age } = userObj;  // Object destructuring
console.log(name, age);

// 9. Asynchronous JavaScript (Callbacks)
function fetchData(callback) {  // Callback function example
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData(data => {
  console.log(data);  // Logs "Data fetched" after 1 second
});

// 10. Promises
const fetchDataPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Data successfully fetched");
  } else {
    reject("Error in fetching data");
  }
});

fetchDataPromise
  .then(response => console.log(response))  // Logs the success message
  .catch(error => console.error(error));  // Logs any error message

// 11. Async/Await
const fetchDataAsync = async () => {
  return "Data successfully fetched";
};

const displayData = async () => {
  const data = await fetchDataAsync();  // Waits for async function to resolve
  console.log(data);
};

displayData();

// 12. Error Handling
try {
  let num = 10;
  if (num < 20) throw new Error("Number too small");
  console.log(num);  // Will not be executed
} catch (error) {
  console.error(error.message);  // Catches and logs the error message
}

// 13. Closures
function counter() {  // Closure example
  let count = 0;
  return function() {
    count++;
    console.log(count);  // Logs incremented count
  };
}

const countUp = counter();
countUp();
countUp();

// 14. this Keyword
const person = {
  name: "Bob",
  greet() {  // Using 'this' to refer to the object
    console.log(`Hello, ${this.name}`);
  }
};
person.greet();

// 15. Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Timeout completed");
}, 0);

console.log("End");

// 16. Modules (ES Modules)
export const getUserDetails = id => {  // Exporting a function to fetch user details
  return fetch(`/api/users/${id}`).then(response => response.json());
};

import { getUserDetails } from './user.js';  // Importing the function
getUserDetails(1).then(user => console.log(user));

// 17. Destructuring
const userDetails = { name: "Alice", age: 25 };
const { name, age } = userDetails;  // Object destructuring
console.log(name, age);

// 18. Rest and Spread Operators
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);  // Using Rest to gather arguments
console.log(sum(1, 2, 3));  // 6

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // Using Spread to combine arrays
console.log(arr2);  // [1, 2, 3, 4, 5]

// 19. Higher-Order Functions
const multiplyByTwo = num => num * 2;

const processArray = (arr, func) => arr.map(func);  // Passing function as an argument

console.log(processArray([1, 2, 3], multiplyByTwo));  // [2, 4, 6]

// 20. Prototype and Prototypal Inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {  // Prototypal inheritance for speak method
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak();

// 21. Classes and OOP
class Car {  // Defining a class for Car
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {  // Method to drive the car
    console.log(`${this.make} ${this.model} is driving.`);
  }
}

const myCar = new Car("Tesla", "Model S");
myCar.drive();

// 22. Set and Map
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
uniqueNumbers.add(6);  // Adding a unique number to the Set
console.log(uniqueNumbers);  // Set {1, 2, 3, 4, 5, 6}

const userDetailsMap = new Map();
userDetailsMap.set("name", "Alice");
userDetailsMap.set("age", 28);
console.log(userDetailsMap.get("name"));  // Alice

// 23. RegEx (Regular Expressions)
const regex = /\d+/;  // RegEx pattern to match digits
const result = "abc123".match(regex);
console.log(result[0]);  // 123

// 24. Destructuring in Function Arguments
const userInfo = { name: "John", age: 30 };

function greet({ name, age }) {  // Destructuring directly in the function argument
  console.log(`${name} is ${age} years old`);
}

greet(userInfo);

// 25. Iterators and Generators
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumbers();
console.log(generator.next().value);  // 1
console.log(generator.next().value);  // 2

// 26. Symbols
const uniqueId = Symbol("id");

const user = {
  [uniqueId]: 12345,  // Using Symbol as a unique key
  name: "Alice"
};

console.log(user[uniqueId]);  // 12345

// 27. Memory Management & Garbage Collection
let userObject = { name: "Alice" };
userObject = null;  // Nullifying the reference to allow garbage collection

// 28. Performance Optimization
const memoizedFactorial = (function() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) return cache[n];  // Checking cache before calculating factorial
    if (n <= 1) return 1;
    return cache[n] = n * factorial(n - 1);
  };
})();

console.log(memoizedFactorial(5));  // 120

// 29. Web APIs
fetch('/api/posts')
  .then(response => response.json())
  .then(posts => console.log(posts));

// 30. Browser Events
document.getElementById("submitBtn").addEventListener("click", () => {
  console.log("Form submitted");
});

// 31. JSON
const user = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(user);
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);

// 32. Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('Service Worker registered', reg))
    .catch(err => console.log('Service Worker registration failed', err));
}

// 33. Web Storage API
localStorage.setItem("user", "John");
console.log(localStorage.getItem("user"));

// 34. Fetch API
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));

// 35. Node.js Basics (Server-Side JS)
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// 36. Event-driven Programming
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', () => {
  console.log('Message received');
});

emitter.emit('message');

// 37. Functional Programming Basics
const square = x => x * x;
console.log(square(4));  // 16

// 38. Design Patterns
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);  // true
