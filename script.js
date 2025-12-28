import readline from "readline";

function getComputerChoice() {
  let a = Math.random();
  a = a * 3 + 1;
  a = Math.floor(a);
  switch (a) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
let a = readline();
let b = getComputerChoice();

console.log(b);
