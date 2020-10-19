
exports.up = function(knex) {
    return knex.schema.createTable('areas', function (table) {
        table.increments();
        table.int('id');
        table.string('name');
      })
};

exports.down = function(knex) {
  
};
