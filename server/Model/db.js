"use strict";

//get mongoose ORM
const mongoose = require("mongoose");

//get dotenv
require('dotenv').config();

//stop logging to console
mongoose.set("strictQuery", false);

//connect to server mongoDB IIFE
(async function Connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("DB error: ", error);
  }
})();

//export Ingredient model for ingredients-model file
module.exports = mongoose;
