const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    coins: {
        type: Number,
        default: 0
    },
    wallet: {
        type: String,
        default: ""
    }
});


     
module.exports = mongoose.model('Users', userSchema);
