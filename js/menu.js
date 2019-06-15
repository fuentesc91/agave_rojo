// Grab an element
let header = document.getElementById('header');
// Construct an instance of Headroom, passing the element
let headroom = new Headroom(header);
//initialise
headroom.init();

let icon = document.getElementById('icon');
let enlaces = document.getElementById('enlaces');

let enlace = document.getElementsByClassName('enlace');

function toggleMenu() {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  enlaces.classList.toggle('show');
  enlaces.classList.toggle('hidden');
}

icon.onclick = () => {
  toggleMenu();
}

Array.from(enlace).forEach((link) => {
  console.log(link);
  link.onclick = () => {
    toggleMenu();
    console.log('hice click');
  }
})
