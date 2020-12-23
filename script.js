"use strict";
const dice = document.querySelector(".dice");
dice.style.display = "none";
//button
const buttonRollDice = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const buttonNewGame = document.querySelector(".btn--new");
//current score
const player1CurrentScore = document.getElementById("current--0");
const player2CurrentScore = document.getElementById("current--1");

// section of player1 vs section of player2
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
//total score
let player1Score = document.getElementById("score--0");
let player2Score = document.getElementById("score--1");

let score1 = 0;
let score2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;
function togglePlayerActive() {
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}
function disabledButton() {
  buttonRollDice.disabled = true;
  buttonHold.disabled = true;
}
buttonRollDice.addEventListener("click", function () {
  const rollDiceNumber = Math.floor(Math.random() * 6) + 1;
  dice.style.display = "block";
  dice.src = `dice-${rollDiceNumber}.png`;
  if (player1.classList.contains("player--active")) {
    if (rollDiceNumber === 1) {
      currentScore1 = 0;
      player1CurrentScore.innerText = 0;
      togglePlayerActive();
    } else {
      currentScore1 += rollDiceNumber;
      player1CurrentScore.innerText = currentScore1;
    }
  } else if (player2.classList.contains("player--active")) {
    if (rollDiceNumber === 1) {
      currentScore2 = 0;
      player2CurrentScore.innerText = 0;
      togglePlayerActive();
    } else {
      currentScore2 += rollDiceNumber;
      player2CurrentScore.innerText = currentScore2;
    }
  }
});
buttonHold.addEventListener("click", function () {
  if (player1.classList.contains("player--active")) {
    score1 += currentScore1;
    player1Score.innerText = score1;
    currentScore1 = 0;
    player1CurrentScore.innerText = currentScore1;
    if (score1 >= 100) {
      player1.classList.add("player--winner");
      disabledButton();
    } else {
      togglePlayerActive();
    }
  } else if (player2.classList.contains("player--active")) {
    score2 += currentScore2;
    player2Score.innerText = score2;
    currentScore2 = 0;
    player2CurrentScore.innerText = currentScore2;
    if (score2 >= 100) {
      player2.classList.add("player--winner");
      disabledButton();
    } else {
      togglePlayerActive();
    }
  }
});
buttonNewGame.addEventListener("click", function () {
  window.location.reload();
});
