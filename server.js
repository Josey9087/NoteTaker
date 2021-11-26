// All requires
const express = require('express');
// This is specifically used because of issues deploying heroku page
const PORT = process.env.PORT || 3001;
const HTML = require('./routes/htmlroutes')
const API = require('./routes/apiRoutes')

// Setting express to app
app = express();

// Using public as static file to be served.
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use(API);

app.use(HTML);
// express listens on whatever port is defaulted if none it uses 3001
app.listen(process.env.PORT || 3001, function(){
    console.log(`Listening on port ${PORT}`)
});