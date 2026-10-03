const express = require("express");
const app = express();
const userModel = require("./userModel");

app.get("/", (req, res) => {
    res.send("hey")
});

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        name: "Siddhi",
        email: "siddhi@gmail.com",
        username: "siddhi@1012"
    });
    res.send(user);
});

app.listen(3000, () => {
    console.log("Server Running...")
})