const router = require('express').Router();
const elderController = require('../controllers/elderController');

router.get('/', elderController.getElders);

module.exports = router;