//слайдер

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//анимация

wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});

wow.init();

//карта

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "myMap",
    {
      center: [59.938955, 30.315644],
      zoom: 13,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  myMap.behaviors.disable("scrollZoom");
  myMap.behaviors.disable("drag");

  var myPlacemark = new ymaps.Placemark(
    [59.940625, 30.30907],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map.png",
      iconImageSize: [20, 56],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
