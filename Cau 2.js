let arr1 = [12, 6, 3, 7, 21, 5, 7];
let arr2 = [12, 6, 3, 4, 21, 5, 7];

function tryRemoveFromArray(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
        }
    }
    return arr;
}

console.log(tryRemoveFromArray(arr1, 7));
console.log(tryRemoveFromArray(arr2, 7));