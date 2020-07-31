// DEPENDENCIES----------------------
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainDir = path.join(__dirname, "/public");
// SETS UP THE EXPRESS APP---------
const app = express();
const PORT = process.env.PORT || 3000;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// GET API NOTES:
app.get("/notes", function (req, res) {
    res.sendFile(path.join(mainDir, "notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.get("/api/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(mainDir, "index.html"));
});

// POST API NOTES:
app.post("/api/notes", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = savedNotes.length.toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Note saved to db.json. Content: ", newNote);
    res.json(savedNotes);
});

// DELETE API NOTES:
app.delete("/api/notes/:id", function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    console.log(`Deleting note with ID ${noteID}`);
    savedNotes = savedNotes.filter((currNote) => {
        return currNote.id != noteID;
    });

    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});

// STARTS THE SERVER TO BEGIN LISTENING---------------
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});