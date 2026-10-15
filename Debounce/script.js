let input = document.querySelector("input");

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

// input.addEventListener("input", debounce(function () {
//     console.log("Run...")
// }, 1000));


function throttle(func, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            func(...args);
        }
    }
}

input.addEventListener("input", throttle(function () {
    console.log("Run...")
}, 1000));