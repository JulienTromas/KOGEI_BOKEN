
exports.up = function(knex) {
    return knex.schema.createTable('categories', function (table) {
        table.increments('id').primary();
        table.string('name', 255);
    })
};

exports.down = function(knex) {
  
};
