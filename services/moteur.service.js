const { Moteur } = require('../models/moteur');

module.exports = {

    getAll: async (req, res, next) => {
        const moteurs = await Moteur.find({});
        res.status(200).json(moteurs);
    },
    newmoteur: async (req, res, next) => {
        moteur = new Moteur(req.body);  
        await moteur.save();
        res.status(201).json((moteur));
    },
   
    getmoteur: async (req, res, next) => {

        const moteur = await Moteur.findById(req.params.moteurId);
        res.status(200).json(moteur);
},

    // PATCH || PUT
    updatemoteur: async (req, res, next) => {
        const newmoteur = req.body
      
            const moteur = await Moteur.findByIdAndUpdate(req.params.moteurId, newmoteur);
        
        res.status(200).json(newmoteur);
    },

    deletemoteur: async (req, res, next) => {
        const moteur = await Moteur.findOneAndDelete(req.params.moteurId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'moteur not found' });
            }
            res.json({ success: true, msg: 'moteur deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const moteurs = await Moteur.deleteMany();
        res.status(200).json('success');
    },

}
