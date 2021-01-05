const knexfile = require ("./knexfile");
const knex = require('knex')(knexfile.development);


const express = require ("express");
const app = express();

// server static files
app.use(express.static("./client"));

app.get("/kougei_bouken/areas", (req, res) => {
  knex
    .from('areas')
    .select()
    .then(data => res.send(data))}),

app.get("/kougei_bouken/prefectures", (req, res) => {
  knex
    .from('prefectures')
    .select()
    .then(data => res.send(data))}),

app.get("/kougei_bouken/area/:id/prefectures", (req, res) => {
  knex
    .from('prefectures')
    .where({ area_id: req.params.id })
    .select()

    .then(data => res.send(data))}),

app.get("/kougei_bouken/categories", (req, res) => {
  knex
    .from('categories')
    .select()
    .then(data => res.send(data))}),

app.get("/kougei_bouken/crafts", (req, res) => {
  knex
    .from('crafts')
    .select()
    .then(data => res.send(data))}),

app.get("/kougei_bouken/prefecture/:id/crafts", (req, res) => {
  knex
    .from('crafts')
    .where({ prefecture_id: req.params.id })
    .select()

    .then(data => res.send(data))}),

app.get("/kougei_bouken/prefecture/:id/crafts", (req, res) => {
  knex
    .from('crafts')
    .where({ prefecture_id: req.params.id })
    .select()

    .then(data => res.send(data))}),

app.get("/kougei_bouken/category/:id/crafts", (req, res) => {
  knex
    .from('crafts')
    .where({ category_id: req.params.id })
    .select()

    .then(data => res.send(data))}),

app.delete("/kougei_bouken/prefecture/:id", async (req, res) => {
  knex('prefectures')
    .where({ id: req.params.id })
    .del()
    .then((data) => {
        res.sendStatus(200)})}),

app.patch("/kougei_bouken/area/:id/:newName", async (req, res) => {
    knex('areas')
        .where({ id: req.params.id })
        .update({ name: req.params.newName })
        .then(() => {
            res.sendStatus(200);
        })}),

app.post("/kougei_bouken/prefectures/:id/:name/:areaId", async (req, res) => {

  const newId = req.params.id;
  const newPrefName = req.params.name;
  const newAreaName = req.params.areaId;

  knex('prefectures')
  .insert({ 
      id: newId,
      name: newPrefName,
      area_id: newAreaName
  })
  .then(() => {
      console.log('Added a new location to the list');
      res.sendStatus(201);
  })}),

app.listen(4000, () => {
    console.log("Listening @ 4000");
});
