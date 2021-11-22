const express = require('express');
const PORT = 3001;
const HTML = require('./routes/htmlRoutes')
const API = require('./routes/apiRoutes')

app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use('/api', API);

app.use('/', HTML);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});