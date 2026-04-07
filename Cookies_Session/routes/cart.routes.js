const router = require("express").Router();

// Add to cart
router.post("/add", (req, res) => {
    const item = req.body.item;

    // Logged-in user → session
    if (req.session.user) {
        if (!req.session.cart) req.session.cart = [];
        req.session.cart.push(item);
    } else {
        // Anonymous → cookies
        let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : [];
        cart.push(item);
        res.cookie("cart", JSON.stringify(cart));
    }

    res.send("Item added");
});

// Get cart
router.get("/", (req, res) => {
    if (req.session.user) {
        res.json(req.session.cart || []);
    } else {
        res.json(req.cookies.cart ? JSON.parse(req.cookies.cart) : []);
    }
});

module.exports = router;