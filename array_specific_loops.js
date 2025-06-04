// for of
const arr = [1, 2, 3, 4];
for (const value of arr) {
  console.log(`Value of element of array is ${value}`);
}

// MAPS - unique values like set, and they stay in order which they are entered
const map = new Map();
map.set("Turin", "Juventus");
map.set("Rome", "Roma");
map.set("London", "Chelsea");

// line 13 and following forof loop used on array give same output
console.log(map);

for (const [city, club] of map) {
  console.log(`The club of ${city} is ${club}`);
}

// for of loop on object  -doesn't work on objects
const myObject = {
  MUN: "Ruben Amorim",
  MCI: "Pep Guardiola",
  PSG: "Luis Enrique",
};

// this doesn't work as written above
// for (const [club, manager] of myObject) {
//   console.log(`Manager of ${club} is ${manager}`);
// }

// since for of doesn't work on objects, for in loop can be used
for (const club in myObject) {
  console.log(`Manager of ${club} is ${myObject[club]}`);
}

// for each loop
const players = ["bruno", "rashy", "sancho", "amad"];

players.forEach(function (names) {
  console.log(`Player name is ${names}`);
});

function getPlayerNames(name) {
  console.log(name);
}
console.log("\nprinting names\n");
// here only reference of function is passed, it is not executed
// reference is funcion. execution is function(), that is, calling the function
players.forEach(getPlayerNames);

// forEach has access of whole array and it can display them too
players.forEach((naam, index, apnaArray) => {
  console.log(naam, index, apnaArray);
});

// iterating and printing values of objects inside array
const users = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3@gmail.com",
  },
  {
    id: 4,
    email: "user4@gmail.com",
  },
];

users.forEach((user) => {
  console.log(`Id of user is ${user.id} and their email is ${user.email}`);
});
