const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "All users" });
});

// Query String
router.get("/search", (req, res) => {
    const city = req.query.city;
    res.json({
        message: "User Search",
        city: city
    })
})

router.get("/:id", (req, res) => {
    res.json({ id: req.params.id });
});



module.exports = router;