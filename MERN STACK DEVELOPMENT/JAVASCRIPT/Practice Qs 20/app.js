let greet = "hello"; // Globle Scope

function changeGreet () {
    let greet = "Asslam O alikum";    // Function Scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);   // Lexical Scope
    }
    // innerGreet();
}

console.log(greet);
changeGreet();