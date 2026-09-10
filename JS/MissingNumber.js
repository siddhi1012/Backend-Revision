const arr = [1, 2, 4, 5];

function findMissing(arr) {
    const n = arr.length + 1;
    const expected = (n * (n + 1)) / 2;
    const actual = arr.reduce((sum, num) => sum + num, 0);
    return expected - actual;
}

console.log(findMissing(arr));