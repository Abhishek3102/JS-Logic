// Key Value Pairs
const students = {
  age: 24,
  name: "Abhishek",
  cgpa: 8.9,
  isPass: true,
};
console.log(students);
console.log("The type of students is :", typeof students);
// Two ways to access values of keys
console.log(students.cgpa);
console.log(students["cgpa"]);

students.age = students.age * 3;
console.log(students);

// for-of loop
let str = "HelloSpriha";

// for counting the size of string
let size = 0;

for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("String size = ", size);

// for in loop : Returns the keys
let student = {
  age: 24,
  name: "Abhishek",
  cgpa: 8.9,
  isPass: true,
};

for (let key in student) {
  console.log("key", key, "value=", student[key]);
}

let st = "Heya";
let newSt = st.toUpperCase();
console.log(newSt);

// Replace string character with any other character
let mb = "Surbhi";
console.log(mb.replace("urbhi", "priha"));

// let username = prompt("Enter your username");
// console.log("Username is: ",username);

let friends = ["surbhi", "spriha", "megha", "anusha"];
for (let names = 0; names < friends.length; names++) {
  console.log("The friends list is:", friends[names]);
}

// 10% off on all items
items = [100, 95, 786, 223, 427, 356];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log("The prices of items after applying 10% discount are:", items);

friends.push("Priya");
console.log("The friend list after pushing Priya to it is:", friends);
friends.pop();
console.log("The friend list after popping the last element is:", friends);
// slice method me second digit non inclusive hota hai matlab n-1 tak hi slice karega
console.log("Friends list after using slice method is:", friends.slice(1, 4));

// splice method(start_index,remove_elements_by_value_given_by_user,replace_to_position_where_elements where _removed)
console.log(
  "Friends list after using splice method is:",
  friends.splice(1, 2, "bishal")
);

// Functions in any programming language helps to reduce redundancy

// Arrow Functions
const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum("The result of arrowSum function is: ", 9 + 18);

function vowels(word) {
  const vowels = "aeiou";
  let count = 0;
  for (let x = 0; x < word.length; x++) {
    if (vowels.includes(word[x])) count++;
  }
  return count;
}
console.log("The vowels in the entered word is :", vowels("spriha"));

// alternate method using forEach method. word.split is used bcoz forEach is only used for arrays and word.
// split converts strings into arrays
function vowels(word) {
  const vowels = "aeiou";
  let count = 0;
  word.split("").forEach((char) => {
    if (vowels.includes(char)) count++;
  });
  return count;
}

console.log("The vowels in the entered word is :", vowels("spriha"));

let array2 = [5, 6, 7, 8, 9];
let mlt3 = array2.filter((val) => {
  return val % 3 === 0;
});
console.log("The multiples of 3 are:", mlt3);

let array3 = [5, 6, 7, 8, 9];
const initialValue = 0;
const sumInitial = array3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(
  "The sum of numbers in array3 after using reduce method is:",
  sumInitial
);

// RETURN THE LARGEST NUMBER
let array4 = [5, 6, 7, 8, 9];
const largest = array3.reduce((previous, current) => {
  return previous > current ? previous : current;
});
console.log("The biggest number in array4 is:", largest);

// RETURN THE SMALLEST NUMBER
let array5 = [5, 6, 7, 8, 9];
const smallest = array3.reduce((previous, current) => {
  return previous < current ? previous : current;
});
console.log("The smallest number in array4 is:", smallest);

// printing numbers in array upto n
let k = prompt("Enter a number");
let array6 = [];
for (i = 1; i <= k; i++) {
  array6[i - 1] = i;
}
console.log(array6);

// printing factorial of numbers in array upto n
let q = prompt("Enter a number");
let array7 = [];
for (i = 1; i <= q; i++) {
  array7[i - 1] = i;
}
console.log(array7);
let factorial = array7.reduce((last, now) => {
  return last * now;
});

console.log(factorial);
