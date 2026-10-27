const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post")
const studentModel = require("./models/student");
const subjectModel = require("./models/subject");

app.get("/", (req, res) => {
    res.send("hey");
});

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Siddhi",
        email: "siddhi@gmail.com",
        age: 23
    });
    res.send(user);
});

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello World",
        user: "6adf00d8a29c1fe6eab60350"
    });
    let user = await userModel.findOne({ _id: "6adf00d8a29c1fe6eab60350" })
    user.posts.push(post);
    await user.save();
    res.send({ post, user })
});

app.get("/student", async (req, res) => {
    let student = await studentModel.create({
        name: "Siddhi Gavhane",
        class: "MCS",
        age: 23,
    });
    res.send(student);
})
app.get("/subject", async (req, res) => {
    let subject = await subjectModel.create({
        subjectName: "JAVA",
        marks: 84,
        student: "6ae03325c2bcf8920b2f75de"
    })
    let student = await studentModel.findOne({ _id: "6ae03325c2bcf8920b2f75de" });
    student.subjects.push(subject);
    await student.save();
    res.send({ subject, student });
})

app.listen(3000, (req, res) => {
    console.log("Server Listening...")
});