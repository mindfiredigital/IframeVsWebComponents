const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

const dotenv = require("dotenv");
dotenv.config();
// const { pa11y } = require("@cypress-audit/pa11y");
module.exports = {
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL, // this is your app
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse(),
        // pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
};
