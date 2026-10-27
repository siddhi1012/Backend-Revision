const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "Siddhi123",
    resave: false,
    saveUninitialized: false
}))

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/login", (req, res) => {
    req.session.user = {
        name: "Siddhi",
        email: "siddhi@gmail.com"
    }
    res.send("Login Successfully");
});

app.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.status(401).send("Please login first");
    }
    res.send(`User Profile : ${req.session.user.name},
        Email : ${req.session.user.email}`);
})
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Logout failed");
        }
        res.send("Logout Successfully");
    })
})

app.post("/register", (req, res) => {
    const { name, email } = req.body;

    //validation 
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email is required"
        })
    }
    res.status(201).json({
        message: "User register Successfully",
        data: {
            name,
            email
        }
    })
})

app.get("/set", (req, res) => {
    res.cookie("name", "Siddhi");
    res.send("Cookies Set");
});

app.get("/get", (req, res) => {
    res.send(`Cookie Is : ${req.cookies.name}`)
})

app.listen(3000, (req, res) => {
    console.log("Server Listening...");

})