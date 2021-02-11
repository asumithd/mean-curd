const { Router } = require('express');
const router = Router();

const companyctrl = require('../controllers/company.controller')

router.get('/',companyctrl.getCompanys);
router.get('/:id',companyctrl.getCompany);
router.put('/:id',companyctrl.editCompany);
router.delete('/:id',companyctrl.deleteCompany);
router.post('/',companyctrl.createCompany);
router.post('/test',companyctrl.bulkcompany);

module.exports = router;