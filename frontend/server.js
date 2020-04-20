const express = require("express");
const prerender = require("prerender-node");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();

app.use(
  createProxyMiddleware(["/graphql", "/object"], {
    target: "http://backend.ingreteka:8080"
  })
);

app.use(
  prerender
    .set("prerenderToken", process.env.PRERENDER_TOKEN)
    .blacklisted("^/search")
);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(8080);
