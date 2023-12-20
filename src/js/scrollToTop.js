// function scrollToTop(elementId) {
//   var element = document.getElementById(elementId);
//   console.log(element);

//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// }

function scrollToTop(elementId) {
  const element = document.getElementById(elementId);
  console.log(element);

  if (element) {
    // Lägg till eller dra bort 90px beroende på behov
    const offset = 90;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
}