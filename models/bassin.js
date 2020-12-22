const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bassinSchema = new Schema({

    label: {
        type: String,
        required: true
    },
    capacite: {
        type: Number,
        required: true
    },
    nbrFlottant: {
        type: Number,
        required: true
    },
    moteurs: [{
        type: Schema.Types.ObjectId,
        ref: "moteur"
    }],
});


const Bassin = mongoose.model('bassin', bassinSchema);
module.exports.Bassin = Bassin;

