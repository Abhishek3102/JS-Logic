const form = document.querySelector("form");

// the following print will give empty value, so use them when form is filled to get data
// const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  //   results.innerHTML = `${height}`;
  else if (weight === "" || height < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }

  //   results.innerHTML = `${weight}`;
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi}</span>`;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.5) {
    results.innerHTML = `You are under weight ${bmi}`;
  } else if (bmi > 18.5 && results <= 24.9) {
    results.innerHTML = `Your weight range ${bmi} is normal`;
  } else {
    results.innerHTML = `You are over weight as your weight is ${bmi}`;
  }
});
