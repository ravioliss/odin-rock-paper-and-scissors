// asignate numbers to words so we can randomly select a choice for the computer
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "PIEDRA";
  } else if (randomNumber == 1) {
    return "PAPEL";
  } else if (randomNumber == 2) {
    return "TIJERA";
  } else {
    return "ERROR";
  }
}

// we ask the user to input their choice  and we validate it to make sure it's a valid option
function getHumanChoice() {
  const humanChoice = prompt("¡¿Piedra, Papel o Tijera?!").toUpperCase();
  if (humanChoice === null) {
    return "Eliga una opción válida: Piedra, Papel o Tijera";
  } else if (
    humanChoice !== "PIEDRA" &&
    humanChoice !== "PAPEL" &&
    humanChoice !== "TIJERA"
  ) {
    return "Ingrese una opción válida: Piedra, Papel o Tijera";
  }
  return humanChoice;
}

// we keep track of the score for both the human and the computer with this global variables
let humanScore = 0;
let computerScore = 0;

// uppercase the input from the user and compare it with the computer to determine the winner and add to the score
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();

  if (
    (humanChoice === "PIEDRA" && computerChoice === "TIJERA") ||
    (humanChoice === "PAPEL" && computerChoice === "PIEDRA") ||
    (humanChoice === "TIJERA" && computerChoice === "PAPEL")
  ) {
    humanScore++;
    return "Ganaste";
  } else if (
    (humanChoice === "PIEDRA" && computerChoice === "PAPEL") ||
    (humanChoice === "PAPEL" && computerChoice === "TIJERA") ||
    (humanChoice === "TIJERA" && computerChoice === "PIEDRA")
  ) {
    computerScore++;
    return "Perdiste";
  } else if (humanChoice === computerChoice) {
    return "Empate";
  } else {
    return "Error";
  }
}

// loop the playRound function 5 times and console log the information. Compare final scores

function playGame() {
  for (let ronda = 0; ronda < 5; ronda++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Ronda ${ronda + 1}`); // we add 1 to the round number so it starts at 1 instead of 0
    console.log("Usuario: " + humanSelection);
    console.log("Computadora: " + computerSelection);
    console.log(playRound(humanSelection, computerSelection)); // we pass new variables as arguments of the playRound function so we keep the logic of the game with the response of the user and the computer
  }

  console.log(`Usuario: ${humanScore} - Computadora: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("El usuario ganó el juego");
  } else if (computerScore > humanScore) {
    console.log("La computadora ganó el juego");
  } else {
    console.log("El juego terminó en empate");
  }
}

playGame();
