"use strict";

const {
  getIngredients,
  postIngredients,
  removeIngredient,
} = require("../Model/Ingredients-model");

const addIngredients = async (request, response) => {
  try {
    const mongodbIng = await postIngredients(request.body.ingredients);
    response.status(201);
    response.send(mongodbIng);
  } catch (error) {
    console.error("error :");
    response.sendStatus(400);
  }
};

const retrieveIngredients = async (request, response) => {
  try {
    const ing = await getIngredients();
    response.status(200);
    response.send(ing);
  } catch (error) {
    console.error("error :");
    response.sendStatus(500);
  }
};

const deleteIngredient = async (request, response) => {
  try {
    await removeIngredient(request.params.id);
    response.status(201);
  } catch (error) {
    console.error("error :");
    response.sendStatus(400);
  }
};

module.exports = { retrieveIngredients, addIngredients, deleteIngredient };
