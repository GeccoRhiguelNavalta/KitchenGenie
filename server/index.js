'use strict';

//get express
const express = require('express');

//get cors
const cors = require('cors');

//get dotenv
require('dotenv').config();

//get path
const path = require('path');

//initiate instance of express
const app = express();

//declare port
const PORT = process.env.PORT || 3001;

//initiate cors middleware
app.use(cors());

//initiate and json middleware
app.use(express.json());

//link router
const router = require('./router');

//initiate router
app.use(router);

//serve front end
// app.use(express.static(path.join(__dirname, "./kitchengenie/build")));

// app.get("*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./kitchengenie/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

//connect server
app.listen(PORT, () => {
  console.log(`server connected`);
});
