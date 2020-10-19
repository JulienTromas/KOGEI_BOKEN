
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Ceramic'},
        {id: 2, name: 'Woven textiles'},
        {id: 3, name: 'Dyed textiles'},
        {id: 4, name: 'Other textiles'},
        {id: 5, name: 'Wood, bamboo crafts'},
        {id: 6, name: 'Lacquerware'},
        {id: 7, name: 'Metal works'},
        {id: 8, name: 'Household buddhist altars'},
        {id: 9, name: 'Dolls, kokeshi'},
        {id: 10, name: 'Traditional japanese paper'},
        {id: 11, name: 'Writing tools'},
        {id: 12, name: 'Stonework'},
        {id: 13, name: 'Industrial art materials and tools'},
        {id: 14, name: 'Semiprecious stone craftwork'},
        {id: 15, name: 'Other crafts'}
      ]);
    });
};
