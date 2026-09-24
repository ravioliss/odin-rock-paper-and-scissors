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

const humanSelection = getHumanChoice();
console.log("User: " + humanSelection);
const computerSelection = getComputerChoice();
console.log("Computer: " + computerSelection);

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toUpperCase();
  
    if (humanChoice === "PIEDRA" && computerChoice === "TIJERA" || humanChoice === "PAPEL" && computerChoice === "PIEDRA" || humanChoice === "TIJERA" && computerChoice === "PAPEL") {
        humanScore++;
        return "You win";
    } else if (humanChoice === "PIEDRA" && computerChoice === "PAPEL" || humanChoice === "PAPEL" && computerChoice === "TIJERA" || humanChoice === "TIJERA" && computerChoice === "PIEDRA") {
        computerScore++;
        return "You lose";
    } else if (humanChoice === computerChoice) {
        return "Draw";
    } else {
        return "Error";
    }
}


console.log(playRound(humanSelection, computerSelection));
console.log(`User: ${humanScore} - Computer: ${computerScore}`);



