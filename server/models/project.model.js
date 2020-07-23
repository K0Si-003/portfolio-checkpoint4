const db = require('../db.js');

class Project {
/*   constructor (tag) {
    this.id = tag.id;
    this.name = tag.name;
  } */

  static async getAll () {
    return db.query(`SELECT * FROM project`);
  }

  static async getById (id) {
    return db.query(`
    SELECT
    p.id,
    p.name,
    p.details,
    p.img_url,
    t.name
    FROM project p
    JOIN tag_by_project tp
    ON tg.project_id = p.id
    JOIN tag t
    ON tg.tag_id = t.id
    WHERE p.id = ?`, id)
    .then(rows => {
      if (rows.length) {
        const tabTag = [];
        rows.forEach(r => {
          if (r.name) tabTag.push(r.name);
        });
        const p = rows[0];
        return Promise.resolve({
          id: p.id,
          name: p.name,
          details: p.details,
          imgUrl: p.img_url,
          tags: tabTag
        });
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }
}

module.exports = Project;