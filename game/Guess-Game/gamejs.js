"use strict";
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=1;
document.querySelector('.guess').value=3;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;
console.log(number);
document.querySelector(".check").addEventListener("click", function () {
  const x = Number(document.querySelector(".guess").value);
  console.log(x, typeof x);

  if (!x) {
    document.querySelector(".message").textContent = "No Number";
  } else if (score == 0) {
    document.querySelector(".message").textContent = "You lose";
  } else if (x === number) {
    if (score > HighScore) {
      document.querySelector(".number").textContent = number;
      HighScore = score;
    }
    document.querySelector(".highscore").textContent = HighScore;
    document.querySelector(".guessmyNumber").textContent = "Congrats";
    document.querySelector(".message").textContent = " ";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    HighScore = score;
  } else if (x < number) {
    document.querySelector(".message").textContent = "Too Low";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (x > number) {
    document.querySelector(".message").textContent = "Too high";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  if (score > HighScore) {
    document.querySelector(".highscore").textContent = HighScore;
  }
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guessmyNumber").textContent = "Guess My Number!";
  document.querySelector(".message").textContent = "Start guessing...";
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector(".number").textContent = "?";
});
