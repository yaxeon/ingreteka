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
  done(null, user._id);
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
      User.findOne({ auth: { instagramId: profile.id } }, user => {
        if (user === null) {
          User.create({
            username: profile.username,
            roles: [],
            auth: { instagramId: profile.id }
          })
            .then(user => {
              done(null, user);
            })
            .catch(err => {
              done(err);
            });

          return;
        }

        done(null, user);
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
