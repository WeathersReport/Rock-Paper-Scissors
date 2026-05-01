function getComputerChoice(){
let num = Math.floor(Math.random() * 3);
let choice;
switch(num){
case 0: choice = "Rock"
break;
case 1: choice = "Paper"
break;
case 2: choice = "Scissors"
break;
default:
console.log("Wrong input!")
}
console.log(num);
console.log(choice);
}