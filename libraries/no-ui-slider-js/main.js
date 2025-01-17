// const slider = document.querySelector("#slider");

// noUiSlider.create(slider, {
//   start: 20,
//   connect: "lower",
//   range: {
//     min: 0,
//     max: 100,
//   },
//   tooltips: [wNumb({ decimals: 1, prefix: "$" })],
// });

const handleInput = (value) => {
  console.log("value", value);
};

const slider2 = document.querySelector("#slider-2");

const rangeSliderElement = rangeSlider(slider2, {
  onInput: handleInput,
  min: 0,
  value: [0, 100],
  rangeSlideDisabled: true,
});
