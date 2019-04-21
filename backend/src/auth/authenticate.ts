import passport from "passport";

export const authenticate = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    passport.authenticate("local", (error, user) => {
      if (error || !user) {
        return reject();
      }

      resolve(user);
    })({ body: { username, password } });
  });
