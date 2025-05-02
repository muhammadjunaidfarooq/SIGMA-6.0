// arr = [8,9,10,1,2,3,4,5,6,7];
// function checkElements(arr,num) {
//     for(let i=0; i<arr.length;  i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// checkElements(arr, 5);

//--------------------------------------------------------------

// function uniqueChar(str) {
//     let char = "";
//     for(let i=0; i<str.length; i++){
//         if(char.includes(str[i])){
//             continue;
//         } else {
//             char += str[i];
//         }
//     }
//     console.log(char);
// }

// uniqueChar("abcdabcdefgggh");

//----------------------------------------------------------------

// function longestName(countryNames){
//     longName = "";
//     for(let i=0; i<countryNames.length; i++){
//         if (countryNames[i].length < longName.length){
//             continue;
//         } else {
//             longName = countryNames[i];
//         }
//     }
//     console.log(longName);
// }

// longestName(["Australia", "Germany", "United States of America"]);

//-------------------------------------------------------------------------

// function numOfVowels(str){
//     count = 0;
//     for(let i=0; i<str.length; i++){
//         if((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u')){
//             count += 1;
//         } else {
//             continue;
//         }
//     }
//     console.log(count);
// }

// numOfVowels("my name is muhammad junaid farooq.");

// -------------------------------------------------------------------------------

function randomNumber(start, end){
    let diff = end - start;
    number = Math.floor(Math.random() * (diff + 1)) + start; // + 1 is for including the ending value
    console.log(number);
}

randomNumber(1, 10);