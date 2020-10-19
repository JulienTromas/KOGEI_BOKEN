
exports.up = function(knex) {
    return knex.schema.createTable('categories', function (table) {
        table.increments('id').primary();
        table.string('name', 255);
    }),
    knex.schema.renameTable('prefecture', 'prefectures')
};

exports.down = function(knex) {
  
};
