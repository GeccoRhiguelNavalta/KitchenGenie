"use strict";

//get mongoose ORM
const mongoose = require("mongoose");

//stop logging to console
mongoose.set("strictQuery", false);

//connect to server mongoDB IIFE
(async function Connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ingredients");
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("DB error: ", error);
  }
})();

//export Ingredient model for ingredients-model file
module.exports = mongoose;
