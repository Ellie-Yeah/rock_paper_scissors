//Challenge #2: Rock Paper Scissors

//Create a simple game of Rock, Paper or Scissors, using Math.random().
//Create a function named playRound(), qthat will receive one String as input, comparing it to the computer's value and print the result in the terminal.
//Example: If the user chooses "rock" and the computer chooses "scissors", the user wins.
//Then, call the function playRound() 3 times (manually or through a Loop) and see who wins.
//-------------------------------------------

//i'll give values to the variables, so I can use them in Math.random
let rock = 1;
let paper = 2;
let scissors = 3;

//this is the computer's play: "Rock" || "Paper" || "Scissors"
function getComputerMove(rock, paper, scissors) {
    const pcPlay = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // this should give a random number between 1 and 3
    switch (pcPlay) {
        case (1):
            return ("rock");
            break;
        case (2):
            return ("paper");
            break;
        case (3):
            return ("scissors");
            break;
        default:
            return ("Input Inválido");
        //and here i should get that number converted to one of the 3 strings used in the game
    }
}
let computerInput = getComputerMove();

//until here it's randomizing the computer plays and converting to the desired words


//player needs to give an Input, through a prompt

const playerInput = prompt("«rock», «paper», «scissors», 1, 2, 3...");
//note: the error "prompt is not defined" is because we didnt open the game in a browser so we didn't give any input (that is what will define the prompt)

//this console.logs are to see the inputs in the terminal:
console.log(`Your plays: ${playerInput}`);
console.log(`Computer's play: ${computerInput}`);


//then, both moves/inputs have to be compared, to see who wins:
function playRound(playerInput, computerInput) {
    if (playerInput === computerInput) {
        alert(`It's a Tie. \n Your play: ${playerInput} VS Computer's play: ${computerInput} \n Try Again`);
        window.location.reload(true);
    } else if (
        playerInput === "rock" && computerInput === "scissors" ||
        playerInput === "scissors" && computerInput === "paper" ||
        playerInput === "paper" && computerInput === "rock") {
        alert(`You Win! \n Your play: ${playerInput} VS Computer's play: ${computerInput}`);
        //if the player puts "rock" and the computer puts "scissors" OR if player etc (all this situations mean the victory of the player) [very smooth way of doing this, credits to Hania]
    } else {
        alert(`You Lose. \n Your play: ${playerInput} VS Computer's play: ${computerInput} \n Try Again`);
        window.location.reload(true);
    }
};
//after a loss or tie the page refreshes and we can play again

console.log(
    playRound(playerInput, computerInput)
);
//this "display" of the console.log is better to read, than everything in one line
//like this, we run the function that allows the game to run

//«Then, call the function playRound() 3 times (manually or through a Loop) and see who wins.»
//is this the best-of-3? i don't understand
//function playRound() i had to see the solutions to know where to place this function;
//until the if...else, the code was working properly, after a loss refresh the page and play again
