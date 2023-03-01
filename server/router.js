'use strict';

//get router from express
const router = require('express').Router();

//bring in control ingredients functions
const {retrieveIngredients, addIngredient, deleteIngredient} = require('./Control/Ingredients-control');

//bring in control API functions
const {getRecipes} = require('./Control/API-control');

//direct requests end points
router.post('/add', addIngredient);
router.get('/list', retrieveIngredients);
router.delete('/:id', deleteIngredient)

//direct API-DB request end point
router.get('/recipe', getRecipes);

//export router for server link
module.exports = router;
