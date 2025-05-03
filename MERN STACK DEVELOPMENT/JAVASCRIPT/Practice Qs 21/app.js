// An arrow funtion that returns the square of a number.

const square = n => (n*n);

console.log(square(9));

// Printing 'Hello World' 5 time at interval of 2s.

let greet = setInterval (() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(greet);
    console.log("Clear Interval ran")
}, 10000);

