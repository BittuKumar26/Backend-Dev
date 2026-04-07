const router = require("express").Router();

// Step 1
router.post("/step1", (req, res) => {
    req.session.formData = { ...req.body };
    res.send("Step 1 saved");
});

// Step 2
router.post("/step2", (req, res) => {
    req.session.formData = {
        ...req.session.formData,
        ...req.body
    };
    res.send("Step 2 saved");
});

// Final submit
router.get("/submit", (req, res) => {
    res.json(req.session.formData);
});

module.exports = router;