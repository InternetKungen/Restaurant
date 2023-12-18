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
  }, 10000); // Change image every 5 seconds (adjust as needed)
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