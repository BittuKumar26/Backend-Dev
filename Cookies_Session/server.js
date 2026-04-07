require("dotenv").config();

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const sessionTimeout = require("./middleware/sessionTimeout");

const app = express();   

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}));

app.use(sessionTimeout);   

// Routes
app.use("/form", require("./routes/form.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/cart", require("./routes/cart.routes"));

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});