const pictures = [
  "images/pic1",
  "images/pic2",
  "images/pic3",
  "images/pic4",
  "images/pic5",
  "images/pic6",
];

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const imgDiv = document.querySelector(".main-container");

let counter = 0;

btnLeft.addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = pictures.length - 1;
  }
  imgDiv.style.background = `url(./${pictures[counter]}.jpg) center/contain fixed no-repeat`;
});

btnRight.addEventListener("click", function () {
  counter++;
  if (counter > pictures.length - 1) {
    counter = 0;
  }
  imgDiv.style.background = `url(./${pictures[counter]}.jpg) center/contain fixed no-repeat`;
});
