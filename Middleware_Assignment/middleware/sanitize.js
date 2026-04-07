module.exports = (req, res, next) => {
    const clean = (str) => str.replace(/[<>;$]/g, "");

    for (let key in req.body) {
        if (typeof req.body[key] === "string") {
            req.body[key] = clean(req.body[key]);
        }
    }

    next();
};