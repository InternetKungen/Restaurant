// let prevScrollPos = window.scrollY || window.pageYOffset;

// window.onscroll = function () {
//   let currentScrollPos = window.scrollY || window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     // Skrollar uppåt
//     document.querySelector("header").classList.remove("hide-header");
//   } else {
//     // Skrollar nedåt
//     document.querySelector("header").classList.add("hide-header");
    
//     // Kontrollera om .menu-open finns innan du försöker ta bort klassen
//     let menuOpenElement = document.querySelector(".menu-open");
//     if (menuOpenElement) {
//       menuOpenElement.classList.remove("menu-open");
//     }
//   }

//   prevScrollPos = currentScrollPos;
// };
// // Stänger dropdown meny om man scrollar
// document.querySelector("main").addEventListener("scroll", () => {
//   // Anta att dropdown-menyn har en klass med namnet "menu-open"
//   document.querySelector(".menu-open").classList.remove("menu-open");
// });

let prevScrollPos = window.scrollY || window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.scrollY || window.pageYOffset;

  // Kontrollera om footer har klassen "footer-open"
  let isFooterOpen = document.querySelector(".footer-open");

  if (!isFooterOpen) {
    // Bara om footer inte har klassen "footer-open"
    if (prevScrollPos > currentScrollPos) {
      // Skrollar uppåt
      document.querySelector("header").classList.remove("hide-header");
    } else {
      // Skrollar nedåt
      document.querySelector("header").classList.add("hide-header");
      
      // Kontrollera om .menu-open finns innan du försöker ta bort klassen
      let menuOpenElement = document.querySelector(".menu-open");
      if (menuOpenElement) {
        menuOpenElement.classList.remove("menu-open");
      }
    }
  }

  prevScrollPos = currentScrollPos;
};