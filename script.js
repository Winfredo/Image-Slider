const pictures = [
  "images/pic1",
  "images/pic2",
  "images/pic3",
  "images/pic4",
  "images/pic5",
  "images/pic6",
];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const imgDiv = document.getElementById("main-container");

let counter = 0;

btnLeft.addEventListener("click", function () {
  console.log("left");
  counter--;
  if (counter < 0) {
    counter = pictures.length - 1;
  }
  imgDiv.style.background = `url(./${pictures[counter]}.jpg) center/cover fixed no-repeat`;
});

btnRight.addEventListener("click", function () {
  console.log("Right");
  counter++;
  if (counter > pictures.length - 1) {
    counter = 0;
  }
  imgDiv.style.background = `url(./${pictures[counter]}.jpg) center/cover fixed no-repeat`;
});
