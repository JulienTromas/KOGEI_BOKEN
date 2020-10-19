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

// const users = knex.select().table('prefecture').
// then((rows) => console.log(rows));

const express = require ("express");
const app = express();

// server static files
app.use(express.static("./client"));

app.get("/kogei_tabi/areas", (req, res) => {
  knex
    .from('areas')
    .select()
    .then(data => res.send(data))}),

app.get("/kogei_tabi/areas/id", (req, res) => {
  knex
    .from('areas')
    .select('id')
    .then(data => res.send(data))}),

app.get("/kogei_tabi/areas/name", (req, res) => {
  knex
    .from('areas')
    .select('name')
    .then(data => res.send(data))}),

app.get("/kogei_tabi/prefecture", (req, res) => {
  knex
    .from('prefecture')
    .select()
    .then(data => res.send(data))}),

app.get("/kogei_tabi/categories", (req, res) => {
  knex
    .from('categories')
    .select()
    .then(data => res.send(data))}),

app.get("/kogei_tabi/crafts", (req, res) => {
  knex
    .from('crafts')
    .select()
    .then(data => res.send(data))}),

app.get("/kogei_tabi/crafts/", (req, res) => {
  knex
    .from('crafts')
    .select()
    .then(data => res.send(data))}),

app.get("/kogei_tabi/crafts", (req, res) => {
  knex
    .from('crafts')
    .select()
    .then(data => res.send(data))}),


app.listen(4000, () => {
    console.log("Listening @ 4000");
})