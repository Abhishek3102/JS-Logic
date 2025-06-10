function User(username, isLoggedin) {
  this.username = username;
  this.isLoggedin = isLoggedin;
  return this;
}

// here usertwo overwrites the value of userOne bcoz new keyword is not used
// so when userone is printed after declaring usertwo, even though usertwo is not printed, the value of usertwo gets printed in userOne.

// const userOne = User("abhi", false);
// const userTwo = User("user2", true);
// console.log(userOne);

// here value of userOne is printed even though userTwo is declared,
// bcoz userTwo can't overwrite userOne since new keyword is used which creates a new instance of User function
const userOne = new User("abhi", false);
const userTwo = User("user2", true);
console.log(userOne);
