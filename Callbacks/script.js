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

//callback hell
function wakeup(callback) {
    console.log("1.Wake Up");
    callback();
}
function takeBath(callback) {
    console.log("2. Take a bath");
    callback();
}
function goToCololege(callback) {
    console.log("3. Go to College");
    callback();
}

wakeup(function () {
    takeBath(function () {
        goToCololege(function () {
            console.log("Done");
        })
    })
})

// Promise 
let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) {
            resolve("promise resolve:" + rn);
        } else {
            reject("Promise reject:" + rn);
        }
    }, 3000);
})

pr
    .then((val) => {
        console.log(val);
    })
    .catch((val) => {
        console.log(val);
    })

// Async/Await
async function Test() {
    try {
        let val = await pr;
        console.log(val);
    }
    catch (err) {
        console.log(err);
    }
}
Test();