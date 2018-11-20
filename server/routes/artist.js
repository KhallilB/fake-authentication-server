const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//DATABASE
const db = 'mongodb://KhallilB:khaliboy2@ds061370.mlab.com:61370/fake-tonikdb';
mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) { 
        console.log(err)
    } else {
        console.log('Connected to MongoDB !Artists!')
    }
});

//MODEL
const Artist = require('../models/artist');

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

    Artist.findOne({ email: artistData.email }, (err, artist) => {
        if(err) {
            console.log(err)
        } else {
            if (!artist) {
                res.status(401).send('Invalid Email.')
            } else {
                if (artist.password !== artistData.password) {
                    res.status(401).send('Invalid Password.')
                } else {
                    res.status(200).send(artist)
                }
            }
        }
    })
    
})



//EXPORTING ROUTER
module.exports = router