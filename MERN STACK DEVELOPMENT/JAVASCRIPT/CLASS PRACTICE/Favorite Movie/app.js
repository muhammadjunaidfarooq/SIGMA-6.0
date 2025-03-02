let favoriteMovie = ["avengers", "game of throns", "3 idiots", "huntere"];
let count = 1;

while (true) {
    let userGess = prompt("Guess movie name, if exit enter q:").toLowerCase();
    if (favoriteMovie.includes(userGess)){
        alert(`You win at ${count} attempt.
And Priority of this is: ${favoriteMovie.indexOf(userGess) + 1}`);
        break;
    } else if (userGess === "q") {
        console.log("You Quite.")
        break;
    } else {
        console.log("You wrong Please try again.")
    }
    count++;
}
