const router = require('express').Router();
var uniqid = require('uniqid');
const { readFromFile, readAndAppend, writeToFile } = require('../helper/helper');

router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  )
    .catch((err) => console.log(err))
});

router.post('/api/notes', (req, res) => {
  const newNote = req.body
  newNote.id = uniqid()

  readAndAppend(newNote, './db/db.json');

  res.json(newNote);

});

router.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  readFromFile('./db/db.json').then((data) => {
    Notes = JSON.parse(data).filter(data => data.id != id);
    const newNote = writeToFile('./db/db.json', Notes);
    res.json(newNote);
  }
  )
    .catch((err) => console.log(err));
});

module.exports = router;