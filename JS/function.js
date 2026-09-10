function addFunction() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    return res;

}
// Spread Operator 
function Add(...numbers) {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res = res + numbers[i];
    }
    return res

}

let result1 = addFunction(12, 34, 45, 67, 100);
let result2 = Add(12, 34, 45, 67, 100);
console.log(result1);
console.log(result2);


const add = (a, b) => {
    const res = a + b;
    return res;
}
console.log(add(10, 15));


// Higher Order function 

function addNum(a, b, cd) {
    let res = a + b;
    cd(res);
}

let result = addNum(10, 30, (val) => { console.log(val); });


// second largest Number
const arr = [10, 20, 20, 5]
function SecLarge(arr) {
    let large = - Infinity;
    let sec = - Infinity;

    for (const num of arr) {
        if (num > large) {
            sec = large;
            large = num;
        } else if (num > sec && num !== large) {
            sec = num;
        }
    }
    return sec;

}

console.log(SecLarge(arr));


function duplicate(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) !== index
    });
}

console.log(duplicate(arr));


const arr1 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frquency = arr1.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

console.log(frquency);


const arr2 = [1, 2, 3, 5, 6];

function Missing(arr2) {
    const n = arr2.length + 1;
    const exp = (n * (n + 1)) / 2;
    const actual = arr2.reduce((sum, num) => sum + num, 0);
    return exp - actual;
}
console.log(Missing(arr2));



// set Timeout
console.log("Hii")
const ID = setTimeout(() => {
    console.log("Apna College");
},2000)
console.log("Welcome to");
clearTimeout(ID);


console.log("A");
let id = setInterval(() =>{
    console.log("C")
},4000);
console.log("B")
clearInterval(id);