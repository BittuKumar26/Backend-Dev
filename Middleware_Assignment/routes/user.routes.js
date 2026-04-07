const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const mfa = require("../middleware/mfa");
                    
const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// Create user
router.post("/user", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User Created");
});

// Login
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).send("User not found");

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id }, SECRET);
    res.json({ token });
});

// Logout
router.post("/logout", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    user.lastLogout = new Date();
    await user.save();

    res.send("Logged out");
});

// Secure route
router.get("/secure", mfa, (req, res) => {
    res.send("Secure Data Accessed");
});

// Soft delete
router.delete("/user/:email", async (req, res) => {
    await User.updateOne(
        { email: req.params.email },
        { isDeleted: true }
    );
    res.send("User Soft Deleted");
});

// Get users
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;