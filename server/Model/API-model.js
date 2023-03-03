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
  let ings = [];
    ingredients.map((item)=> {
      ings.push(item.name);
    })
  const results = await fetch(
    `${apiURL}/?type=public&q=${ings}&app_id=${apiID}&app_key=${apiKey}`
  ).then((response) => response.json());
  return results;
};

//export functions for control
module.exports = { getMatchedRecipes };
