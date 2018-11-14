const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneralSchema = new Schema ({
    donator_name: String,
    email: String,
    password: String,
    description: String
});