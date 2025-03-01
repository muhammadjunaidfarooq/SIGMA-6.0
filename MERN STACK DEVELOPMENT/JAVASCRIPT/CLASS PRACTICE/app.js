// A 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//   // Accessing elements
  console.log(matrix[0][0]); // Output: 1
  console.log(matrix[1][2]); // Output: 6

// Iterating through a nested array
for (let i = 0; i < matrix.length; i++) {
    rowOutPut = "";
    for (let j = 0; j < matrix[i].length; j++) {
        rowOutPut += matrix[i][j] + " ";
    }
    console.log(rowOutPut);
}
// Output: 
// 1 2 3 
// 4 5 6 
// 7 8 9 