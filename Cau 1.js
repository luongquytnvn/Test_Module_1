let arr1 = [10, 5, 2, 8, -2, 6, 8];
let arr2 = [2, 4, 0, 5, 1];
let arr3 = [-8, -6, -2, -6, -1, -1, -4];

function findMaxScore(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxScore(arr1));
console.log(findMaxScore(arr2));
console.log(findMaxScore(arr3));