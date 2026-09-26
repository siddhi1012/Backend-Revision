let count = 0;
let progress = document.querySelector(".progress-bar");
let percentage = document.querySelector(".percentage")
let sec = 20;
let id = setInterval(() => {
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percentage.textContent = `${count}%`;
    } else {
        document.querySelector(".download-text").textContent = "Downloaded";
        clearInterval(id);
    }

}, 30);

const alertBanner = document.querySelector("#alertBanner");
setTimeout(() => {
    alertBanner.style.display = "none";
}, 4000);