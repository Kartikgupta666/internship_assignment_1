const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const emailSchema = new Schema({
    Email: {type :String, required: true},
    Event: { type: String, required: true },
});

module.exports = mongoose.model("Email", emailSchema);