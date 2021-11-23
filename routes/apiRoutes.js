const router = require('express').Router();
var uniqid = require('uniqid');
const { readFromFile, readAndAppend } = require('../helper/helper');

router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  )
    .catch((err) => console.log(err))
});

router.post('/api/notes', (req, res) => {
  const newNote= req.body
  newNote.id = uniqid()

     readAndAppend(newNote, './db/db.json');

     res.json(newNote);
 
});

module.exports = router;