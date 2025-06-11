class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())

// 'createId' is declared as a static method using the 'static' keyword.
// Static methods are not available on instances of the class (like 'hitesh').
// They are called directly on the class itself (e.g., User.createId()).
// Hence, trying to access hitesh.createId() would result in a TypeError.

// Static methods are typically utility functions related to the class,
// but not tied to any specific instance.

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());

// Even though 'createId' was defined on the User class,
// it is also available to Teacher class because static methods are inherited by child classes.
// So 'Teacher.createId()' is valid, and so is 'iphone.constructor.createId()',
// but not 'iphone.createId()' directly, since static methods are not attached to instances.
