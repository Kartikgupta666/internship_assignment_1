const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const eventSchema = new Schema({
    title: {type :String, required: true},
    date: { type: String, required: true },
    link: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);