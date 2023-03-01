"use strict";

//link db and get schema(ORM)
const Ingredient = require("./db");

//'postIngredient' function for control
const postIngredient = (newItem) => {
  Ingredient.create(newItem);
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
module.exports = { postIngredient, getIngredients, removeIngredient };
