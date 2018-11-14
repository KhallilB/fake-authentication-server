const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generalSchema = new Schema ({
    donator_name: String,
    email: String,
    password: String,
    description: String
});

module.exports = mongoose.model('general', generalSchema, 'general')