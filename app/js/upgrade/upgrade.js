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

new Swiper('.slider-upgrade', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.modern-button-next',
    prevEl: '.modern-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 15,
})