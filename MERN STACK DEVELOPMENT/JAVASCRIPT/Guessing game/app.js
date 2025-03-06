let maxNumber = prompt("Enter the number for range: ");
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let userGuess = prompt(`Guess the number between 1 and ${maxNumber}`);

while(true) {
    if (userGuess >= 1 && userGuess <= maxNumber) {
        if (userGuess == randomNumber) {
            console.log("You Won");
            break;
        }  else if (userGuess > randomNumber){
            userGuess = prompt("You guess is too big, Take a smaller number:");
        } else {
             userGuess = prompt("You guess is too small, Take a bigger number:");
        }
    } else if (userGuess == "quit"){
        console.log("You quit the game! And random Number is", randomNumber);
        break;
    } else {
        userGuess = prompt(`Please valid number ranges between 1 and ${maxNumber} :`);
    }
}