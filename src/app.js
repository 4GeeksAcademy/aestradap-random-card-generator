/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suite = [
  '<i style="color:red;" class="bi bi-heart-fill fa-4x"></i>',
  '<i style="color:red;" class="bi bi-suit-diamond-fill fa-4x"></i>',
  '<i style="color:black;" class="bi bi-suit-spade-fill fa-4x"></i>',
  '<i style="color:black;" class="bi bi-suit-club-fill fa-4x"></i>'
];

let randomInt = max => Math.floor(Math.random() * max);

const generateCard = cardSuite => {
  let cardValueElement = document.getElementById("cardValue");
  let cardSuitOneElement = document.getElementById("suitOne");
  let cardSuitTwoElement = document.getElementById("suitTwo");

  let randomCardValue = randomInt(13);
  let randomCardSuite = randomInt(4);

  cardValueElement.innerHTML = value[randomCardValue];
  cardSuitOneElement.innerHTML =
    suite[cardSuite != -1 ? cardSuite : randomCardSuite];
  cardSuitTwoElement.innerHTML =
    suite[cardSuite != -1 ? cardSuite : randomCardSuite];
};

window.onload = function() {
  //write your code here

  generateCard(-1);

  document.getElementById("diamontBtn");
  diamontBtn.addEventListener("click", () => generateCard(1));

  document.getElementById("heartBtn");
  heartBtn.addEventListener("click", () => generateCard(0));

  document.getElementById("spadeBtn");
  spadeBtn.addEventListener("click", () => generateCard(2));

  document.getElementById("clubBtn");
  clubBtn.addEventListener("click", () => generateCard(3));

  const resizeBtn = document.getElementById("resizeBtn");
  resizeBtn.addEventListener("click", resize);

  function resize() {
    alert(
      `Remenber the values 'Width' and 'Heigth' are fixed in '%' for better results.
      EXAMPLE: WIDTH = 200 AND HEIGHT = 300`
    );
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");
    const cardFrame = document.getElementById("cardFrame");
    cardFrame.style.width = `${widthInput.value}px`;
  }

  let refreshing;
  const autoBtn = document.getElementById("autoBtn");
  autoBtn.addEventListener("click", automaticRefresh);

  function automaticRefresh() {
    if (!refreshing) {
      autoBtn.style.background = "rgb(33,37,41)";
      autoBtn.style.color = "white";
      refreshing = setInterval(function() {
        generateCard(-1);
      }, 1000);
    } else {
      autoBtn.style.background = "none";
      autoBtn.style.color = "black";
      clearInterval(refreshing);
      refreshing = null;
    }
  }
};
