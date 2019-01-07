import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import passport from "passport";

dotenv.config();

import "./db";
import { sessions as sessionsConfig } from "./auth/sessions";
import { routes as instagramRoutes } from "./auth/instagram";

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionsConfig);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ user: req.user ? req.user.toObject() : null });
});

app.use("/auth/instagram", instagramRoutes);

app.listen(8080);
