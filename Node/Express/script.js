const express = require("express");
const app = express();

// middleware 
app.use((req, res, next) => {
    console.log("Middleware Called");
    next();
})

// Route 
app.get("/", (req, res) => {
    res.send("Hello World..");
});

app.get("/about", (req, res) => {
    res.send("About Page");
})

// Error handler 
app.get("/profile", (req, res, next) => {
    return next(new Error("Something Went Wrong"));
})

app.use((err, req, res, next) => {
    res.status(500).send("Something Broke!!!")
})


// server listen
app.listen(3000, () => {
    console.log("Server Running...");
})