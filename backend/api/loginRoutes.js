const express = require("express");
const router = express.Router();

router.post("/signin", (req, res) => {
    const { email, password, role } = req.body;

    console.log("meow")
    if (email && password) {
        return res.json({ message: "Login successful", token: "your-jwt-token" });
    }

    res.status(401).json({ message: "Invalid email or password" });
});

module.exports = router;