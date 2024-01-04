let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

// we create third this function
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
};

// we create four this function
const drawGame = () => {
  msg.innerHTML = "Game was Draw. Play again!";
  msg.style.backgroundColor = "#081b31";
};

// we create fifth this function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lose. ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red";
  }
};

// we create second this function
const playGame = (userChoice) => {

  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// We create first this function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
