import passport from "passport";
import { Router } from "express";
import { Strategy as InstagramStrategy } from "passport-instagram";

import { User, IUserModel } from "../models/user";

const {
  INSTAGRAM_CLIENT_ID = "",
  INSTAGRAM_CLIENT_SECRET = "",
  INSTAGRAM_CLIENT_CALLBACK = ""
} = process.env;

const routes = Router();

passport.serializeUser<IUserModel, string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<IUserModel | null, string>((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new InstagramStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: INSTAGRAM_CLIENT_CALLBACK
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ instagramId: profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }

        User.create(
          {
            username: profile.username,
            roles: [],
            instagramId: profile.id
          },
          (err: any, user: any) => {
            done(err, user);
          }
        );
      });
    }
  )
);

routes.get("/", passport.authenticate("instagram"));

routes.get(
  "/callback",
  passport.authenticate("instagram", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

export { routes };
