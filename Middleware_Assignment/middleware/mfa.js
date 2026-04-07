const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const token = req.headers["authorization"];
    const otp = req.headers["otp"];

    if (!token || !otp) {
        return res.status(401).send("Token or OTP missing");
    }

    try {
        jwt.verify(token, SECRET);

        if (otp !== "123456") {
            return res.status(403).send("Invalid OTP");
        }

        next();
    } catch {
        res.status(401).send("Invalid Token");
    }
};