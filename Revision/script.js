const express = require("express");
const app = express();

app.use(express.json());

// How do you create a POST API?
// output - {
//     "message": "User Created",
//     "data": {
//         "name": "Siddhi Gavhane",
//         "age": 23
//     }
// }
app.post("/users", (req, res) => {
    const user = req.body;
    res.status(201).json({
        message: "User Created",
        data: user
    })
})

// Authentication Middleware 
function CheckAuth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Please log in"
        })
    }
    next();
}
app.get("/profile", CheckAuth, (req, res) => {
    res.json({
        message: "Profile Data"
    })
})

// How do you validate incoming data?
app.post("/student", (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        })
    }
    res.status(201).json({
        message: "Valid user data",
        data: {
            name,
            age
        }
    })
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})