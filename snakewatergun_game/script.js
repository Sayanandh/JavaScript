let round =  prompt("Enter number of round")
round = parseInt(round)
// document.writeln(typeof(round))
let scorep1 = 0
let scorep2 = 0
const random =()=>{
    randomWord = Math.floor(Math.random() * 3);
    if (randomWord === 0) {
        return 0; 
    } else if (randomWord === 1) {
        return 1; 
    } else {
        return 2; 
    }
}
alert("0=snake 1=water 2=gun")
for ( let i = 0 ; i < round;i++){
    let word = random()
    alert("round num " + i )
    let player1 = parseInt(prompt("Player  input "))
if (player1 === word) {
        alert("It's a draw!");
    } else if (
        (player1 === 0 && word === 1) ||
        (player1 === 1 && word === 2) ||
        (player1 === 2 && word === 0)
    ) {
        alert("You win this round!");
        scorep1++;
    } else {
        alert("Computer wins this round!");
        scorep2++;
    }
}

alert("Player 1 score " + scorep1 + " computer score " + scorep2)
if (scorep1 > scorep2) {
    alert("Player 1 wins the game")
}else if (scorep1 < scorep2) {
    alert("computer wins the game")
}