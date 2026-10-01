// // Callback
// function username(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
// username("siddhi", function Greet() {
//     console.log("Welcome to AWS");
// })

// // Promise
// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Data Received")
//     } else {
//         reject("Something Went Wrong");
//     }
// })
// console.log(promise);

// promise.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Operation Completed");
//     })

// // Promise Chain 

// getuser().then(user => {
//     return getOrder(user.id);
// })
//     .then(order => {
//         console.log(order);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// // async await 




// Callback

function Delay(func) {
    setTimeout(func, Math.floor(Math.random() * 10) * 1000);
}

Delay(function () {
    console.log("Hey")
})