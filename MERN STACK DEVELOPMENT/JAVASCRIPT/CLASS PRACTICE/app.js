// console.log("Hello JavaScript")

// let pencil = 10;
// let pointer = 30;
// console.log(`The total price of things is : ${pencil + pointer} rupees.
//     This is only the Pencil and pointer.`)

// console.log('😀' < '🚀')

// let age = 22;
// let userName = "Muhammad Junaid Farooq"
// if (age >= 18 && userName == "Muhammad Junaid Farooq"){
//     console.log(`${userName} you can vote.
// And you also drive a car.`)
// }
// if (age < 18) {
//     console.log(`${userName} you can't vote.
// And you also not able to drive a car.`)
// }

// let color = "yLLow".toLowerCase();

// if (color === "red") {
//     console.log("STOP");
// } else if (color === "yellow") {
//     console.log("SLOW DOWN");
// } else if (color === "green") {
//     console.log("GO");
// } else {
//     console.log("Trafic lights are broken.")
// }

let marks = 100;

if (marks >= 33) {
    console.log("Pass");
    if (marks >= 90 && marks <= 100) {
        console.log("Grade : O");
    } else if (marks >= 80 && marks < 90){
        console.log("Grade : A");
    } else if (marks >= 70 && marks < 80){
        console.log("Grade : B");
    } else if (marks >= 60 && marks < 70){
        console.log("Grade : C");
    } else {
        console.log(`Your are Passed with minimum numbers.
Your Grade is D.`)
    }
} else {
    console.log("Better luck for next time.")
}

if (marks > 33 && marks > 100 || !false){
    console.log("Pass");
}