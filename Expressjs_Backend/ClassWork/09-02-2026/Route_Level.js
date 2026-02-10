function checkLogin(req, res, next) {
    const isLoggedIn = true;

    if (isLoggedIn) {
        next();
    } else {
        res.send("Access Denied");
    }
}

app.get('/dashboard', checkLogin, (req, res) => {
    res.send("Welcome to Dashboard");
});
