const db = require('../db.js');

class Project {

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
    t.name AS tag
    FROM project p
    JOIN tag_by_project tp
    ON tp.project_id = p.id
    LEFT JOIN tag t
    ON tp.tag_id = t.id
    WHERE p.id = ?`, id)
    .then(rows => {
      if (rows.length) {
        const tabTag = [];
        rows.forEach(r => {
          if (r.tag) tabTag.push(r.tag);
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

  static async create (newProject) {
    return db.query('INSERT INTO project SET ?', [newProject])
      .then(res => {
        newProject.id = res.insertId;
        return newProject;
      });
  }

  static async update (id, project) {
    return db.query(
      'UPDATE project SET name = ?, details = ?, img_url = ? WHERE id = ?',
      [project.name, project.details, project.img_url, id]
    );
  }

  static async delete (id) {
    return db.query('DELETE FROM project WHERE id = ?', [id]).then(res => {
      if (res.affectedRows !== 0) {
        return Promise.resolve();
      } else {
        const err = new Error();
        err.kind = 'not_found';
        return Promise.reject(err);
      }
    });
  }

}

module.exports = Project;