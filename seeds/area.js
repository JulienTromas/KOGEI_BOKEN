
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('areas').del()
    .then(function () {
      // Inserts seed entries
      return knex('areas').insert([
        {id: 1, area_name: 'Hokkaidō'},
        {id: 2, area_name: 'Tōhoku'},
        {id: 3, area_name: 'Kantō'},
        {id: 4, area_name: 'Chūbu'},
        {id: 5, area_name: 'Kansai'},
        {id: 6, area_name: 'Chūgoku'},
        {id: 7, area_name: 'Shikoku'},
        {id: 8, area_name: 'Kyūshū'},
        {id: 9, area_name: 'Okinawa'}
      ]);
    });
};
