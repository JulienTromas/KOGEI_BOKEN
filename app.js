const knexfile = require ("./knexfile");
const knex = require('knex')(knexfile.development);
//     client: 'postgres',
//     connection: {
//       host : '127.0.0.1',
//       user : 'julientromas',
//     //   password : 'your_database_password',
//       database : 'solo_api'
//     }
//   });

const users = knex.select().table('areas').
then((rows) => console.log(rows));

const express = require ("express");

const app = express();

// server static files
app.use(express.static("./client"));

app.listen(4000, () => {
    console.log("Listening @ 4000");
})


// knex.schema.createTable('prefecture', function (table) {
//     table.increments();
//     table.int('id');
//     table.string('name');
//     table.int('area_id');
// }),
// knex.schema.table('prefecture', function (table) {
//     table.foreign('area_id').references('area.id')
//   })  