/* This is what i had written on my own

let selectedButton = document.getElementsByClassName("button");
let selectedBody = document.querySelector("body");
// let colorOfButton = document.getElementById()

function changeBodyColour(selectedBody, selectedButton) {
  selectedButton.addEventListener("click", () => {
    selectedBody.style.backgroundColor = selectedButton;
  });
}
*/

// Correct code what i got :
let selectedButtons = document.getElementsByClassName("button");
let selectedBody = document.querySelector("body");

function changeBodyColour(button) {
  button.addEventListener("click", () => {
    selectedBody.style.backgroundColor = button.id;
  });
}

// Loop over all buttons and attach event listener
for (let i = 0; i < selectedButtons.length; i++) {
  changeBodyColour(selectedButtons[i]);
}

// Alternative approaches to do the same
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.id;
  });
});

// Another way
document.querySelector(".canvas").addEventListener("click", function (e) {
  if (e.target.classList.contains("button")) {
    document.body.style.backgroundColor = e.target.id;
  }
});

// his way :

// This returns a nodelist
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// since, returned value is a nodelist and not a single element, loops can be used. we use forEach
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
