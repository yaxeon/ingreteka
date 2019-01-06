import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

dotenv.config();

import { passport } from "./config/passport";
import { sessions } from "./config/sessions";

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessions);
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/instagram", passport.authenticate("instagram"));

app.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  res.json({ user: req.user });
});


app.listen(8080);
