// Separation of Concern 

const btn = document.querySelector("button");
const ul = document.querySelector("ul");


function add(n1, n2) {
    return n1 + n2;
}

btn.addEventListener("click", function () {
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);

    let finalAdd = add(n1, n2);
    const li = document.createElement("li")
    li.textContent = finalAdd;
    ul.appendChild(li);
})


// Own Implementation of map 

const arr = [1, 2, 3, 4, 5, 6, 7]

function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr;
}

let ans = myMap(arr, function (val) {
    return val + 2;
})

