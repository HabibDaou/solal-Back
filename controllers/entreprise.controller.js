const router = require('express-promise-router')();
const EntrepriseService = require('../services/entreprise.service');



router.route('/')
    .get(EntrepriseService.getAll)
    .post(EntrepriseService.newEntreprise)
    .delete(EntrepriseService.deleteAll)

router.route('/:EntrepriseId')
    .get(EntrepriseService.getEntreprise)
    .put(EntrepriseService.updateEntreprise)
    .delete(EntrepriseService.deleteEntreprise)
    
module.exports = router;