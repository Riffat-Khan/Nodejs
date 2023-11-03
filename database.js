const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Saima@1100',
  database: 'e_commerce',
};

const dbConnection =
  mysql.createPool(dbConfig);

module.exports = dbConnection.promise();