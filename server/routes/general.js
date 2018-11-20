const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//DATABASE
const db = 'mongodb://KhallilB:khaliboy2@ds061370.mlab.com:61370/fake-tonikdb';
mongoose.connect(db, { useNewUrlParser: true }, err => {
    if (err) { 
        console.log(err)
    } else {
        console.log('Connected to MongoDB !General!')
    }
});

//MODELS 
const General = require('../models/general');

//GENERAL SIGNUP
router.post('/signup', (req, res) => {
    let generalData = req.body
    let general = new General(generalData)

    general.save((err, signedUpGeneral) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(signedUpGeneral)
        }
    });
});

//GENERAL LOGIN
router.post('/login', (req, res) => {
    let generalData = req.body 

    General.findOne({ email: generalData.email }, (err, general) => {
        if (err) {
            console.log(err)
        } else {
            if (!general) {
                res.status(401).send('Invalid Email.')
            } else {
                if (general.password !== generalData.password) {
                    res.status(401).send('Invalid Password.')
                } else {
                    res.status(200).send(general)
                }
            }
        }
    });
});

module.exports = router