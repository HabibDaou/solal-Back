const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moteurSchema = new Schema({

    label: {
        type: String,
        required: true
    },
    puissance: {
        type: Number,
        required: true
    },
    marque: {
        type: String,
       
    },
    fabrictaionAnne: {
        type: Date,
       
    }
});


const Moteur = mongoose.model('moteur', moteurSchema);
module.exports.Moteur = Moteur;

