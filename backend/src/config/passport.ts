import passport from "passport";
// @ts-ignore
import { Strategy as InstagramStrategy } from "passport-instagram";

import { IUser, UserModel } from "../models/user";

const { INSTAGRAM_CLIENT_ID = "", INSTAGRAM_CLIENT_SECRET = "" } = process.env;

passport.serializeUser<IUser, any>((user, done) => {
  done(null, user);
});

passport.deserializeUser<IUser, any>((obj, done) => {
  done(null, obj);
});

passport.use(
  new InstagramStrategy(
    {
      clientID: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:8080/auth/instagram/callback"
    },
    (accessToken: any, refreshToken: any, profile: any, done: any) => {
      // asynchronous verification, for effect...
      process.nextTick(() => {
        // To keep the example simple, the user's Instagram profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Instagram account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);

export { passport };
