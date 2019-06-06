const $headerImg = document.getElementById('header-img');
const $navbar = document.getElementById('navbar');

window.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 10 ){
    $headerImg.classList.add('scrolled');
    // $navbar.classList.add('navbar-dark', 'bg-dark');
  }else{
    $headerImg.classList.remove('scrolled');
  }
}
