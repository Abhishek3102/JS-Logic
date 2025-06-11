class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// 'User' is a base class that defines a constructor and a method 'logMe'.
// 'this.username' is initialized when an instance is created.
// 'logMe()' is an instance method shared across all instances via prototype.

class Teacher extends User {
  constructor(username, email, password) {
    // 'super()' calls the parent class (User) constructor.
    // Must be called before accessing 'this' in a derived class.
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

// 'Teacher' extends 'User', inheriting its properties and methods.
// The constructor in 'Teacher' uses 'super' to initialize inherited fields (username).
// Teacher gets access to 'logMe()' method through inheritance,
// and defines its own method 'addCourse'.

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe(); // Inherited from User

const masalaChai = new User("masalaChai");

masalaChai.logMe(); // From User class

console.log(chai instanceof User); // true

// 'instanceof' checks if an object is an instance of a specific class or its ancestor in the prototype chain.
// 'chai instanceof User' returns true because 'Teacher' inherits from 'User'.
