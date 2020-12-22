const { Sondage } = require('../models/sondage');

module.exports = {

    getAll: async (req, res, next) => {
        const sondages = await Sondage.find({});
        res.status(200).json(sondages);
    },
    newsondage: async (req, res, next) => {
        sondage = new Sondage(req.body);  
        await sondage.save();
        res.status(201).json((sondage));
    },
   
    getsondage: async (req, res, next) => {

        const sondage = await Sondage.findById(req.params.sondageId);
        res.status(200).json(sondage);
},

    // PATCH || PUT
    updatesondage: async (req, res, next) => {
        const newsondage = req.body
      
            const sondage = await Sondage.findByIdAndUpdate(req.params.sondageId, newsondage);
        
        res.status(200).json(newsondage);
    },

    deletesondage: async (req, res, next) => {
        const sondage = await Sondage.findOneAndDelete(req.params.sondageId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'sondage not found' });
            }
            res.json({ success: true, msg: 'sondage deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const sondages = await Sondage.deleteMany();
        res.status(200).json('success');
    },

}
