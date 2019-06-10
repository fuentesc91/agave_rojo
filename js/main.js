const $backgrounds = document.getElementsByClassName('background-image');

// Asign all the backgrounds to the backgrouds divs
Array.from($backgrounds).forEach((background, i) => {
  background.style.background = `url(src/img/background${i}.jpg) fixed center no-repeat`;
  background.style.backgroundSize = 'cover';
})
//function to position backgrounds where they should be in that moment
function setBackgroundPosition($backgrounds) {
  Array.from($backgrounds).forEach((background, i) => {
    background.style.backgroundPositionY = `${(background.offsetTop - window.scrollY)/2.5}px`;
  })
}

setBackgroundPosition($backgrounds);

window.onscroll = () => {
  setBackgroundPosition($backgrounds);
}
