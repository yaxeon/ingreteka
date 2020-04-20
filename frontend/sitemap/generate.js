const SitemapGenerator = require("sitemap-generator");
const path = require("path");

const generateSitemap = () =>
  new Promise(resolve => {
    const generator = SitemapGenerator("https://guide.ingreteka.ru/", {
      maxDepth: 0,
      filepath: path.resolve(__dirname, "../public/sitemap.xml"),
      maxEntriesPerFile: 50000,
      priorityMap: [1.0, 0.8, 0.6],
      stripQuerystring: true,
      userAgent: "Googlebot/2.1",
      changeFreq: "weekly"
    });

    generator.on("done", () => {
      resolve("OK");
    });

    generator.on("error", e => {
      resolve(`ERROR: ${e.message}`);
    });
    generator.start();
  });

module.exports = { generateSitemap };
