import dotenv from "dotenv";
dotenv.config();

import { User, UserRole, hashPassword } from "./models/user";

import "./db";

const args = process.argv.slice(2);

(async () => {
  if (args.length === 3 && args[0] === "createAdmin") {
    const [, email, password] = args;

    try {
      await User.create({
        email,
        password: hashPassword(password),
        roles: [UserRole.ADMIN]
      });
    } catch (e) {
      console.error(e);
    }
  }

  process.exit();
})();
