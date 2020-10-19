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

app.get("/kougei_bouken/areas", (req, res) => {
  knex
    .from('areas')
    .select()
    .then(data => res.send(data))}),

app.get("/kougei_bouken/areas/id", (req, res) => {
  knex
    .from('areas')
    .select('id')
    .then(data => res.send(data))}),

app.get("/kougei_bouken/areas/name", (req, res) => {
  knex
    .from('areas')
    .select('name')
    .then(data => res.send(data))}),

app.get("/kougei_bouken/prefecture", (req, res) => {
  knex
    .from('prefecture')
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

app.get("/kougei_bouken/crafts/name", (req, res) => {
  knex
    .from('crafts')
    .select('english_name', 'japanese_name')
    .then(data => res.send(data))}),

app.get("/kougei_bouken/crafts/name/:englishOrJapanese", (req, res) => {
  const languageParameter = req.params.englishOrJapanese;
  if(languageParameter.toLowerCase() === 'english'){
    knex
    .from('crafts')
    .select('english_name')
    .then(data => res.send(data))
  }
  else if(languageParameter.toLowerCase() === 'japanese'){
    knex
    .from('crafts')
    .select('japanese_name')
    .then(data => res.send(data))}
  else { res.send(400)}
  }),

app.delete("/kougei_bouken/discovery_list/:id", (req, res) => {
    knex('discovery_list')
    .where({ id: req.params.id })
    .del()
    .then((data) => {
        res.sendStatus(200)
    })
  }),

  app.patch("/kougei_bouken/discovery_list/:id/:newPrefecturename", async (req, res) => {
    knex('discovery_list')
        .where({ id: req.params.id })
        .update({ prefecture_name: req.params.newPrefecturename })
        .then(() => {
            res.sendStatus(200);
        })
});

app.post("/kougei_bouken/discovery_list/:id/:prefectureName/:categoryName/:englishName/:japaneseName/:adress/:openingHours", (req, res) => {
  const newId = req.params.id;
  const newPrefName = req.params.prefectureName;
  const newCategoryName = req.params.categoryName;
  const newEnglishName = req.params.englishName;
  const newJapaneseName = req.params.japaneseName;
  const newAdress = req.params.adress;
  const newOpeningHours = req.params.openingHours;
    knex('discovery_list')
        .insert({ 
            id: newId,
            prefecture_name: newPrefName,
            category_name: newCategoryName,
            english_name: newEnglishName,
            japanese_name: newJapaneseName,
            adress: newAdress,
            openingHours : newOpeningHours
        })
        .then(() => {
            console.log('Added a new location to the list');
            res.sendStatus(201);
        })
});

app.listen(4000, () => {
    console.log("Listening @ 4000");
})