// @ts-ignore
const fs = require("fs");
const glob = require("glob");
const workboxBuild = require("workbox-build");

glob.sync("build/{precache*,service*}").map(fs.unlinkSync);

const buildSW = () => {
  return workboxBuild.generateSW({
    clientsClaim: true,
    skipWaiting: true,
    importWorkboxFrom: "cdn",
    globDirectory: "build",
    globPatterns: ["**/*.{html,js,css,svg}"],
    swDest: "build/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: new RegExp("^https://ingreteka\\.b-cdn\\.net/"),
        handler: "CacheFirst",
        options: {
          cacheName: "cdn",
          expiration: {
            maxEntries: 100
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ],
    navigateFallback: "/index.html",
    navigateFallbackBlacklist: [
      // Exclude URLs starting with /_, as they're likely an API call
      new RegExp("^/_"),
      // Exclude URLs containing a dot, as they're likely a resource in
      // public/ and not a SPA route
      new RegExp("/[^/]+\\.[^/]+$")
    ]
  });
};

buildSW();
