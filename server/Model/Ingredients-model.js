"use strict";

//link db and get schema(ORM)
const mongoose = require("./db");

//make schema
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

//make model
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

//'postIngredients' function for control
const postIngredients = (newItems) => {
  return Promise.all(newItems.map(async item => await Ingredient.create({
    name: item
  })));
};

//'getIngredients' function for control
const getIngredients = () => {
  return Ingredient.find();
};

//'removeIngredient' function for control
const removeIngredient = (id) => {
 return Ingredient.findByIdAndRemove(id);
};

//export functions for control
module.exports = { postIngredients, getIngredients, removeIngredient };
