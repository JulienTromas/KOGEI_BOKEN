
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,  
          english_name: "Nibutani bark cloth",
          japanese_name: "Nibutani-attoushi",
          prefecture_id: 1,
          category_id:
        },
        {
          id: 2,  
          english_name: "Nibutani carved wooden tray",
          japanese_name: "Nibutani ita",
          prefecture_id: 1,
          category_id:
        },
        {
          id: 3,  
          english_name: "Tsugaru lacquerware",
          japanese_name: "Tsugaru nuri",
          prefecture_id: 2,
          category_id:
        },
        {
          id: 4,  
          english_name: "Nambu ironware",
          japanese_name: "Nambu tekki",
          prefecture_id: 3,
          category_id:
        },
        {
          id: 5,  
          english_name: "Iwayado traditional chest",
          japanese_name: "Iwayado tansu",
          prefecture_id: 3,
          category_id:
        },
        {
          id: 6,  
          english_name: "Joboji lacquerware",
          japanese_name: "Joboji nuri",
          prefecture_id: 3,
          category_id:
        },
        {
          id: 7,  
          english_name: "Hidehira lacquerware",
          japanese_name: "Hidehira nuri",
          prefecture_id: 3,
          category_id:
        },
        {
          id: 8,  
          english_name: "Ogatsu inkstone",
          japanese_name: "Ogatsu suzuri",
          prefecture_id: 4,
          category_id:
        },
        {
          id: 9,  
          english_name: "Naruko lacquerware",
          japanese_name: "Naruko shikki",
          prefecture_id: 4,
          category_id:
        },
        {
          id: 10,  
          english_name: "Miyagi kokeshi doll",
          japanese_name: "Miyagi dento kokeshi",
          prefecture_id: 4,
          category_id:
        },
        {
          id: 11,  
          english_name: "Sendai traditional chest",
          japanese_name: "Sendai tansu",
          prefecture_id: 4,
          category_id:
        },
        {
          id: 12,  
          english_name: "Kaba cherrybark woodcrafts",
          japanese_name: "Kaba zaiku",
          prefecture_id: 5,
          category_id:
        },
        {
          id: 13,  
          english_name: "Odate bentwood",
          japanese_name: "Odate mage wappa",
          prefecture_id: 5,
          category_id:
        },
        {
          id: 14,  
          english_name: "Kawatsura lacquerware",
          japanese_name: "Kawatsura shikki",
          prefecture_id: 5,
          category_id:
        },
        {
          id: 15,  
          english_name: "Akita cedar sake pail & barrel",
          japanese_name: "Akita sugi oke taru",
          prefecture_id: 5,
          category_id:
        },
        {
          id: 16,  
          english_name: "Tendo Japanese chess pieces",
          japanese_name: "Tendo shogi koma",
          prefecture_id: 6,
          category_id:
        },
        {
          id: 17,  
          english_name: "Yamagata cast iron",
          japanese_name: "Yamagata imono",
          prefecture_id: 6,
          category_id:
        },
        {
          id: 18,  
          english_name: "Oitama tsumugi silk",
          japanese_name: "Oitama tsumugi",
          prefecture_id: 6,
          category_id:
        },
        {
          id: 19,  
          english_name: "Uetsu tilia bark cloth",
          japanese_name: "Uetsu shinafu",
          prefecture_id: 6,
          category_id:
        },
        {
          id: 20,  
          english_name: "Yamagata Buddhist altar",
          japanese_name: "Yamagata butsudan",
          prefecture_id: 6,
          category_id:
        },
        {
          id: 21,  
          english_name: "Aizu lacquerware",
          japanese_name: "Aizu nuri",
          prefecture_id: 7,
          category_id:
        },
        {
          id: 22,  
          english_name: "Obori-soma ware",
          japanese_name: "Obori-soma yaki",
          prefecture_id: 7,
          category_id:
        },
        {
          id: 23,  
          english_name: "Aizu-hongo ware",
          japanese_name: "Aizu-hongo yaki",
          prefecture_id: 7,
          category_id:
        },
        {
          id: 24,  
          english_name: "Oku-aizu braided crafts",
          japanese_name: "Okuaizu amikumi zaiku",
          prefecture_id: 7,
          category_id:
        },
        {
          id: 25,  
          english_name: "Kasama ware",
          japanese_name: "Kasama yaki",
          prefecture_id: 8,
          category_id:
        },
        {
          id: 26,  
          english_name: "Yugi tsumugi silk",
          japanese_name: "Yugi tsumugi",
          prefecture_id: 8,
          category_id:
        },
        {
          id: 27,  
          english_name: "Makabe stone lanterns",
          japanese_name: "Makabe ishidoro",
          prefecture_id: 8,
          category_id:
        },
        {
          id: 28,  
          english_name: "Mashiko ware",
          japanese_name: "Mashiko yaki",
          prefecture_id: 9,
          category_id:
        },
        {
          id: 29,  
          english_name: "Kiryu brocade",
          japanese_name: "Kiryu ori",
          prefecture_id: 10,
          category_id:
        },
        {
          id: 30,  
          english_name: "Isesaki traditional resist-dyed textiles",
          japanese_name: "Isesaki kasuri",
          prefecture_id: 10,
          category_id:
        },
        {
          id: 31,  
          english_name: "Chichibu-meisen silk",
          japanese_name: "Chichibu meisen",
          prefecture_id: 11,
          category_id:
        },
        {
          id: 32,  
          english_name: "Iwatsuki doll",
          japanese_name: "Iwatsuki ningyo",
          prefecture_id: 11,
          category_id:
        },
        {
          id: 33,  
          english_name: "Edo-kimekomi doll",
          japanese_name: "Edo-kimekomi ningyo",
          prefecture_id: 11,
          category_id:
        },
        {
          id: 34,  
          english_name: "Kasukabe traditional paulownia chest",
          japanese_name: "Kasukabe kiri tansu",
          prefecture_id: 11,
          category_id:
        },
        {
          id: 35,  
          english_name: "Boshu uchiwa fans",
          japanese_name: "Boshu uchiwa",
          prefecture_id: 12,
          category_id:
        },
        {
          id: 36,  
          english_name: "Edo kiriko cut glass",
          japanese_name: "Edo kiriko",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 37,  
          english_name: "Edo wood joinery",
          japanese_name: "Edo sashimono",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 38,  
          english_name: "Edo glass",
          japanese_name: "Edo garasu",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 39,  
          english_name: "Murayama-oshima tsumugi silk",
          japanese_name: "Murayama oshima tsumugi",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 40,  
          english_name: "Tokyo silverware",
          japanese_name: "Tokyo ginki",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 41,  
          english_name: "Edo patterned paper",
          japanese_name: "Edo karakami",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 42,  
          english_name: "Tokyo fine-patterned dyeing",
          japanese_name: "Tokyō some komon",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 43,  
          english_name: "Edo bamboo fishing rods",
          japanese_name: "Edo wazao",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 44,  
          english_name: "Tama brocade",
          japanese_name: "Tama ori",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 45,  
          english_name: "Hachio island silk",
          japanese_name: "Honba kihachijo",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 46,  
          english_name: "Woodblock prints",
          japanese_name: "Edo mokuhanga",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 47,  
          english_name: "Tokyo textiles",
          japanese_name: "Tokyo tegaki yuzen",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 48,  
          english_name: "Edo-sekku doll",
          japanese_name: "Edo sekku ningyo",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 49,  
          english_name: "Edo tortoise shell craft",
          japanese_name: "Edo bekko",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 50,  
          english_name: "Tokyo antimony craft",
          japanese_name: "Tokyo antimony kogeihin",
          prefecture_id: 13,
          category_id:
        },
        {
          id: 51,  
          english_name: "Kamakura-bori lacquerware",
          japanese_name: "Kamakura bori",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 52,  
          english_name: "Hakone wood mosaic",
          japanese_name: "Hakone yosegi zaiku",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 53,  
          english_name: "Odawara lacquerware",
          japanese_name: "Odawara shikki",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 54,  
          english_name: "Ojiya chijimi textiles",
          japanese_name: "Ojiya chijimi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 55,  
          english_name: "Shiozawa tsumugi silk",
          japanese_name: "Shiozawa tsumugi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 56,  
          english_name: "Hon-shiozawa silk",
          japanese_name: "Hon shiozawa",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 57,  
          english_name: "Ojiya tsumugi silk",
          japanese_name: "Ojiya tsumugi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 58,  
          english_name: "Niigata lacquerware",
          japanese_name: "Niigata shikki",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 59,  
          english_name: "Kamo traditional chest",
          japanese_name: "Kamo kiri tansu",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 60,  
          english_name: "Murakami carved lacquerware",
          japanese_name: "Murakami kibori tsuishu",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 61,  
          english_name: "Tsubame-tsuiki copperware",
          japanese_name: "Tsubame tsuiki doki",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 62,  
          english_name: "Echigo-sanjo cutlery",
          japanese_name: "Echigo-sanjo uchihamono",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 63,  
          english_name: "Tokamachi traditional resist-dyed textiles",
          japanese_name: "Tokamachi gasuri",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 64,  
          english_name: "Nagaoka Buddhist altar",
          japanese_name: "Nagaoka butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 65,  
          english_name: "Tokamachi akashi chijimi textiles",
          japanese_name: "Tokamachi akashi chijimi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 66,  
          english_name: "Echigo-yoita cutlery",
          japanese_name: "Echigo yoita uchihamono",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 67,  
          english_name: "Sanjo Buddhist altar",
          japanese_name: "Sanjo butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 68,  
          english_name: "Niigata-shirone Buddhist altar",
          japanese_name: "Niigata-shirone butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 69,  
          english_name: "Takaoka copperware",
          japanese_name: "Takaoka doki",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 70,  
          english_name: "Inami wood carvings",
          japanese_name: "Inami chokoku",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 71,  
          english_name: "Takaoka lacquerware",
          japanese_name: "Takaoka shikki",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 72,  
          english_name: "Echu traditional Japanese paper",
          japanese_name: "Echu washi",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 73,  
          english_name: "Shogawa woodcraft",
          japanese_name: "Shogawa hikimono kiji",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 74,  
          english_name: "Kutani ware",
          japanese_name: "Kutani yaki",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 75,  
          english_name: "Wajima lacquerware",
          japanese_name: "Wajima nuri",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 76,  
          english_name: "Kaga textiles",
          japanese_name: "Kaga yuzen",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 77,  
          english_name: "Ushikubi tsumugi silk",
          japanese_name: "Ushikubi tsumugi",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 78,  
          english_name: "Yamanaka lacquerware",
          japanese_name: "Yamanaka shikki",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 79,  
          english_name: "Kanazawa gold leaf",
          japanese_name: "Kanazawa haku",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 80,  
          english_name: "Kanazawa lacquerware",
          japanese_name: "Kanazawa shikki",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 81,  
          english_name: "Kanazawa Buddhist altar",
          japanese_name: "Kanazawa butsudan",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 82,  
          english_name: "Kaga embroidery",
          japanese_name: "Kaga nui",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 83,  
          english_name: "Nanao Buddhist altar",
          japanese_name: "Nanao butsudan",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 84,  
          english_name: "Echizen traditional Japanese paper",
          japanese_name: "Echizen washi",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 85,  
          english_name: "Echizen lacquerware",
          japanese_name: "Echizen shikki",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 86,  
          english_name: "Echizen ware",
          japanese_name: "Echizen yaki",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 87,  
          english_name: "Wakasa lacquerware",
          japanese_name: "Wakasa nuri",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 88,  
          english_name: "Echizen cutlery",
          japanese_name: "Echizen uchihamono",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 89,  
          english_name: "Echizen traditional chest",
          japanese_name: "Echizen tansu",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 90,  
          english_name: "Wakasa agate craft",
          japanese_name: "Wakasa meno zaiku",
          prefecture_id: 18,
          category_id:
        },
        {
          id: 91,  
          english_name: "Koshu lacquered deer leather",
          japanese_name: "Koshu inden",
          prefecture_id: 19,
          category_id:
        },
        {
          id: 92,  
          english_name: "Koshu crystal and precious stones carving",
          japanese_name: "Koshu suisho kiseki zaiku",
          prefecture_id: 19,
          category_id:
        },
        {
          id: 93,  
          english_name: "Koshu hand-carved seals",
          japanese_name: "Koshu tebori insho",
          prefecture_id: 19,
          category_id:
        },
        {
          id: 94,  
          english_name: "Kiso lacquerware",
          japanese_name: "Kiso shikki",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 95,  
          english_name: "Matsumoto furniture",
          japanese_name: "Matsumoto kagu",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 96,  
          english_name: "Shinshu tsumugi silk",
          japanese_name: "Shinshu tsumugi",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 97,  
          english_name: "Iiyama Buddhist altar",
          japanese_name: "Iiyama butsudan",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 98,  
          english_name: "Uchiyama Japanese paper",
          japanese_name: "Uchiyama gami",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 99,  
          english_name: "Shinshu cutlery",
          japanese_name: "Shinshu uchihamono",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 100,  
          english_name: "Nagiso woodturning",
          japanese_name: "Nagiso rokuro zaiku",
          prefecture_id: 20,
          category_id:
        },
        {
          id: 101,  
          english_name: "Mino ware",
          japanese_name: "Mino yaki",
          prefecture_id: 21,
          category_id:
        },
        {
          id: 102,  
          english_name: "Mino traditional Japanese paper",
          japanese_name: "Mino washi",
          prefecture_id: 21,
          category_id:
        },
        {
          id: 103,  
          english_name: "Gifu lanterns",
          japanese_name: "Gifu chochin",
          prefecture_id: 21,
          category_id:
        },
        {
          id: 104,  
          english_name: "Ichii woodcarvings",
          japanese_name: "Ichii itto bori",
          prefecture_id: 21,
          category_id:
        },
        {
          id: 105,  
          english_name: "Hida-shunkei lacquerware",
          japanese_name: "Hida shunkei",
          prefecture_id: 21,
          category_id:
        },
        {
          id: 106,  
          english_name: "Suruga bamboo crafts",
          japanese_name: "Suruga takesensuji zaiku",
          prefecture_id: 22,
          category_id:
        },
        {
          id: 107,  
          english_name: "Suruga-hina doll",
          japanese_name: "Suruga hina ningyo",
          prefecture_id: 22,
          category_id:
        },
        {
          id: 108,  
          english_name: "Suruga doll accessories",
          japanese_name: "Suruga hinagu",
          prefecture_id: 22,
          category_id:
        },
        {
          id: 109,  
          english_name: "Tokoname ware",
          japanese_name: "Tokoname yaki",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 110,  
          english_name: "Akazu ware",
          japanese_name: "Akazu yaki",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 111,  
          english_name: "Toyohashi brushes",
          japanese_name: "Toyohashi fude",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 112,  
          english_name: "Nagoya textiles",
          japanese_name: "Nagoya yuzen",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 113,  
          english_name: "Nagoya Buddhist altar",
          japanese_name: "Nagayo butsudan",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 114,  
          english_name: "Owari enamel",
          japanese_name: "Owari shippo",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 115,  
          english_name: "Arimatsu tie-dyeing",
          japanese_name: "Arimatsu narumi shibori",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 116,  
          english_name: "Mikawa Buddhist altar",
          japanese_name: "Mikawa butsudan",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 117,  
          english_name: "Seto-sometsuke ware ",
          japanese_name: "Seto sometsuke yaki",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 118,  
          english_name: "Nagoya kimono-dyeing",
          japanese_name: "Nagoya kuromontsuki zome",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 119,  
          english_name: "Nagoya traditional paulownia chest",
          japanese_name: "Nagoya kiri tansu",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 120,  
          english_name: "Okazaki stonemasonry",
          japanese_name: "Okazaki sekkohin",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 121,  
          english_name: "Owari Buddhist altar equipment",
          japanese_name: "Owari butsugu",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 122,  
          english_name: "Iga ware",
          japanese_name: "Iga yaki",
          prefecture_id: 24,
          category_id:
        },
        {
          id: 123,  
          english_name: "Suzuka inksticks",
          japanese_name: "Suzuka sumi",
          prefecture_id: 24,
          category_id:
        },
        {
          id: 124,  
          english_name: "Yokkaichi-banko ware",
          japanese_name: "Yokkaichi-banko yaki",
          prefecture_id: 24,
          category_id:
        },
        {
          id: 125,  
          english_name: "Iga braided cords",
          japanese_name: "Iga kumihimo",
          prefecture_id: 24,
          category_id:
        },
        {
          id: 126,  
          english_name: "Ise paper stencil printing",
          japanese_name: "Ise katagami",
          prefecture_id: 24,
          category_id:
        },
        {
          id: 127,  
          english_name: "Shigaraki ware",
          japanese_name: "Shigaraki yaki",
          prefecture_id: 25,
          category_id:
        },
        {
          id: 128,  
          english_name: "Omi ramie cloth",
          japanese_name: "Omi jofu",
          prefecture_id: 25,
          category_id:
        },
        {
          id: 129,  
          english_name: "Edo tortoise shell craft",
          japanese_name: "Edo bekko",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 50,  
          english_name: "Tokyo antimony craft",
          japanese_name: "Tokyo antimony kogeihin",
          prefecture_id: 23,
          category_id:
        },
        {
          id: 51,  
          english_name: "Kamakura-bori lacquerware",
          japanese_name: "Kamakura bori",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 52,  
          english_name: "Hakone wood mosaic",
          japanese_name: "Hakone yosegi zaiku",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 53,  
          english_name: "Odawara lacquerware",
          japanese_name: "Odawara shikki",
          prefecture_id: 14,
          category_id:
        },
        {
          id: 54,  
          english_name: "Ojiya chijimi textiles",
          japanese_name: "Ojiya chijimi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 55,  
          english_name: "Shiozawa tsumugi silk",
          japanese_name: "Shiozawa tsumugi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 56,  
          english_name: "Hon-shiozawa silk",
          japanese_name: "Hon shiozawa",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 57,  
          english_name: "Ojiya tsumugi silk",
          japanese_name: "Ojiya tsumugi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 58,  
          english_name: "Niigata lacquerware",
          japanese_name: "Niigata shikki",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 59,  
          english_name: "Kamo traditional chest",
          japanese_name: "Kamo kiri tansu",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 60,  
          english_name: "Murakami carved lacquerware",
          japanese_name: "Murakami kibori tsuishu",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 61,  
          english_name: "Tsubame-tsuiki copperware",
          japanese_name: "Tsubame tsuiki doki",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 62,  
          english_name: "Echigo-sanjo cutlery",
          japanese_name: "Echigo-sanjo uchihamono",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 63,  
          english_name: "Tokamachi traditional resist-dyed textiles",
          japanese_name: "Tokamachi gasuri",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 64,  
          english_name: "Nagaoka Buddhist altar",
          japanese_name: "Nagaoka butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 65,  
          english_name: "Tokamachi akashi chijimi textiles",
          japanese_name: "Tokamachi akashi chijimi",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 66,  
          english_name: "Echigo-yoita cutlery",
          japanese_name: "Echigo yoita uchihamono",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 67,  
          english_name: "Sanjo Buddhist altar",
          japanese_name: "Sanjo butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 68,  
          english_name: "Niigata-shirone Buddhist altar",
          japanese_name: "Niigata-shirone butsudan",
          prefecture_id: 15,
          category_id:
        },
        {
          id: 69,  
          english_name: "Takaoka copperware",
          japanese_name: "Takaoka doki",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 70,  
          english_name: "Inami wood carvings",
          japanese_name: "Inami chokoku",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 71,  
          english_name: "Takaoka lacquerware",
          japanese_name: "Takaoka shikki",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 72,  
          english_name: "Echu traditional Japanese paper",
          japanese_name: "Echu washi",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 73,  
          english_name: "Shogawa woodcraft",
          japanese_name: "Shogawa hikimono kiji",
          prefecture_id: 16,
          category_id:
        },
        {
          id: 74,  
          english_name: "Kutani ware",
          japanese_name: "Kutani yaki",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 75,  
          english_name: "Wajima lacquerware",
          japanese_name: "Wajima nuri",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 76,  
          english_name: "Kaga textiles",
          japanese_name: "Kaga yuzen",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 77,  
          english_name: "Ushikubi tsumugi silk",
          japanese_name: "Ushikubi tsumugi",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 78,  
          english_name: "Yamanaka lacquerware",
          japanese_name: "Yamanaka shikki",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 79,  
          english_name: "Kanazawa gold leaf",
          japanese_name: "Kanazawa haku",
          prefecture_id: 17,
          category_id:
        },
        {
          id: 80,  
          english_name: "Kanazawa lacquerware",
          japanese_name: "Kanazawa shikki",
          prefecture_id: 17,
          category_id:
        },
      ]);
    });
};
