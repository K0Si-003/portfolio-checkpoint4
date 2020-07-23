const Project = require('../models/project.model.js');

class ProjectController {
  constructor (project) {
    this.id = project.id;
    this.name = project.name;
    this.detail = project.detail;
    this.img_url = project.img_url;
  }

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

  static async addOne (req, res) {
    console.log(req.body)
    try {
/*       const projectPayload = {
        name: req.body.name,
        details: req.body.details,
        img_url: req.body.img_url
      }; */
      const newProject = await Project.create(req.body);
      res.status(201).send(newProject);
    } catch (err) {
      console.error(err);
      res.status(500).send({
        errorMessage: err.message || `Some error occurred while trying to create project ${req.body.name}.`
      });
    }
  }

  static async updateOne (req, res) {
    console.log(req.body)
    if (!req.body) {
      res.status(400).send({ errorMessage: 'Content can not be empty!' });
    }
    try {
      const data = await Project.update(req.params.id, req.body);
      res.status(200).send(data);
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ errorMessage: `Project with id ${req.params.id} not found.` });
      } else {
        res.status(500).send({ errorMessage: 'Error updating project with id ' + req.params.id });
      }
    }
  }

  static async removeOne (req, res) {
    try {
      await Project.delete(req.params.id);
      res.send({ message: 'Project was deleted successfully!' });
    } catch (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found project with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete project with id ' + req.params.id + err
        });
      }
    }
  }
  
}

module.exports = ProjectController;