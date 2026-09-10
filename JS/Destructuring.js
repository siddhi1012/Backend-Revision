// Object Destructuring
const student = {
    name: "Siddhi",
    age: 23,
}
const { name, age, school = "Indira College" } = student;
console.log(name);
console.log(age);
console.log(school);

// Rename Variables While Destructuring
const employee = {
    name: "Rukku",
    age: 5
};

// name -> property , empName, empAge -> stored it inside a variable
const { name: empName, age: empAge } = employee;
console.log(empName);
console.log(empAge);

// Array Destructuring

const array = [10, 20, 30, 40];
const [a, b, c, d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const arr = [100, 200, 300, 400];
const [first, , , fourth] = arr;
console.log(first);
console.log(fourth);

// Rest Operator with Destructuring
//Array
const num = [30, 40, 50, 20, 60, 70];
const [x, y, ...remain] = num;
console.log(x);
console.log(y);
console.log(remain);

// Object
const user = {
    id: 101,
    name1: "Swati",
    age: 25,
    city: "Pune"
}

const { id, name1, ...details } = user;
console.log(id);
console.log(name1);
console.log(details);


const response = {
    success: true,
    data: {
        name2: "Siddhi",
        email: "siddhi@gmail.com",
        age2: 23
    }
};


const { success, data: { name2, email, age2 } } = response;

console.log(success);
console.log(email);
console.log(age2);


