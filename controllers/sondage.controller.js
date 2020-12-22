const router = require('express-promise-router')();
const sondageService = require('../services/sondage.service');



router.route('/')
    .get(sondageService.getAll)
    .post(sondageService.newsondage)
    .delete(sondageService.deleteAll)

router.route('/:sondageId')
    .get(sondageService.getsondage)
    .put(sondageService.updatesondage)
    .delete(sondageService.deletesondage)
    
module.exports = router;