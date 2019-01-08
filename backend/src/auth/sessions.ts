import mongoSession from "connect-mongodb-session";
import session from "express-session";

const { MONGO_URL = "", COOKIE_SECRET = "" } = process.env;

const MongoDBStore = mongoSession(session);

const store = new MongoDBStore({
  uri: MONGO_URL,
  collection: "sessions"
});

const sessions = session({
  secret: COOKIE_SECRET,
  name: "sid",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store,
  resave: false,
  saveUninitialized: false
});

export { sessions };
