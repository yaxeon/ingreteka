require("dotenv").config();
const proxy = require("http-proxy-middleware");
const express = require("express");
const path = require("path");

const { BACKEND_URL } = process.env;

const app = express();

app.use(express.static(`${__dirname}/build`));

app.use(
  proxy("/graphql", {
    target: BACKEND_URL,
    changeOrigin: true
  })
);

app.get("*", function(req, res) {
  res.sendFile(path.resolve(`${__dirname}/build/index.html`));
});

app.listen(8080);
