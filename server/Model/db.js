"use strict";

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

(async function Connect() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("DB error: ", error);
  }
})();

module.exports = mongoose;
