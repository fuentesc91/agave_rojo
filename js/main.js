const $backgrounds = document.getElementsByClassName('background-image');

// Asign all the backgrounds to the backgrouds divs
Array.from($backgrounds).forEach((background, i) => {
  background.style.background = `url(src/img/background${i}.jpg) fixed center no-repeat`;
  background.style.backgroundSize = 'cover';
})
//function to position backgrounds where they should be in that moment
function setBackgroundPosition($backgrounds) {
    const height = screen.height/2;
    Array.from($backgrounds).forEach((background, i) => {
      let backgroundPosition = (background.offsetTop - window.scrollY)/2
      if(backgroundPosition > -height  && backgroundPosition < height){
      background.style.backgroundPositionY = `${backgroundPosition}px`;
    }
  })
}
if(screen.width > 900){
  setBackgroundPosition($backgrounds);

  window.onscroll = () => {
    setBackgroundPosition($backgrounds);
  }
}
