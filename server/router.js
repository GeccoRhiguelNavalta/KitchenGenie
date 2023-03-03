'use strict';

//get router from express
const router = require('express').Router();

//bring in control ingredients functions
const {retrieveIngredients, addIngredients, deleteIngredient} = require('./Control/Ingredients-control');

//bring in control API functions
const {getRecipes} = require('./Control/API-control');

//use rate limiter middleware
const { requestRateLimiter } = require('./Middleware/rate-limiter');

//direct requests end points
router.post('/add', addIngredients);
router.get('/list', retrieveIngredients);
router.delete('/:id', deleteIngredient)

/*direct API-DB request end point
//request limiter avoids client side over loading API calls due to cost
quota is only 10 calls per minute */
router.get('/recipe',requestRateLimiter, getRecipes);

//export router for server link
module.exports = router;
