const ballTypes = {
  ball: {
    football: {
      sport: "Football",
      size: 5,
      price: "400-700",
    },
    basketball: {
      sport: "Basketball",
      size: 7,
      price: "500-800",
    },
    volleyball: {
      sport: "Volleyball",
      size: 5,
      price: "300-600",
    },
    tennis: {
      sport: "Tennis",
      size: 4,
      price: "200-500",
    },
    rugby: {
      sport: "Rugby",
      size: 5,
      price: "450-750",
    },
  },
};

// The price of football is 400-700
console.log("The price of football is", ballTypes.ball.football.price);

// Object.assign() method : eg => object.assign(source, target)
// spread is also used just like arrays : eg => result = (...obj1, ...obj2)

// When working with databases, values will come as array of objects

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

// console.log(ballTypes);

// Now find all keys of any object
// [ 'football', 'basketball', 'volleyball', 'tennis', 'rugby' ]
console.log(Object.keys(ballTypes.ball));

// Now find all keys of any object
// [ 'Football', 5, '400-700' ]
console.log(Object.values(ballTypes.ball.football));

// true
console.log(
  "Checking if object has this property or not : ",
  ballTypes.hasOwnProperty("ball")
);

// This is called object destructuring
const { price: daam } = ballTypes.ball.football;
// 400-700
console.log(daam);
