
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET = "mysecret123";

// 1. Login - Create Token
app.post("/login", (req, res) => {
    const user = {
        id: 101,
        username: "Siddhi"
    };

    const token = jwt.sign(user, SECRET, {
        expiresIn: "1h"
    });

    res.json({ token });
});

// 2. Middleware - Verify Token
function authenticateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send("Token missing");
    }

    try {
        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            SECRET
        );

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).send("Invalid token");
    }
}

// 3. Protected Dashboard
app.get("/dashboard", authenticateToken, (req, res) => {
    res.send("Welcome " + req.user.username);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
