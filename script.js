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

 function getHumanChoice() {
    const humanChoice = prompt("¡¿Piedra, Papel o Tijera?!").toUpperCase();
    if (humanChoice === null) {
        return "Eliga una opción válida: Piedra, Papel o Tijera";
    }
   else if (humanChoice !== "PIEDRA" && humanChoice !== "PAPEL" && humanChoice !== "TIJERA") {
        return "Ingrese una opción válida: Piedra, Papel o Tijera";
    } 
    return humanChoice;
 }


let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toUpperCase();
  
    if (humanChoice === "PIEDRA" && computerChoice === "TIJERA" || humanChoice === "PAPEL" && computerChoice === "PIEDRA" || humanChoice === "TIJERA" && computerChoice === "PAPEL") {
        humanScore++;
        return "Ganaste";
    } else if (humanChoice === "PIEDRA" && computerChoice === "PAPEL" || humanChoice === "PAPEL" && computerChoice === "TIJERA" || humanChoice === "TIJERA" && computerChoice === "PIEDRA") {
        computerScore++;
        return "Perdiste";
    } else if (humanChoice === computerChoice) {
        return "Empate";
    } else {
        return "Error";
    }
}


function playGame() {
    for (let ronda = 0; ronda < 5; ronda++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Ronda ${ronda + 1}`);
        console.log("Usuario: " + humanSelection);
        console.log("Computadora: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
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
 