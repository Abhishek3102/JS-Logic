// My code

/*
let clock = document.getElementById("clock");
let button = document.querySelector("button");
let date = new Date();

const showTime = function (button) {
  button.addEventListener("click", () => {
    while (true) {
      button.innerHTML = `Your current time is ${date}`;
    }
  });
};
*/

// code given :
let clock = document.getElementById("clock");
let button = document.querySelector("#button");

const updateClock = function () {
  let date = new Date(); // Get the current time
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");

  // Display the current time in the clock div
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
};

// Initial update for the clock when the page loads
updateClock();

// Set an interval to update the clock every second
setInterval(updateClock, 1000);

button.addEventListener("click", () => {
  // Show a message when the button is clicked
  button.innerHTML = `The clock is running`;
});

// his code
const clockId = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clockId.innerHTML = date.toLocaleTimeString();
}, 1000);
