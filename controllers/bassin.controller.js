const router = require('express-promise-router')();
const bassinService = require('../services/bassin.service');



router.route('/')
    .get(bassinService.getAll)
    .post(bassinService.newbassin)
    .delete(bassinService.deleteAll)

router.route('/:bassinId')
    .get(bassinService.getbassin)
    .put(bassinService.updatebassin)
    .delete(bassinService.deletebassin)
    
module.exports = router;