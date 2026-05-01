function getComputerChoice()
{
let num = Math.floor(Math.random() * 3);
let choice;
switch(num){
case 0: choice = "Rock"
break;
case 1: choice = "Paper"
break;
case 2: choice = "Scissors"
break;
}
return choice;
}

function getHumanChoice()
{
let humanChoice = prompt("Choose: ");
return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
console.log(getComputerChoice());
console.log(getHumanChoice());

function playRound(humanChoice,computerChoice)
{
    
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
