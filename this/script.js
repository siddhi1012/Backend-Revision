// global scope
console.log(this);

// Functional scope
function demo() {
    console.log(this);
}
demo();

// Method 
let obj = {
    name: "Siddhi",
    age: 23,
    sayName: function () {
        console.log(this.age);
        let test = () => {
            console.log(this);
        }
        test();
    }
}
obj.sayName();

//Event Handler
document.querySelector("h1")
    .addEventListener("click", function () {
        console.log(this.style.color = "red")
    });

// Class
class Demo {
    constructor() {
        console.log("Hello");
        this.a = 12;
    }
}

let val = new Demo();

// call apply bind 
let object = {
    name: "Prasad",
    age: 24,
}

function abcd(a, b) {
    console.log(this, a, b);
}
// call hamesha function ke sath hoti hai 
abcd.call(object, 1, 2);
abcd.apply(object,[12,16])
let func = abcd.bind(object, 1, 2);
 