// DEPENDENCIES----------------------
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// SETS UP THE EXPRESS APP---------
const app = express();
const PORT = process.env.PORT || 3000;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING---------
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening---------------
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
