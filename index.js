const express = require('express');
const Event = require("./Scraper/model")
const Email = require("./Scraper/Email")
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
const port = 8001;
const mongoose = require("mongoose");
const cron = require("node-cron");
const scrapeEvents = require("./Scraper/Scraper");
require('dotenv').config();

mongoose.connect(process.env.mongoDB);


app.get('/', async (req, res) => {
    const data = await Event.find({});
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ message: "No data found" });
    }
})

app.post('/save-email', async (req, res) => {

    try {
        const { email, event } = req.body;
        if (email && event) {
            const data = new Email({
                Email: email,
                Event: event
            });

            await data.save();
            return res.status(200).json({ message: "Email saved successfully" });


        }
    }
    catch (e) {
        res.status(400).json({ message: "Error saving email", error: e.message });
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


cron.schedule("0 0 * * *", () => {
    console.log("⏳ Running scheduled scraper at 12:00 AM...");
    scrapeEvents();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata" // Change to your preferred timezone
});