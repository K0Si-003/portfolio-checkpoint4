const Project = require('../models/project.model.js');

class ProjectController {

  static async findAll (req, res) {
    try {
      const data = await Project.getAll();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving booking requests.'
      });
    }
  }

  static async findOne (req, res) {
    try {
      const data = await Project.getById(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Project with id ${req.params.id} not found.` });
      } else {
        console.error(err);
        res.status(500).send({ errorMessage: 'Error retrieving project with id ' + req.params.id });
      }
    }
  }

}

module.exports = ProjectController;