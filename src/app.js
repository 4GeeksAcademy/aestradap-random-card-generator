/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const suite = [
    '<i style="color:red;" class="bi bi-heart-fill fa-4x"></i>',
    '<i style="color:red;" class="bi bi-suit-diamond-fill fa-4x"></i>',
    '<i style="color:black;" class="bi bi-suit-spade-fill fa-4x"></i>',
    '<i style="color:black;" class="bi bi-suit-club-fill fa-4x"></i>'
  ];

  const randomInt = max => Math.floor(Math.random() * max);

  let cardValueElement = document.getElementById("cardValue");
  let cardSuitOneElement = document.getElementById("suitOne");
  let cardSuitTwoElement = document.getElementById("suitTwo");

  let randomCardSuite = randomInt(4);
  let randomCardValue = randomInt(13);

  cardValueElement.innerHTML = value[randomCardValue];
  cardSuitOneElement.innerHTML = suite[randomCardSuite];
  cardSuitTwoElement.innerHTML = suite[randomCardSuite];
};
