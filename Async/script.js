// counter 10 to 0 

let count = 10;

let id = setInterval(() => {
    if (count >= 0) {
        console.log(count);
        count--;
    } else {
        clearInterval(id)
    }
}, 1000)