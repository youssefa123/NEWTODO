const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Egypt123!',
    host: 'localhost',
    port: 5432,
    database: 'newtodo'
});

module.exports = pool;