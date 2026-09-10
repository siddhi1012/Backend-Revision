const arr = [1, 2, 3, 4, 5, 6];

const res = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
console.log(res);