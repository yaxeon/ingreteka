import { Router } from "express";
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

import { IUserModel, User } from "../models/user";

const {
  FACEBOOK_CLIENT_ID = "",
  FACEBOOK_CLIENT_SECRET = "",
  FACEBOOK_CLIENT_CALLBACK = ""
} = process.env;

const routes = Router();

passport.serializeUser<IUserModel, string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<IUserModel | null, string>((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: FACEBOOK_CLIENT_CALLBACK,
      enableProof: true,
      profileFields: ['id', 'photos', 'email', 'displayName']
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookId: profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        
        const username = profile.displayName;
        const email = profile.emails ? profile.emails[0].value : undefined;
        const picture = profile.photos ? profile.photos[0].value : undefined;

        if (user) {
          user.username = username;
          user.picture = picture;
          user.email = email;

          return user.save(done);
        }

        User.create(
          {
            roles: [],
            facebookId: profile.id,
            username,
            email,
            picture
          },
          done
        );
      });
    }
  )
);

routes.get("/", passport.authenticate("facebook", { scope: [ 'email' ] }));

routes.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

export { routes };
