let arr = [ 1, 8, -2, -1, 58, -4];
let arr1 = [1, 2, 3];

console.log(getMin(arr)); // -4
console.log(getMax(arr)); // 58
console.log(getSum(arr1)); // 6

function getMin(dataArr) {
    let num = dataArr.length;
    let min = Infinity;
    while (num--) {
        if (dataArr[num] < min) {
            min = dataArr[num];
        }
    }
    return min;
}

function getMax(dataArr) {
    let num = dataArr.length;
    let max = -Infinity;
    while (num--) {
        if (dataArr[num] > max) {
            max = dataArr[num];
        }
    }
    return max;
}

function getSum(dataArr) {
    let sum = 0;
    for (let i = 0; i < dataArr.length; i++) {
        sum += dataArr[i];
    }
    return sum;
}

// function getMin(dataArr) {
//     for (let i = 0; i < dataArr.length; i++) {
//         dataArr.sort((a, b) => a - b)[0];
//     }
//     return arr[0];
// }