import db from './db.js';
// --------- Header/Nav/Meny ------------

// Menyknapp - hamburgermeny
const menuButton = document.querySelector('.menu-button');

// Section - för menyfilter
const sectionFilter = document.querySelector('.section-filter');

// Dropdownmenyn
const menuDropdown = document.querySelector('menu');

// A - nodlista över länkar i dropdownmenyn
const linksMenu = document.querySelectorAll('.a-menu');

// Sections - nodlista, containrar för de olika sidornas innehåll t.ex. hem, meny mm.
const sectionContent = document.querySelectorAll('.section-content');

// Article - produktkort/maträtt på första sidan
const articleDagens = document.querySelectorAll('.article-dagens');
// Article - produktkort/maträtt på meny sidan
const articleMeny = document.querySelectorAll('.article-meny');
// Button - lägg till knapp på första sidan
const buttonArticleAddDagens = document.querySelectorAll('.button-article-add-dagens');
// Button - lägg till knapp på meny sidan
const buttonArticleAddMeny = document.querySelectorAll('.button-article-add-meny');
// Footer -
const footer = document.querySelector('footer');
// Button - expanderar footern
const buttonFooterOpener = document.querySelector('.button-footer-opener');

// Hindrar att användaren klickar på flera artiklar samtidigt.
let toggleLock = false;

// ----------------------------- FUNKTIONER -------------------------------------

// Funktion - lägger till eventlisteners på länkarna i menyn.

function setDropdownMenu() {
  // Sätter eventlisteners på menyn
  for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('click', () => {
      for (let j = 0; j < linksMenu.length; j++) {
        if (linksMenu[i] === linksMenu[j]) {
          // Visar vald sida i main
          sectionContent[j].classList.remove('hide');
        } else if (linksMenu[i] === linksMenu[j]) {
          // Döljer övriga sidor
          sectionContent[j].classList.remove('hide');
        } else {
          sectionContent[j].classList.add('hide');
        }
      }
      //Stänger menyn
      menuDropdown.classList.toggle('menu-open');
    });
  }

  //Stänger dropdown meny om man klickar utanför
  document.addEventListener('click', (event) => {
    const isMenuClicked = menuButton.contains(event.target) || menuDropdown.contains(event.target);

    // Kolla om klicket var utanför menyn och knappen
    if (!isMenuClicked) {
      // Stäng menyn genom att ta bort "menu-open" klassen
      menuDropdown.classList.remove('menu-open');
    }
  });

  //Stänger dropdown meny om man scrollar
  document.querySelector('main').addEventListener('scroll', () => {
    // Stäng menyn genom att ta bort "menu-open" klassen
    menuDropdown.classList.remove('menu-open');
  });
}

// Funktion - gör menyobjekten klickbara och expanderar lägg till knappen

function setArticlesDish(article, buttonAdd) {
  for (let i = 0; i < article.length; i++) {
    buttonAdd[i].addEventListener('click', () => {
      footer.classList.toggle('footer-added');
      setTimeout(() => {
        footer.classList.toggle('footer-added');
      }, 1000);
    });

    article[i].addEventListener('click', () => {
      if (!toggleLock) {
        toggleLock = true;

        if (!buttonAdd[i].textContent) {
          buttonAdd[i].classList.toggle('button-article-add-open');
          setTimeout(() => {
            buttonAdd[i].textContent = 'Lägg till +';
            toggleLock = false;
          }, 1000);
        } else {
          buttonAdd[i].textContent = '';
          buttonAdd[i].classList.toggle('button-article-add-open');
          setTimeout(() => {
            toggleLock = false;
          }, 1000);
        }
      }
      return;
    });
  }
}

// Funktion - Gör menyknappen(hamburgermenyn) & "Se beställning"-knappen(expanderar footern) klickbara

function menuAndFooterOpeners() {
  // Gör menyknappen klickbar
  menuButton.addEventListener('click', () => {
    menuDropdown.classList.toggle('menu-open');
  });

  // Gör "se beställning"-knappen klickbar
  buttonFooterOpener.addEventListener('click', () => {
    if (buttonFooterOpener.innerText === 'Se beställning') {
      footer.classList.toggle('footer-open');

      setTimeout(() => {
        buttonFooterOpener.innerText = 'Tillbaka';
        //buttonFooterOpener.style.backgroundColor = "#FFCB47";
        //buttonFooterOpener.style.color = "#2C4251";
      }, 1000);
    } else {
      footer.classList.toggle('footer-open');

      setTimeout(() => {
        buttonFooterOpener.innerText = 'Se beställning';
        //buttonFooterOpener.style.backgroundColor = "#2C4251";
        //buttonFooterOpener.style.color = "#FFCB47";
      }, 1000);
    }
  });
}

//Bildspel - Om oss
const aboutArticles = document.querySelectorAll('.section-om-oss__picture-scroller__article');
let currentIndex = 0;
let intervalId;

function changeImageDirectionPre(direction) {
  clearInterval(intervalId);
  changeImage(direction);
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = aboutArticles.length - 1;
  } else if (currentIndex >= aboutArticles.length) {
    currentIndex = 0;
  }

  updateImage();
}

function updateImage() {
  aboutArticles.forEach((img, index) => {
    img.classList.toggle('hide', index !== currentIndex);
  });
}

function startSlideshow() {
  intervalId = setInterval(() => {
    changeImage(1);
  }, 5000); // Change image every 5 seconds (adjust as needed)
}

function stopSlideshow() {
  clearInterval(intervalId);
}

let isPlaying = false;

function togglePlayStop(button) {
  isPlaying = !isPlaying;

  if (isPlaying) {
    startSlideshow();
    button.innerHTML = '<img src="./src/img/stop.png" alt="Stop" />';
  } else {
    stopSlideshow();
    button.innerHTML = '<img src="./src/img/play.png" alt="Play" />';
  }
}
//-------------------------------------

setDropdownMenu();
setArticlesDish(articleDagens, buttonArticleAddDagens);
setArticlesDish(articleMeny, buttonArticleAddMeny);
menuAndFooterOpeners();

// filter meny och hämta produkt från databasen

// Hämta referenser till DOM-element
const buttonMenuFilters = document.querySelectorAll('.button-menu-filter');
const liSubmenuFilter = document.querySelectorAll('.li-submenu-filter');
const sectionMenuCat = document.querySelectorAll('.section-menu-cat');

// Array med DOM-element för varje undersektion
const subSections = [
  document.querySelectorAll('.sub-section-meny-bbqmeats'),
  document.querySelectorAll('.sub-section-meny-sandwishpizza'),
  document.querySelectorAll('.sub-section-meny-drinksandsides'),
  document.querySelectorAll('.sub-section-meny-desserts'),
];

// Array med DOM-element för varje undersektionsknapp
const buttonMenuFilterSub = [
  document.querySelectorAll('.button-menu-filter-sub1'),
  document.querySelectorAll('.button-menu-filter-sub2'),
  document.querySelectorAll('.button-menu-filter-sub3'),
  document.querySelectorAll('.button-menu-filter-sub4'),
];

// Funktion för att gömma alla sektioner
function hideAllSections() {
  sectionMenuCat.forEach((section) => section.classList.add('hide'));
}

// Funktion för att gömma alla undersektioner
function hideAllSubSections() {
  liSubmenuFilter.forEach((li, liIndex) => {
    li.classList.add('hide');
    buttonMenuFilterSub[liIndex].forEach((button) => button.classList.add('hide'));
    subSections.forEach((subSection) => subSection.forEach((sub) => sub.classList.add('hide')));
  });
}

// Funktion för att ta bort alla aktiva klasser
function removeActiveClasses() {
  buttonMenuFilters.forEach((button) => button.classList.remove('button-active'));
  buttonMenuFilterSub.forEach((buttonGroup) =>
    buttonGroup.forEach((button) => button.classList.remove('button-sub-active'))
  );
}

// Funktion för att visa vald sektion
function showSelectedSection(index) {
  liSubmenuFilter[index].classList.remove('hide');
  buttonMenuFilters[index].classList.add('button-active');

  buttonMenuFilterSub[index].forEach((button) => button.classList.remove('hide'));

  sectionMenuCat[index].classList.remove('hide');
  subSections[index][0].classList.remove('hide');
}

// Funktion för att hantera händelser på menyn
function menuFilters() {
  buttonMenuFilters.forEach((button, index) => {
    button.addEventListener('click', () => {
      hideAllSections();
      hideAllSubSections();
      removeActiveClasses();
      showSelectedSection(index);
    });
  });

  buttonMenuFilterSub.forEach((buttonGroup, buttonGroupIndex) => {
    buttonGroup.forEach((button, buttonIndex) => {
      button.addEventListener('click', () => {
        buttonGroup.forEach((b, i) => {
          if (i === buttonIndex) {
            b.classList.add('button-sub-active');
            subSections[buttonGroupIndex][i].classList.remove('hide');
          } else {
            b.classList.remove('button-sub-active');
            subSections[buttonGroupIndex][i].classList.add('hide');
          }
        });
      });
    });
  });
}

// Anropa funktionen för att sätta upp händelser på menyn
menuFilters();

// Anropa generateMenu för varje menykategori med motsvarande data från databasen
fillMenuOnThePage(db.bbqs, document.querySelector('#bbqs'));
fillMenuOnThePage(db.burgers, document.querySelector('#burgers'));
fillMenuOnThePage(db['fried-chicken'], document.querySelector('#fried-chicken'));
fillMenuOnThePage(db.porks, document.querySelector('#porks'));
fillMenuOnThePage(db.steaks, document.querySelector('#steaks'));
fillMenuOnThePage(db.sausages, document.querySelector('#sausages'));
fillMenuOnThePage(db.sandwiches, document.querySelector('#sandwiches'));
fillMenuOnThePage(db.pizzas, document.querySelector('#pizzas'));
fillMenuOnThePage(db.drinks, document.querySelector('#drinks'));
fillMenuOnThePage(db['ice-cream'], document.querySelector('#ice-cream'));
fillMenuOnThePage(db.chocolates, document.querySelector('#chocolates'));
fillMenuOnThePage(db.desserts, document.querySelector('#desserts'));
fillMenuOnThePage(db.breads, document.querySelector('#breads'));

// Funktion för att fylla en menykategori på sidan
function fillMenuOnThePage(menu, plats) {
  // Töm innehållet i platsen för menyn
  plats.innerHTML = '';

  // Loopa igenom menyn och skapa HTML för varje produkt
  for (let i = 0; i < menu.length; i++) {
    let product = `
    <!-- Article - container för produktkort/en maträtt -->
    <article class="article-meny article-dish">
      <!-- p - innehåller rättens ursprung och rate -->
      <p class="p-article-originandrate">
        <span class="span-p-origin">Ursprung: ${menu[i].country}</span>
        <span class="span-p-rate">Rate: ${menu[i].rate}</span>
      </p>

      <!-- Bild på maträtt -->
      <img src="${menu[i].img}" class="img-dish" alt="${menu[i].name}" />

      <!-- Span - container för "lägg till"-knappen och namnet på maträtten -->
      <span class="span-dish">
        <!-- Button - lägg till maträtt till beställning -->
        <button class="button-article-add button-article-add-meny">Lägg till +</button>

        <!-- h3 - namnet på maträtten -->
        <h3 class="h3-dish">${menu[i].name}</h3>
      </span>

      <!-- p - beskrivning av maträtt -->
      <p class="p-dish"> ${menu[i].dsc} </p>

      <!-- P - priset -->
      <p class="p-price">${menu[i].price} kr</p>
    </article>
    `;
    // Lägg till produkten i platsen för menyn
    plats.innerHTML += product;
  }

  // Lägg till händelselyssnare på knapparna för att lägga till produkten
  let buttons = plats.querySelectorAll('.button-article-add');
  buttons.forEach((button, index) => {
    button.addEventListener('click', addProduct.bind(button, index));
  });
}

// Funktion för att lägga till en produkt i varukorgen
function addProduct() {
  footer.classList.toggle('footer-added');
  setTimeout(() => {
    footer.classList.toggle('footer-added');
  }, 1000);

  let productName = this.parentNode.querySelector('.h3-dish').textContent;
  console.log(productName);
}
