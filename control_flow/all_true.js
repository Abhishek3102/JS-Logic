// Checking this, won't give any email
// const userEmail = ''

// Checking this will return yes email found
// const userEmail = []

// falsy values - these values will be considered false

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values - these values will be considered true

// true, "0", "false", " ", [], {}, function(){}
// here "0, " ", "false" are considered true bcoz they are inside the string
// and anything which is inside the string is considered true.

// for eg
const userName = " ";
if (userName) {
  // Output = Username is :
  console.log(`Username is : ${userName}`);

  //   Output = Username is : ( )
  console.log(`Username is : (${userName})`);
}

const emailArray = [];
// Checking if array is empty
if (emailArray.length === 0) {
  console.log(`This is an empty email array`);
}

const emptyObject = {};
// Now first converting object to array and then checking if it is empty
// Object's keys or values can be checked, they are converted to arrays

if (Object.keys(emptyObject).length === 0) {
  console.log(`Object is empty because length of keys of object is zero`);
}

// Nullish Coalescing Operator (??) : null undefined
// The nullish coalescing operator returns the right-hand operand (the second value) when the left-hand operand is either null or undefined.
// Otherwise, it returns the left-hand operand.

// In other words:
// If the left operand is neither null nor undefined, it is returned.
// If the left operand is null or undefined, the right operand is returned.

let val1 = 5 ?? 10;
// This prints 5 bcoz both are values
console.log(val1);

let val2 = null ?? 10;
// This prints 10
console.log(val2);

// Ternary Operator
// condition ? true : false
