import debug from "debug";
import mongoose from "mongoose";

const { MONGO_URL = "" } = process.env;

const dbLogger = debug("ingreteka:db");

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", err => {
  dbLogger("Error %o", err);
});

db.once("open", () => {
  dbLogger("Connection open");
});
