let navBar = document.querySelector('.nav-bar'),
nav = document.querySelector('.nav');

const toggler = function () {
  navBar.classList.toggle('nav-bar__active');
  nav.classList.toggle('nav__active');
}

navBar.addEventListener('click', toggler);
nav.addEventListener('click', toggler);


