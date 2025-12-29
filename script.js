import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
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

function playRound(computerChoice, playerChoice) {
  computerChoice = computerChoice.toLowerCase();
  playerChoice = playerChoice.toLowerCase();

  switch (true) {
    case playerChoice === computerChoice:
      console.log("it's a tie!");
      return 0;
    case playerChoice === "rock" && computerChoice === "scissors":
      console.log("Player wins");
      return 1;
    case playerChoice === "paper" && computerChoice === "rock":
      console.log("Player wins");
      return 1;
    case playerChoice === "scissors" && computerChoice === "paper":
      console.log("Player wins");
      return 1;

    default:
      console.log("Computer wins!");
      return 2;
  }
}

let computerHearts = 5;
let playerHearts = 5;

while (computerHearts != 0 && playerHearts != 0) {
  let b = getComputerChoice();
  const rl = readline.createInterface({ input, output });
  const a = await rl.question("Enter your answer: ");
  rl.close();

  let result = playRound(b, a);
  if (result === 1) {
    computerHearts--;
  }
  if (result === 2) {
    playerHearts--;
  }

  console.log(`Player hearts ${playerHearts}`);
  console.log(`Computer hearts ${computerHearts}`);
}
