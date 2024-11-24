let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersScore = document.querySelector("#user-score");
const compsScore = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let rdmIdx = Math.floor(Math.random() * 3);
  return options[rdmIdx];
};

const drawGame = () => {
  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    usersScore.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compsScore.innerText = compScore;
    msg.innerText = `You lose. Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = generateComputerChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
