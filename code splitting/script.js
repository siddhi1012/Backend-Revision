const btn = document.querySelector("button");
btn.addEventListener("click", async function () {
    let heavy = await import("./heavy.jsff");
    heavy.veryHeavy();
})
