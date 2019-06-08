const $mainBackground = document.getElementById('mainBackground');

window.onscroll = () => {
  console.log(window.scrollY);
  $mainBackground.style.backgroundPosition = `50% -${window.scrollY/3}px`
}
