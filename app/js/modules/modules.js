// Бургер меню
const menuBtn = document.querySelector('.nav-menu');
const burger = document.querySelector('.burger')
menuBtn.addEventListener('click', () => {
  burger.classList.add('active')
})
const burgerClose = document.querySelector('.burger__close')
burgerClose.addEventListener('click', () => {
  burger.classList.remove('active')
})

const burgerName = document.querySelectorAll('.burger__items')
for (item of burgerName) {
  item.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    }
    else {
      item.classList.remove('active');
      this.classList.add('active');
    }
  })
}

new Swiper('.slider-modules', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.modules-button-next',
    prevEl: '.modules-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 20,
  pagination: {
    el: '.factories-pagination',
    type: 'progressbar'
  },
})