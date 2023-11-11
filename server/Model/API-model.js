"use strict";

require("dotenv").config();

const Ingredient = require("./db");

const { getIngredients } = require("./Ingredients-model");
const apiID = `${process.env.API_ID}`;
const apiKey = `${process.env.API_KEY}`;
const apiURL = "https://api.edamam.com/api/recipes/v2";

const getMatchedRecipes = async () => {
  const ingredients = await getIngredients();
  let ings = [];
  ingredients.map((item) => {
    ings.push(item.name);
  });
  const results = await fetch(
    `${apiURL}/?type=public&q=${ings}&app_id=${apiID}&app_key=${apiKey}`
  ).then((response) => response.json());
  return results;
};

module.exports = { getMatchedRecipes };
