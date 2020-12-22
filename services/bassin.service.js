const { Bassin } = require('../models/bassin');

module.exports = {

    getAll: async (req, res, next) => {
        const bassins = await Bassin.find({});
        res.status(200).json(bassins);
    },
    newbassin: async (req, res, next) => {
        bassin = new Bassin(req.body);  
        await bassin.save();
        res.status(201).json((bassin));
    },
   
    getbassin: async (req, res, next) => {

        const bassin = await Bassin.findById(req.params.bassinId);
        res.status(200).json(bassin);
},

    // PATCH || PUT
    updatebassin: async (req, res, next) => {
        const newbassin = req.body
      
            const bassin = await Bassin.findByIdAndUpdate(req.params.bassinId, newbassin);
        
        res.status(200).json(newbassin);
    },

    deletebassin: async (req, res, next) => {
        const bassin = await Bassin.findOneAndDelete(req.params.bassinId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'bassin not found' });
            }
            res.json({ success: true, msg: 'bassin deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const bassins = await Bassin.deleteMany();
        res.status(200).json('success');
    },

}
