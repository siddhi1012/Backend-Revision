// You receive users from an API. Print only the names using map and destructuring.
const users = [
    { id: 1, name: "Siddhi", age: 23 },
    { id: 2, name: "Amit", age: 25 },
    { id: 3, name: "Rahul", age: 22 }
];

const result = users.map(({ name }) => {
    return name;
})
console.log(result)

//Extract username and role from the following object. If role doesn't exist, use user
const employee = {
    username: "siddhi"
};
const { username, role = "admin" } = employee;
console.log(username);
console.log(role);

// How would you extract city from this nested object?
const employees = {
    name: "Siddhi",
    address: {
        city: "Pune",
        country: "India"
    }
};

const { name, address: { city, country } } = employees;
console.log(city);

//How can you swap two variables without using a temporary variable?
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a);
console.log(b);
