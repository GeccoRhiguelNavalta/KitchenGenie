"use strict";

const { getMatchedRecipes } = require("../Model/API-model");

const getRecipes = async (request, response) => {
  try {
    let result = await getMatchedRecipes();
    response.status(201);
    response.send(result.hits);
  } catch (error) {
    console.log("error :", error);
    response.sendStatus(400);
  }
};

module.exports = { getRecipes };
