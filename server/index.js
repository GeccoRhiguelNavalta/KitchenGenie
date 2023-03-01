'use strict';

//get express
const express = require('express');

//get cors
const cors = require('cors');

//get dotenv
require('dotenv').config();

//initiate instance of express
const app = express();

//declare port
const PORT = process.env.PORT;

//initiate cors middleware
app.use(cors());

//initiate and json middleware
app.use(express.json());

//link router
const router = require('./router');

//initiate router
app.use(router);

//connect server
app.listen(PORT, () => {
  console.log(`server connected`);
});
