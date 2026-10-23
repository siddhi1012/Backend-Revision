const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt")
const session = require("express-session");
const jwt = require("jsonwebtoken");

app.use(cookieParser());
app.use(session({
    secret: "mydemo",
    resave: false,
    saveUninitialized: false
}))

// session 
app.get("/login", (req, res) => {
    req.session.user = "Siddhi";
    res.send("Login Successfully");
})

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}`);
    } else {
        res.send("Please login first");
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send("logout successfully");
    })

})

app.get("/", (req, res) => {
    // set cookies
    res.cookie("name", "siddhi");
    res.send("Done");
})

app.get("/setCookie", (req, res) => {
    // set cookies
    res.cookie("name", "siddhi");
    res.send("Cookies set Successfully");
});

app.get("/getCookie", (req, res) => {
    //get cookie
    res.send(`${req.cookies.name}`);
})

app.get("/read", (req, res) => {
    // read cokkies
    console.log(req.cookies);
    res.send("Read Page");
})

// Password Hash 
async function hashPassword() {
    const password = "Mypassword123";
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Original:", password);
    console.log("Hash:", hashPassword);
}
hashPassword();

// Password Verify 
async function verifyPassword() {
    const password = "MyPassword123";
    const storedhash = await bcrypt.hash("Siddhi", 10);
    const isMatch = await bcrypt.compare(password, storedhash);
    console.log(isMatch); //false


}
verifyPassword();

// create jwt token
const payload = {
    userId: 101,
    role: "student"
};
const token = jwt.sign(
    payload,
    "mydemo123", {
        expiresIn: "15m"
    }
)
console.log(token)

app.listen(3000, () => {
    console.log("Server Listening....");

})