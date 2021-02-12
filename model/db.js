const connection = require('./connection');

module.exports = {
  getAllEntriesInTable(table) {
    return connection.promisifiedQuery(`SELECT * FROM ${table}`);
  },

  addToTable(table, data) {
    return connection.promisifiedQuery(`INSERT INTO ${table} SET ?`, data);

  },
  removeFromTable(table, id) {
    return connection.promisifiedQuery(`DELETE FROM ${table} WHERE id=?`, id);
  }
}

