// concat and spread are used to merge two or more arrays
const array1 = ["mi", "csk", "kkr"];
const array3 = ["rcb", "pk", "dc"];

const concat_method = array1.concat(array3);
const spread_method = [...array1, ...array3];

console.log(concat_method);
console.log(spread_method);
