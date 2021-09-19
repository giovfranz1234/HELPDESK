

 const pg = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'qwerty',
    database : 'HELPDESK',
    port:'5432'
  },
   pool :{min:3, max:8}
});

 

 module.exports = pg;