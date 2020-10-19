
exports.up = function(knex) {
    return knex.schema.createTable('areas', function (table) {
        table.increments('id').primary();
        table.string('name', 100);
      })
};

exports.down = function(knex) {
  
};
