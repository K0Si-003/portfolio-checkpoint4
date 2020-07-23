const router = require('express').Router();
const projectsController = require('../controllers/project.controller.js');

router.get('/', projectsController.findAll);
router.get('/:id', projectsController.findOne);

module.exports = router;