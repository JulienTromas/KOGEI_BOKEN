
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crafts').del()
    .then(function () {
      // Inserts seed entries
      return knex('crafts').insert([
        {
          id: 1,  
          english_name: "Nibutani bark cloth",
          japanese_name: "Nibutani-attoushi",
          prefecture_id: 1,
          category_id: 2
        },
        {
          id: 2,  
          english_name: "Nibutani carved wooden tray",
          japanese_name: "Nibutani ita",
          prefecture_id: 1,
          category_id: 5
        },
        {
          id: 3,  
          english_name: "Tsugaru lacquerware",
          japanese_name: "Tsugaru nuri",
          prefecture_id: 2,
          category_id: 6
        },
        {
          id: 4,  
          english_name: "Nambu ironware",
          japanese_name: "Nambu tekki",
          prefecture_id: 3,
          category_id: 7
        },
        {
          id: 5,  
          english_name: "Iwayado traditional chest",
          japanese_name: "Iwayado tansu",
          prefecture_id: 3,
          category_id: 5
        },
        {
          id: 6,  
          english_name: "Joboji lacquerware",
          japanese_name: "Joboji nuri",
          prefecture_id: 3,
          category_id: 6
        },
        {
          id: 7,  
          english_name: "Hidehira lacquerware",
          japanese_name: "Hidehira nuri",
          prefecture_id: 3,
          category_id: 6
        },
        {
          id: 8,  
          english_name: "Ogatsu inkstone",
          japanese_name: "Ogatsu suzuri",
          prefecture_id: 4,
          category_id: 11
        },
        {
          id: 9,  
          english_name: "Naruko lacquerware",
          japanese_name: "Naruko shikki",
          prefecture_id: 4,
          category_id: 6
        },
        {
          id: 10,  
          english_name: "Miyagi kokeshi doll",
          japanese_name: "Miyagi dento kokeshi",
          prefecture_id: 4,
          category_id: 9
        },
        {
          id: 11,  
          english_name: "Sendai traditional chest",
          japanese_name: "Sendai tansu",
          prefecture_id: 4,
          category_id: 5
        },
        {
          id: 12,  
          english_name: "Kaba cherrybark woodcrafts",
          japanese_name: "Kaba zaiku",
          prefecture_id: 5,
          category_id: 5
        },
        {
          id: 13,  
          english_name: "Odate bentwood",
          japanese_name: "Odate mage wappa",
          prefecture_id: 5,
          category_id: 5
        },
        {
          id: 14,  
          english_name: "Kawatsura lacquerware",
          japanese_name: "Kawatsura shikki",
          prefecture_id: 5,
          category_id: 6
        },
        {
          id: 15,  
          english_name: "Akita cedar sake pail & barrel",
          japanese_name: "Akita sugi oke taru",
          prefecture_id: 5,
          category_id: 5
        },
        {
          id: 16,  
          english_name: "Tendo Japanese chess pieces",
          japanese_name: "Tendo shogi koma",
          prefecture_id: 6,
          category_id: 15
        },
        {
          id: 17,  
          english_name: "Yamagata cast iron",
          japanese_name: "Yamagata imono",
          prefecture_id: 6,
          category_id: 7
        },
        {
          id: 18,  
          english_name: "Oitama tsumugi silk",
          japanese_name: "Oitama tsumugi",
          prefecture_id: 6,
          category_id: 2
        },
        {
          id: 19,  
          english_name: "Uetsu tilia bark cloth",
          japanese_name: "Uetsu shinafu",
          prefecture_id: 6,
          category_id: 2
        },
        {
          id: 20,  
          english_name: "Yamagata Buddhist altar",
          japanese_name: "Yamagata butsudan",
          prefecture_id: 6,
          category_id: 8 
        },
        {
          id: 21,  
          english_name: "Aizu lacquerware",
          japanese_name: "Aizu nuri",
          prefecture_id: 7,
          category_id: 6
        },
        {
          id: 22,  
          english_name: "Obori-soma ware",
          japanese_name: "Obori-soma yaki",
          prefecture_id: 7,
          category_id: 1
        },
        {
          id: 23,  
          english_name: "Aizu-hongo ware",
          japanese_name: "Aizu-hongo yaki",
          prefecture_id: 7,
          category_id: 1
        },
        {
          id: 24,  
          english_name: "Oku-aizu braided crafts",
          japanese_name: "Okuaizu amikumi zaiku",
          prefecture_id: 7,
          category_id: 5
        },
        {
          id: 25,  
          english_name: "Kasama ware",
          japanese_name: "Kasama yaki",
          prefecture_id: 8,
          category_id: 1 
        },
        {
          id: 26,  
          english_name: "Yugi tsumugi silk",
          japanese_name: "Yugi tsumugi",
          prefecture_id: 8,
          category_id: 2
        },
        {
          id: 27,  
          english_name: "Makabe stone lanterns",
          japanese_name: "Makabe ishidoro",
          prefecture_id: 8,
          category_id: 12
        },
        {
          id: 28,  
          english_name: "Mashiko ware",
          japanese_name: "Mashiko yaki",
          prefecture_id: 9,
          category_id: 1
        },
        {
          id: 29,  
          english_name: "Kiryu brocade",
          japanese_name: "Kiryu ori",
          prefecture_id: 10,
          category_id: 2
        },
        {
          id: 30,  
          english_name: "Isesaki traditional resist-dyed textiles",
          japanese_name: "Isesaki kasuri",
          prefecture_id: 10,
          category_id: 2
        },
        {
          id: 31,  
          english_name: "Chichibu-meisen silk",
          japanese_name: "Chichibu meisen",
          prefecture_id: 11,
          category_id: 2
        },
        {
          id: 32,  
          english_name: "Iwatsuki doll",
          japanese_name: "Iwatsuki ningyo",
          prefecture_id: 11,
          category_id: 9
        },
        {
          id: 33,  
          english_name: "Edo-kimekomi doll",
          japanese_name: "Edo-kimekomi ningyo",
          prefecture_id: 11,
          category_id: 9
        },
        {
          id: 34,  
          english_name: "Kasukabe traditional paulownia chest",
          japanese_name: "Kasukabe kiri tansu",
          prefecture_id: 11,
          category_id: 5
        },
        {
          id: 35,  
          english_name: "Boshu uchiwa fans",
          japanese_name: "Boshu uchiwa",
          prefecture_id: 12,
          category_id: 15
        },
        {
          id: 36,  
          english_name: "Edo kiriko cut glass",
          japanese_name: "Edo kiriko",
          prefecture_id: 13,
          category_id: 15
        },
        {
          id: 37,  
          english_name: "Edo wood joinery",
          japanese_name: "Edo sashimono",
          prefecture_id: 13,
          category_id: 5
        },
        {
          id: 38,  
          english_name: "Edo glass",
          japanese_name: "Edo garasu",
          prefecture_id: 13,
          category_id: 15
        },
        {
          id: 39,  
          english_name: "Murayama-oshima tsumugi silk",
          japanese_name: "Murayama oshima tsumugi",
          prefecture_id: 13,
          category_id: 2
        },
        {
          id: 40,  
          english_name: "Tokyo silverware",
          japanese_name: "Tokyo ginki",
          prefecture_id: 13,
          category_id: 7
        },
        {
          id: 41,  
          english_name: "Edo patterned paper",
          japanese_name: "Edo karakami",
          prefecture_id: 13,
          category_id: 15
        },
        {
          id: 42,  
          english_name: "Tokyo fine-patterned dyeing",
          japanese_name: "Tokyō some komon",
          prefecture_id: 13,
          category_id: 3
        },
        {
          id: 43,  
          english_name: "Edo bamboo fishing rods",
          japanese_name: "Edo wazao",
          prefecture_id: 13,
          category_id: 5
        },
        {
          id: 44,  
          english_name: "Tama brocade",
          japanese_name: "Tama ori",
          prefecture_id: 13,
          category_id: 2
        },
        {
          id: 45,  
          english_name: "Hachio island silk",
          japanese_name: "Honba kihachijo",
          prefecture_id: 13,
          category_id: 2
        },
        {
          id: 46,  
          english_name: "Woodblock prints",
          japanese_name: "Edo mokuhanga",
          prefecture_id: 13,
          category_id: 15
        },
        {
          id: 47,  
          english_name: "Tokyo textiles",
          japanese_name: "Tokyo tegaki yuzen",
          prefecture_id: 13,
          category_id: 3
        },
        {
          id: 48,  
          english_name: "Edo-sekku doll",
          japanese_name: "Edo sekku ningyo",
          prefecture_id: 13,
          category_id: 9
        },
        {
          id: 49,  
          english_name: "Edo tortoise shell craft",
          japanese_name: "Edo bekko",
          prefecture_id: 13,
          category_id: 15
        },
        {
          id: 50,  
          english_name: "Tokyo antimony craft",
          japanese_name: "Tokyo antimony kogeihin",
          prefecture_id: 13,
          category_id: 7
        },
        {
          id: 51,  
          english_name: "Kamakura-bori lacquerware",
          japanese_name: "Kamakura bori",
          prefecture_id: 14,
          category_id: 6
        },
        {
          id: 52,  
          english_name: "Hakone wood mosaic",
          japanese_name: "Hakone yosegi zaiku",
          prefecture_id: 14,
          category_id: 5
        },
        {
          id: 53,  
          english_name: "Odawara lacquerware",
          japanese_name: "Odawara shikki",
          prefecture_id: 14,
          category_id: 6
        },
        {
          id: 54,  
          english_name: "Ojiya chijimi textiles",
          japanese_name: "Ojiya chijimi",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 55,  
          english_name: "Shiozawa tsumugi silk",
          japanese_name: "Shiozawa tsumugi",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 56,  
          english_name: "Hon-shiozawa silk",
          japanese_name: "Hon shiozawa",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 57,  
          english_name: "Ojiya tsumugi silk",
          japanese_name: "Ojiya tsumugi",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 58,  
          english_name: "Niigata lacquerware",
          japanese_name: "Niigata shikki",
          prefecture_id: 15,
          category_id: 6
        },
        {
          id: 59,  
          english_name: "Kamo traditional chest",
          japanese_name: "Kamo kiri tansu",
          prefecture_id: 15,
          category_id: 5
        },
        {
          id: 60,  
          english_name: "Murakami carved lacquerware",
          japanese_name: "Murakami kibori tsuishu",
          prefecture_id: 15,
          category_id: 6
        },
        {
          id: 61,  
          english_name: "Tsubame-tsuiki copperware",
          japanese_name: "Tsubame tsuiki doki",
          prefecture_id: 15,
          category_id: 7
        },
        {
          id: 62,  
          english_name: "Echigo-sanjo cutlery",
          japanese_name: "Echigo-sanjo uchihamono",
          prefecture_id: 15,
          category_id: 7
        },
        {
          id: 63,  
          english_name: "Tokamachi traditional resist-dyed textiles",
          japanese_name: "Tokamachi gasuri",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 64,  
          english_name: "Nagaoka Buddhist altar",
          japanese_name: "Nagaoka butsudan",
          prefecture_id: 15,
          category_id: 8
        },
        {
          id: 65,  
          english_name: "Tokamachi akashi chijimi textiles",
          japanese_name: "Tokamachi akashi chijimi",
          prefecture_id: 15,
          category_id: 2
        },
        {
          id: 66,  
          english_name: "Echigo-yoita cutlery",
          japanese_name: "Echigo yoita uchihamono",
          prefecture_id: 15,
          category_id: 7
        },
        {
          id: 67,  
          english_name: "Sanjo Buddhist altar",
          japanese_name: "Sanjo butsudan",
          prefecture_id: 15,
          category_id: 8
        },
        {
          id: 68,  
          english_name: "Niigata-shirone Buddhist altar",
          japanese_name: "Niigata-shirone butsudan",
          prefecture_id: 15,
          category_id: 8
        },
        {
          id: 69,  
          english_name: "Takaoka copperware",
          japanese_name: "Takaoka doki",
          prefecture_id: 16,
          category_id: 7
        },
        {
          id: 70,  
          english_name: "Inami wood carvings",
          japanese_name: "Inami chokoku",
          prefecture_id: 16,
          category_id: 5
        },
        {
          id: 71,  
          english_name: "Takaoka lacquerware",
          japanese_name: "Takaoka shikki",
          prefecture_id: 16,
          category_id: 6
        },
        {
          id: 72,  
          english_name: "Echu traditional Japanese paper",
          japanese_name: "Echu washi",
          prefecture_id: 16,
          category_id: 10
        },
        {
          id: 73,  
          english_name: "Shogawa woodcraft",
          japanese_name: "Shogawa hikimono kiji",
          prefecture_id: 16,
          category_id: 13
        },
        {
          id: 74,  
          english_name: "Kutani ware",
          japanese_name: "Kutani yaki",
          prefecture_id: 17,
          category_id: 1
        },
        {
          id: 75,  
          english_name: "Wajima lacquerware",
          japanese_name: "Wajima nuri",
          prefecture_id: 17,
          category_id: 6
        },
        {
          id: 76,  
          english_name: "Kaga textiles",
          japanese_name: "Kaga yuzen",
          prefecture_id: 17,
          category_id: 3
        },
        {
          id: 77,  
          english_name: "Ushikubi tsumugi silk",
          japanese_name: "Ushikubi tsumugi",
          prefecture_id: 17,
          category_id: 2
        },
        {
          id: 78,  
          english_name: "Yamanaka lacquerware",
          japanese_name: "Yamanaka shikki",
          prefecture_id: 17,
          category_id: 6
        },
        {
          id: 79,  
          english_name: "Kanazawa gold leaf",
          japanese_name: "Kanazawa haku",
          prefecture_id: 17,
          category_id: 13
        },
        {
          id: 80,  
          english_name: "Kanazawa lacquerware",
          japanese_name: "Kanazawa shikki",
          prefecture_id: 17,
          category_id: 6
        },
        {
          id: 81,  
          english_name: "Kanazawa Buddhist altar",
          japanese_name: "Kanazawa butsudan",
          prefecture_id: 17,
          category_id: 8
        },
        {
          id: 82,  
          english_name: "Kaga embroidery",
          japanese_name: "Kaga nui",
          prefecture_id: 17,
          category_id: 4
        },
        {
          id: 83,  
          english_name: "Nanao Buddhist altar",
          japanese_name: "Nanao butsudan",
          prefecture_id: 17,
          category_id: 8
        },
        {
          id: 84,  
          english_name: "Echizen traditional Japanese paper",
          japanese_name: "Echizen washi",
          prefecture_id: 18,
          category_id: 10
        },
        {
          id: 85,  
          english_name: "Echizen lacquerware",
          japanese_name: "Echizen shikki",
          prefecture_id: 18,
          category_id: 6
        },
        {
          id: 86,  
          english_name: "Echizen ware",
          japanese_name: "Echizen yaki",
          prefecture_id: 18,
          category_id: 1
        },
        {
          id: 87,  
          english_name: "Wakasa lacquerware",
          japanese_name: "Wakasa nuri",
          prefecture_id: 18,
          category_id: 6
        },
        {
          id: 88,  
          english_name: "Echizen cutlery",
          japanese_name: "Echizen uchihamono",
          prefecture_id: 18,
          category_id: 7
        },
        {
          id: 89,  
          english_name: "Echizen traditional chest",
          japanese_name: "Echizen tansu",
          prefecture_id: 18,
          category_id: 5
        },
        {
          id: 90,  
          english_name: "Wakasa agate craft",
          japanese_name: "Wakasa meno zaiku",
          prefecture_id: 18,
          category_id: 14
        },
        {
          id: 91,  
          english_name: "Koshu lacquered deer leather",
          japanese_name: "Koshu inden",
          prefecture_id: 19,
          category_id: 15 
        },
        {
          id: 92,  
          english_name: "Koshu crystal and precious stones carving",
          japanese_name: "Koshu suisho kiseki zaiku",
          prefecture_id: 19,
          category_id: 14
        },
        {
          id: 93,  
          english_name: "Koshu hand-carved seals",
          japanese_name: "Koshu tebori insho",
          prefecture_id: 19,
          category_id: 15
        },
        {
          id: 94,  
          english_name: "Kiso lacquerware",
          japanese_name: "Kiso shikki",
          prefecture_id: 20,
          category_id: 6
        },
        {
          id: 95,  
          english_name: "Matsumoto furniture",
          japanese_name: "Matsumoto kagu",
          prefecture_id: 20,
          category_id: 5
        },
        {
          id: 96,  
          english_name: "Shinshu tsumugi silk",
          japanese_name: "Shinshu tsumugi",
          prefecture_id: 20,
          category_id: 2
        },
        {
          id: 97,  
          english_name: "Iiyama Buddhist altar",
          japanese_name: "Iiyama butsudan",
          prefecture_id: 20,
          category_id: 8
        },
        {
          id: 98,  
          english_name: "Uchiyama Japanese paper",
          japanese_name: "Uchiyama gami",
          prefecture_id: 20,
          category_id: 10
        },
        {
          id: 99,  
          english_name: "Shinshu cutlery",
          japanese_name: "Shinshu uchihamono",
          prefecture_id: 20,
          category_id: 7
        },
        {
          id: 100,  
          english_name: "Nagiso woodturning",
          japanese_name: "Nagiso rokuro zaiku",
          prefecture_id: 20,
          category_id: 5
        },
        {
          id: 101,  
          english_name: "Mino ware",
          japanese_name: "Mino yaki",
          prefecture_id: 21,
          category_id: 1
        },
        {
          id: 102,  
          english_name: "Mino traditional Japanese paper",
          japanese_name: "Mino washi",
          prefecture_id: 21,
          category_id: 10
        },
        {
          id: 103,  
          english_name: "Gifu lanterns",
          japanese_name: "Gifu chochin",
          prefecture_id: 21,
          category_id: 15
        },
        {
          id: 104,  
          english_name: "Ichii woodcarvings",
          japanese_name: "Ichii itto bori",
          prefecture_id: 21,
          category_id: 5
        },
        {
          id: 105,  
          english_name: "Hida-shunkei lacquerware",
          japanese_name: "Hida shunkei",
          prefecture_id: 21,
          category_id: 6
        },
        {
          id: 106,  
          english_name: "Suruga bamboo crafts",
          japanese_name: "Suruga takesensuji zaiku",
          prefecture_id: 22,
          category_id: 5
        },
        {
          id: 107,  
          english_name: "Suruga-hina doll",
          japanese_name: "Suruga hina ningyo",
          prefecture_id: 22,
          category_id: 9
        },
        {
          id: 108,  
          english_name: "Suruga doll accessories",
          japanese_name: "Suruga hinagu",
          prefecture_id: 22,
          category_id: 9
        },
        {
          id: 109,  
          english_name: "Tokoname ware",
          japanese_name: "Tokoname yaki",
          prefecture_id: 23,
          category_id: 1
        },
        {
          id: 110,  
          english_name: "Akazu ware",
          japanese_name: "Akazu yaki",
          prefecture_id: 23,
          category_id: 1
        },
        {
          id: 111,  
          english_name: "Toyohashi brushes",
          japanese_name: "Toyohashi fude",
          prefecture_id: 23,
          category_id: 11
        },
        {
          id: 112,  
          english_name: "Nagoya textiles",
          japanese_name: "Nagoya yuzen",
          prefecture_id: 23,
          category_id: 3
        },
        {
          id: 113,  
          english_name: "Nagoya Buddhist altar",
          japanese_name: "Nagayo butsudan",
          prefecture_id: 23,
          category_id: 8
        },
        {
          id: 114,  
          english_name: "Owari enamel",
          japanese_name: "Owari shippo",
          prefecture_id: 23,
          category_id: 15
        },
        {
          id: 115,  
          english_name: "Arimatsu tie-dyeing",
          japanese_name: "Arimatsu narumi shibori",
          prefecture_id: 23,
          category_id: 3
        },
        {
          id: 116,  
          english_name: "Mikawa Buddhist altar",
          japanese_name: "Mikawa butsudan",
          prefecture_id: 23,
          category_id: 8
        },
        {
          id: 117,  
          english_name: "Seto-sometsuke ware",
          japanese_name: "Seto sometsuke yaki",
          prefecture_id: 23,
          category_id: 1
        },
        {
          id: 118,  
          english_name: "Nagoya kimono-dyeing",
          japanese_name: "Nagoya kuromontsuki zome",
          prefecture_id: 23,
          category_id: 3
        },
        {
          id: 119,  
          english_name: "Nagoya traditional paulownia chest",
          japanese_name: "Nagoya kiri tansu",
          prefecture_id: 23,
          category_id: 5
        },
        {
          id: 120,  
          english_name: "Okazaki stonemasonry",
          japanese_name: "Okazaki sekkohin",
          prefecture_id: 23,
          category_id: 12
        },
        {
          id: 121,  
          english_name: "Owari Buddhist altar equipment",
          japanese_name: "Owari butsugu",
          prefecture_id: 23,
          category_id: 8
        },
        {
          id: 122,  
          english_name: "Iga ware",
          japanese_name: "Iga yaki",
          prefecture_id: 24,
          category_id: 1
        },
        {
          id: 123,  
          english_name: "Suzuka inksticks",
          japanese_name: "Suzuka sumi",
          prefecture_id: 24,
          category_id: 11
        },
        {
          id: 124,  
          english_name: "Yokkaichi-banko ware",
          japanese_name: "Yokkaichi-banko yaki",
          prefecture_id: 24,
          category_id: 1
        },
        {
          id: 125,  
          english_name: "Iga braided cords",
          japanese_name: "Iga kumihimo",
          prefecture_id: 24,
          category_id: 4
        },
        {
          id: 126,  
          english_name: "Ise paper stencil printing",
          japanese_name: "Ise katagami",
          prefecture_id: 24,
          category_id: 13
        },
        {
          id: 127,  
          english_name: "Shigaraki ware",
          japanese_name: "Shigaraki yaki",
          prefecture_id: 25,
          category_id: 1
        },
        {
          id: 128,  
          english_name: "Omi ramie cloth",
          japanese_name: "Omi jofu",
          prefecture_id: 25,
          category_id: 2
        },
        {
          id: 129,  
          english_name: "Hikone Buddhist altar",
          japanese_name: "Hikone buddhism",
          prefecture_id: 25,
          category_id: 8
        },
        {
          id: 130,  
          english_name: "Nishijin brocade",
          japanese_name: "Nishijin ori",
          prefecture_id: 26,
          category_id: 2
        },
        {
          id: 131,  
          english_name: "Kyo textiles",
          japanese_name: "Kyo yuzen",
          prefecture_id: 26,
          category_id: 3
        },
        {
          id: 132,  
          english_name: "Kyo folding fans",
          japanese_name: "Kyo sensu",
          prefecture_id: 26,
          category_id: 15
        },
        {
          id: 133,  
          english_name: "Kyo doll",
          japanese_name: "Kyo doll",
          prefecture_id: 26,
          category_id: 9
        },
        {
          id: 134,  
          english_name: "Kyo uchiwa fans",
          japanese_name: "Kyo uchiwa",
          prefecture_id: 26,
          category_id: 15
        },
        {
          id: 135,  
          english_name: "Kyo ware / Kiyomizu ware",
          japanese_name: "Kyo yaki / Kiyomizu yaki",
          prefecture_id: 26,
          category_id: 1
        },
        {
          id: 136,  
          english_name: "Kyo lacquerware",
          japanese_name: "Kyo shikki",
          prefecture_id: 26,
          category_id: 6
        },
        {
          id: 137,  
          english_name: "Kyo braided cords",
          japanese_name: "Kyo kumihimo",
          prefecture_id: 26,
          category_id: 4
        },
        {
          id: 138,  
          english_name: "Kyo woodworks & joinery",
          japanese_name: "Kyo sashimono",
          prefecture_id: 26,
          category_id: 5
        },
        {
          id: 139,  
          english_name: "Kyo-komon textiles",
          japanese_name: "Kyo komon",
          prefecture_id: 26,
          category_id: 3
        },
        {
          id: 140,  
          english_name: "Kyo Buddhist altar",
          japanese_name: "Kyo butsudan",
          prefecture_id: 26,
          category_id: 8
        },
        {
          id: 141,  
          english_name: "Kyo Buddhist altar equipment",
          japanese_name: "Kyo butsugu",
          prefecture_id: 26,
          category_id: 8
        },
        {
          id: 142,  
          english_name: "Kyo dyed textiles",
          japanese_name: "Kyo kanoko shibori",
          prefecture_id: 26,
          category_id: 3
        },
        {
          id: 143,  
          english_name: "Kyo-ishi craft",
          japanese_name: "Kyo-ishi kogeihin",
          prefecture_id: 26,
          category_id: 12
        },
        {
          id: 144,  
          english_name: "Kyo kimono-dyeing",
          japanese_name: "Kyo kuromontsuki zome",
          prefecture_id: 26,
          category_id: 3
        },
        {
          id: 145,  
          english_name: "Kyo embroidery",
          japanese_name: "Kyo nui",
          prefecture_id: 26,
          category_id: 4
        },
        {
          id: 146,  
          english_name: "Sakai cutlery",
          japanese_name: "Sakai uchihamono",
          prefecture_id: 27,
          category_id: 7
        },
        {
          id: 147,  
          english_name: "Osaka naniwa pewterware",
          japanese_name: "Osaka naniwa suzuki",
          prefecture_id: 27,
          category_id: 7
        },
        {
          id: 148,  
          english_name: "Osaka Buddhist altar",
          japanese_name: "Osaka butsudan",
          prefecture_id: 27,
          category_id: 8
        },
        {
          id: 149,  
          english_name: "Osaka carved wooden panel",
          japanese_name: "Osaka ranma",
          prefecture_id: 27,
          category_id: 5
        },
        {
          id: 150,  
          english_name: "Osaka karaki wood joinery",
          japanese_name: "Osaka karaki sashimono",
          prefecture_id: 27,
          category_id: 5
        },
        {
          id: 151,  
          english_name: "Osaka bamboo screens",
          japanese_name: "Osaka kongo sudare",
          prefecture_id: 27,
          category_id: 5
        },
        {
          id: 152,  
          english_name: "Osaka-senshu traditional paulownia chest",
          japanese_name: "Osaka senshu kiri tansu",
          prefecture_id: 27,
          category_id: 5
        },
        {
          id: 153,  
          english_name: "Banshu abacus",
          japanese_name: "Banshu soroban",
          prefecture_id: 28,
          category_id: 11
        },
        {
          id: 154,  
          english_name: "Tamba-tachikui ware",
          japanese_name: "Tamba-tachikui yaki",
          prefecture_id: 28,
          category_id: 1
        },
        {
          id: 155,  
          english_name: "Izushi ware",
          japanese_name: "Izushi yaki",
          prefecture_id: 28,
          category_id: 1
        },
        {
          id: 156,  
          english_name: "Banshu fly-fishing flies",
          japanese_name: "Banshu kebari",
          prefecture_id: 28,
          category_id: 15
        },
        {
          id: 157,  
          english_name: "Banshu-miki cutlery",
          japanese_name: "Banshu-miki uchihamono",
          prefecture_id: 28,
          category_id: 7
        },
        {
          id: 158,  
          english_name: "Toyooka wicker",
          japanese_name: "Toyooka kiryu zaiku",
          prefecture_id: 28,
          category_id: 5
        },
        {
          id: 159,  
          english_name: "Nara brushes",
          japanese_name: "Nara fude",
          prefecture_id: 29,
          category_id: 11
        },
        {
          id: 160,  
          english_name: "Takayama tea whisks",
          japanese_name: "Takayama chasen",
          prefecture_id: 29,
          category_id: 5
        },
        {
          id: 161,  
          english_name: "Kishu lacquerware",
          japanese_name: "Kishu shikki",
          prefecture_id: 30,
          category_id: 6
        },
        {
          id: 162,  
          english_name: "Kishu bamboo fishing rods",
          japanese_name: "Kishu herazao",
          prefecture_id: 30,
          category_id: 5
        },
        {
          id: 163,  
          english_name: "Kishu traditional chest",
          japanese_name: "Kishu tansu",
          prefecture_id: 30,
          category_id: 5
        },
        {
          id: 164,  
          english_name: "Inshu traditional Japanese paper",
          japanese_name: "Inshu washi",
          prefecture_id: 31,
          category_id: 10 
        },
        {
          id: 165,  
          english_name: "Yumihama traditional resist-dyed textiles",
          japanese_name: "Yumihama gasuri",
          prefecture_id: 31,
          category_id: 2
        },
        {
          id: 166,  
          english_name: "Iwami ware",
          japanese_name: "Iwami yaki",
          prefecture_id: 32,
          category_id: 1
        },
        {
          id: 167,  
          english_name: "Izumo stone lanterns",
          japanese_name: "Izumo ishidoro",
          prefecture_id: 32,
          category_id: 12
        },
        {
          id: 168,  
          english_name: "Unshu abacus",
          japanese_name: "Unshu soroban",
          prefecture_id: 32,
          category_id: 11
        },
        {
          id: 169,  
          english_name: "Sekishu traditional Japanese paper",
          japanese_name: "Sekishu washi",
          prefecture_id: 32,
          category_id: 10
        },
        {
          id: 170,  
          english_name: "Bizen ware",
          japanese_name: "Bizen yaki",
          prefecture_id: 33,
          category_id: 1
        },
        {
          id: 171,  
          english_name: "Katsuyama bamboo crafts",
          japanese_name: "Katsuyama take zaiku",
          prefecture_id: 33,
          category_id: 5
        },
        {
          id: 172,  
          english_name: "Kumano brushes",
          japanese_name: "Kumano fude",
          prefecture_id: 34,
          category_id: 11
        },
        {
          id: 173,  
          english_name: "Hagi ware",
          japanese_name: "Hagi yaki",
          prefecture_id: 35,
          category_id: 1
        },
        {
          id: 174,  
          english_name: "Akama inkstone",
          japanese_name: "Akama suzuri",
          prefecture_id: 35,
          category_id: 11
        },
        {
          id: 175,  
          english_name: "Ouchi lacquerware",
          japanese_name: "Ouchi nuri",
          prefecture_id: 35,
          category_id: 6
        },
        {
          id: 176,  
          english_name: "Otani ware",
          japanese_name: "Otani yaki",
          prefecture_id: 36,
          category_id: 1
        },
        {
          id: 177,  
          english_name: "Awa traditional Japanese paper",
          japanese_name: "Awa washi",
          prefecture_id: 36,
          category_id: 10
        },
        {
          id: 178,  
          english_name: "Awa-shijira cotton cloth",
          japanese_name: "Awa shoai shijira ori",
          prefecture_id: 36,
          category_id: 2
        },
        {
          id: 179,  
          english_name: "Marugame uchiwa fans",
          japanese_name: "Marugame uchiwa",
          prefecture_id: 37,
          category_id: 15
        },
        {
          id: 180,  
          english_name: "Kagawa lacquerware",
          japanese_name: "Kagawa shikki",
          prefecture_id: 37,
          category_id: 6
        },
        {
          id: 181,  
          english_name: "Tobe ware",
          japanese_name: "Tobe yaki",
          prefecture_id: 38,
          category_id: 1
        },
        {
          id: 182,  
          english_name: "Ozu traditional Japanese paper",
          japanese_name: "Ozu washi",
          prefecture_id: 38,
          category_id: 10
        },
        {
          id: 183,  
          english_name: "Tosa cutlery",
          japanese_name: "Tosa uchihamono",
          prefecture_id: 39,
          category_id: 7
        },
        {
          id: 184,  
          english_name: "Tosa traditional Japanese paper",
          japanese_name: "Tosa washi",
          prefecture_id: 39,
          category_id: 10
        },
        {
          id: 185,  
          english_name: "Koishiwara ware",
          japanese_name: "Koishiwara yaki",
          prefecture_id: 40,
          category_id: 1
        },
        {
          id: 186,  
          english_name: "Hakata doll",
          japanese_name: "Hakata ningyo",
          prefecture_id: 40,
          category_id: 9
        },
        {
          id: 187,  
          english_name: "Kurume traditional resist-dyed textiles",
          japanese_name: "Kurume gasuri",
          prefecture_id: 40,
          category_id: 2
        },
        {
          id: 188,  
          english_name: "Hakata brocade",
          japanese_name: "Hakata ori",
          prefecture_id: 40,
          category_id: 2
        },
        {
          id: 189,  
          english_name: "Agano ware",
          japanese_name: "Agano yaki",
          prefecture_id: 40,
          category_id: 1
        },
        {
          id: 190,  
          english_name: "Yame lanterns",
          japanese_name: "Yame chochin",
          prefecture_id: 40,
          category_id: 15
        },
        {
          id: 191,  
          english_name: "Yame-fukushima Buddhist altar",
          japanese_name: "Yame fukushima butsudan",
          prefecture_id: 40,
          category_id: 8
        },
        {
          id: 192,  
          english_name: "Imari ware / Arita ware",
          japanese_name: "Imari yaki / Arita yaki",
          prefecture_id: 41,
          category_id: 1
        },
        {
          id: 193,  
          english_name: "Karatsu ware",
          japanese_name: "Karatsu yaki",
          prefecture_id: 41,
          category_id: 1
        },
        {
          id: 194,  
          english_name: "Hasami ware",
          japanese_name: "Hasami yaki",
          prefecture_id: 42,
          category_id: 1
        },
        {
          id: 195,  
          english_name: "Mikawachi ware",
          japanese_name: "Mikawachi yaki",
          prefecture_id: 42,
          category_id: 1
        },
        {
          id: 196,  
          english_name: "Nagasaki tortoise shell crafts",
          japanese_name: "Nagasaki bekkou",
          prefecture_id: 42,
          category_id: 15
        },
        {
          id: 197,  
          english_name: "Shodai ware",
          japanese_name: "Shodai yaki",
          prefecture_id: 43,
          category_id: 1
        },
        {
          id: 198,  
          english_name: "Yamaga lanterns",
          japanese_name: "Yamaga toro",
          prefecture_id: 43,
          category_id: 15
        },
        {
          id: 199,  
          english_name: "Amakusa ceramics",
          japanese_name: "Amakusa tojiki)",
          prefecture_id: 43,
          category_id: 1
        },
        {
          id: 200,  
          english_name: "Higo inlays",
          japanese_name: "Higo zogan",
          prefecture_id: 43,
          category_id: 7
        },
        {
          id: 201,  
          english_name: "Beppu bamboo crafts",
          japanese_name: "Beppu take zaiku",
          prefecture_id: 44,
          category_id: 5
        },
        {
          id: 202,  
          english_name: "Miyakonojo archery bows ",
          japanese_name: "Miyakonojo daikyu",
          prefecture_id: 45,
          category_id: 5
        },
        {
          id: 203,  
          english_name: "Satsuma ware",
          japanese_name: "Satsuma yaki",
          prefecture_id: 46,
          category_id: 1
        },
        {
          id: 204,  
          english_name: "Honba oshima tsumugi silk",
          japanese_name: "Honba oshima tsumugi",
          prefecture_id: 46,
          category_id: 2
        },
        {
          id: 205,  
          english_name: "Kawanabe Buddhist altar",
          japanese_name: "Kawanabe bustsudan",
          prefecture_id: 46,
          category_id: 8
        },
        {
          id: 206,  
          english_name: "Tsuboya ware",
          japanese_name: "Tsuboya yaki",
          prefecture_id: 47,
          category_id: 1
        },
        {
          id: 207,  
          english_name: "Miyako ramie textile",
          japanese_name: "Miyako jofu",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 208,  
          english_name: "Ryūkyū lacquerware",
          japanese_name: "Ryūkyū shikki",
          prefecture_id: 47,
          category_id: 6
        },
        {
          id: 209,  
          english_name: "Kumejima tsumugi silk",
          japanese_name: "Kumejima tsumugi",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 210,  
          english_name: "Ryūkyū traditional resist-dyed",
          japanese_name: "Ryūkyū kasuri",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 211,  
          english_name: "Chibana-hanaori textiles",
          japanese_name: "Chibana hanaori",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 212,  
          english_name: "Yaeyama cotton cloth",
          japanese_name: "Yaeyama minsa",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 213,  
          english_name: "Yaeyama ramie cloth",
          japanese_name: "Yaeyama jofu",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 214,  
          english_name: "Shuri brocade",
          japanese_name: "Shuri ori",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 215,  
          english_name: "Yomitanzan-han aori textiles",
          japanese_name: "Yomitanzan hanaori",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 216,  
          english_name: "Ryūkyū traditional textiles",
          japanese_name: "Ryūkyū bingata",
          prefecture_id: 47,
          category_id: 3
        },
        {
          id: 217,  
          english_name: "Kijoka banana fiber cloth",
          japanese_name: "Kijoka no bashofu",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 218,  
          english_name: "Yonaguni brocade",
          japanese_name: "Yonaguni ori",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 219,  
          english_name: "Yomitanzan minsa",
          japanese_name: "Yomitanzan minsa",
          prefecture_id: 47,
          category_id: 2
        },
        {
          id: 220,  
          english_name: "Haebaru woven flowers",
          japanese_name: "Haebaru hanaori)",
          prefecture_id: 47,
          category_id: 2
        }
      ]);
    });
};
