const init = function () {
  let items = document.querySelectorAll(".carousel-cell");
  for (let i = 0; i < items.length; i++) {
    items[i].style.background = randomColor({ luminosity: "light" });
  }
  cssScrollSnapPolyfill();
};
init();
