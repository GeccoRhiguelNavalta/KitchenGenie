"use strict";

//get mongoose ORM
const mongoose = require("mongoose");

//stop logging to console
mongoose.set("strictQuery", false);

//make schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

//connect to server mongoDB IIFE
(async function Connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ingredients");
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("DB error: ", error);
  }
})();

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

//export Ingredient model for ingredients-model file
module.exports = Ingredient;
