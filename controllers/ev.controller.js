const router = require('express-promise-router')();
const evService = require('../services/ev.service');



router.route('/')
    .get(evService.getAll)
    .post(evService.newev)
    .delete(evService.deleteAll)

router.route('/:evId')
    .get(evService.getev)
    .put(evService.updateev)
    .delete(evService.deleteev)
    
module.exports = router;