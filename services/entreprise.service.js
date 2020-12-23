const { Entreprise } = require('../models/entreprise');

module.exports = {

    getAll: async (req, res, next) => {
        const Entreprises = await Entreprise.find({});
        res.status(200).json(Entreprises);
    },
    newEntreprise: async (req, res, next) => {
        Entreprise = new Entreprise(req.body);  
        await Entreprise.save();
        res.status(201).json((Entreprise));
    },
   
    getEntreprise: async (req, res, next) => {

        const Entreprise = await Entreprise.findById(req.params.EntrepriseId);
        res.status(200).json(Entreprise);
},

    // PATCH || PUT
    updateEntreprise: async (req, res, next) => {
        const newEntreprise = req.body
      
            const Entreprise = await Entreprise.findByIdAndUpdate(req.params.EntrepriseId, newEntreprise);
        
        res.status(200).json(newEntreprise);
    },

    deleteEntreprise: async (req, res, next) => {
        const Entreprise = await Entreprise.findOneAndDelete(req.params.EntrepriseId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'Entreprise not found' });
            }
            res.json({ success: true, msg: 'Entreprise deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const Entreprises = await Entreprise.deleteMany();
        res.status(200).json('success');
    },

}
