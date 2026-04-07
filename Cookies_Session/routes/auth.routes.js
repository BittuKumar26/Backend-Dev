const router = require("express").Router();

 
router.get("/set-lang/:lang", (req, res) => {
    res.cookie("lang", req.params.lang);
    res.send("Language set");
});

// Login (session)
router.post("/login", (req, res) => {
    const { email } = req.body;

    req.session.user = {
        email,
        role: email === "admin@gmail.com" ? "admin" : "user"
    };

    res.send("Logged in");
});

// Middleware
function isAuth(req, res, next) {
    if (!req.session.user) return res.status(401).send("Login required");
    next();
}

// Role check
function isAdmin(req, res, next) {
    if (req.session.user.role !== "admin")
        return res.status(403).send("Admin only");
    next();
}

// Admin panel
router.get("/admin", isAuth, isAdmin, (req, res) => {
    res.send("Welcome Admin");
});

module.exports = router;