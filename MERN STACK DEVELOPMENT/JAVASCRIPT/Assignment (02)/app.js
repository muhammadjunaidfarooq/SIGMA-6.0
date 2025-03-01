// // Qs
// const num = [7, 9, 0, -2];
// let N = 3;
// num.splice(N);
// console.log("First n Numbers: ", num);

// // Qs
// const numbers = [7, 9, 0, -2];
// let n = 3;
// let lastNumbers = numbers.slice(-n);
// console.log("Last n Numbers are: ", lastNumbers);

// // Qs 
// let str = prompt("Enter the string: ");
// if (str.length == 0) {
//     console.log("There is an empty string.", str);
// } else {
//     console.log(`The string has elements: (${str}) and length of elements is: ${str.length}`);
// }

// // Qs
// let string = prompt("Enter a string:");
// let index = prompt(`Your string is (${string}). Enter index to check weather a character is lower case or upper case:`)
// let char = string.at(index);
// if (char == char.toUpperCase()) {
//     console.log(`You enter the index ${index} of ${char}\nNow this is an upper case character.`);
// } else {
//     console.log(`You enter the index ${index} of ${char}\nNow this is an lower case character.`)
// }

// // Qs 
// let stripString = prompt("Enter the string:");
// console.log(`You entering the string: ${stripString}`)
// console.log(`String after removing strip leading and trailing spaces: ${stripString.trim()}`);

// Qs 
let students = ["Muhammad", "Junaid", "Farooq", "Muhammad", "Jamshaid", "Ali"];
let name = prompt("Enter the name you want to search in the array:")
if (students.includes(name)) {
    console.log(`The user ${name} is exist.`)
} else {
    console.log(`The user ${name} is not exist.`)
}