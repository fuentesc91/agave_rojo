const $background = document.getElementById('background-image');
let scrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
  scrollPosition = window.scrollY;
  $background.style.top = `-${scrollPosition / 3}px`
  if (!ticking) {
    window.requestAnimationFrame(function() {
      ticking = false;
    });
  }
  ticking = true;
})
