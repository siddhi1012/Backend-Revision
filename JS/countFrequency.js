// Count frequency of elements
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frquency = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(frquency);

