const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parcelleSchema = new Schema({

    label: {
        type: String,
        required: true
    },
    superficie: {
        type: Number,
        required: true
    },
    typeSol: {
        type: String,
        required: true
    },
    typePlante: {
        type: String,
        required: true
    }

});


const Parcelle = mongoose.model('parcelle', parcelleSchema);
module.exports.Parcelle = Parcelle;

