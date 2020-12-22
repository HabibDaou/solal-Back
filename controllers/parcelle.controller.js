const router = require('express-promise-router')();
const parcelleService = require('../services/parcelle.service');



router.route('/')
    .get(parcelleService.getAll)
    .post(parcelleService.newparcelle)
    .delete(parcelleService.deleteAll)

router.route('/:parcelleId')
    .get(parcelleService.getparcelle)
    .put(parcelleService.updateparcelle)
    .delete(parcelleService.deleteparcelle)
    
module.exports = router;