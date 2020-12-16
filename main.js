
var choiceSelector = document.querySelector('input.cook-button');
var resultSelector = document.querySelector('.result');
var imgSelector = document.querySelector('img#cookpot');

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();

  var currentChoice = document.querySelector('input[name="choice"]:checked').value;

  getMeal(currentChoice)
})

function getMeal(currentChoice) {
  var mealList = currentChoice + "s"
  var randomMeal;
  // var randomEntireMeal;

  if (mealList === "sides") {
    randomMeal = randomGenerator(sides);
  } else if (mealList === "mains") {
    randomMeal = randomGenerator(mains);
  } else if (mealList === "desserts") {
    randomMeal = randomGenerator(desserts);
  // } else if (mealList == meals) {
  //   randomEntireMeal = randomGenerator(sides);
  }

  imgSelector.classList.add('hidden');
  console.log(randomMeal)
  resultSelector.innerHTML = `
      <h1>${currentChoice}</h1>
      You should totally make: 
      <h3>${randomMeal}</h3>`
}

function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

