// @ts-ignore
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(["/object", "/graphql"], { target: "http://localhost:8080/" }));
};
