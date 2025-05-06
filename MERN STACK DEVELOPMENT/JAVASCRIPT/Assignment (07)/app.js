let arr = [1,2,3,4];
let square = arr.map((el) => el*el);
let sum = arr.reduce((res, el) => (res + el));
let avg = sum / arr.length;

console.log(square);
console.log(sum);
console.log(avg);

// -----------------------------------------------------

let arr2 = [1,2,3,4];
let newArr = arr2.map((el) => (el + 5));

console.log(newArr);

// -------------------------------------------------------

let names = ["Junaid", "Jamshaid", "Farooq", "Ali"];
let newNames = names.map((el) => (el.toUpperCase()));

console.log(newNames);

// -------------------------------------------------------

const doubleAndReturnArgs = (arr, ...args) => ({arr, ...args.map((el) => el * 2)});

console.log(doubleAndReturnArgs([1, 2, 3], 4));

// -------------------------------------------------------

let mergeObjects = (object1, object2) => ({...object1, ...object2});

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));