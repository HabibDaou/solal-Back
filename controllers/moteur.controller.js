const router = require('express-promise-router')();
const moteurService = require('../services/moteur.service');



router.route('/')
    .get(moteurService.getAll)
    .post(moteurService.newmoteur)
    .delete(moteurService.deleteAll)

router.route('/:moteurId')
    .get(moteurService.getmoteur)
    .put(moteurService.updatemoteur)
    .delete(moteurService.deletemoteur)
    
module.exports = router;