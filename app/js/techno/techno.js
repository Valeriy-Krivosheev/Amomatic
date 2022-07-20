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

// Плавный скрол по сексиям
const menuLinks = document.querySelectorAll('.header-techno__btn')
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    const href = this.getAttribute('href');
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    })
  })
});