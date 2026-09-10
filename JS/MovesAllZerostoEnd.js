const arr = [0, 1, 0, 3, 12];
function movesZeros(arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }
    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }
    return arr;
}

console.log(movesZeros(arr));