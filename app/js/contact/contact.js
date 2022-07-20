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

var moscow_map, myPlacemark;

ymaps.ready(function () {
  moscow_map = new ymaps.Map("moscow", {
    center: [55.741019, 37.840480],
    zoom: 15
  });

  myPlacemark = new ymaps.Placemark([55.741019, 37.840480], {}, {
    preset: 'twirl#redIcon'
  });

  moscow_map.geoObjects.add(myPlacemark);
  moscow_map.controls.add(new ymaps.control.ZoomControl());
  moscow_map.behaviors.disable('scrollZoom');
});