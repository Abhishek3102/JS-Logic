function multiBy3(num) {
  return num * 3;
}

multiBy3.power = 2;
console.log(multiBy3(9));
console.log(multiBy3.power);
console.log(multiBy3.prototype);

// Functions in JavaScript are also objects.
// Properties can be added to them directly (e.g., 'power').
// '.prototype' is used when the function is treated as a constructor with 'new'.

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

// The following two line of codes don't run without 'new' keyword
// bcoz createUser did not have access of these values
const bolt = new createUser("bolt", 9.58);
const blake = new createUser("blake", 9.69);

// bolt.printMe();

// let ballerName = "user"
// console.log(ballerName.length);
// here a true length method is to be created manually which gives the actual length of a string
// console.log(ballerName.truelength);

let myBallers = ["garna", "amad"];
let ballerNation = {
  garna: "arg",
  amad: "civ",

  getAmadNation: function () {
    console.log(`Amad Diallo is from ${this.amad}`);
  },
};

Object.prototype.wazza = function () {
  console.log(`wazza is there in all objects from now`);
};
// ballerNation.wazza();
myBallers.wazza();

// Adding method to Object.prototype makes it available to all objects (including arrays and functions).
// This is possible because all objects ultimately inherit from Object.prototype.

Array.prototype.heyWazza = function () {
  console.log(`Wazza says hey`);
};
// This has access of heyWazza bcoz prototype heywazza is defined inside array
myBallers.heyWazza();

// This doesn't have access of heyWazza bcoz prototype heywazza is defined inside array and not objects
// ballerNation.heyWazza();

// flow goes like this : array, function, string -> object -> null

// Prototype chain for array: Array.prototype -> Object.prototype -> null
// Prototype chain defines property/method resolution order during lookup.

const players = {
  playerName: "rio",
  height: "189cm",
};

const playerRole = {
  position: "cb",
  quality: "best",
  devil: true,
};

const managerTask = {
  prepareTeam: "4-4-2",
  attacking: true,
  __proto__: players,
};

// This is prototypal inheritance which means how to access properties of others
playerRole.__proto__ = players;

// New syntax (modern syntax) for prototypal inheritance

// Object.setPrototypeOf(receiver, target)
Object.setPrototypeOf(managerTask, playerRole);

// Now managerTask inherits from playerRole, which in turn inherits from players.
// This creates a prototype chain: managerTask → playerRole → players → Object.prototype → null.

let tryTrueLength = "CheckingString     ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

tryTrueLength.trueLength();

// A custom method added to String.prototype allows all string instances to access 'trueLength'.
// Demonstrates how built-in prototypes can be extended to add new functionality.
