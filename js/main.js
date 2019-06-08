const $mainBackground = document.getElementById('mainBackground');

window.onscroll = () => {
  $mainBackground.style.backgroundPosition = `50% -${window.scrollY/4}px`
}
