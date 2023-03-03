"use strict";

// import model functions to control
const { getMatchedRecipes } = require("../Model/API-model");

//create 'getRecipes' function for router
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
