function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}


function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}


function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");

    applyTheme(savedTheme || getSystemTheme());
}


// Set initial theme
setInitialTheme();


// Listen to system theme change only if no theme is stored
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {

        if (!localStorage.getItem("theme")) {
            applyTheme(getSystemTheme());
        }

    });


// Theme toggle button
document
    .querySelector("#themeButton")
    .addEventListener("click", () => {

        const currentTheme = document.body.classList.contains("dark")
            ? "dark"
            : "light";

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        applyTheme(newTheme);

        localStorage.setItem("theme", newTheme);
    });