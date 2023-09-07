const slider = tns({
  container: '.slider',
  slideBy: 1,
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
  swipeAngle: false,
  autoplay: true,
  speed: 400,
  responsive: {
    768: {
      items: 1,
    },

    1000: {
      items: 2,
    },

    1240: {
      items: 3,
    },
  },
});
