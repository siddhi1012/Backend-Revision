const arr = [10, 45, 23, 89, 12];

function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }
    return second;
}

console.log(secondLargest(arr));