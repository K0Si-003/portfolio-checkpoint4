const mysql = require('mysql');

class Database {
  init () {
    let config = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      connectionLimit: 10,
      multipleStatements: true
    };
    this.connection = mysql.createPool(config);
    return this;
  }

  query (...args) {
    return new Promise((resolve, reject) => {
      this.connection.query(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  closeConnection () {
    return new Promise((resolve, reject) => {
      if (this.connection) {
        this.connection.end((err, res) => {
          if (err) reject(err);
          else resolve();
        });
      } else {
        return resolve();
      }
    });
  }
}

module.exports = (new Database()).init();