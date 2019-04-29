const express = require('express');
const router = express.Router();
const authenticatedMiddleware = require('../middleware/authenticated');

const controller = require('../controllers/coins');

router.use(authenticatedMiddleware);
router.get('/', controller.getFromSession);
router.post('/', controller.create);

module.exports = router;
