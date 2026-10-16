// Shallow Copy 

const obj = {
    name: "siddhi",
    age: 23,
    city: {
        name: "Pune"
    }
}

const obj2 = { ...obj }

obj2.city.name = "mumbai";

console.log(obj.city.name);
console.log(obj2.city.name);

const arr = [1, 2, 3];
const copy3 = [...arr];
const copy4 = arr.slice();
console.log(copy3);
console.log(copy4);


// Deep Copy 

function makeDeepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var copiedVal = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedVal
}

let copy = makeDeepCopy({ name: "Siddhi", age: 23, address: "Pune" })
console.log(copy)