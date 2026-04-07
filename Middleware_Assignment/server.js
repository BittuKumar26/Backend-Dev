require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const logger = require("./middleware/logger");
const sanitize = require("./middleware/sanitize");
const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(sanitize);

// Routes
app.use("/api", userRoutes);

// DB
connectDB();

// Server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});