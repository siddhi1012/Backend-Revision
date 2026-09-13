const title = document.getElementById("title");
title.textContent = "Hello Siddhi";
console.log(title);

const text = document.querySelectorAll(".text");
console.log(text);

const H4 = document.getElementsByTagName("h4");
console.log(H4)

// Nested Selector
const name = document.querySelector("div h4")
console.log(name);

// Printing list -> Fruits
const element = document.querySelectorAll(".ele");
element.forEach((e) => {
    console.log(e.textContent);
})

const box = document.querySelector("#box");
console.log(box.innerHTML);
console.log(box.textContent);
console.log(box.innerText);

const img = document.querySelector("img");
console.log(img.getAttribute("alt"));
console.log(img.setAttribute("src", "MERN.jpg"));

const input = document.getElementById("username");
input.value = "Gavhane" //DOM Property
console.log(input.value);

const n = document.getElementById("n");
n.style.color = "red";
n.style.backgroundColor = "grey";

const box2 = document.getElementById("box2");
box2.classList.add("active");
// box2.classList.remove("active");
const res = box2.classList.contains("active");
console.log(res);

const result = box2.classList.toggle("active");
console.log(result);

//Practical Interview Example — Dark Mode
const btn = document.getElementById("themBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});

// DOM Navigation 
const first = document.getElementById("first");
const second = document.getElementById("second");
console.log(first.parentElement);

//parent Navigation
const parent = document.getElementById("div1");
console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(second.previousElementSibling);
console.log(first.nextElementSibling);