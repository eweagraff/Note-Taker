const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

//from request object pulling id parameter, one way to get information from front end, adding to the params object
router.get("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  return res.json(notes);
});

//creates a post request to allow user to create a new note
router.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  // creates a new variable to retrieve user input for a new note
  const newNote = req.body;

  newNote.id = uuidv4();
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes), "utf-8");
  return res.json(newNote);
});

// user sends a get request to access index directory and notes directory
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

router.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

//const uniqueId = req.params.id;
module.exports = router;
