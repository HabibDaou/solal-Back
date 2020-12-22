const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sondeSchema = new Schema({

    marque: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
    value1: {
        type: Number,
        required: true
    },
    value2: {
        type: Number,
        required: true
    },
    value3: {
        type: Number,
        required: true
    },
    value4: {
        type: Number,
        required: true
    },
    value5: {
        type: Number,
        required: true
    },
    value6: {
        type: Number,
        required: true
    },

});


const Sonde = mongoose.model('sonde', sondeSchema);
module.exports.Sonde = Sonde;

