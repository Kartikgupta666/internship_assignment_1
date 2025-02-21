const axios = require("axios");
const cheerio = require("cheerio");
const Event = require("./model");


// Scraping function
const scrapeEvents = async () => {
    try {
        const url = "https://www.eventbrite.com.au/d/australia--sydney/all-events/";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        let events = [];

        $(".DiscoverHorizontalEventCard-module__cardWrapper___2_FKN").each((index, element) => {
            const title = $(element).find("h3[class*='event-card__clamp-line--two']").text().trim();
            const date = $(element).find("p[class*='event-card__clamp-line--one']").text().trim();
            const link = $(element).find("a").attr("href");

            if (title && link) {
                events.push({ title, date, link });
            }
        });

        // Store in MongoDB
        await Event.deleteMany({}); // Remove old data
        await Event.insertMany(events);

        console.log("✅ Events scraped and saved successfully!");
    } catch (error) {
        console.error("❌ Error scraping events:", error);
    }
};

// Run scraper
module.exports = scrapeEvents;
