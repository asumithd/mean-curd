const { Router } = require('express'); 
const router = Router();

const companyctrl = require('../controllers/company.controller')

router.post('/', companyctrl.postmail)

module.exports = router; 
 
