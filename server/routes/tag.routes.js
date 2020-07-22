const router = require('express').Router();
const tagsController = require('../controllers/tag.controller.js');

router.get('/', tagsController.findAll);

module.exports = router;