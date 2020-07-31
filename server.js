// DEPENDENCIES----------------------
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// SETS UP THE EXPRESS APP---------
const app = express();
const PORT = process.env.PORT || 3000;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MIDDLEWARE ACTIVATION:
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET API NOTES:
app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", function (err, data) {
    var note = JSON.parse(data);
    res.json(note);
    console.log(note);
  });
});

// STARTS THE SERVER TO BEGIN LISTENING---------------
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
