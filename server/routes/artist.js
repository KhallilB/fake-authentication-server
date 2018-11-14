const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//DATABASE
const db = 'mongodb://KhallilB:khaliboy2@ds061370.mlab.com:61370/fake-tonikdb';
mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) { 
        console.log(err)
    } else {
        console.log('Connected to MongoDB')
    }
});

//MODELS 
const Artist = require('../models/artist');
const General = require('../models/general');

//ARTIST SIGNUP 
router.post('/signup', (req, res) => {
    let artistData = req.body
    let artist = new Artist(artistData)

    artist.save((err, signedUpArtist) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(signedUpArtist)
        }
    });
});

//ARTIST LOGIN
router.post('/login', (req, res) => {
    let artistData = req.body
    
})



//EXPORTING ROUTER
module.exports = router