"use strict";

//get dotenv
require('dotenv').config();

//link db and get schema(ORM)
const Ingredient = require("./db");

//reuse model function from ingredients model
const { getIngredients } = require("./Ingredients-model");

//apiID
const apiID = `${process.env.API_ID}`;

//apiKey
const apiKey = `${process.env.API_KEY}` ;

//apiURL
const apiURL = "https://api.edamam.com/api/recipes/v2";

//'getMatchedRecipes' function for control
const getMatchedRecipes = async () => {
  const ingredients = await getIngredients();
  let ing = '';
  ingredients.map((item) => {
    ing = item.name;
  });
  const results = await fetch(
    `${apiURL}/?type=public&q=${ing}&app_id=${apiID}&app_key=${apiKey}`
  ).then((response) => response.json());
  return results;
};

//export functions for control
module.exports = { getMatchedRecipes };
