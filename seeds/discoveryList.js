
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('discovery_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('discovery_list').insert([
        { id: 1,
          prefecture_name: 'Aomori',
          category_name: 'Lacquerware',
          english_name: 'Tsugaru lacquerware',
          japanese_name: 'Tsugaru nuri',
          adress: 'In The Middle Of Somewhere',
          openingHours : '10:00 - 18:00'
        },
        { id: 2,
          prefecture_name: 'Yamagata',
          category_name: 'Other crafts',
          english_name: 'Tendo Japanese chess pieces',
          japanese_name: 'Tendo shogi koma',
          adress: 'Somewhere Over Here',
          openingHours : '10:00 - 11:00'
        },
        { id: 3,
          prefecture_name: 'Tochigi',
          category_name: 'Ceramic',
          english_name: 'Mashiko ware',
          japanese_name: 'Mashiko yaki',
          adress: 'Over the bridge',
          openingHours : '13:00 - 16:00'
        },
        { id: 4,
          prefecture_name: 'Tōkyō',
          category_name: 'Wood, bamboo crafts',
          english_name: 'Edo wood joinery',
          japanese_name: 'Edo sashimono',
          adress: 'At the end of the road',
          openingHours : '10:00 - 12:00'
        },
        { id: 5,
          prefecture_name: 'Toyama',
          category_name: 'Wood, bamboo crafts',
          english_name: 'Shogawa woodcraft',
          japanese_name: 'Shogawa hikimono kiji',
          adress: 'Right behind you',
          openingHours : '15:00 - 18:00'
        }
      ]);
    });
};
