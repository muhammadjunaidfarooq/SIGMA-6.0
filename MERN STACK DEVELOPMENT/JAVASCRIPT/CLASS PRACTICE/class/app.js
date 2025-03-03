// // Loops With array
// let fruits = ["mango", "banana", "orange", "apple", "lechee", "grapes"];
// let count = 1;
// fruits.push("pineapple")
// fruits.unshift("Gava")
// for (let i=fruits.length-2; i>=0; i=i-2){
//     console.log(i,fruits[i]);
// }

// // loops with nested array
// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"], ["ironman", "spiderman", "thor"]];
// for (let i=0; i<heroes.length; i++) {
//     console.log("List", heroes[i]);
//     for (let j=0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// let students = [["Ali", 95], ["Ahmad", 100], ["Saif", 97]];
// for (let i = 0; i < students.length; i++) {
//     console.log(i, students[i]);
//     for (let j = 0; j < students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }

// // for of loops
// let fruits = ["mango", "banana", "orange", "apple", "lechee", "grapes"];
// for (fruit of fruits) {
//     console.log(fruit);
// }

// let str = "Muhammad Junaid Farooq";
// for (char of str) {
//     console.log(char);
// }

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"], ["ironman", "spiderman", "thor"]];
for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}