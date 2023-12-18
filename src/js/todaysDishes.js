import db from './database.js';

console.log(db);
console.log(db['best-foods'][0]);

const todaysDishesSection = document.querySelector('.todays-dishes'); // Today's Dishes Sectionv

/* Creates Dish Element */
function createDishElement(dish) {
  const dishElement = document.createElement('div'); // Dish div
  dishElement.className = 'todays-dish';

  const dishImg = document.createElement('img'); // Dish Img
  dishImg.className = 'todays-dish-img';
  dishImg.src = dish.img;

  const dishName = document.createElement('p'); // Dish name
  dishName.className = 'todays-dish-name';
  dishName.innerText = dish.name;

  const dishCountry = document.createElement('p'); // Dish country
  dishCountry.className = 'todays-dish-country';
  dishCountry.innerText = dish.country;

  const dishPrice = document.createElement('p'); // Dish price
  dishPrice.className = 'todays-dish-price';
  dishPrice.innerText = `${dish.price} kr`;

  dishElement.append(dishImg, dishName, dishCountry, dishPrice);

  return dishElement;
}

// Best-foods array of dishes
const bestFoods = db['best-foods'];

// Manually choose four dishes by specifying their index numbers
const chosenIndexes = [0, 2, 4, 6]; // Change these index numbers as needed

// Adding today's dishes to the section
chosenIndexes.forEach((index, i) => {
  if (index >= 0 && index < bestFoods.length) {
    const todaysDish = createDishElement(bestFoods[index]);
    todaysDish.id = `todays-dish-${i + 1}`;
    todaysDishesSection.append(todaysDish);
  }
});

/* Changes */
