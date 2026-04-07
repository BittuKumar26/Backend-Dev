const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    lastLogin: Date,
    lastLogout: Date,
    lastActive: Date,
    isDeleted: { type: Boolean, default: false }
});

// Activity tracking
userSchema.pre("save", function (next) {
    this.lastActive = new Date();
    next();
});

// Soft delete filter
userSchema.pre(/^find/, function (next) {
    this.where({ isDeleted: false });
    next();
});

module.exports = mongoose.model("User", userSchema);