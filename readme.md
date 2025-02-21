# Documentation: Web Page for Displaying Scraped Event Data

## Objective
The goal of this project is to develop a web page that displays a list of events happening in Sydney, Australia. The event data will be automatically scraped from various event listing websites and updated every 24 hours. Users can view event details and purchase tickets via a "GET TICKETS" button, which collects their email addresses before redirecting them to the original ticketing website.

---

## Approach

### 1. **Technology Stack**
- **Backend**: Node.js with Express.js
- **Frontend**: React.js or HTML/CSS with Bootstrap
- **Scraping**: Cheerio (for static pages) and Puppeteer (for dynamic content)
- **Database**: MongoDB (for storing event details)
- **Scheduler**: Node.js cron job (node-cron)
- **Email Collection**: MongoDB

---

### 2. **Project Workflow**

#### **Step 1: Web Scraping**
- Identify reliable event listing websites for Sydney.
- Use Cheerio (for static sites) or Puppeteer (for dynamic content) to extract relevant event details:
  - Event Name
  - Date & Time
  - Description
  - Ticket Link
- Store scraped data in MongoDB.
- Schedule the script to run every 24 hours using node-cron.

#### **Step 2: Backend Development**
- Set up an Express.js server to:
  - Serve the scraped event data through an API endpoint (`/api/events`).
  - Handle email collection when users click "GET TICKETS".
  - Store user email in MongoDB.

#### **Step 3: Frontend Development**
- Develop a user-friendly interface with:
  - A dynamic list of events displayed .
  - A “GET TICKETS” button for each event.
  - A pop-up form for email collection before redirection.

#### **Step 4: Deployment**
- **Database**: Host MongoDB using MongoDB Atlas.
- **Cron Job**: Set up a cloud function or server-side cron to run daily.

#### **Step 5: Monitoring & Maintenance**
- Implement logging with Winston for error tracking.
- Monitor scraper health and website uptime with status monitoring tools (UptimeRobot, LogRocket).
- Ensure scraper compliance with website policies to avoid IP bans (e.g., use proxies, delay requests).

---

## Conclusion
By following this structured approach, the project will successfully create an automated event listing website for Sydney, offering real-time updates and a smooth user experience.

## Setting up Project
- fork the git repositry
- clone the git repositry on your system
- Run ``` npm install ```
- once run it , you can create file ``` .env``` by copiying the file ``` .env-example``` 
- change the values of the key
- Run ``` npm start```
