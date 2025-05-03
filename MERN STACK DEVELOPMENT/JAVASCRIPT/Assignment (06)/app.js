// const arrayAverage = (array) => {
//     let sumOfArrayElements = 0;
//     for(let element of array){
//         sumOfArrayElements += element;
//     };
//     return (sumOfArrayElements / array.length);
// }

// let array = [4,5];
// console.log(arrayAverage(array));

//--------------------------------------------------------------------

// const isEven = (n) => n%2 == 0;

// console.log(isEven(3));

//------------------------------------------------------------------------

// const object = {

//     message: "Hello, World!",
//     logMessage () {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);
//--------------------------------------------------------------------------

let length = 4;
function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    }
}

object.method(callback, 1, 2)