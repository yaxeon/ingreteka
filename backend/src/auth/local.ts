import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { UserModel, User } from "../models/user";

passport.serializeUser<UserModel, string>((user, done) => {
  done(null, user.id);
});

passport.deserializeUser<UserModel | null, string>((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (!user.verifyPassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    });
  })
);
