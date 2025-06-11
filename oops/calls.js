function SetUsername(username) {
  this.username = username;
}

// function createUser(username, email, password) {
//   SetUsername(username);
//   this.email = email;
//   this.password = password;
// }

function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("user1", "user@bb.com", "1234");
// This doesn't print the username even though username is passed in user variable
console.log(user);

// In JavaScript, when a function is invoked without 'new', 'this' inside the function
// refers to the global object (in non-strict mode) or is 'undefined' (in strict mode).
//
// In the commented-out version of createUser:
// SetUsername(username);
// This calls SetUsername as a regular function, so 'this' inside SetUsername does not
// refer to the newly created object from createUser (i.e., 'user').
//
// As a result, the 'username' property is not set on the user object,
// which is why the console output for 'user' lacks the username property.
//

// SetUsername.call(this, username);
// This explicitly sets the 'this' inside SetUsername to refer to the same 'this'
// as inside createUser — which is the newly constructed object when 'new createUser()' is called.
//
// So now, SetUsername modifies 'this.username' correctly on the user object.
//
// This pattern is similar to constructor chaining or constructor delegation:
// allowing one constructor (createUser) to reuse logic from another (SetUsername)
// while ensuring all assignments happen on the same object being returned.
