var swiper = new Swiper(".swiper", {
  speed: 3500,
  effect: "coverflow",
  parallax: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 30,
    depth: 100,
    modifier: 3,
    scale: 1,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 4000, // время между автоматическими прокрутками (в миллисекундах)
    disableOnInteraction: false // отключить автопрокрутку при взаимодействии с слайдером
  },
  // mousewheel: {
  //   thresholdDelta: 70
  // },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  zoom: {
    maxRatio: 1.4,
    minRation: 1,
    toggle: true
  }
});