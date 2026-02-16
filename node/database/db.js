// db.js
const { Pool } = require('pg');
module.exports = new Pool({ user:'postgres', password:'postgres', host:'localhost', database:'postgres', port:5432, schema:'public' });
