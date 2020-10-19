
exports.up = function(knex) {
    return knex.schema.createTable('prefecture', function (table) {
        table.increments();
        table.int('id');
        table.string('name');
        table.int('area_id');
        table.foreign('area_id').references('area.id');
    })
};

exports.down = function(knex) {
  
};
