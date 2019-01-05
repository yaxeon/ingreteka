import bodyParser from "body-parser";
import mongoSession from "connect-mongodb-session";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import { IVerifyOptions } from "passport-local";

dotenv.config();

const { MONGO_URL = "" } = process.env;

const MongoDBStore = mongoSession(session);

const sessionStore = new MongoDBStore({
  uri: MONGO_URL,
  databaseName: 'ingreteka',
  collection: "sessions"
});

import { IUser } from "./models/user";

// API keys and Passport configuration
import "./config/passport";

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: '__secret',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ user: req.user });
});

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "local",
    (err: Error, user: IUser, info: IVerifyOptions) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.json(info);
      }
      req.logIn(user, errPassport => {
        if (errPassport) {
          return next(errPassport);
        }
        return res.json({ success: user });
      });
    }
  )(req, res, next);
});

app.get("/login", async (req, res) => {
  // default route
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Login</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <form action="/login" method="post">
            <input type="text" name="email">
            <input type="text" name="password">
            <input type="submit" value="Login">
          </form>  
        </body>
      </html>
      `);
});

app.listen(8080);
