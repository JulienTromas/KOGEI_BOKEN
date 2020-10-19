
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('areas').del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {id: 1, name: 'Hokkaidō'},
        {id: 2, name: 'Tōhoku'},
        {id: 3, name: 'Kantō'},
        {id: 4, name: 'Chūbu'},
        {id: 5, name: 'Kansai'},
        {id: 6, name: 'Chūgoku'},
        {id: 7, name: 'Shikoku'},
        {id: 8, name: 'Kyūshū'},
        {id: 9, name: 'Okinawa'}
      ]);
    });
};
