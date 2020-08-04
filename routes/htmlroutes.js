// DEPENDENCIES===================================
const router = require('express').Router();
const path = require('path')

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Develop/public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
});

// 404 ERROR MESSAGE===============================
router.get("*", (req, res) => {
    res.json("Page Not Found");
});

module.exports = router;