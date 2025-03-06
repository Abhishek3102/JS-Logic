// Selecting Elements
let heading = document.getElementById("main-heading");
console.log(heading);
heading.style.color = "blue";

let items = document.getElementsByClassName("list-item");
console.log(items);
items[0].style.color = "red";

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
paragraphs[0].style.fontSize = "20px";

let firstItem = document.querySelector(".list-item");
firstItem.style.backgroundColor = "yellow";

let allItems = document.querySelectorAll(".list-item");
allItems.forEach((item) => {
  item.style.border = "2px solid black";
});

// Modifying DOM Elements
heading.innerText = "New Heading Updated!";
document.getElementById("container").innerHTML =
  "<p>This is a new paragraph inside the div!</p>";

let box = document.getElementById("box");
box.style.backgroundColor = "lightgreen";
box.style.border = "2px solid black";
box.style.padding = "10px";

// Creating and Appending Elements
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a dynamically added paragraph.";
document.body.appendChild(newParagraph);

let newItem = document.createElement("li");
newItem.innerText = "New List Item";
document.querySelector("ul").append(newItem);

let newDiv = document.createElement("div");
newDiv.innerText = "Inserted Before";
let parent = document.getElementById("container");
let reference = document.getElementById("reference-item");
parent.insertBefore(newDiv, reference);

// Removing Elements
let removeElement = document.getElementById("box");
removeElement.remove();

let parentDiv = document.getElementById("container");
let childItem = document.getElementById("item-to-remove");
parentDiv.removeChild(childItem);

// Event Handling
let button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button was clicked!");
});

let hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "white";
});

document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Form Handling
let inputField = document.getElementById("username");
let submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", () => {
  alert("Entered Username: " + inputField.value);
});

let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Name cannot be empty!");
  } else {
    alert("Form submitted successfully!");
  }
});

// Class Manipulation
let boxElement = document.getElementById("box");
boxElement.classList.add("highlight");
boxElement.classList.remove("highlight");
boxElement.classList.toggle("highlight");

// Window Methods
setTimeout(() => {
  console.log("This message appears after 3 seconds.");
}, 3000);

let interval = setInterval(() => {
  console.log("This message appears every 2 seconds.");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);

// Local Storage & Session Storage
localStorage.setItem("user", "John");
console.log(localStorage.getItem("user"));

sessionStorage.setItem("sessionUser", "Alice");
console.log(sessionStorage.getItem("sessionUser"));

// Fetch API (AJAX)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();

// Changing Attributes
let link = document.getElementById("myLink");
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

// Scroll Events
window.addEventListener("scroll", () => {
  console.log("Page scrolled!");
});
