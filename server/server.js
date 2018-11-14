const express = require('express');
const bodyParser = require('body-parser');

const port =  3000;

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Fake Server Working!');
});

app.listen(port, () => {
    console.log('Listening on ' + port )
});