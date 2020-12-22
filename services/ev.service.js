const { Ev } = require('../models/ev');

module.exports = {

    getAll: async (req, res, next) => {
        const evs = await Ev.find({});
        res.status(200).json(evs);
    },
    newev: async (req, res, next) => {
        ev = new Ev(req.body);  
        await ev.save();
        res.status(201).json((ev));
    },
   
    getev: async (req, res, next) => {

        const ev = await Ev.findById(req.params.evId);
        res.status(200).json(ev);
},

    // PATCH || PUT
    updateev: async (req, res, next) => {
        const newev = req.body
      
            const ev = await Ev.findByIdAndUpdate(req.params.evId, newev);
        
        res.status(200).json(newev);
    },

    deleteev: async (req, res, next) => {
        const ev = await Ev.findOneAndDelete(req.params.evId).exec(function (err, item) {
            if (err) {
                return res.json({ success: false, msg: 'Cannot remove item' });
            }
            if (!item) {
                return res.status(404).json({ success: false, msg: 'ev not found' });
            }
            res.json({ success: true, msg: 'ev deleted.' });
        });
    },
    deleteAll: async (req, res, next) => {
        const evs = await Ev.deleteMany();
        res.status(200).json('success');
    },

}
