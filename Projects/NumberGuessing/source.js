let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const userGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");
let previousGuess = [];
let numberofGuessCompleted = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess === "" || guess < 1 || guess > 100 || isNaN(guess)) {
    alert(
      `Please enter a valid number as your guessed number ${guess} is not valid`
    );
    // return doesn't allow invalid number to get pushed into array
    return;
  }
  if (previousGuess.includes(guess)) {
    alert(`Please enter a unique number as ${guess} has already been entered`);
    return;
  }
  previousGuess.push(guess);

  //   condition isn't quite correct because previousGuess is an array and guess is a number, and you’re trying to check if the guess is already in the previousGuess array.
  // The contains() method doesn’t exist for arrays in JavaScript.
  //   if(guess.contains(previousGuess.value)){
  //     alert(`Please enter a unique number as ${guess} has already been entered`);
  //   }

  if (numberofGuessCompleted >= 10) {
    displayGuess(guess);
    displayMessage(
      `Oops, you could not guess it in 10 attempts. The random number was ${randomNumber}.`
    );
    alert("Game over! You have used all your guesses.");
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  userGuesses.innerHTML += `${guess}, `;
  numberofGuessCompleted++;
  //   remainingGuesses.innerHTML = `${11 - numberofGuessCompleted}`;
  remainingGuesses.innerHTML = `${Math.max(11 - numberofGuessCompleted, 0)}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Yayy! You nailed it. The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low, go higher a bit`);
  } else if (guess > randomNumber) {
    displayMessage(`Ahh! You went above, come down`);
  }
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numberofGuessCompleted = 1;
    userGuesses.innerHTML = "";
    // remainingGuesses.innerHTML = `${11 - numberofGuessCompleted}`;
    remainingGuesses.innerHTML = `${Math.max(11 - numberofGuessCompleted, 0)}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
    displayMessage("");
  });
}
