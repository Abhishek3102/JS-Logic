// function loadImage(url, callback) {
//   var image = new Image();

//   image.onload = function () {
//     callback(null, image);
//   };

//   image.onerror = function () {
//     callback(new Error("Could not load image at" + url));
//   };
//   image.src = url;
// }

// fetch("https://prepnudge.vercel.app/suggestions").then((response) =>
//   response
//     .json()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))
// );

const promise1 = new Promise(function (resolve, reject) {
  // do an async task
  // they can be db calls, crypto tasks, network related tasks
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "user1", age: 22 });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "user1", age: 22 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "user1", age: 22 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

// above code using .then and .catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
