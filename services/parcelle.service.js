const { Parcelle } = require('../models/parcelle');

module.exports = {

    getAll: async (req, res, next) => {
        const parcelles = await Parcelle.find({});
        res.status(200).json(parcelles);
    },
    newparcelle: async (req, res, next) => {
        parcelle = new Parcelle(req.body);  
        await parcelle.save();
        res.status(201).json((parcelle));
    },
   
    getparcelle: async (req, res, next) => {

        const parcelle = await Parcelle.findById(req.params.parcelleId);
        res.status(200).json(parcelle);
},

    // PATCH || PUT
    updateparcelle: async (req, res, next) => {
        const newparcelle = req.body
      
            const parcelle = await Parcelle.findByIdAndUpdate(req.params.parcelleId, newparcelle);
        
        res.status(200).json(newparcelle);
    },

    deleteparcelle: async (req, res, next) => {
        const parcelle = await Parcelle.findOneAndDelete(req.params.parcelleId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'parcelle not found' });
            }
            res.json({ success: true, msg: 'parcelle deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const parcelles = await Parcelle.deleteMany();
        res.status(200).json('success');
    },

}
