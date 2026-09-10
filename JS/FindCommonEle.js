const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const result = arr1.filter(num => arr2.includes(num));
console.log(result);


// Flatten Neasted Array 
const arr = [1,[2,3],[4,[5,6]]];
const res = arr.flat(Infinity);
console.log(res);