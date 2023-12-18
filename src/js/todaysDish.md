const todaysDishesSection = document.getElementById('todays-dishes');

/_ First Today's Dish _/
/_ ------------------------------------------------------- _/
const todaysDish1 = document.getElementById('todays-dish-1');
/_ Creating elements _/
const dishImg1 = document.createElement('img');
const dishDescription1 = document.createElement('p');
const dishCountry1 = document.createElement('p');
const dishPrice1 = document.createElement('p');

/_ Class names _/
dishImg1.className = 'todays-dish-img';

/_ Content _/
dishImg1.src = db['best-foods'][0].img;
dishDescription1.innerText = db['best-foods'][0].name;
dishCountry1.innerText = db['best-foods'][0].country;
dishPrice1.innerText = db['best-foods'][0].price;

/_ Rendering _/
todaysDishesSection.append(todaysDish1);
todaysDish1.append(dishImg1);
todaysDish1.append(dishDescription1);
todaysDish1.append(dishCountry1);
todaysDish1.append(dishPrice1);
