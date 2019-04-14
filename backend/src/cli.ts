import dotenv from "dotenv";
dotenv.config();

import { User, UserRole, hashPassword } from "./models/user";

import "./db";

const args = process.argv.slice(2);

(async () => {
  if (args.length === 4 && args[0] === "createAdmin") {
    const [, username, email, password] = args;

    try {
      await User.create({
        username,
        email,
        roles: [UserRole.ADMIN],
        password: hashPassword(password)
      });
    } catch (e) {
      console.error(e);
    }

    process.exit();
  }
})();
