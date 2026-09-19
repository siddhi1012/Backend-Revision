
const h1 = document.querySelector("h1");
// h1.style.color = "red"; inline
h1.classList.add("active");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("Clicked");
    document.body.classList.toggle("dark");
});

// getAtrribute setAtrribute
const img = document.querySelector("#img");
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));
console.log(img.getAttribute("id"));
console.log(img.setAttribute("alt", "Photo_MERN"));
console.log(img.getAttribute("alt"));

// Navigation 

const li1 = document.querySelector("#one")
const li2 = document.querySelector("#two")
console.log(li1.parentElement);
console.log(li1.nextElementSibling);
console.log(li2.previousElementSibling);

const ul = document.querySelector("#list");
console.log(ul.children);
console.log(ul.childNodes);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Adding and Creating Elements 
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li4.textContent = "mango";
li5.textContent = "cherry";
document.querySelector("ul").append(li4);
document.querySelector("ul").append(li5);

// Delete button in a dynamic table
// closest() -> it finds nearest ancester matching selector

const table = document.querySelector("#user");
table.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const row = event.target.closest("tr");
        row.remove();
    }
})

// Add items to a list
const input = document.querySelector("#input");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

button.addEventListener("click", (event) => {
    const value = input.value.trim();
    if (!value) return;
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = " ";
})

// Delete dynamically added list items
list.addEventListener("click", (event) => {
    if (event.target.tagName === "li") {
        event.taget.remove();
    }
})

// DOMContentLoaded 
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM is Ready");
})