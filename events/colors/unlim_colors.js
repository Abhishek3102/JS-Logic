// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Just trying for start button
document.getElementById("start").addEventListener("mouseover", function () {
  this.style.cursor = "pointer"; // Change cursor for the button itself
});

document.getElementById("start").addEventListener("mouseout", function () {
  this.style.cursor = "default"; // Revert cursor to default when mouse leaves
});

// stop button
document.getElementById("stop").addEventListener("mouseover", function () {
  this.style.cursor = "pointer"; // Change cursor for the button itself
});

document.getElementById("stop").addEventListener("mouseout", function () {
  this.style.cursor = "default"; // Revert cursor to default when mouse leaves
});

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
    console.log(`Current color is : ${randomColor()}`);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

console.log(Math.floor(Math.random() * 16));
