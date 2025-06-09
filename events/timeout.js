// My Code

/*
const showUser = function () {
  console.log("js-learner");
};

const clockId = document.getElementById("clock");

const time = setInterval(function () {
  let date = new Date();
  clockId.innerHTML = date.toLocaleTimeString();
}, 1000);

clearInterval(time);

// setTimeout(function () {
//   console.log(`welcome, user!`);
// }, 3000);

const changeDisplayText = function () {
  document.querySelector("#heading").innerHTML =
    "learning complete js probably for last time";
  setTimeout(showUser, 4000);
};

const changeHeadingText = setTimeout(changeDisplayText, 4000);

const handleHeadingChange = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearTimeout(changeHeadingText);
    clearInterval(startInterval);
    console.log("STOP BUTTON CLICKED");
  });

// const startInterval = document
//   .querySelector("#start")
//   .addEventListener("click", function () {
//     setInterval(function () {
//       let date = new Date();
//       clockId.innerHTML = date.toLocaleTimeString();
//       console.log(date.toLocaleTimeString());
//     }, 1000);
//   });

let startInterval = document
  .querySelector("#start")
  .addEventListener("click", function () {
    setInterval(time, 1000);
  });
*/

const showUser = function () {
  console.log("js-learner");
};

const clockId = document.getElementById("clock");

// Start an interval immediately to show the clock
let time = setInterval(function () {
  let date = new Date();
  clockId.innerHTML = date.toLocaleTimeString();
}, 1000);

// You can stop the interval immediately after starting it, like this:
clearInterval(time);

// setTimeout(function () {
//   console.log(`welcome, user!`);
// }, 3000);

const changeDisplayText = function () {
  document.querySelector("#heading").innerHTML =
    "learning complete js probably for last time";
  setTimeout(showUser, 4000);
};

const changeHeadingText = setTimeout(changeDisplayText, 4000);

// This is the Stop button's event listener
const handleHeadingChange = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearTimeout(changeHeadingText); // Clears the timeout for heading change
    clearInterval(intervalId); // Clears the clock interval
    console.log("STOP BUTTON CLICKED");
  });

// This is the Start button's event listener
let intervalId; // Declare intervalId at the top to be used later
document.querySelector("#start").addEventListener("click", function () {
  intervalId = setInterval(function () {
    let date = new Date();
    clockId.innerHTML = date.toLocaleTimeString();
    console.log(date.toLocaleTimeString()); // Logs the time every second
  }, 1000);
});
