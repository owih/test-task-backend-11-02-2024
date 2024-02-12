const Router = require('express');
const configurationRouter = require('./configurationRouter');

const router = Router();

router.use('/configuration', configurationRouter);

module.exports = router;
