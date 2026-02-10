function auth(req, res, next) {
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}

app.get('/dashboard', auth, (req, res) => {
    res.send("Welcome to dashboard");
});
