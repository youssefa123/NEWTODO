const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'Postgres',
    password: 'Egypt123!',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;