import mongoose from "mongoose";

const { MONGO_URL = "" } = process.env;

mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("connection opened");
});
