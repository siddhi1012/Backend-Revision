// const name = document.querySelector("#name");
// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (name.value.length <= 2) {
//         document.querySelector("#hide").style.display = "initial";
//     } else {
//         document.querySelector("#hide").style.display = "none";
//     }
// })


// Email and Password Validation 

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailValue = emailRegex.test(email.value);
    let passwordValue = passwordRegex.test(password.value);
    let isValid = true;

    if (!emailValue) {
        document.querySelector("#emailError").textContent = "Email is Not Correct";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }
    if (!passwordValue) {
        document.querySelector("#passwordError").textContent = "Password is Not Correct";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultmsg").textContent = "Login Successfully"
        document.querySelector("#resultmsg").style.display = "block";
    }



})