const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evSchema = new Schema({

    label: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    },
    taille: {
        type: Number,
        required: true
    },
    puissance: {
        type: Number,
        required: true
    }

});


const Ev = mongoose.model('ev', evSchema);
module.exports.Ev = Ev;

