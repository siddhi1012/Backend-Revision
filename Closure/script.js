function count() {
    let a = 0;
    return function () {
        a++;
        console.log(a)
    }
}

let c = count();
c();
c();

let c2 = count();
c2();
c2();
c2();



function clickLimiter() {
    let click = 0;
    return function () {
        if (click < 5) {
            click++;
            console.log(`CLicked: ${click} times...`)
        } else {
            console.error("Limit Exceeded...Try again later...");
        }
    }
}

let func = clickLimiter();
func();
func();
func();
func();
func();
func();
func();



// toaster 
function createToster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none transition`;
        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").classList.add("fixed");
            document.querySelector(".parent").className +=
                ` ${config.positionX === "right" ? "right-5" : "left-5"}` +
                ` ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000)


    }
}
let toaster = createToster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});

toaster("Download Done!!!");
setTimeout(() => {
    toaster("Accepted your request!!!")
}, 2000);