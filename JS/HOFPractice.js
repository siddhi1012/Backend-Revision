const products = [
    { name: "Laptop", price: 70000, stock: 10 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1500, stock: 5 },
    { name: "Monitor", price: 15000, stock: 8 }
];

// Requirement 1: Display every product
const result1 = products.forEach((item) => {
    console.log(item.name);
})

// Requirement 2: Get product names
const result2 = products.map((item) => {
    return item.name;
})
console.log(result2);

// Requirement 3: Get products above ₹10,000
const result3 = products.filter((item) => {
    return item.price >= 10000;
})
console.log(result3);

// Requirement 4: Check whether every product is in stock
const result4 = products.every((item) => {
    return item.stock > 0;
});
console.log(result4);

// Requirement 5: Check whether any product is out of stock
const result5 = products.some((item) => {
    return item.stock === 0;
})
console.log(result5);

// Requirement 6: Calculate total price
const result6 = products.reduce((sum, item) => {
    return sum + item.price;
}, 0);
console.log(result6);