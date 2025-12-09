// RANDOM RECIPE
const form = document.querySelector('.recipeForm');
const imgBox = document.querySelector('.imgBox');
const title = document.querySelector('.title');
const details = document.querySelector('.details');

const clearElements = () => {
  title.innerText = "";
  imgBox.innerHTML = "";
  details.innerHTML = "";
};

const getRecipe = () => {
  clearElements();
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      // image
      const img = document.createElement('img');
      img.src = meal.strMealThumb;
      img.alt = meal.strMeal;
      imgBox.appendChild(img);

      // Recipe title
      title.textContent = meal.strMeal;

      // Instructions
      const instructions = document.createElement('p');
      instructions.textContent = meal.strInstructions;
      details.innerHTML = "";
      details.appendChild(instructions);
    })
    .catch(err => {
      console.error(err);
      details.innerHTML = "<h4>Error fetching recipe!</h4>";
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getRecipe();
});
