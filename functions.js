// This is called rest operator which is used to add(put in)
// multiple values inside a function when count of numbers
// is not known
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(122, 197, 456));
// Output = [ 122, 197, 456 ]

// --------------------------------------------------------

function ballsPrice(price1, price2, ...price) {
  return price;
}

console.log(ballsPrice(234, 456, 912));
// Output = [ 912 ] bcoz price1, price2 occupy first two entered numbers

// In arrow function, if {} is used then writing return is mandatory
// whereas if () is used or directly value is returned then writing return is not necessary.

// Isme return hua username, function call karne par
// const nameShow = () => ({
//   fullname: "abhi",
// });

// Isme undefined aaya
// const nameShow = () => {
//   fullname: "abhi";
// };

// Isme bhi return hua username
const nameShow = () => {
  return { fullname: "abhi" };
};

console.log(nameShow());
