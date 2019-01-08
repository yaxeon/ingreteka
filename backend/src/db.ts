import mongoose from "mongoose";
import debug from "debug";

const { MONGO_URL = "" } = process.env;

const dbLogger = debug("guide:db");

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", err => {
  dbLogger("Error %o", err);
});

db.once("open", function() {
  dbLogger("Connection open");
});
