function getComputerChoice()
{
let num = Math.floor(Math.random() * 3);
let choice;
switch(num){
case 0: choice = "rock"
break;
case 1: choice = "paper"
break;
case 2: choice = "scissors"
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

function playRound(humanChoice,computerChoice)
{
    humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "rock")
    {
         console.log("It's a tie!");
    }
    else if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
      else if (humanChoice == "rock" && computerChoice == "scissors")
    {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }
      else if  (humanChoice == "paper" && computerChoice == "paper")
    {
        console.log("It's a tie!");
    }
      else if  (humanChoice == "paper" && computerChoice == "rock")
    {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
      else if  (humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! Scissors beat Paper!");
        computerScore++;
    }
      else if  (humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You win! Scissors beat Paper!");
        humanScore++;
    }
      else if  (humanChoice == "scissors" && computerChoice == "scissors")
    {
        console.log("It's a tie!");
    }
      else if  (humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
