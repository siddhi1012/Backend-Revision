const users = [
    { id: 1, name: "Siddhi", age: 23, active: true, role: "user" },
    { id: 2, name: "Rahul", age: 25, active: false, role: "admin" },
    { id: 3, name: "Priya", age: 22, active: true, role: "user" }
];

//forEach()
const result1 = users.forEach((item) => {
    console.log(item.name);
});


// map()
const result2 = users.map((item) => {
    return item.name;
})
console.log(result2);

// filter()
const result3 = users.filter((item) => {
    return item.active === true;
})
console.log(result3);

// Find user with ID 2.
const result4 = users.find((item) => {
    return item.id === 2;
})
console.log(result4);

const result6 = users.some((item) => {
    return item.role === "admin"
})
console.log(result6);

// Before submitting a form, all fields must be filled.
const fields = ["Siddhi", "23", "Pune"];
const isValid = fields.every((field) => {
    return field.trim() !== "";
});
console.log(isValid);

const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 1000, quantity: 2 },
    { product: "Keyboard", price: 2000, quantity: 1 }
];

const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);
console.log(total);

// Group products by category
const products = [
    { name: "iPhone", category: "electronics" },
    { name: "Laptop", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Jeans", category: "clothing" }
];

const grouped = products.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(item)
    return acc;

}, {})
console.log(grouped);

// Sort employees by salary
const employees = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 30000 },
    { name: "C", salary: 70000 }
];

const sorted = employees.sort((a, b) => {
    return b.salary - a.salary;  // Descending order

})
console.log(sorted);

// sort() mutates the original array. If you don't want that:
const res = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});
console.log(res);


// Remove inactive users -> meaning return only active users
const activeUsers = users.filter((item) => {
    return item.active;
})
console.log(activeUsers)

// Convert array into object using reduce()
const user = [
    { id: 101, name: "A" },
    { id: 102, name: "B" }
];

const Obj = user.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {})
console.log(Obj);