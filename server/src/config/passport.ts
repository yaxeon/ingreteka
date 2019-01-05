import passport from "passport";
import passportLocal from "passport-local";

import { IUser, UserModel } from "../models/user";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<IUser, string>((user, done) => {
  done(undefined, user.id);
});

passport.deserializeUser<IUser, string>((id, done) => {
  UserModel.findById(id, (err: any, user: IUser) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    UserModel.findByEmail(email.toLowerCase(), (err: any, user: IUser) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(undefined, false, { message: `Email ${email} not found.` });
      }

      if (user.password === password) {
        return done(undefined, user);
      }
      return done(undefined, false, { message: "Invalid email or password." });
    });
  })
);


