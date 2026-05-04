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




function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    for(i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    playRound(humanSelection, computerSelection);
    function playRound(humanSelection,computerSelection)
      {
       
      if (humanSelection.toLowerCase() === "rock" && computerSelection === "rock")
        {
         console.log("It's a tie!");
        }
      else if (humanSelection.toLowerCase() === "rock" && computerSelection === "paper")
        {
        console.log("You lose! Paper beats rock!");
        computerScore++;
         }
      else if (humanSelection.toLowerCase() === "rock" && computerSelection === "scissors")
        {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
        }
      else if  (humanSelection.toLowerCase() === "paper" && computerSelection === "paper")
        {
        console.log("It's a tie!");
        }
      else if  (humanSelection.toLowerCase() === "paper" && computerSelection === "rock")
        {
        console.log("You win! Paper beats rock!");
        humanScore++;
        }
      else if  (humanSelection.toLowerCase() === "paper" && computerSelection === "scissors")
        {
        console.log("You lose! Scissors beat Paper!");
        computerScore++;
        }
      else if  (humanSelection.toLowerCase() === "scissors" && computerSelection === "paper")
        {
        console.log("You win! Scissors beat Paper!");
        humanScore++;
        }   
      else if  (humanSelection.toLowerCase() === "scissors" && computerSelection === "scissors")
        {
        console.log("It's a tie!");
        }
      else if  (humanSelection.toLowerCase() === "scissors" && computerSelection === "rock")
        {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        } 
    roundsPlayed++;
      }
    
    }

  console.log("Computer score: " +  computerScore + " Human score: " + humanScore);
  if(computerScore>humanScore)
    console.log(" Computer wins!");
  else if(computerScore<humanScore)
    console.log(" Human wins!");
  else if(computerScore===humanScore)
    console.log(" It's a tie!");
  return computerScore,humanScore, roundsPlayed;
}


playGame();


