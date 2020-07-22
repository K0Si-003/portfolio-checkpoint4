const db = require('../db.js');

class Tag {
  constructor (tag) {
    this.id = tag.id;
    this.name = tag.name;
  }

  static async getAll () {
    return db.query(`SELECT id, name FROM tag`);
  }

}

module.exports = Tag;