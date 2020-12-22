const { Sonde } = require('../models/sonde');

module.exports = {

    getAll: async (req, res, next) => {
        const sondes = await Sonde.find({});
        res.status(200).json(sondes);
    },
    newsonde: async (req, res, next) => {
        sonde = new Sonde(req.body);  
        await sonde.save();
        res.status(201).json((sonde));
    },
   
    getsonde: async (req, res, next) => {

        const sonde = await Sonde.findById(req.params.sondeId);
        res.status(200).json(sonde);
},

    // PATCH || PUT
    updatesonde: async (req, res, next) => {
        const newsonde = req.body
      
            const sonde = await Sonde.findByIdAndUpdate(req.params.sondeId, newsonde);
        
        res.status(200).json(newsonde);
    },

    deletesonde: async (req, res, next) => {
        const sonde = await Sonde.findOneAndDelete(req.params.sondeId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'sonde not found' });
            }
            res.json({ success: true, msg: 'sonde deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const sondes = await Sonde.deleteMany();
        res.status(200).json('success');
    },

}
