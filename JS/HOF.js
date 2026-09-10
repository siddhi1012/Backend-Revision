function greet(name) {
    return `Hello ${name}`;
} // Normal Function

function processUser(callback) {
    console.log(callback("siddhi"));
} //HOF
processUser(greet);



function calculate(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
const res = calculate(20, 10, add);
console.log(res);


// this 
const student = {
    name: "siddhi",
    age: 23,
    subject: "Math",
    print() {
        console.log(this.age);
    }
}
student.print();


const Stud = {
    name: "prasad",
    age: 24,
    print: () => {
        console.log(this.age);
    }
}
Stud.print();

// forEach -> Do something for each item 
const arr = [10, 20, 30, 40, 50];
arr.forEach((num) => {
    console.log(num * 2);
})

// Real Life example 
const users = [
    { name: "Siddhi", age: 23 },
    { name: "Prasad", age: 24 },
]
users.forEach((user) => console.log(user.name));

// map -> creates new array by changing every elements

const number = [1, 2, 3, 4, 5, 6];
const result = number.map((num) => {
    return num * 2;
})
console.log(result);

// map
const names = users.map((user) => {
    return user.name;
});

console.log(names);

// filter -> create array with only matching item 
const numbers = [10, 15, 20, 25, 30];
const n = numbers.filter((num) => {
    return num > 20;
});
console.log(n);

// Real life Example 
const Insta = [
    { name: "Siddhi", active: true },
    { name: "Amit", active: false },
    { name: "Rahul", active: true }
];

const activeUser = Insta.filter((user) => {
    return user.active === true;
})

console.log(activeUser);


const r1 = numbers.every((num) => {
    return num > 50;
})
console.log(r1);

const r2 = numbers.some((num) => {
    return num > 25;
})
console.log(r2);


const marks = [70, 80, 65, 90];

const StdentResult = marks.every((num) => {
    return num >= 60;
})

console.log(StdentResult);

const products = [
    { name: "Laptop", stock: 10 },
    { name: "Mouse", stock: 5 },
    { name: "Keyboard", stock: 0 }
];

const prod = products.some((item) => {
    return item.stock === 0;
})
console.log(prod);


//reduce
const total = numbers.reduce((acc, num) => {
    return acc + num
}, 0);
console.log(total);

//Real Life 
const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {})
console.log(count);

const Persons = [
    { id: 1, name: "Siddhi" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Rahul" }
];

const freq = Persons.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
}, {});
console.log(freq);

// spread 
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [...arr1];
console.log(arr2);

const frontend = ["React", "Next.js"];
const backend = ["Node.js", "Express"];

const fullstack = ["HTML", ...frontend, ...backend, "EJS"];
console.log(fullstack);

const user = {
    name: "Siddhi",
    age: 23
};

const newUser = {
    ...user,
    name: "sakshi"
}
console.log(newUser);

//Rest 
function add(...number) {
    return number.reduce((sum, num) => {
        return sum + num
    }, 0);
}

console.log(add(10, 20, 30));