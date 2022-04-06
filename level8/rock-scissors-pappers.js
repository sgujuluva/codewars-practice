/*Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!  */

const rps = (p1, p2) => {
    if(p1 === p2){
        return "Draw";
    }else if(p1 === "rock" && p2 === "scissors"){
        return "Player1 Won";
    }else if(p1 === "scissors" && p2 === "paper"){
         return  "Player1 Won";
    }else if(p1 === "paper" && p2 === "rock"){
        return  "Player1 Won";
    }else{
        return "player2 Won";
    }
}

console.log(rps("paper","scissors")); // p2 won
console.log(rps("rock","scissors")); // p1
console.log(rps("scissors","scissors")); // draw
console.log(rps("rock","paper")); // p2
console.log(rps("scissors","rock")); // p2