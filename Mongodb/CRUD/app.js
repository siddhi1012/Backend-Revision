const express = require("express");
const app = express();
const userModel = require("../userModel");

app.get("/", (req, res) => {
    res.send("hey")
});

//create user  
app.get("/create", async (req, res) => {
    let user = await userModel.create({
        name: "prasad",
        email: "prasad@gmail.com",
        username: "hp"
    });
    res.send(user);
});

// update user
app.get("/update", async (req, res) => {
    let userUpdeted = await userModel.findOneAndUpdate({ username: "siddhi@1012" }, { name: "Siddhi Gavhane" }, { new: true })
    res.send(userUpdeted);
});

//read User 
app.get("/readAll", async (req, res) => {
    let user = await userModel.find();
    res.send(user);
})
app.get("/readOne", async (req, res) => {
    let user = await userModel.findOne({ username: "hp" });
    res.send(user);
})

app.get("/deleteAll", async (req, res) => {
    let user = await userModel.deleteMany({ name: "Siddhi" })
    res.send(user)
})

app.get("/deleteOne", async (req, res) => {
    let user = await userModel.findOneAndDelete({ name: "Siddhi Gavhane" })
    res.send(user)
})

app.listen(3000, () => {
    console.log("Server Running...")
})