"use strict";

const mongoose = require("./db");
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

const postIngredients = (newItems) => {
  return Promise.all(
    newItems.map(
      async (item) =>
        await Ingredient.create({
          name: item,
        })
    )
  );
};

const getIngredients = () => {
  return Ingredient.find();
};

const removeIngredient = (id) => {
  return Ingredient.findByIdAndRemove(id);
};

module.exports = { postIngredients, getIngredients, removeIngredient };
