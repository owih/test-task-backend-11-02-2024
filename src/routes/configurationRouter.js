const Router = require('express');
const configurationController = require('../controllers/configurationController');

const router = Router();

router.get('/', configurationController.get);
router.put('/', configurationController.add);
router.post('/', configurationController.count);
router.delete('/', configurationController.delete);

module.exports = router;
