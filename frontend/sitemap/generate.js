const SitemapGenerator = require("sitemap-generator");
const { CronJob } = require("cron");
const path = require("path");

const makeSitemap = () =>
  new Promise(resolve => {
    const generator = SitemapGenerator("https://guide.ingreteka.ru/", {
      maxDepth: 0,
      filepath: path.resolve(__dirname, "../build/sitemap.xml"),
      maxEntriesPerFile: 50000,
      priorityMap: [1.0, 0.8, 0.6],
      stripQuerystring: true,
      userAgent: "Googlebot/2.1",
      changeFreq: "weekly"
    });

    generator.on("done", () => {
      console.log("Sitemap generate: done");
      resolve();
    });

    generator.on("error", e => {
      console.error(`Sitemap generate: ${e.message}`);
      resolve();
    });

    generator.start();
  });

makeSitemap();

const updateSiteMap = new CronJob("00 00 00 * * *", makeSitemap);

updateSiteMap.start();
