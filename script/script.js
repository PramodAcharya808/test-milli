// .header-scrolled

let nav = document.querySelector('.navbar');

window.onscroll = () => {
  if (window.scrollY > 50) {
    nav.classList.add('header-scrolled');
  } else {
    nav.classList.remove('header-scrolled');
  }
}
