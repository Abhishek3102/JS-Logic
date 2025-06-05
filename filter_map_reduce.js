// Filter Method ------------------------------------------
const nums = [1, 3, 5, 7, 9];

/*
// This printed result 5 times bcoz inside each call of .filter(), you're looping again over all 5 elements with .forEach(), and printing any that are divisible by 3 (which are 3 and 9). 
// Therefore, this inner .forEach() runs 5 times

You call .filter() on the nums array ([1, 3, 5, 7, 9]).
.filter() expects a callback that returns true or false for each element in the array, so it knows which to keep.

But inside your filter's callback, you don't return anything — instead, you run a .forEach() loop that:
Goes over the entire nums array.
Logs every number divisible by 3 (3, 9).
This inner loop runs 5 times (once for each element of nums, due to the outer .filter()).

Operation	What happens
nums.filter(...)	Calls the callback 5 times — once per element (1, 3, 5, 7, 9)
Inside callback	You run nums.forEach(...) every time
nums.forEach(...)	Iterates over [1, 3, 5, 7, 9] and logs 3 and 9
Return value	You return undefined each time (no return inside .filter()), so .filter() gives you an empty array
Final result	divby3 = [] (empty array), but console logs show:
Numbers divisible by 3 are 3
Numbers divisible by 3 are 9
repeated 5 times

let divby3 = nums.filter((num) => {
  nums.forEach((num) => {
    if (num % 3 === 0) {
      console.log(`Numbers divisible by 3 are ${num}`);
    }
  });
});

*/

const divBy3 = nums.filter((num) => num % 3 === 0);
console.log("Numbers divisible by 3 are:", divBy3);

// using for each loop
const divisibleBy3 = [];
nums.forEach((num) => {
  if (num % 3 == 0) {
    divisibleBy3.push(num);
  }
});

console.log(divisibleBy3);

const kolkataKnightRiders = [
  {
    name: "Shreyas Iyer",
    role: "Captain",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    matchesPlayed: 50,
    runsScored: 1800,
    wicketsTaken: 25,
  },
  {
    name: "Andre Russell",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    matchesPlayed: 80,
    runsScored: 2100,
    wicketsTaken: 75,
  },
  {
    name: "Sunil Narine",
    role: "All-rounder",
    battingStyle: "Left-handed",
    bowlingStyle: "Right-arm off break",
    matchesPlayed: 60,
    runsScored: 1200,
    wicketsTaken: 85,
  },
  {
    name: "Venkatesh Iyer",
    role: "All-rounder",
    battingStyle: "Left-handed",
    bowlingStyle: "Right-arm medium",
    matchesPlayed: 40,
    runsScored: 1000,
    wicketsTaken: 10,
  },
  {
    name: "Varun Chakravarthy",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm leg spin",
    matchesPlayed: 40,
    runsScored: 200,
    wicketsTaken: 50,
  },
];

const teamPlayers = kolkataKnightRiders.filter(
  (players) => players.role === "All-rounder"
);

console.log(teamPlayers);

let ballers = kolkataKnightRiders.filter((players) => {
  return players.wicketsTaken >= 26 && players.runsScored > 800;
});

console.log(ballers);

// --------------------------------------------------------------------------

// Map Method
let batters = kolkataKnightRiders.map((players) => {
  return players.wicketsTaken < 26 && players.runsScored > 800;
});
// This gives result : [ true, false, false, true, false ] bcoz it checks if both conditions are true or false
console.log(batters);

// To print names of players and not boolean values in array, we use :
let batsmenName = kolkataKnightRiders
  .filter((player) => player.wicketsTaken < 26 && player.runsScored > 800)
  .map((player) => player.name);

console.log(batsmenName);

// --------------------------------------------------------------------------------------------------------------------

// Reduce Method
const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce(function (accumulator, currentValue) {
  console.log(
    `Value of accumulator is ${accumulator} and value of current value is ${currentValue}`
  );
  return accumulator + currentValue;
}, 0);
// This 0 is the value of accumulator given by me, can give anything
console.log(myTotal);
// Result :
/*
Value of accumulator is 0 and value of current value is 1
Value of accumulator is 1 and value of current value is 2
Value of accumulator is 3 and value of current value is 3
Value of accumulator is 6 and value of current value is 4
10
*/

// the same code with arrow function, instead of regular function
// const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, 0 )

const totalWickets = kolkataKnightRiders.reduce(
  (accumulator, value) => accumulator + value.wicketsTaken,
  0
);
console.log(`Total wickets taken are ${totalWickets}`);
