
exports.up = function(knex) {
    return knex.schema.createTable('prefectures', function (table) {
        table.increments('id').primary();
        table.string('name', 100);
        table.integer('area_id');
        table.foreign('area_id').references('areas.id');
    })
};

exports.down = function(knex) {
  
};
