const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sondageSchema = new Schema({

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


const Sondage = mongoose.model('sondage', sondageSchema);
module.exports.Sondage = Sondage;

