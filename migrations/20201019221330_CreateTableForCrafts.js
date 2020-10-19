
exports.up = function(knex) {
    return knex.schema.createTable('crafts', function (table) {
        table.increments('id').primary();
        table.string('english_name', 255);
        table.string('japanese_name', 255);
        table.integer('prefecture_id');
        table.foreign('prefecture_id').references('prefecture.id');
        table.integer('category_id');
        table.foreign('category_id').references('categories.id');
      })
};

exports.down = function(knex) {
  
};
