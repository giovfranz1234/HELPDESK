

 const pg = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'qwerty',
    database : 'postgres'
  },
   pool :{min:2, max:8}
});

 

 module.exports = pg;