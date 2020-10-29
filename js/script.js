//burger
$(document).ready( function () {
  let navBar = document.querySelector('.nav-bar'),
  nav = document.querySelector('.nav');

  const toggler = function () {
    navBar.classList.toggle('nav-bar__active');
    nav.classList.toggle('nav__active');
  }
  navBar.addEventListener('click', toggler);
  nav.addEventListener('click', toggler);

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }   
    ]
  });
}  
)
