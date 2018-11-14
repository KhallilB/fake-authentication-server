const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    email: String,
    password: String,
    artist_name: String,
    description: String,
    location: String,
    age: Number
});

module.exports = mongoose.model('artist', artistSchema, 'artist');