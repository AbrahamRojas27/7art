const menu = document.getElementById('header');

window.addEventListener('scroll', () =>{
    menu.classList.toggle('active-header', window.scrollY >0)
})

// slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});