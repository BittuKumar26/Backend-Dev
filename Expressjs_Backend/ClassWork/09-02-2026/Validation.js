function validate(req, res, next) {
    if (!req.body.name) {
        return res.send("Name is required");
    }
    next();
}


