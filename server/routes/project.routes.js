const router = require('express').Router();
const projectsController = require('../controllers/project.controller.js');

router.get('/', projectsController.findAll);
router.get('/:id', projectsController.findOne);
router.post('/create', projectsController.addOne);
router.patch('/update/:id', projectsController.updateOne);
router.delete('/delete/:id', projectsController.removeOne);

module.exports = router;