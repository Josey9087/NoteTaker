const router = require('express').Router();
const { readFromFile } = require('../helper/helper');

router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  )
    .catch((err) => console.log(err))
});

module.exports = router;