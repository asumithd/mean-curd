const { Router } = require('express');
const router = Router();

const imgctrl = require('../controllers/img.controller')

router.get('/',imgctrl.getImgs);
router.get('/:id',imgctrl.getImg);
router.put('/:id',imgctrl.editImg);
router.delete('/:id',imgctrl.deleteImg);
router.post('/',imgctrl.createImg);
router.post('/test',imgctrl.bulkimg);

module.exports = router;