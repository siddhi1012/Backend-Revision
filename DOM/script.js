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
console.log(parent.childNodes)

const li1 = document.createElement("li");
li1.textContent = "Java";
document.body.append(li1);

const li2 = document.createElement("li");
li2.textContent = "Python";
document.body.append(li2);

const li3 = document.createElement("li");
li3.textContent = "JS"
document.body.append(li3);


const p = document.createElement("p");
p.textContent = "I Love to Write Code in Javascript";
document.body.appendChild(p);

const card = document.createElement("div");
card.classList.add("card");
const h2 = document.createElement("h2");
h2.textContent = "Javascipt";
const p2 = document.createElement("p");
p2.textContent = "Learn DOM manipulation";
card.append(h2, p2);
document.body.appendChild(card);

const button = document.createElement("button");
button.textContent = "Submit";
document.body.append(button);
const button2 = document.createElement("button");
button2.textContent = "Cancel";
button.insertAdjacentElement("afterbegin",button2)

const b = document.querySelector("#btn3");
b.remove("button");
