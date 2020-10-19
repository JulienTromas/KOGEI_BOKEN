
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prefectures').del()
    .then(function () {
      // Inserts seed entries
      return knex('prefectures').insert([
        {
          id: 1,  
          name: "Hokkaidō",
          area_id: 1
        },
        {
          id: 2,  
          name: "Aomori",
          area_id: 2
        },
        {
          id: 3,  
          name: "Iwate",
          area_id: 2
        },
        {
          id: 4,  
          name: "Miyagi",
          area_id: 2
        },
        {
          id: 5,  
          name: "Akita",
          area_id: 2
        },
        {
          id: 6,  
          name: "Yamagata",
          area_id: 2
        },
        {
          id: 7,  
          name: "Fukushima",
          area_id: 2
        },
        {
          id: 8,  
          name: "Ibaraki",
          area_id: 3
        },
        {
          id: 9,  
          name: "Tochigi",
          area_id: 3
        },
        {
          id: 10,  
          name: "Gunma",
          area_id: 3
        },
        {
          id: 11,  
          name: "Saitama",
          area_id: 3
        },
        {
          id: 12,  
          name: "Chiba",
          area_id: 3
        },
        {
          id: 13,  
          name: "Tōkyō",
          area_id: 3
        },
        {
          id: 14,  
          name: "Kanagawa",
          area_id: 3
        },
        {
          id: 15,  
          name: "Niigata",
          area_id: 4
        },
        {
          id: 16,  
          name: "Toyama",
          area_id: 4
        },
        {
          id: 17,  
          name: "Ishikawa",
          area_id: 4
        },
        {
          id: 18,  
          name: "Fukui",
          area_id: 4
        },
        {
          id: 19,  
          name: "Yamanashi",
          area_id: 4
        },
        {
          id: 20,  
          name: "Nagano",
          area_id: 4
        },
        {
          id: 21,  
          name: "Gifu",
          area_id: 4
        },
        {
          id: 22,  
          name: "Shizuoka",
          area_id: 4
        },
        {
          id: 23,  
          name: "Aichi",
          area_id: 4
        },
        {
          id: 24,  
          name: "Mie",
          area_id: 5
        },
        {
          id: 25,  
          name: "Shiga",
          area_id: 5
        },
        {
          id: 26,  
          name: "Kyōto",
          area_id: 5
        },
        {
          id: 27,  
          name: "Ōsaka",
          area_id: 5
        },
        {
          id: 28,  
          name: "Hyōgo",
          area_id: 5
        },
        {
          id: 29,  
          name: "Nara",
          area_id: 5
        },
        {
          id: 30,  
          name: "Wakayama",
          area_id: 5
        },
        {
          id: 31,  
          name: "Tottori",
          area_id: 6
        },
        {
          id: 32,  
          name: "Shimane",
          area_id: 6
        },
        {
          id: 33,  
          name: "Okayama",
          area_id: 6
        },
        {
          id: 34,  
          name: "Hiroshima",
          area_id: 6
        },
        {
          id: 35,  
          name: "Yamaguchi",
          area_id: 6
        },
        {
          id: 36,  
          name: "Tokushima",
          area_id: 7
        },
        {
          id: 37,  
          name: "Kagawa",
          area_id: 7
        },
        {
          id: 38,  
          name: "Ehime",
          area_id: 7
        },
        {
          id: 39,  
          name: "Kōchi",
          area_id: 7
        },
        {
          id: 40,  
          name: "Fukuoka",
          area_id: 8
        },
        {
          id: 41,  
          name: "Saga",
          area_id: 8
        },
        {
          id: 42,  
          name: "Nagasaki",
          area_id: 8
        },
        {
          id: 43,  
          name: "Kumamoto",
          area_id: 8
        },
        {
          id: 44,  
          name: "Ōita",
          area_id: 8
        },
        {
          id: 45,  
          name: "Miyazaki",
          area_id: 8
        },
        {
          id: 46,  
          name: "Kagoshima",
          area_id: 8
        },
        {
          id: 47,  
          name: "Okinawa",
          area_id: 9
        }
      ]);
    });
};
