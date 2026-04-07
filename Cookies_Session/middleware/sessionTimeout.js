module.exports = (req, res, next) => {
    const remaining = req.session.cookie.maxAge;

    if (remaining && remaining < 60000) {
        res.setHeader("X-Session-Warning", "Session expiring soon");
    }

    next();
};