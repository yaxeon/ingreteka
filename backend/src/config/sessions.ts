import mongoSession from "connect-mongodb-session";
import session from "express-session";

const { MONGO_URL = "" } = process.env;

const MongoDBStore = mongoSession(session);

const store = new MongoDBStore({
  uri: MONGO_URL,
  databaseName: "ingreteka",
  collection: "sessions"
});

const sessions = session({
  secret: "__secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store,
  resave: true,
  saveUninitialized: true
});

export { sessions };
