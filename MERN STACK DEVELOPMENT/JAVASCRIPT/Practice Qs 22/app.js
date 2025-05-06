let nums = [2,3,4,5,3,4,7,8,2];
let result = nums.every((el) => {
    el % 10 == 0;
});

console.log(result);

// -----------------------------------------------------

function getMini(nums) {
    let minNum = nums.reduce((min, el) => {
        if(el < min){
            return el;
        } else {
            return min;
        }
    });
    return minNum;
}

console.log(getMini(nums));