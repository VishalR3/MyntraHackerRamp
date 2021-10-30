const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId
    },
    username: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        default: 0
    },
    debit: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        required: true
    },
    date: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
});


     
module.exports = mongoose.model('Transactions', transactionSchema);