//DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');

//PORT
const port =  3000;

//ROUTES
const artist = require('./routes/artist');
const general = require('./routes/general');

const app = express();


app.use(bodyParser.json());

app.use('/artist', artist);
app.use('/general', general);

app.get('/', (req, res) => {
    res.send('Fake Server Working!');
});

app.listen(port, () => {
    console.log('Listening on ' + port )
});