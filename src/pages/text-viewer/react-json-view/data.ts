const data =
  // 20190318142319
  // https://randomuser.me/api

  {
    results: [
      {
        gender: 'female',
        name: {
          title: 'miss',
          first: 'celin',
          last: 'gunnestad',
        },
        location: {
          street: 'von der lippes gate 5526',
          city: 'stordal',
          state: 'nordland',
          postcode: '8902',
          coordinates: {
            latitude: '52.1343',
            longitude: '164.4876',
          },
          timezone: {
            offset: '+4:30',
            description: 'Kabul',
          },
        },
        email: 'celin.gunnestad@example.com',
        login: {
          uuid: '240adfc7-d392-44c4-b10a-f017f778226b',
          username: 'purplezebra101',
          password: '456789',
          salt: 'lLiqVrmg',
          md5: 'febd24a97710d40cc4f534ffa60bdcee',
          sha1: 'b368038ea013ec739aa3775a41e031dec38d6808',
          sha256: '3d7ebe48a5934ede2c6512b4a5b6aadeb78206856f0d730ccf47061a68c97d2f',
        },
        dob: {
          date: '1950-07-11T20:53:39Z',
          age: 68,
        },
        registered: {
          date: '2009-05-26T03:39:02Z',
          age: 9,
        },
        phone: '54511363',
        cell: '90332999',
        id: {
          name: 'FN',
          value: '11075034182',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/91.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/91.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
        },
        nat: 'NO',
      },
    ],
    info: {
      seed: 'e532347e17696847',
      results: 1,
      page: 1,
      version: '1.2',
    },
  };

export { data };
