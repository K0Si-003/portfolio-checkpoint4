const Tag = require('../models/tag.model.js');

class TagController {

  static async findAll (req, res) {
    try {
      const data = await Tag.getAll();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({
        errorMessage: err.message || 'Some error occurred while retrieving booking requests.'
      });
    }
  }

}

module.exports = TagController;