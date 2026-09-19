// Callback
function username(name, callback) {
    console.log("Hello " + name);
    callback();
}
username("siddhi", function Greet() {
    console.log("Welcome to AWS");
})

// Promise
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data Received")
    } else {
        reject("Something Went Wrong");
    }
})
console.log(promise);

promise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation Completed");
    })
    