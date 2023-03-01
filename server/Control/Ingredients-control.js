'use strict';

// import model functions to control
const { getIngredients, postIngredient, removeIngredient } = require('../Model/Ingredients-model');


//create 'add ingredient' function for router
const addIngredient = async (request, response) => {
  try {
    await postIngredient(request.body);
    response.status(201);
    response.send('added new item');
  } catch (error) {
    console.log('error :', error);
    response.sendStatus(400);
  }
};

//create 'retrtieve ingredients' function for router
const retrieveIngredients = async (request, response) => {
  try {
    const ing = await getIngredients();
    response.status(200);
    response.send(ing);
  } catch (error) {
    console.log('error :', error);
    response.sendStatus(500);
  }
};

//create 'delete ingredient' function for router
const deleteIngredient = async (request, response) => {
  try {
    await removeIngredient(request.params.id);
    response.status(201);
    response.send('removed item');
  } catch (error) {
    console.log('error :', error);
    response.sendStatus(400);
  }
}

//export functions for router
module.exports = { retrieveIngredients, addIngredient, deleteIngredient };
