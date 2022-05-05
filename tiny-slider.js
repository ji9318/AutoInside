var slider1 = tns({
  container: ".event-slider",
  items: 1,
  speed: 400,
  slideBy: "page",
  mouseDrag: true,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  mode: "gallery",
  animateIn: "fadeInDown",
});

var slider2 = tns({
  container: ".play-slider",
  items: 1,
  mouseDrag: true,
  loop: false,
  slideBy: "page",
  autoplay: false,
  controls: false,
  autoplayButtonOutput: false,
  edgePadding: 20,
  startIndex: 1,
  center: true,
  responsive: {
    750: {
      edgePadding: 80,
    },
    1200: {
      edgePadding: 200,
    },
  },
});

var slider3 = tns({
  container: ".issue-slider",
  items: 2.3,
  mouseDrag: true,
  loop: false,
  slideBy: "page",
  autoplay: false,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    750: {
      fixedWidth: 313,
    },
  },
});
