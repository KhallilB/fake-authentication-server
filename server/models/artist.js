const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    email: String,
    password: String,
    artist_name: String,
    description: String,
    location: String,
    age: Number
});