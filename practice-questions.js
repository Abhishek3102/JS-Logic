// Question : Create website. create class User with 2 properties : name,email. there's a method viewData() which allows users to view website Data.
let DATA = "this is inside the data";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data : ", DATA);
  }
}

let user1 = new User("kane, kane@gmail.com");
let user2 = new User("mane, mane@gmail.com");

user1.viewData();

// Question : new class admin inheriting from user. new method editData to Admin that allows it to edit website Data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "Updated data";
  }
}

let admin1 = new Admin("main, main@gmail.com");
admin1.editData();
console.log("This is after admin updated the data : ");
console.log(DATA);
