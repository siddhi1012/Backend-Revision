const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("Button Clicked");
});

const parent = document.querySelector("#parent");
parent.addEventListener("click", function (event) {
    console.log(this);
    console.log(event)
    console.log(event.target);
    console.log(event.currentTarget);
});

const input = document.querySelector("#input");
input.addEventListener("keydown", (event) => {
    console.log("Code", event.key);
    console.log("key", event.key);

});

input.addEventListener("keyup", () => {
    console.log("Key was released");
})

// Event Bubbling
const parent1 = document.querySelector("#parent1");
parent1.addEventListener("click", () => {
    event.stopPropagation();
    console.log("parent");
})

const child1 = document.querySelector("#Child1");
child1.addEventListener("click", () => {
    event.stopPropagation(); // Stop event bubbling
    console.log("Child");
})

// Event Delegation
const fruits = document.getElementById("fruits");
fruits.addEventListener("click", (event) => {
    console.log("Clicked", event.target.textContent);
})

// Event Capturing 
const pt = document.querySelector("#pt");
const ch = document.querySelector("#ch");

pt.addEventListener("click", (event) => {
    console.log("parent");
}, true);

ch.addEventListener("click", (event) => {
    console.log("Child");
})

//event.preventDefault()

const link = document.querySelector("#link")
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Navigation stopped")
});