// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// ES6 class syntax provides a cleaner, more readable way to define constructor functions
// and instance methods in JavaScript.
// Under the hood, methods defined in the class body (like encryptPassword and changeUsername)
// are added to the prototype of the class, not to each instance.
// So all instances share the same method definitions via the prototype chain.

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// This is the manual equivalent of the ES6 class syntax.
// The constructor function sets up instance properties,
// and prototype methods are added manually for method sharing.
// Functionally identical to the ES6 version — both use the prototype chain
// to avoid recreating methods for each instance.
// This shows how ES6 class is syntactic sugar over prototype-based inheritance.
