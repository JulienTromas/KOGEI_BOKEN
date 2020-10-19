
exports.up = function(knex) {
    return knex.schema.createTable('discovery_list', function (table) {
        table.increments('id').primary();
        table.string('prefecture_name', 255);
        table.string('category_name', 255);
        table.string('english_name', 255);
        table.string('japanese_name', 255);
        table.string('adress', 255);
        table.string('openingHours', 255);
      })
};

exports.down = function(knex) {
  
};
