export type TravelPlan = {
  day: string;
  description: string;
};

export const locations: Record<string, Record<string, {
  id: number;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  price: number;
  imageUrl: string;
  dateRange: string;
  days: number;
  description: string;
  tripRoute: string;
  travelPlan:  TravelPlan[];
  includedIn: string;
}>> = {
  'Europe': {
    'France': {
      id: 1,
      country: 'France',
      city: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522,
      price: 2000,
      imageUrl: '///',
      dateRange: 'JUN 2 - 12',
      days: 10,
      description: 'Explore the romantic ambiance of Paris, indulge in the exquisite cuisine of Lyon, wander through the vineyards of Bordeaux, and relax on the picturesque beaches of the French Riviera.',
      tripRoute: 'Belgrade → Paris → Lyon → Bordeaux → French Riviera (Nice, Cannes, Monaco) → Belgrade',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Paris. Check into the hotel and rest. Guided tour of Paris, including the Eiffel Tower and Louvre Museum.'
        },
        {
          'day': '3',
          'description': 'Travel to Lyon. Enjoy a culinary tour and explore the old town.'
        },
        {
          'day': '4',
          'description': 'Visit the vineyards of Bordeaux and indulge in wine tasting.'
        },
        {
          'day': '5',
          'description': 'Travel to the French Riviera. Relax on the beaches of Nice.'
        },
        {
          'day': '6',
          'description': 'Explore Cannes and visit Monaco for a taste of luxury.'
        },
        {
          'day': '7-9',
          'description': 'Free days to explore the French Riviera at your leisure.'
        },
        {
          'day': '10',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Accommodation in 4-star hotels
      Transportation between cities (flights or trains)
      Guided tours in Paris, Lyon, Bordeaux, and French Riviera
      Entrance fees to attractions mentioned in the itinerary
      Daily breakfast
      Assistance of a tour guide throughout the trip`
    },
    'United Kingdom': {
      id: 2,
      country: 'United Kingdom',
      city: 'London',
      latitude: 51.5074,
      longitude: -0.1278,
      price: 1500,
      imageUrl: '//',
      dateRange: 'JAN 12 - 22',
      days: 10,
      description: 'Explore the vibrant cities, stunning countryside, and rich history of the United Kingdom. From the bustling streets of London to the picturesque landscapes of the Scottish Highlands, this journey offers a diverse and unforgettable experience.',
      tripRoute: 'Belgrade (Serbia) -> London (UK) -> Edinburgh (Scotland) -> Inverness (Scotland) -> Glasgow (Scotland) -> Manchester (England) -> Oxford (England) -> Bath (England) -> London (UK) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in London. Check into the hotel and rest. Guided tour of London, including Buckingham Palace and Tower of London.'
        },
        {
          'day': '3',
          'description': 'Travel to Edinburgh. Explore the historic Old Town.'
        },
        {
          'day': '4',
          'description': 'Visit Inverness and explore the Scottish Highlands.'
        },
        {
          'day': '5',
          'description': 'Travel to Glasgow. Explore the vibrant city center.'
        },
        {
          'day': '6-7',
          'description': 'Visit Manchester and explore its cultural attractions. Travel to Oxford. Explore the famous university city.'
        },
        {
          'day': '8-9',
          'description': 'Visit Bath and explore its Roman heritage. Return to London.'
        },
        {
          'day': '10',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to the UK
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Italy': {
      id: 3,
      country: 'Italy',
      city: 'Rome',
      latitude: 41.9028,
      longitude: 12.4964,
      price: 1200,
      imageUrl: '/',
      dateRange: 'OCT 5 - 13',
      days: 8,
      description: 'Discover the enchanting beauty, rich history, and delectable cuisine of Italy. From the romantic canals of Venice to the ancient ruins of Rome, this journey promises an unforgettable Italian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Venice (Italy) -> Florence (Italy) -> Rome (Italy) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Venice. Check into the hotel and rest. Explore the canals and landmarks of Venice.'
        },
        {
          'day': '3',
          'description': 'Travel to Florence. Explore the art and architecture of the Renaissance city.'
        },
        {
          'day': '4-5',
          'description': 'Guided tour of Florence, including the Uffizi Gallery and Duomo. Travel to Rome. Explore ancient ruins and iconic landmarks.'
        },
        {
          'day': '6-7',
          'description': 'Guided tour of Rome, including the Colosseum and Vatican City. Free day to explore Rome at your leisure.'
        },
        {
          'day': '8',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Italy
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Spain': {
      id: 4,
      country: 'Spain',
      city: 'Madrid',
      latitude: 40.4168,
      longitude: -3.7038,
      price: 1400,
      imageUrl: '/',
      dateRange: 'DEC 1 - 12',
      days: 12,
      description: 'Immerse yourself in the vibrant culture, stunning landscapes, and rich history of Spain. From the bustling streets of Madrid to the beautiful beaches of Barcelona, this journey offers a diverse and unforgettable Spanish experience.',
      tripRoute: 'Belgrade (Serbia) -> Madrid (Spain) -> Seville (Spain) -> Granada (Spain) -> Valencia (Spain) -> Barcelona (Spain) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Madrid. Check into the hotel and rest. Guided tour of Madrid, including the Royal Palace and Prado Museum.'
        },
        {
          'day': '3',
          'description': 'Travel to Seville. Explore the historic city center.'
        },
        {
          'day': '4',
          'description': 'Visit Granada and explore the Alhambra Palace.'
        },
        {
          'day': '5',
          'description': 'Travel to Valencia. Explore the City of Arts and Sciences.'
        },
        {
          'day': '6-7',
          'description': 'Travel to Barcelona. Guided tour of Barcelona, including Sagrada Familia and Park Güell.'
        },
        {
          'day': '8',
          'description': 'Free day to explore Barcelona at your leisure.'
        },
        {
          'day': '9',
          'description': 'Return to Madrid.'
        },
        {
          'day': '10',
          'description': 'Free day to explore Madrid at your leisure.'
        },
        {
          'day': '11',
          'description': 'Free day to explore Madrid at your leisure.'
        },
        {
          'day': '12',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Spain
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Croatia': {
      id: 5,
      country: 'Croatia',
      city: 'Zagreb',
      latitude: 45.8150,
      longitude: 15.9819,
      price: 1000,
      imageUrl: '/',
      dateRange: 'AUG 23 - 30',
      days: 7,
      description: 'Experience the beauty, history, and culture of Croatia. From the medieval streets of Dubrovnik to the stunning waterfalls of Plitvice Lakes National Park, this journey offers a memorable exploration of Croatia\'s diverse landscapes and heritage.',
      tripRoute: 'Belgrade (Serbia) -> Zagreb (Croatia) -> Plitvice Lakes National Park (Croatia) -> Split (Croatia) -> Dubrovnik (Croatia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Zagreb. Check into the hotel and rest. Guided tour of Zagreb, including the Upper Town and St. Mark\'s Church.'
        },
        {
          'day': '3',
          'description': 'Travel to Plitvice Lakes National Park. Explore the stunning waterfalls and lakes.'
        },
        {
          'day': '4-5',
          'description': 'Travel to Split. Explore the historic Diocletian\'s Palace and waterfront promenade. Guided tour of Split.'
        },
        {
          'day': '6',
          'description': 'Travel to Dubrovnik. Explore the medieval city walls and charming old town.'
        },
        {
          'day': '7',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Croatia
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Germany': {
      id: 6,
      country: 'Germany',
      city: 'Berlin',
      latitude: 52.5200,
      longitude: 13.4050,
      price: 1300,
      imageUrl: '/',
      dateRange: 'MAY 31 - 9',
      days: 9,
      description: 'Explore the rich history, vibrant culture, and picturesque landscapes of Germany. From the bustling streets of Berlin to the fairytale castles of Bavaria, this journey offers a diverse and unforgettable German experience.',
      tripRoute: 'Belgrade (Serbia) -> Berlin (Germany) -> Dresden (Germany) -> Nuremberg (Germany) -> Munich (Germany) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Berlin. Check into the hotel and rest. Guided tour of Berlin, including the Brandenburg Gate and Berlin Wall.'
        },
        {
          'day': '3',
          'description': 'Travel to Dresden. Explore the historic Old Town and Frauenkirche.'
        },
        {
          'day': '4',
          'description': 'Travel to Nuremberg. Visit the Nuremberg Castle and Old Town.'
        },
        {
          'day': '5',
          'description': 'Explore Nuremberg. Enjoy the local attractions and cuisine.'
        },
        {
          'day': '6',
          'description': 'Travel to Munich. Explore the Marienplatz and Hofbräuhaus.'
        },
        {
          'day': '7-8',
          'description': 'Explore Munich. Take a day trip to Neuschwanstein Castle in Bavaria.'
        },
        {
          'day': '9',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Germany
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Greece': {
      id: 7,
      country: 'Greece',
      city: 'Athens',
      latitude: 37.9838,
      longitude: 23.7275,
      price: 1500,
      imageUrl: '/',
      dateRange: 'FEB 7 - 17',
      days: 10,
      description: 'Embark on a journey to discover the ancient history, stunning landscapes, and vibrant culture of Greece. From the iconic landmarks of Athens to the breathtaking islands of Santorini and Mykonos, this trip promises an unforgettable Greek adventure.',
      tripRoute: 'Belgrade (Serbia) -> Athens (Greece) -> Santorini (Greece) -> Mykonos (Greece) -> Athens (Greece) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Athens. Check into the hotel and rest. Guided tour of Athens, including the Acropolis and Parthenon.'
        },
        {
          'day': '3',
          'description': 'Travel to Santorini. Explore the stunning caldera views and whitewashed villages.'
        },
        {
          'day': '4',
          'description': 'Explore Santorini. Visit the archaeological site of Akrotiri and enjoy a sunset cruise.'
        },
        {
          'day': '5',
          'description': 'Travel to Mykonos. Explore the charming streets and beaches of Mykonos Town.'
        },
        {
          'day': '6-7',
          'description': 'Explore Mykonos. Relax on the beaches or explore the island\'s windmills and churches.'
        },
        {
          'day': '8',
          'description': 'Return to Athens.'
        },
        {
          'day': '9',
          'description': 'Free day to explore Athens at your leisure.'
        },
        {
          'day': '10',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Greece
      Accommodation in centrally located hotels
      Daily breakfast
      Ferry tickets between islands
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (ferry or domestic flights)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Netherlands': {
      id: 8,
      country: 'Netherlands',
      city: 'Amsterdam',
      latitude: 52.3676,
      longitude: 4.9041,
      price: 1100,
      imageUrl: '/',
      dateRange: 'NOV 2 - 10',
      days: 8,
      description: 'Explore the charming canals, historic landmarks, and vibrant culture of the Netherlands. From the picturesque streets of Amsterdam to the iconic windmills of the countryside, this journey offers a memorable Dutch experience.',
      tripRoute: 'Belgrade (Serbia) -> Amsterdam (Netherlands) -> Rotterdam (Netherlands) -> The Hague (Netherlands) -> Utrecht (Netherlands) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Amsterdam. Check into the hotel and rest. Guided canal cruise and city tour of Amsterdam.'
        },
        {
          'day': '3',
          'description': 'Travel to Rotterdam. Explore the modern architecture and port city.'
        },
        {
          'day': '4',
          'description': 'Visit The Hague. Explore the Binnenhof and Mauritshuis museum.'
        },
        {
          'day': '5',
          'description': 'Travel to Utrecht. Explore the historic city center and Dom Tower.'
        },
        {
          'day': '6-7',
          'description': 'Explore Utrecht. Visit nearby castles or take a day trip to Giethoorn.'
        },
        {
          'day': '8',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to the Netherlands
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Austria': {
      id: 9,
      country: 'Austria',
      city: 'Vienna',
      latitude: 48.210033,
      longitude: 16.363449,
      price: 2000,
      imageUrl: '/',
      dateRange: 'FEB 13 - 23',
      days: 10,
      description: 'Explore the breathtaking landscapes, natural wonders, and unique culture of Iceland. From the stunning waterfalls and geysers to the captivating Northern Lights, this journey promises an unforgettable Icelandic adventure.',
      tripRoute: 'Belgrade (Serbia) -> Reykjavik (Iceland) -> Golden Circle (Iceland) -> South Coast (Iceland) -> Jökulsárlón Glacier Lagoon (Iceland) -> Reykjavik (Iceland) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Vienna. Check into the hotel and rest. Guided tour of Vienna, including Schönbrunn Palace and St. Stephen\'s Cathedral.'
        },
        {
          'day': '3',
          'description': 'Travel to Salzburg. Explore the birthplace of Mozart and the charming old town.'
        },
        {
          'day': '4',
          'description': 'Visit the Hohensalzburg Fortress and enjoy panoramic views of Salzburg.'
        },
        {
          'day': '5',
          'description': 'Travel to Innsbruck. Explore the historic city center and Golden Roof.'
        },
        {
          'day': '6',
          'description': 'Visit the Swarovski Crystal Worlds or take a day trip to the Austrian Alps.'
        },
        {
          'day': '7-8',
          'description': 'Explore Hallstatt. Visit the picturesque village and explore the salt mines.'
        },
        {
          'day': '9',
          'description': 'Return to Vienna.'
        },
        {
          'day': '10',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Iceland
      Accommodation in centrally located hotels and guesthouses
      Daily breakfast
      Guided tours to Golden Circle and South Coast
      Entrance fees to attractions mentioned in the itinerary
      Transportation between locations (coach or minibus)
      English-speaking tour guide for guided tours
      All taxes and service charges`
    },
    'Russia': {
      id: 10,
      country: 'Russia',
      city: 'Moscow',
      latitude: 55.7558,
      longitude: 37.6176,
      price: 1800,
      imageUrl: '/',
      dateRange: 'JUL 4 - 16',
      days: 12,
      description: 'Delve into the rich history, magnificent architecture, and cultural treasures of Russia. From the grandeur of Moscow to the imperial splendor of St. Petersburg, this journey promises an unforgettable Russian experience.',
      tripRoute: 'Belgrade (Serbia) -> Moscow (Russia) -> St. Petersburg (Russia) -> Veliky Novgorod (Russia) -> Moscow (Russia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Moscow. Check into the hotel and rest. Optional evening city tour.'
        },
        {
          'day': '2',
          'description': 'Moscow: Guided tour of Red Square, Kremlin, and St. Basil\'s Cathedral. Visit the iconic GUM Department Store and enjoy a traditional Russian dinner.'
        },
        {
          'day': '3',
          'description': 'Moscow: Explore the Tretyakov Gallery, enjoy a scenic boat cruise on the Moskva River, and visit the famous Arbat Street for shopping.'
        },
        {
          'day': '4',
          'description': 'Travel to St. Petersburg by high-speed train. Check into the hotel and relax. Evening stroll along Nevsky Prospect.'
        },
        {
          'day': '5',
          'description': 'St. Petersburg: Guided tour of the State Hermitage Museum, including the Winter Palace. Visit the Church of the Savior on Spilled Blood and Peter and Paul Fortress.'
        },
        {
          'day': '6',
          'description': 'St. Petersburg: Explore the Peterhof Palace and Gardens, known as the \'Russian Versailles.\' Optional evening ballet performance.'
        },
        {
          'day': '7',
          'description': 'Day trip to Veliky Novgorod: Visit the Novgorod Kremlin, St. Sophia Cathedral, and the open-air museum of wooden architecture, Vitoslavlitsy.'
        },
        {
          'day': '8-9',
          'description': 'Return to Moscow by high-speed train. Free time for shopping or optional excursions.'
        },
        {
          'day': '10',
          'description': 'Moscow: Explore the Moscow Metro, known for its stunning architecture. Visit the Pushkin Museum of Fine Arts and enjoy a farewell dinner.'
        },
        {
          'day': '11-12',
          'description': 'Free day in Moscow for last-minute sightseeing or shopping. Transfer to the airport for your return flight.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Russia
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or domestic flights)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Switzerland': {
      id: 11,
      country: 'Switzerland',
      city: 'Bern',
      latitude: 46.9480,
      longitude: 7.4474,
      price: 1600,
      imageUrl: '/',
      dateRange: 'SEP 27 - 7',
      days: 10,
      description: 'Immerse yourself in the stunning alpine landscapes, charming villages, and cultural treasures of Switzerland. From the majestic peaks of the Swiss Alps to the serene lakeside towns, this journey promises an unforgettable Swiss experience.',
      tripRoute: 'Belgrade (Serbia) -> Zurich (Switzerland) -> Lucerne (Switzerland) -> Interlaken (Switzerland) -> Zermatt (Switzerland) -> Geneva (Switzerland) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Zurich. Check into the hotel and rest. Guided tour of Zurich, including the Old Town and Lake Zurich.'
        },
        {
          'day': '3',
          'description': 'Travel to Lucerne. Explore the Chapel Bridge and Lion Monument.'
        },
        {
          'day': '4',
          'description': 'Visit Mount Pilatus for panoramic views of the Swiss Alps.'
        },
        {
          'day': '5-6',
          'description': 'Travel to Interlaken. Explore the Jungfrau region and take a scenic train ride.'
        },
        {
          'day': '7',
          'description': 'Travel to Zermatt. Explore the Matterhorn and Gornergrat Railway.'
        },
        {
          'day': '8-9',
          'description': 'Explore Zermatt. Visit the Glacier Paradise and enjoy outdoor activities.'
        },
        {
          'day': '10',
          'description': 'Return to Geneva and depart for Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Switzerland
      Accommodation in centrally located hotels
      Daily breakfast
      Transportation between cities (train or coach)
      Swiss Travel Pass for unlimited travel on trains, buses, and boats
      English-speaking tour guide for guided tours
      All taxes and service charges`
    },
    'Norway': {
      id: 12,
      country: 'Norway',
      city: 'Oslo',
      latitude: 59.9139,
      longitude: 10.7522,
      price: 1800,
      imageUrl: '/',
      dateRange: 'APR 2 - 13',
      days: 11,
      description: 'Embark on a journey to explore the majestic fjords, scenic landscapes, and vibrant cities of Norway. From the iconic sights of Oslo to the breathtaking natural beauty of the fjords, this trip promises an unforgettable Norwegian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Oslo (Norway) -> Bergen (Norway) -> Flam (Norway) -> Geiranger (Norway) -> Oslo (Norway) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Oslo. Check into the hotel and rest. Guided tour of Oslo, including the Viking Ship Museum and Holmenkollen Ski Jump.'
        },
        {
          'day': '2',
          'description': 'Oslo: Explore the historic Akershus Fortress and Vigeland Sculpture Park. Optional visit to the Nobel Peace Center.'
        },
        {
          'day': '3',
          'description': 'Travel to Bergen by scenic train journey. Check into the hotel and explore the colorful Bryggen Wharf and Fish Market.'
        },
        {
          'day': '4',
          'description': 'Bergen: Guided tour of Bergen, including the Hanseatic Museum and Fløibanen Funicular. Enjoy panoramic views from Mount Fløyen.'
        },
        {
          'day': '5',
          'description': 'Travel to Flam by ferry through the stunning Sognefjord. Explore Flam and enjoy a scenic fjord cruise.'
        },
        {
          'day': '6',
          'description': 'Flam: Visit the Stegastein Viewpoint for breathtaking fjord views. Optional visit to the Flam Railway Museum.'
        },
        {
          'day': '7',
          'description': 'Travel to Geiranger by coach. Check into the hotel and explore the charming village.'
        },
        {
          'day': '8',
          'description': 'Geiranger: Guided tour of the UNESCO-listed Geirangerfjord. Visit the Dalsnibba Viewpoint for stunning panoramic views.'
        },
        {
          'day': '9',
          'description': 'Return to Oslo by scenic drive. Free time for shopping or optional excursions.'
        },
        {
          'day': '10-11',
          'description': 'Free days in Oslo for last-minute sightseeing or shopping. Transfer to the airport for your return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Norway
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train, ferry, or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Serbia': {
      id: 13,
      country: 'Serbia',
      city: 'Belgrade',
      latitude: 44.7866,
      longitude: 20.4489,
      price: 800,
      imageUrl: '/',
      dateRange: 'SEP 10 - 7',
      days: 7,
      description: 'Discover the rich history, cultural heritage, and natural beauty of Serbia. From the vibrant capital city of Belgrade to the serene landscapes of rural Serbia, this journey promises an authentic Serbian experience.',
      tripRoute: 'Belgrade (Serbia) -> Novi Sad (Serbia) -> Niš (Serbia) -> Užice (Serbia) -> Kragujevac (Serbia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Belgrade. Check into the hotel and rest. Guided tour of Belgrade, including Kalemegdan Fortress and Skadarlija.'
        },
        {
          'day': '3',
          'description': 'Travel to Novi Sad. Explore Petrovaradin Fortress and the historic city center.'
        },
        {
          'day': '4',
          'description': 'Travel to Niš. Visit the Niš Fortress and Skull Tower.'
        },
        {
          'day': '5',
          'description': 'Travel to Užice. Explore the historic town and nearby attractions.'
        },
        {
          'day': '6-7',
          'description': 'Travel to Kragujevac. Explore the city\'s museums and monuments. Return to Belgrade.'
        }
      ],
      includedIn: `Accommodation in centrally located hotels or guesthouses
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (train or coach)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    }
  },
  'Africa': {
    'Egypt': {
      id: 1,
      country: 'Egypt',
      city: 'Cairo',
      latitude: 30.033333,
      longitude: 31.233334,
      price: 1500,
      imageUrl: '/',
      dateRange: 'SEP 20 - 30',
      days: 10,
      description: 'Immerse yourself in the ancient wonders, vibrant culture, and stunning landscapes of Egypt. From the iconic pyramids of Giza to the bustling streets of Cairo and the tranquil waters of the Nile, this journey promises an unforgettable Egyptian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Cairo (Egypt) -> Luxor (Egypt) -> Aswan (Egypt) -> Nile River Cruise -> Cairo (Egypt) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Cairo. Check into the hotel and rest. Guided tour of the Great Pyramids of Giza and the Sphinx.'
        },
        {
          'day': '2',
          'description': 'Cairo: Explore the Egyptian Museum and Khan El Khalili Bazaar. Optional visit to the Salah El-Din Citadel and Mohamed Ali Mosque.'
        },
        {
          'day': '3',
          'description': 'Travel to Luxor by domestic flight. Visit the Karnak Temple and Luxor Temple.'
        },
        {
          'day': '4',
          'description': 'Luxor: Explore the West Bank, including the Valley of the Kings, Queen Hatshepsut\'s Temple, and the Colossi of Memnon.'
        },
        {
          'day': '5',
          'description': 'Embark on a Nile River cruise. Sail to Edfu and visit the Temple of Horus.'
        },
        {
          'day': '6',
          'description': 'Continue the Nile cruise to Kom Ombo and visit the Temple of Sobek and Haroeris.'
        },
        {
          'day': '7',
          'description': 'Arrive in Aswan. Visit the High Dam, Philae Temple, and the Unfinished Obelisk. Optional visit to the Nubian Village.'
        },
        {
          'day': '8',
          'description': 'Aswan: Free day for optional excursions or leisure activities.'
        },
        {
          'day': '9',
          'description': 'Return to Cairo by domestic flight. Free day in Cairo for last-minute shopping or optional sightseeing.'
        },
        {
          'day': '10',
          'description': 'Transfer to the airport for your return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Egypt
      Accommodation in centrally located hotels and Nile River cruise ship
      Daily breakfast, lunch, and dinner during the Nile cruise
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and Nile River cruise)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Kenya': {
      id: 2,
      country: 'Kenya',
      city: 'Nairobi',
      latitude: -1.2864,
      longitude: 36.8172,
      price: 2000,
      imageUrl: '/',
      dateRange: 'AUG 10 - 22',
      days: 12,
      description: 'Experience the diverse landscapes, incredible wildlife, and rich culture of Kenya. From the vast savannahs of the Maasai Mara to the pristine beaches of the Kenyan coast, this journey promises an unforgettable Kenyan adventure.',
      tripRoute: 'Belgrade (Serbia) -> Nairobi (Kenya) -> Maasai Mara National Reserve (Kenya) -> Lake Nakuru National Park (Kenya) -> Amboseli National Park (Kenya) -> Nairobi (Kenya) -> Mombasa (Kenya) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Nairobi. Check into the hotel and rest. Visit the David Sheldrick Wildlife Trust and Giraffe Centre.'
        },
        {
          'day': '3-4',
          'description': 'Travel to the Maasai Mara National Reserve. Embark on a safari drive in search of the Big Five.'
        },
        {
          'day': '5',
          'description': 'Explore the Maasai Mara. Experience a hot air balloon safari or visit a local Maasai village.'
        },
        {
          'day': '6',
          'description': 'Travel to Lake Nakuru National Park. Explore the park and its diverse wildlife.'
        },
        {
          'day': '7',
          'description': 'Visit Lake Nakuru National Park. Enjoy birdwatching and game drives.'
        },
        {
          'day': '8-9',
          'description': 'Travel to Amboseli National Park. Experience stunning views of Mount Kilimanjaro.'
        },
        {
          'day': '10',
          'description': 'Explore Amboseli National Park. Take a guided nature walk or visit a Maasai village.'
        },
        {
          'day': '11',
          'description': 'Return to Nairobi.'
        },
        {
          'day': '12',
          'description': 'Travel to Mombasa. Relax on the pristine beaches of the Kenyan coast.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Kenya
      Accommodation in safari lodges and beach resorts
      Daily breakfast, lunch, and dinner during the safari portion
      Safari activities including game drives and cultural experiences
      Transportation between destinations (domestic flights and ground transfers)
      English-speaking safari guide and local guides
      All park fees and entrance fees
      All taxes and service charges`
    },
    'Madagascar': {
      id: 3,
      country: 'Madagascar',
      city: 'Antananarivo',
      latitude: -18.8792,
      longitude: 47.5079,
      price: 2500,
      imageUrl: '/',
      dateRange: 'NOV 2 - 16',
      days: 14,
      description: 'Explore the unique biodiversity, stunning landscapes, and fascinating culture of Madagascar. From the lush rainforests of Andasibe to the otherworldly rock formations of Tsingy de Bemaraha, this journey promises an unforgettable Madagascan adventure.',
      tripRoute: 'Belgrade (Serbia) -> Antananarivo (Madagascar) -> Andasibe-Mantadia National Park (Madagascar) -> Morondava (Madagascar) -> Tsingy de Bemaraha National Park (Madagascar) -> Avenue of the Baobabs (Madagascar) -> Antananarivo (Madagascar) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Antananarivo. Check into the hotel and rest. Visit the Lemur Park and Tsimbazaza Zoo.'
        },
        {
          'day': '3-4',
          'description': 'Travel to Andasibe-Mantadia National Park. Explore the rainforests and spot lemurs.'
        },
        {
          'day': '5',
          'description': 'Continue exploring Andasibe-Mantadia National Park. Visit the Vakona Private Reserve.'
        },
        {
          'day': '6-7',
          'description': 'Travel to Morondava. Visit the Avenue of the Baobabs for sunset.'
        },
        {
          'day': '8',
          'description': 'Explore Morondava. Visit Kirindy Forest and the Tsingy de Bemaraha National Park.'
        },
        {
          'day': '9-10',
          'description': 'Visit the Tsingy de Bemaraha National Park. Explore the limestone formations and caves.'
        },
        {
          'day': '11',
          'description': 'Return to Antananarivo.'
        },
        {
          'day': '12',
          'description': 'Explore Antananarivo. Visit the Rova of Antananarivo and Royal Hill of Ambohimanga.'
        },
        {
          'day': '13',
          'description': 'Free day in Antananarivo for optional activities or leisure.'
        },
        {
          'day': '14',
          'description': 'Transfer to the airport for your return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Madagascar
      Accommodation in eco-lodges and hotels
      Daily breakfast, lunch, and dinner
      Guided tours and entrance fees to national parks and attractions
      Transportation between destinations (domestic flights and ground transfers)
      English-speaking local guides
      All taxes and service charges`
    },
    'Morocco': {
      id: 4,
      country: 'Morocco',
      city: 'Rabat',
      latitude: 34.020882,
      longitude: -6.841650,
      price: 1700,
      imageUrl: '/',
      dateRange: 'FEB 19 - 29',
      days: 10,
      description: 'Immerse yourself in the vibrant colors, rich history, and exotic culture of Morocco. From the bustling markets of Marrakech to the stunning landscapes of the Sahara Desert, this journey promises an unforgettable Moroccan adventure.',
      tripRoute: 'Belgrade (Serbia) -> Marrakech (Morocco) -> Essaouira (Morocco) -> Fes (Morocco) -> Sahara Desert (Morocco) -> Marrakech (Morocco) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Marrakech. Check into the riad and rest. Explore the bustling Djemaa el Fna square.'
        },
        {
          'day': '3',
          'description': 'Visit the Bahia Palace and Saadian Tombs in Marrakech.'
        },
        {
          'day': '4',
          'description': 'Travel to Essaouira. Explore the coastal town and its historic medina.'
        },
        {
          'day': '5',
          'description': 'Explore Essaouira. Relax on the beach or visit the Skala de la Ville.'
        },
        {
          'day': '6',
          'description': 'Travel to Fes. Explore the medina and its labyrinth of streets.'
        },
        {
          'day': '7',
          'description': 'Visit the Bou Inania Madrasa and Al-Attarine Madrasa in Fes.'
        },
        {
          'day': '8',
          'description': 'Embark on a desert excursion to the Sahara Desert. Experience a camel trek and overnight stay in a desert camp.'
        },
        {
          'day': '9',
          'description': 'Return to Marrakech.'
        },
        {
          'day': '10',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Morocco
      Accommodation in riads and desert camps
      Daily breakfast and dinner
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (coach or domestic flights)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Namibia': {
      id: 5,
      country: 'Namibia',
      city: 'Windhoek',
      latitude: -22.9576,
      longitude: 18.4904,
      price: 2500,
      imageUrl: '/',
      dateRange: 'JAN 1 - 14',
      days: 14,
      description: 'Discover the rugged beauty, diverse wildlife, and vast landscapes of Namibia. From the towering sand dunes of Sossusvlei to the wildlife-rich plains of Etosha National Park, this journey promises an unforgettable Namibian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Windhoek (Namibia) -> Sossusvlei (Namibia) -> Swakopmund (Namibia) -> Damaraland (Namibia) -> Etosha National Park (Namibia) -> Windhoek (Namibia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Windhoek. Check into the lodge and rest. Explore the city center and National Botanical Garden.'
        },
        {
          'day': '3-4',
          'description': 'Travel to Sossusvlei. Visit the towering sand dunes of the Namib Desert.'
        },
        {
          'day': '5',
          'description': 'Explore Sossusvlei. Experience a sunrise hike up Dune 45.'
        },
        {
          'day': '6-7',
          'description': 'Travel to Swakopmund. Explore the coastal town and enjoy optional activities.'
        },
        {
          'day': '8',
          'description': 'Experience adventure activities in Swakopmund, such as sandboarding or quad biking.'
        },
        {
          'day': '9-10',
          'description': 'Travel to Damaraland. Explore the unique landscapes and visit Twyfelfontein.'
        },
        {
          'day': '11',
          'description': 'Visit the Petrified Forest and Organ Pipes in Damaraland.'
        },
        {
          'day': '12',
          'description': 'Travel to Etosha National Park. Embark on game drives in search of wildlife.'
        },
        {
          'day': '13',
          'description': 'Explore Etosha National Park. Visit waterholes and watch wildlife interactions.'
        },
        {
          'day': '14',
          'description': 'Return to Windhoek.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Namibia
      Accommodation in lodges and desert camps
      Daily breakfast, lunch, and dinner
      Guided tours and entrance fees to national parks and attractions
      Transportation between destinations (domestic flights and ground transfers)
      English-speaking local guides
      All taxes and service charges`
    },
    'South Africa': {
      id: 6,
      country: 'South Africa',
      city: 'Cape Town',
      latitude: -33.918861,
      longitude: 18.423300,
      price: 2800,
      imageUrl: '/',
      dateRange: 'JUN 10 - 24',
      days: 14,
      description: 'Explore the diverse landscapes, rich wildlife, and vibrant culture of South Africa. From the iconic Table Mountain in Cape Town to the thrilling safari experiences in Kruger National Park, this journey promises an unforgettable South African adventure.',
      tripRoute: 'Belgrade (Serbia) -> Cape Town (South Africa) -> Garden Route (South Africa) -> Knysna (South Africa) -> Port Elizabeth (South Africa) -> Johannesburg (South Africa) -> Kruger National Park (South Africa) -> Johannesburg (South Africa) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Cape Town. Check into the hotel and rest. Explore the V&A Waterfront and Table Mountain.'
        },
        {
          'day': '3-4',
          'description': 'Visit Robben Island and Kirstenbosch National Botanical Garden.'
        },
        {
          'day': '5',
          'description': 'Travel along the Garden Route. Visit Hermanus for whale watching.'
        },
        {
          'day': '6',
          'description': 'Explore Knysna. Visit the Knysna Heads and Featherbed Nature Reserve.'
        },
        {
          'day': '7',
          'description': 'Travel to Port Elizabeth. Enjoy optional activities or relax on the beach.'
        },
        {
          'day': '8',
          'description': 'Visit Addo Elephant National Park. Embark on a safari drive.'
        },
        {
          'day': '9',
          'description': 'Return to Cape Town.'
        },
        {
          'day': '10',
          'description': 'Fly to Johannesburg. Explore the city and Soweto Township.'
        },
        {
          'day': '11',
          'description': 'Travel to Kruger National Park. Embark on thrilling safari experiences.'
        },
        {
          'day': '12',
          'description': 'Explore Kruger National Park. Enjoy game drives and bush walks.'
        },
        {
          'day': '13',
          'description': 'Return to Johannesburg.'
        },
        {
          'day': '14',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to South Africa
      Accommodation in hotels and lodges
      Daily breakfast and selected meals during the safari
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and ground transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Zanzibar': {
      id: 7,
      country: 'Zanzibar',
      city: 'Zanzibar City',
      latitude: -6.1659,
      longitude: 39.2026,
      price: 2000,
      imageUrl: '/',
      dateRange: 'JUL 20 - 28',
      days: 8,
      description: 'Relax on the pristine beaches, explore the rich culture, and indulge in the exotic flavors of Zanzibar. From the historic Stone Town to the idyllic beaches of Nungwi and Kendwa, this journey promises an unforgettable Zanzibari escape.',
      tripRoute: 'Belgrade (Serbia) -> Zanzibar (Tanzania) -> Stone Town (Zanzibar) -> Nungwi (Zanzibar) -> Kendwa (Zanzibar) -> Stone Town (Zanzibar) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Zanzibar. Check into the beach resort and rest. Explore Stone Town and its historic sites.'
        },
        {
          'day': '3',
          'description': 'Travel to Nungwi. Relax on the beaches and enjoy water activities.'
        },
        {
          'day': '4',
          'description': 'Explore Nungwi. Visit the Mnarani Marine Turtle Conservation Pond.'
        },
        {
          'day': '5',
          'description': 'Travel to Kendwa. Relax on the pristine beaches and enjoy sunset views.'
        },
        {
          'day': '6',
          'description': 'Explore Kendwa. Enjoy snorkeling or diving in the crystal-clear waters.'
        },
        {
          'day': '7',
          'description': 'Return to Stone Town. Visit the spice farms or Jozani Chwaka Bay National Park.'
        },
        {
          'day': '8',
          'description': 'Return to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Zanzibar
      Accommodation in beach resorts and hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between locations (private transfers)
      English-speaking local guides
      All taxes and service charges
      `
    },
    'Uganda': {
      id: 8,
      country: 'Uganda',
      city: 'Kampala',
      latitude: 0.3476,
      longitude: 32.5825,
      price: 3000,
      imageUrl: '/',
      dateRange: 'MAY 5 - 17',
      days: 12,
      description: 'Embark on a safari adventure and trek through lush jungles to encounter gorillas and chimpanzees in their natural habitat in Uganda. From the breathtaking landscapes of Bwindi Impenetrable National Park to the tranquil waters of the Nile River, this journey promises an unforgettable Ugandan experience.',
      tripRoute: 'Belgrade (Serbia) -> Entebbe (Uganda) -> Bwindi Impenetrable National Park (Uganda) -> Queen Elizabeth National Park (Uganda) -> Kibale National Park (Uganda) -> Murchison Falls National Park (Uganda) -> Kampala (Uganda) -> Entebbe (Uganda) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Entebbe. Transfer to Bwindi Impenetrable National Park.'
        },
        {
          'day': '3',
          'description': 'Embark on a gorilla trekking adventure in Bwindi Impenetrable National Park.'
        },
        {
          'day': '4-5',
          'description': 'Continue exploring Bwindi Impenetrable National Park. Enjoy optional activities.'
        },
        {
          'day': '6',
          'description': 'Travel to Queen Elizabeth National Park. Enjoy a safari drive.'
        },
        {
          'day': '7',
          'description': 'Embark on a chimpanzee trekking adventure in Kibale National Park.'
        },
        {
          'day': '8',
          'description': 'Explore Kibale National Park. Enjoy optional activities.'
        },
        {
          'day': '9',
          'description': 'Travel to Murchison Falls National Park. Enjoy a boat safari on the Nile River.'
        },
        {
          'day': '10',
          'description': 'Embark on a safari drive in Murchison Falls National Park.'
        },
        {
          'day': '11',
          'description': 'Return to Kampala. Explore the city and visit local attractions.'
        },
        {
          'day': '12',
          'description': 'Transfer to Entebbe. Departure from Entebbe.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Uganda
      Accommodation in lodges and tented camps
      Daily breakfast, lunch, and dinner
      Gorilla and chimpanzee trekking permits
      Safari activities with experienced guides
      Transportation between locations (domestic flights and ground transfers)
      English-speaking local guides
      All taxes and service charges`
    }
  },
  'Asia': {
    'Hong Kong': {
      id: 1,
      country: 'China',
      city: 'Hong Kong',
      latitude: 22.302711,
      longitude: 114.177216,
      price: 2500,
      imageUrl: '/',
      dateRange: 'AUG 8 - 22',
      days: 14,
      description: 'Explore the ancient landmarks, vibrant cities, and breathtaking landscapes of China. From the iconic Great Wall and Forbidden City in Beijing to the picturesque karst mountains of Guilin and the modern metropolis of Shanghai, this journey promises an unforgettable Chinese adventure.',
      tripRoute: 'Belgrade (Serbia) -> Beijing (China) -> Xi\'an (China) -> Guilin (China) -> Yangshuo (China) -> Shanghai (China) -> Suzhou (China) -> Hangzhou (China) -> Beijing (China) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Beijing. Transfer to your hotel and settle in.'
        },
        {
          'day': '3-4',
          'description': 'Explore the iconic landmarks of Beijing, including the Great Wall and the Forbidden City.'
        },
        {
          'day': '5',
          'description': 'Travel to Xi\'an. Visit the Terracotta Army and other historical sites.'
        },
        {
          'day': '6',
          'description': 'Explore the cultural and historical treasures of Xi\'an, including the City Wall and the Muslim Quarter.'
        },
        {
          'day': '7',
          'description': 'Transfer to Guilin. Enjoy a scenic cruise on the Li River.'
        },
        {
          'day': '8',
          'description': 'Discover the karst landscapes of Yangshuo. Enjoy outdoor activities such as cycling or bamboo rafting.'
        },
        {
          'day': '9-10',
          'description': 'Travel to Shanghai. Explore the modern metropolis and vibrant nightlife.'
        },
        {
          'day': '11',
          'description': 'Visit Suzhou, known for its classical gardens and silk production.'
        },
        {
          'day': '12',
          'description': 'Explore Hangzhou, famous for its West Lake and tea plantations.'
        },
        {
          'day': '13',
          'description': 'Return to Beijing. Enjoy free time for shopping or exploring the city.'
        },
        {
          'day': '14',
          'description': 'Depart from Beijing. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to China
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and high-speed trains)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'China': {
      id: 2,
      country: 'China',
      city: 'Beijing',
      latitude: 39.9042,
      longitude: 116.4074,
      price: 1800,
      imageUrl: '/',
      dateRange: 'FEB 20 - 27',
      days: 7,
      description: 'Experience the vibrant fusion of Eastern and Western cultures in the dazzling metropolis of Hong Kong. From towering skyscrapers and bustling street markets to tranquil temples and scenic harbors, this itinerary offers an exciting exploration of Hong Kong\'s dynamic cityscape.',
      tripRoute: 'Belgrade (Serbia) -> Hong Kong (China) -> Lantau Island (Hong Kong) -> Kowloon (Hong Kong) -> Hong Kong Island (Hong Kong) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Hong Kong. Transfer to your hotel and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant streets of Kowloon and visit iconic landmarks such as Victoria Harbour and the Star Ferry. Discover the cultural heritage of Hong Kong Island, including attractions like Victoria Peak and Man Mo Temple.'
        },
        {
          'day': '4',
          'description': 'Take a day trip to Lantau Island to visit the Tian Tan Buddha and enjoy scenic views of the island.'
        },
        {
          'day': '5-6',
          'description': 'Explore the bustling markets and street food stalls of Kowloon, experiencing the local flavors and culture. Enjoy leisure time exploring the city at your own pace or take optional excursions.'
        },
        {
          'day': '7',
          'description': 'Depart from Hong Kong. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Hong Kong
      Accommodation in centrally located hotels
      Daily breakfast
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between locations (MTR, ferry)
      English-speaking tour guide for guided tours
      All taxes and service charges`
    },
    'India': {
      id: 3,
      country: 'India',
      city: 'New Delhi',
      latitude: 20.5937,
      longitude: 78.9629,
      price: 2200,
      imageUrl: '/',
      dateRange: 'OCT 20 - 1',
      days: 12,
      description: 'Discover the vibrant culture, rich history, and diverse landscapes of India. From the majestic Taj Mahal in Agra to the bustling streets of Delhi and the serene backwaters of Kerala, this journey promises an unforgettable Indian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Delhi (India) -> Agra (India) -> Jaipur (India) -> Udaipur (India) -> Kochi (India) -> Alleppey (India) -> Kochi (India) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrival in Delhi. Transfer to hotel. Rest and relaxation.'
        },
        {
          'day': '2-3',
          'description': 'Explore Old Delhi\'s historic landmarks. Visit the magnificent Taj Mahal in Agra.'
        },
        {
          'day': '4-5',
          'description': 'Discover Jaipur\'s cultural heritage. Enjoy the romantic ambience of Udaipur.'
        },
        {
          'day': '6',
          'description': 'Journey to Kochi, Kerala.'
        },
        {
          'day': '7-8',
          'description': 'Cruise the tranquil backwaters of Alleppey. Explore Kochi\'s cultural sites and vibrant markets.'
        },
        {
          'day': '9-10',
          'description': 'Free time in Kochi. Optional excursions available.'
        },
        {
          'day': '11',
          'description': 'Departure from Kochi to Belgrade.'
        },
        {
          'day': '12',
          'description': 'Arrival in Belgrade, concluding the unforgettable journey through the wonders of India.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to India
      Accommodation in centrally located hotels and houseboats
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Iran': {
      id: 4,
      country: 'Iran',
      city: 'Tehran',
      latitude: 32.4279,
      longitude: 53.6880,
      price: 2000,
      imageUrl: '/',
      dateRange: 'MAY 28 - 7',
      days: 10,
      description: 'Discover the rich history, stunning architecture, and vibrant culture of Iran. From the ancient ruins of Persepolis to the beautiful mosques of Isfahan and the bustling bazaars of Tehran, this journey promises an unforgettable Iranian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Tehran (Iran) -> Isfahan (Iran) -> Shiraz (Iran) -> Yazd (Iran) -> Tehran (Iran) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Tehran. Transfer to your hotel and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore the historical sites of Tehran, including Golestan Palace and the Grand Bazaar.'
        },
        {
          'day': '3-4',
          'description': 'Travel to Isfahan. Discover the stunning architecture of Naqsh-e Jahan Square and the Imam Mosque.'
        },
        {
          'day': '5',
          'description': 'Continue exploring Isfahan. Visit more attractions like Chehel Sotoun Palace and Jameh Mosque.'
        },
        {
          'day': '6',
          'description': 'Explore the ancient city of Persepolis, a UNESCO World Heritage Site.'
        },
        {
          'day': '7',
          'description': 'Visit the cultural attractions of Shiraz, including the Nasir al-Mulk Mosque and the Eram Garden.'
        },
        {
          'day': '8',
          'description': 'Discover the desert city of Yazd, known for its wind towers and ancient Zoroastrian heritage.'
        },
        {
          'day': '9',
          'description': 'Return to Tehran. Enjoy leisure time exploring the city or shopping for souvenirs.'
        },
        {
          'day': '10',
          'description': 'Depart from Tehran. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Iran
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Sri Lanka': {
      id: 5,
      country: 'Sri Lanka',
      city: 'Colombo',
      latitude: 6.927079,
      longitude: 79.861244,
      price: 1900,
      imageUrl: '/',
      dateRange: 'SEP 10 - 19',
      days: 9,
      description: 'Embark on a journey through the tropical paradise of Sri Lanka, where ancient ruins, lush tea plantations, and pristine beaches await. From the cultural treasures of Kandy and Sigiriya to the scenic train ride through the hill country and the relaxing shores of Bentota, this itinerary offers an immersive Sri Lankan experience.',
      tripRoute: 'Belgrade (Serbia) -> Colombo (Sri Lanka) -> Kandy (Sri Lanka) -> Sigiriya (Sri Lanka) -> Ella (Sri Lanka) -> Bentota (Sri Lanka) -> Colombo (Sri Lanka) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Colombo. Transfer to your hotel and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Travel to Kandy. Explore the cultural landmarks, including the Temple of the Tooth and the Royal Botanical Gardens. Visit the ancient rock fortress of Sigiriya, known for its stunning frescoes and panoramic views.'
        },
        {
          'day': '4-5',
          'description': 'Travel to Ella. Enjoy a scenic train ride through the hill country, passing tea plantations and waterfalls. Explore the picturesque town of Ella, known for its hiking trails and stunning vistas.'
        },
        {
          'day': '6',
          'description': 'Transfer to Bentota. Relax on the pristine beaches or engage in water sports activities.'
        },
        {
          'day': '7',
          'description': 'Enjoy leisure time in Bentota, exploring the beaches and nearby attractions.'
        },
        {
          'day': '8-9',
          'description': 'Return to Colombo. Explore the capital city\'s vibrant markets and cultural sites. Depart from Colombo. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Sri Lanka
      Accommodation in centrally located hotels and beach resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (private transfers and train)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Japan': {
      id: 6,
      country: 'Japan',
      city: 'Tokyo',
      latitude: 35.6895,
      longitude: 139.6917,
      price: 3000,
      imageUrl: '/',
      dateRange: 'APR 1 - 14',
      days: 14,
      description: 'Immerse yourself in the unique blend of tradition and modernity in Japan. From the bustling streets of Tokyo to the serene temples of Kyoto and the scenic landscapes of Hakone, this journey promises an unforgettable Japanese adventure.',
      tripRoute: 'Belgrade (Serbia) -> Tokyo (Japan) -> Hakone (Japan) -> Kyoto (Japan) -> Nara (Japan) -> Osaka (Japan) -> Hiroshima (Japan) -> Miyajima (Japan) -> Tokyo (Japan) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Tokyo. Transfer to your hotel and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore the vibrant neighborhoods of Tokyo, including Shibuya, Shinjuku, and Akihabara.'
        },
        {
          'day': '3',
          'description': 'Take a day trip to Hakone. Enjoy views of Mount Fuji and relax in hot springs.'
        },
        {
          'day': '4-5',
          'description': 'Travel to Kyoto. Discover the cultural heritage of the ancient capital, visiting temples, gardens, and traditional tea houses.'
        },
        {
          'day': '6',
          'description': 'Explore the historic districts of Kyoto, including Arashiyama and Gion, known for their traditional architecture and geisha culture.'
        },
        {
          'day': '7',
          'description': 'Take a day trip to Nara. Visit Todaiji Temple and Nara Park, home to friendly deer.'
        },
        {
          'day': '8-9',
          'description': 'Travel to Osaka. Explore the vibrant city known for its street food, nightlife, and historic landmarks.'
        },
        {
          'day': '10-11',
          'description': 'Take a day trip to Hiroshima and Miyajima. Visit the Peace Memorial Park and Itsukushima Shrine.'
        },
        {
          'day': '12-13',
          'description': 'Return to Tokyo. Enjoy leisure time exploring the city or shopping for souvenirs.'
        },
        {
          'day': '14',
          'description': 'Depart from Tokyo. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Japan
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (bullet trains and domestic flights)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Iraq': {
      id: 7,
      country: 'Iraq',
      city: 'Baghdad',
      latitude: 33.3152,
      longitude: 44.3661,
      price: 2500,
      imageUrl: '/',
      dateRange: 'MAR 20 - 30',
      days: 10,
      description: 'Explore the ancient ruins, stunning desert landscapes, and vibrant culture of Iraq. From the iconic sites to the breathtaking views, this journey promises an unforgettable Iraqi adventure.',
      tripRoute: 'Belgrade (Serbia) -> Baghdad (Iraq) -> Babylon (Iraq) -> Erbil (Iraq) -> Mosul (Iraq) -> Kirkuk (Iraq) -> Baghdad (Iraq) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Baghdad. Transfer to your hotel and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the historical sites of Baghdad, including the Al-Mustansiriya School and the National Museum of Iraq.'
        },
        {
          'day': '4',
          'description': 'Visit the ancient city of Babylon, a UNESCO World Heritage Site, and explore its ruins and historical significance.'
        },
        {
          'day': '5',
          'description': 'Travel to Erbil, the capital of Iraqi Kurdistan, and explore its historic citadel and bustling bazaars.'
        },
        {
          'day': '6',
          'description': 'Discover the city of Mosul, known for its rich history and cultural heritage.'
        },
        {
          'day': '7-8',
          'description': 'Explore Kirkuk, an ancient city with a diverse cultural heritage, including Kurdish, Arab, and Turkmen influences.'
        },
        {
          'day': '9',
          'description': 'Return to Baghdad. Enjoy leisure time exploring the city or shopping for souvenirs.'
        },
        {
          'day': '10',
          'description': 'Depart from Baghdad. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Iraq
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Nepal': {
      id: 8,
      country: 'Nepal',
      city: 'Kathmandu',
      latitude: 28.3949,
      longitude: 84.1240,
      price: 1800,
      imageUrl: '/',
      dateRange: 'SEP 24 - 6',
      days: 12,
      description: 'Immerse yourself in the breathtaking landscapes, rich culture, and spiritual heritage of Nepal. From the majestic Himalayas to the ancient temples of Kathmandu and the tranquil lakes of Pokhara, this journey promises an unforgettable Nepalese adventure.',
      tripRoute: 'Belgrade (Serbia) -> Kathmandu (Nepal) -> Bhaktapur (Nepal) -> Pokhara (Nepal) -> Chitwan National Park (Nepal) -> Kathmandu (Nepal) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Kathmandu. Transfer to your hotel and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the cultural landmarks of Kathmandu, including Durbar Square, Swayambhunath Stupa, and Boudhanath Stupa.'
        },
        {
          'day': '4',
          'description': 'Visit the ancient city of Bhaktapur, known for its well-preserved medieval architecture and rich cultural heritage.'
        },
        {
          'day': '5-6',
          'description': 'Travel to Pokhara, a picturesque city nestled in the Himalayas, and enjoy stunning views of the Annapurna range and Phewa Lake.'
        },
        {
          'day': '7',
          'description': 'Explore Pokhara\'s natural beauty and cultural sites, including the World Peace Pagoda and Devi\'s Fall.'
        },
        {
          'day': '8',
          'description': 'Journey to Chitwan National Park and embark on wildlife safaris, elephant rides, and canoe trips to spot exotic wildlife.'
        },
        {
          'day': '9-10',
          'description': 'Return to Kathmandu. Enjoy leisure time exploring the city or shopping for souvenirs.'
        },
        {
          'day': '11',
          'description': 'Depart from Kathmandu. Return flight to Belgrade.'
        },
        {
          'day': '12',
          'description': 'Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Nepal
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'South Korea': {
      id: 9,
      country: 'South Korea',
      city: 'Seoul',
      latitude: 37.5665,
      longitude: 126.9780,
      price: 2200,
      imageUrl: '/',
      dateRange: 'DEC 2 - 12',
      days: 10,
      description: 'Explore the vibrant cities, ancient palaces, and scenic landscapes of South Korea. From the bustling streets of Seoul to the historic sites of Gyeongju and the stunning beaches of Busan, this journey promises an unforgettable Korean adventure',
      tripRoute: 'Belgrade (Serbia) -> Seoul (South Korea) -> Gyeongju (South Korea) -> Busan (South Korea) -> Seoul (South Korea) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Seoul. Transfer to your hotel and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore the vibrant neighborhoods of Seoul, including Myeongdong, Insadong, and Gangnam.'
        },
        {
          'day': '3',
          'description': 'Discover the historic sites of Gyeongju, known as the \'Museum without Walls,\' including Bulguksa Temple and Seokguram Grotto.'
        },
        {
          'day': '4-5',
          'description': 'Journey to Busan, South Korea\'s second-largest city, and explore its beaches, temples, and vibrant markets.'
        },
        {
          'day': '6',
          'description': 'Enjoy leisure time in Busan, relaxing on the beach or exploring the city\'s cultural and culinary delights.'
        },
        {
          'day': '7',
          'description': 'Return to Seoul. Explore more of the city\'s attractions or enjoy shopping and dining in the bustling neighborhoods.'
        },
        {
          'day': '8-9',
          'description': 'Depart from Seoul. Return flight to Belgrade. Arrive in Belgrade.'
        },
        {
          'day': '10',
          'description': 'Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to South Korea
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (high-speed trains or private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Thailand': {
      id: 10,
      country: 'Thailand',
      city: 'Bangkok',
      latitude: 13.7563,
      longitude: 100.5018,
      price: 2500,
      imageUrl: '/',
      dateRange: 'JUL 12 - 26',
      days: 14,
      description: 'Immerse yourself in the vibrant culture, stunning beaches, and rich history of Thailand. From the bustling streets of Bangkok to the tranquil islands of Phuket and Krabi, this journey promises an unforgettable Thai adventure.',
      tripRoute: 'Belgrade (Serbia) -> Bangkok (Thailand) -> Ayutthaya (Thailand) -> Chiang Mai (Thailand) -> Phuket (Thailand) -> Krabi (Thailand) -> Bangkok (Thailand) -> Belgrade (Serbia)',
      travelPlan: [
        {
            'day': '1',
            'description': 'Arrive in Bangkok. Transfer to your hotel and settle in.'
        },
        {
            'day': '2',
            'description': 'Explore the vibrant neighborhoods of Bangkok, including Chinatown, Wat Arun, and the Grand Palace.'
        },
        {
            'day': '3',
            'description': 'Visit the ancient city of Ayutthaya, a UNESCO World Heritage Site, and explore its temples and historical ruins.'
        },
        {
            'day': '4-5',
            'description': 'Travel to Chiang Mai, the cultural capital of northern Thailand, and explore its temples, markets, and traditional Thai cuisine.'
        },
        {
            'day': '6',
            'description': 'Discover the natural beauty of Phuket, Thailand\'s largest island, and enjoy activities such as snorkeling, diving, and beach relaxation.'
        },
        {
            'day': '7',
            'description': 'Explore the stunning limestone cliffs and clear waters of Krabi, known for its beautiful beaches and adventurous outdoor activities.'
        },
        {
            'day': '8-9',
            'description': 'Return to Bangkok. Explore more of the city\'s attractions or enjoy shopping and dining in the bustling neighborhoods.'
        },
        {
            'day': '10-11',
            'description': 'Continue exploring Bangkok or take optional day trips to nearby attractions.'
        },
        {
            'day': '12',
            'description': 'Depart from Bangkok. Return flight to Belgrade.'
        },
        {
            'day': '13',
            'description': 'Arrival in Belgrade.'
        }
    ],
      includedIn: `Roundtrip flights from Belgrade to Thailand
      Accommodation in centrally located hotels and beach resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities (domestic flights and private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Mongolia': {
      id: 11,
      country: 'Mongolia',
      city: 'Ulaanbaatar',
      latitude: 47.921230,
      longitude: 106.918556,
      price: 2200,
      imageUrl: '/',
      dateRange: 'SEP 24 - 4',
      days: 10,
      description: 'Embark on an extraordinary journey through the rugged landscapes, nomadic culture, and ancient history of Mongolia. From the vast steppes and towering mountains to the nomadic yurts and historic monasteries, this itinerary promises an unforgettable Mongolian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Ulaanbaatar (Mongolia) -> Terelj National Park (Mongolia) -> Kharkhorin (Mongolia) -> Orkhon Valley (Mongolia) -> Ulaanbaatar (Mongolia) -> Belgrade (Serbia)',
      travelPlan: [
        {
            'day': '1',
            'description': 'Arrive in Ulaanbaatar. Transfer to your ger camp and settle in.'
        },
        {
            'day': '2',
            'description': 'Explore Terelj National Park, known for its stunning landscapes, rock formations, and opportunities for outdoor activities.'
        },
        {
            'day': '3',
            'description': 'Journey to Kharkhorin, the ancient capital of the Mongol Empire, and visit Erdene Zuu Monastery and the Museum of Kharkhorin.'
        },
        {
            'day': '4',
            'description': 'Travel to Orkhon Valley, a UNESCO World Heritage Site, and explore its natural beauty, nomadic culture, and archaeological sites.'
        },
        {
            'day': '5',
            'description': 'Experience the nomadic way of life, staying in traditional yurts and participating in activities such as horseback riding and milking yaks.'
        },
        {
            'day': '6',
            'description': 'Enjoy leisure time in Orkhon Valley, exploring the surroundings or engaging in optional activities.'
        },
        {
            'day': '7',
            'description': 'Return to Ulaanbaatar. Enjoy leisure time exploring the city or shopping for souvenirs.'
        },
        {
            'day': '8',
            'description': 'Continue exploring Ulaanbaatar or take optional day trips to nearby attractions.'
        },
        {
            'day': '9',
            'description': 'Depart from Ulaanbaatar. Return flight to Belgrade.'
        },
        {
            'day': '10',
            'description': 'Arrival in Belgrade.'
        }
    ],
      includedIn: `Roundtrip flights from Belgrade to Mongolia
      Accommodation in traditional ger camps and guesthouses
      Daily breakfast, lunch, and dinner
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between locations (private transfers and minivan)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'UAE': {
      id: 12,
      country: 'UAE',
      city: 'Abu Dhabi',
      latitude: 23.4241,
      longitude: 53.8478,
      price: 2800,
      imageUrl: '/',
      dateRange: 'DEC 23 - 2',
      days: 10,
      description: 'Experience the luxury, modernity, and cultural richness of the United Arab Emirates. From the dazzling skyscrapers of Dubai to the cultural heritage of Abu Dhabi and the serene desert landscapes of the Liwa Oasis, this journey promises an unforgettable Emirati adventure.',
      tripRoute: 'Belgrade (Serbia) -> Dubai (UAE) -> Abu Dhabi (UAE) -> Liwa Oasis (UAE) -> Dubai (UAE) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Dubai. Transfer to your luxury hotel and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore the modern marvels of Dubai, including the Burj Khalifa, Dubai Mall, and Palm Jumeirah.'
        },
        {
          'day': '3',
          'description': 'Visit Abu Dhabi, the capital of the UAE, and explore its cultural attractions, including the Sheikh Zayed Grand Mosque and Louvre Abu Dhabi.'
        },
        {
          'day': '4',
          'description': 'Experience the tranquility of the Liwa Oasis, nestled in the Empty Quarter desert, and enjoy activities such as dune bashing and camel riding.'
        },
        {
          'day': '5',
          'description': 'Return to Dubai. Enjoy a day of leisure, perhaps indulging in shopping or relaxing at the hotel.'
        },
        {
          'day': '6',
          'description': 'Embark on a day trip to Sharjah, known as the cultural capital of the UAE. Explore its museums, heritage sites, and bustling souks.'
        },
        {
          'day': '7',
          'description': 'Take a scenic drive to Al Ain, known as the Garden City, and visit its attractions, including the Al Ain Oasis and Jebel Hafeet mountain.'
        },
        {
          'day': '8',
          'description': 'Return to Dubai. Spend the day exploring more of the city or relaxing at your hotel.'
        },
        {
          'day': '9',
          'description': 'Enjoy a farewell dinner cruise along Dubai Creek, taking in the glittering skyline and traditional sights.'
        },
        {
          'day': '10',
          'description': 'Depart from Dubai. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to the UAE
      Accommodation in luxury hotels and desert resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Desert safari with dinner and entertainment
      Transportation between cities (private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Vietnam': {
      id: 13,
      country: 'Vietnam',
      city: 'Hanoi',
      latitude: 14.0583,
      longitude: 108.2772,
      price: 2000,
      imageUrl: '/',
      dateRange: 'APR 20 - 2',
      days: 12,
      description: 'Discover the rich history, stunning landscapes, and vibrant culture of Vietnam. From the bustling streets of Hanoi to the picturesque landscapes of Halong Bay and the ancient town of Hoi An, this journey promises an unforgettable Vietnamese adventure.',
      tripRoute: 'Belgrade (Serbia) -> Hanoi (Vietnam) -> Halong Bay (Vietnam) -> Hanoi (Vietnam) -> Hue (Vietnam) -> Hoi An (Vietnam) -> Ho Chi Minh City (Vietnam) -> Mekong Delta (Vietnam) -> Ho Chi Minh City (Vietnam) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Hanoi. Transfer to your hotel and settle in. Explore the cultural landmarks of Hanoi, including Hoan Kiem Lake, the Old Quarter, and the Temple of Literature.'
        },
        {
          'day': '3',
          'description': 'Embark on a cruise through the stunning limestone karsts of Halong Bay, a UNESCO World Heritage Site.'
        },
        {
          'day': '4',
          'description': 'Return to Hanoi. Explore more of the city\'s attractions or enjoy leisure time shopping and dining.'
        },
        {
          'day': '5',
          'description': 'Continue exploring Hanoi or take an optional day trip to nearby attractions.'
        },
        {
          'day': '6',
          'description': 'Travel to Hue, the former imperial capital of Vietnam, and explore its historic citadel, royal tombs, and pagodas.'
        },
        {
          'day': '7',
          'description': 'Journey to Hoi An, a UNESCO World Heritage Site known for its well-preserved ancient town and colorful lanterns.'
        },
        {
          'day': '8-9',
          'description': 'Explore Hoi An\'s charming streets, ancient temples, and local markets. Enjoy leisure time shopping for souvenirs or relaxing on the beach.'
        },
        {
          'day': '10',
          'description': 'Travel to Ho Chi Minh City (Saigon) and explore its bustling streets, historic landmarks, and vibrant markets.'
        },
        {
          'day': '11-12',
          'description': 'Discover the scenic beauty of the Mekong Delta, including floating markets, fruit orchards, and traditional villages. Return to Ho Chi Minh City. Enjoy leisure time exploring the city or shopping for souvenirs. Depart from Ho Chi Minh City. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Vietnam
      Accommodation in centrally located hotels and cruises
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Halong Bay cruise with overnight stay
      Transportation between cities (domestic flights and private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    }
  },
  'Oceania': {
    'Papua New Guinea': {
      id: 1,
      country: 'Papua New Guinea',
      city: 'Port Moresby',
      latitude: -9.47723,
      longitude: 147.15089,
      price: 3500,
      imageUrl: '/',
      dateRange: 'OCT 5 - 17',
      days: 12,
      description: 'Embark on an adventure to discover the vibrant culture, pristine nature, and unique traditions of Papua New Guinea. From trekking in the highlands to immersing yourself in local villages and witnessing colorful tribal festivals, this trip promises an unforgettable journey into the heart of Melanesia.',
      tripRoute: 'Belgrade (Serbia) -> Port Moresby (Papua New Guinea) -> Mount Hagen (Papua New Guinea) -> Goroka (Papua New Guinea) -> Tari (Papua New Guinea) -> Mount Hagen (Papua New Guinea) -> Port Moresby (Papua New Guinea) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1-2',
          'description': 'Arrive in Port Moresby. Transfer to your accommodation and settle in. Embark on a trekking adventure in the highlands near Port Moresby.'
        },
        {
          'day': '3',
          'description': 'Travel to Mount Hagen and explore the local markets and villages.'
        },
        {
          'day': '4-5',
          'description': 'Experience the vibrant Goroka Cultural Show, showcasing the diverse cultures of Papua New Guinea.'
        },
        {
          'day': '6',
          'description': 'Journey to Tari and immerse yourself in the traditional way of life of the Huli Wigmen.'
        },
        {
          'day': '7',
          'description': 'Continue exploring Tari and its surrounding areas.'
        },
        {
          'day': '8-9',
          'description': 'Return to Mount Hagen and continue exploring the surrounding area.'
        },
        {
          'day': '10',
          'description': 'Return to Port Moresby. Enjoy leisure time or explore the city\'s attractions.'
        },
        {
          'day': '11-12',
          'description': 'Depart from Port Moresby. Return flight to Belgrade. Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Port Moresby
      Domestic flights within Papua New Guinea
      Accommodation in local guesthouses or lodges
      Daily breakfast, lunch, and dinner
      Guided trekking and cultural tours with experienced guides
      Entrance fees to cultural events and festivals
      Transportation between cities and to trekking sites
      English-speaking tour leader and local guides
      All taxes and service charges`
    },
    'Uluru': {
      id: 2,
      country: 'Australia',
      city: 'Uluru',
      latitude: -25.3444,
      longitude: 131.0369,
      price: 2500,
      imageUrl: '/',
      dateRange: 'AUG 20 - 25',
      days: 5,
      description: 'Explore the iconic red rock formations and sacred Aboriginal sites of Uluru and Kata Tjuta in the heart of Australia\'s Red Centre. Witness breathtaking sunrises and sunsets over the desert landscape, and learn about the rich cultural significance of this UNESCO World Heritage Site.',
      tripRoute: 'Belgrade (Serbia) -> Alice Springs (Australia) -> Uluru (Australia) -> Kata Tjuta (Australia) -> Alice Springs (Australia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Alice Springs. Transfer to your accommodation near Uluru.'
        },
        {
          'day': '2-3',
          'description': 'Witness the majestic Uluru at sunrise and explore the base walk.'
        },
        {
          'day': '4',
          'description': 'Discover the towering domes of Kata Tjuta and hike through the Valley of the Winds.'
        },
        {
          'day': '5',
          'description': 'Return to Alice Springs. Explore the town and learn about its history and culture.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Alice Springs
      Accommodation in a resort or lodge near Uluru
      Daily breakfast and selected meals
      Guided tours and entrance fees to Uluru-Kata Tjuta National Park
      Transportation between Alice Springs and Uluru
      English-speaking guide
      All taxes and service charges`
    },
    'Solomon Islands': {
      id: 3,
      country: 'Solomon Islands',
      city: 'Honiara',
      latitude: -9.6457,
      longitude: 160.1562,
      price: 3000,
      imageUrl: '/',
      dateRange: 'MAY 4 - 14',
      days: 10,
      description: 'Venture to the Solomon Islands, a hidden gem in the South Pacific known for its pristine beaches, vibrant coral reefs, and rich cultural heritage. Explore remote islands, dive among colorful marine life, and immerse yourself in the warm hospitality of the Melanesian people.',
      tripRoute: 'Belgrade (Serbia) -> Honiara (Solomon Islands) -> Guadalcanal (Solomon Islands) -> Western Province (Solomon Islands) -> Honiara (Solomon Islands) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Honiara. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore the local markets and cultural sites in Honiara.'
        },
        {
          'day': '3',
          'description': 'Visit historical sites on Guadalcanal Island.'
        },
        {
          'day': '4',
          'description': 'Relax and enjoy beach activities in Western Province.'
        },
        {
          'day': '5-6',
          'description': 'Engage in diving and snorkeling adventures.'
        },
        {
          'day': '7-8',
          'description': 'Experience traditional village life and cultural tours.'
        },
        {
          'day': '9',
          'description': 'Return to Honiara. Enjoy leisure time.'
        },
        {
          'day': '10',
          'description': 'Depart from Honiara. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Honiara
      Domestic flights within the Solomon Islands
      Accommodation in beachfront resorts or eco-lodges
      Daily breakfast, lunch, and dinner
      Guided tours and activities (diving, snorkeling, cultural tours)
      Transportation between islands
      English-speaking guide
      All taxes and service charges`
    },
    'Australia': {
      id: 4,
      country: 'Australia',
      city: 'Canberra',
      latitude: -35.282001,
      longitude: 149.128998,
      price: 3500,
      imageUrl: '/',
      dateRange: 'JUN 7 - 21',
      days: 14,
      description: 'Explore the diverse landscapes, vibrant cities, and unique wildlife of Australia. From the iconic landmarks of Sydney and Melbourne to the ancient wonders of the Outback and the pristine beaches of the Whitsunday Islands, this journey promises an unforgettable Australian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Sydney (Australia) -> Cairns (Australia) -> Great Barrier Reef (Australia) -> Ayers Rock (Australia) -> Melbourne (Australia) -> Whitsunday Islands (Australia) -> Sydney (Australia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Sydney. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore Sydney\'s iconic landmarks and attractions.'
        },
        {
          'day': '3',
          'description': 'Visit the Sydney Opera House and Harbour Bridge.'
        },
        {
          'day': '4',
          'description': 'Travel to Cairns and explore the city.'
        },
        {
          'day': '5-6',
          'description': 'Embark on a Great Barrier Reef diving expedition.'
        },
        {
          'day': '7',
          'description': 'Fly to Ayers Rock and witness the majestic Uluru.'
        },
        {
          'day': '8',
          'description': 'Explore the natural wonders of Uluru-Kata Tjuta National Park.'
        },
        {
          'day': '9',
          'description': 'Travel to Melbourne and enjoy city sightseeing.'
        },
        {
          'day': '10-11',
          'description': 'Relax and explore the Whitsunday Islands.'
        },
        {
          'day': '12',
          'description': 'Return to Sydney and explore the city.'
        },
        {
          'day': '13',
          'description': 'Enjoy leisure time in Sydney.'
        },
        {
          'day': '14',
          'description': 'Depart from Sydney. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Australia
      Domestic flights within Australia
      Accommodation in centrally located hotels and resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'New Zealand': {
      id: 5,
      country: 'New Zealand',
      city: 'Wellington',
      latitude: -41.2865,
      longitude: 174.7762,
      price: 4000,
      imageUrl: '/',
      dateRange: 'NOV 1 - 14',
      days: 14,
      description: 'Immerse yourself in the breathtaking landscapes, Maori culture, and outdoor adventures of New Zealand. From the snow-capped peaks of the Southern Alps to the geothermal wonders of Rotorua and the pristine fjords of Milford Sound, this journey promises an unforgettable Kiwi adventure.',
      tripRoute: 'Belgrade (Serbia) -> Auckland (New Zealand) -> Rotorua (New Zealand) -> Taupo (New Zealand) -> Wellington (New Zealand) -> Christchurch (New Zealand) -> Queenstown (New Zealand) -> Milford Sound (New Zealand) -> Queenstown (New Zealand) -> Auckland (New Zealand) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Auckland. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2',
          'description': 'Explore Auckland\'s attractions and waterfront.'
        },
        {
          'day': '3',
          'description': 'Visit the geothermal wonders of Rotorua.'
        },
        {
          'day': '4-5',
          'description': 'Enjoy outdoor activities in Taupo.'
        },
        {
          'day': '6-7',
          'description': 'Discover the capital city of Wellington.'
        },
        {
          'day': '8',
          'description': 'Travel to Christchurch and explore the city.'
        },
        {
          'day': '9-10',
          'description': 'Venture to Queenstown for adventure activities.'
        },
        {
          'day': '11-12',
          'description': 'Explore the stunning Milford Sound.'
        },
        {
          'day': '13',
          'description': 'Return to Auckland for departure preparations.'
        },
        {
          'day': '14',
          'description': 'Depart from Auckland. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to New Zealand
      Domestic flights within New Zealand
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges	`
    },
    'Great Barrier Reef': {
      id: 6,
      country: 'Australia',
      city: 'Cairns',
      latitude: -18.156290,
      longitude: 147.485962,
      price: 3000,
      imageUrl: '/',
      dateRange: 'APR 20 - 27',
      days: 7,
      description: 'Embark on a journey to explore the mesmerizing beauty and marine biodiversity of the Great Barrier Reef. From snorkeling among vibrant coral gardens to diving alongside majestic marine creatures, this trip promises an unforgettable aquatic adventure.',
      tripRoute: 'Belgrade (Serbia) -> Cairns (Australia) -> Great Barrier Reef (Australia) -> Cairns (Australia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Cairns. Transfer to your accommodation.'
        },
        {
          'day': '2-3',
          'description': 'Explore the Great Barrier Reef through diving and snorkeling.'
        },
        {
          'day': '4',
          'description': 'Relax and enjoy the amenities of the resort.'
        },
        {
          'day': '5',
          'description': 'Return to Cairns and explore the city.'
        },
        {
          'day': '6',
          'description': 'Enjoy leisure time in Cairns.'
        },
        {
          'day': '7',
          'description': 'Depart from Cairns. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Cairns
      Accommodation in a resort or liveaboard vessel on the Great Barrier Reef
      Daily breakfast, lunch, and dinner
      Guided snorkeling and diving tours with experienced instructors
      Use of snorkeling gear or diving equipment
      Transportation between Cairns and the Great Barrier Reef
      English-speaking guides and naturalists
      All taxes and service charges`
    },
    'Fiji': {
      id: 7,
      country: 'Fiji',
      city: 'Suva',
      latitude: -17.713371,
      longitude: 178.065033,
      price: 3000,
      imageUrl: '/',
      dateRange: 'SEP 4 - 14',
      days: 10,
      description: 'Escape to the idyllic paradise of Fiji, where pristine beaches, crystal-clear waters, and warm hospitality await. From luxurious overwater bungalows and vibrant coral reefs to cultural villages and lush rainforests, this itinerary promises an unforgettable island getaway in the heart of the South Pacific.',
      tripRoute: 'Belgrade (Serbia) -> Nadi (Fiji) -> Mamanuca Islands (Fiji) -> Coral Coast (Fiji) -> Suva (Fiji) -> Nadi (Fiji) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Nadi. Transfer to your beachfront resort.'
        },
        {
          'day': '2-3',
          'description': 'Explore the Mamanuca Islands through various water activities.'
        },
        {
          'day': '4-5',
          'description': 'Relax on the Coral Coast and enjoy resort amenities.'
        },
        {
          'day': '6-7',
          'description': 'Experience cultural tours and village visits in Suva.'
        },
        {
          'day': '8',
          'description': 'Return to Nadi and explore local markets.'
        },
        {
          'day': '9',
          'description': 'Enjoy leisure time in Nadi.'
        },
        {
          'day': '10',
          'description': 'Depart from Nadi. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Fiji
      Accommodation in luxury resorts and beachfront hotels
      Daily breakfast and selected meals
      Guided tours and activities as per the itinerary
      Transportation between locations (private transfers and domestic flights)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
  },
  'South America': {
    'Argentina': {
      id: 1,
      country: 'Argentina',
      city: 'Buenos Aires',
      latitude: -34.6037,
      longitude: -58.3816,
      price: 3800,
      imageUrl: '/',
      dateRange: 'JUN 20 - 2',
      days: 12,
      description: 'Embark on an adventure to explore the vibrant culture, stunning landscapes, and rich heritage of Argentina. From the bustling streets of Buenos Aires to the awe-inspiring natural wonders of Patagonia and the majestic Iguazu Falls, this journey promises an unforgettable Argentinean experience.',
      tripRoute: 'Belgrade (Serbia) -> Buenos Aires (Argentina) -> El Calafate (Argentina) -> Perito Moreno Glacier (Argentina) -> Ushuaia (Argentina) -> Buenos Aires (Argentina) -> Iguazu Falls (Argentina) -> Buenos Aires (Argentina) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Buenos Aires. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Buenos Aires.'
        },
        {
          'day': '4-5',
          'description': 'Visit the stunning Perito Moreno Glacier.'
        },
        {
          'day': '6-7',
          'description': 'Discover the beauty of Ushuaia, the southernmost city.'
        },
        {
          'day': '8-9',
          'description': 'Return to Buenos Aires and explore further.'
        },
        {
          'day': '10-11',
          'description': 'Experience the awe-inspiring Iguazu Falls.'
        },
        {
          'day': '12',
          'description': 'Depart from Buenos Aires. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Argentina
      Domestic flights within Argentina
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Chile': {
      id: 2,
      country: 'Chile',
      city: 'Santiago',
      latitude: -33.4489,
      longitude: -70.6693,
      price: 3500,
      imageUrl: '/',
      dateRange: 'JUN 2 - 12',
      days: 10,
      description: 'Explore the diverse landscapes, vibrant cities, and rich culture of Chile. From the bustling streets of Santiago to the breathtaking landscapes of the Atacama Desert and the stunning fjords of Patagonia, this journey promises an unforgettable Chilean adventure.',
      tripRoute: 'Belgrade (Serbia) -> Santiago (Chile) -> Atacama Desert (Chile) -> Santiago (Chile) -> Puerto Varas (Chile) -> Torres del Paine National Park (Chile) -> Santiago (Chile) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Santiago. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Santiago.'
        },
        {
          'day': '4-5',
          'description': 'Discover the otherworldly landscapes of the Atacama Desert.'
        },
        {
          'day': '6',
          'description': 'Return to Santiago and relax.'
        },
        {
          'day': '7',
          'description': 'Travel to Puerto Varas and enjoy the scenic beauty.'
        },
        {
          'day': '8',
          'description': 'Explore the stunning landscapes of Torres del Paine National Park.'
        },
        {
          'day': '9',
          'description': 'Return to Santiago and explore further.'
        },
        {
          'day': '10',
          'description': 'Depart from Santiago. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Santiago
      Domestic flights within Chile
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Brasil': {
      id: 3,
      country: 'Brasil',
      city: 'Brasília',
      latitude: -15.8267,
      longitude: -47.9218,
      price: 1000,
      imageUrl: '/',
      dateRange: 'AUG 4 - 11',
      days: 7,
      description: 'Discover the vibrant culture, stunning landscapes, and diverse ecosystems of Brazil. From the bustling streets of Rio de Janeiro to the pristine beaches of Fernando de Noronha and the lush Amazon rainforest, this journey promises an unforgettable Brazilian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Rio de Janeiro (Brazil) -> Paraty (Brazil) -> Ilha Grande (Brazil) -> Rio de Janeiro (Brazil) -> Manaus (Brazil) -> Amazon Rainforest (Brazil) -> Manaus (Brazil) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Rio de Janeiro. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Rio de Janeiro.'
        },
        {
          'day': '4-5',
          'description': 'Relax on the pristine beaches of Ilha Grande.'
        },
        {
          'day': '6',
          'description': 'Travel to Manaus and start your Amazon Rainforest adventure.'
        },
        {
          'day': '7',
          'description': 'Depart from Manaus. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Rio de Janeiro
      Domestic flights within Brazil
      Accommodation in centrally located hotels, lodges, and beach resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Peru': {
      id: 4,
      country: 'Peru',
      city: 'Lima',
      latitude: -12.0464,
      longitude: -77.0428,
      price: 3200,
      imageUrl: '/',
      dateRange: 'OCT 14 - 26',
      days: 12,
      description: 'Embark on an adventure to explore the ancient civilizations, breathtaking landscapes, and vibrant culture of Peru. From the iconic ruins of Machu Picchu to the colonial charm of Cusco and the mysterious Nazca Lines, this journey promises an unforgettable Peruvian experience.',
      tripRoute: 'Belgrade (Serbia) -> Lima (Peru) -> Cusco (Peru) -> Sacred Valley (Peru) -> Machu Picchu (Peru) -> Cusco (Peru) -> Nazca (Peru) -> Lima (Peru) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Lima. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the historic city of Lima.'
        },
        {
          'day': '4-5',
          'description': 'Discover the wonders of Cusco and the Sacred Valley.'
        },
        {
          'day': '6-7',
          'description': 'Experience the awe-inspiring Machu Picchu.'
        },
        {
          'day': '8',
          'description': 'Return to Cusco and explore further.'
        },
        {
          'day': '9-10',
          'description': 'Visit the mysterious Nazca Lines.'
        },
        {
          'day': '11',
          'description': 'Return to Lima for departure preparations.'
        },
        {
          'day': '12',
          'description': 'Depart from Lima. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Lima
      Domestic flights within Peru
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Venezuela': {
      id: 5,
      country: 'Venezuela',
      city: 'Caracas',
      latitude: 10.4806,
      longitude: -66.9036,
      price: 3000,
      imageUrl: '/',
      dateRange: 'JAN 20 - 30',
      days: 10,
      description: 'Embark on an adventure to explore the natural wonders, cultural heritage, and vibrant cities of Venezuela. From the majestic Angel Falls to the colorful streets of Caracas and the pristine beaches of Los Roques, this journey promises an unforgettable Venezuelan experience.',
      tripRoute: 'Belgrade (Serbia) -> Caracas (Venezuela) -> Canaima National Park (Venezuela) -> Angel Falls (Venezuela) -> Los Roques Archipelago (Venezuela) -> Caracas (Venezuela) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Caracas. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Caracas.'
        },
        {
          'day': '4-5',
          'description': 'Visit the breathtaking Canaima National Park and witness the beauty of Angel Falls.'
        },
        {
          'day': '6-7',
          'description': 'Relax and enjoy the pristine beaches of Los Roques Archipelago.'
        },
        {
          'day': '8-9',
          'description': 'Return to Caracas and explore further.'
        },
        {
          'day': '10',
          'description': 'Depart from Caracas. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Caracas
      Domestic flights within Venezuela
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Colombia': {
      id: 6,
      country: 'Colombia',
      city: 'Bogotá',
      latitude: 4.7110,
      longitude: -74.0721,
      price: 3200,
      imageUrl: '/',
      dateRange: 'NOV 11 - 23',
      days: 12,
      description: 'Discover the vibrant culture, colonial heritage, and stunning landscapes of Colombia. From the historic streets of Bogotá to the coffee plantations of the Zona Cafetera and the Caribbean beaches of Cartagena, this journey promises an unforgettable Colombian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Bogotá (Colombia) -> Coffee Triangle (Colombia) -> Medellín (Colombia) -> Cartagena (Colombia) -> Bogotá (Colombia) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Bogotá. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the historic city of Bogotá.'
        },
        {
          'day': '4-5',
          'description': 'Discover the coffee plantations and landscapes of the Coffee Triangle.'
        },
        {
          'day': '6-7',
          'description': 'Experience the culture and innovation of Medellín.'
        },
        {
          'day': '8-9',
          'description': 'Relax and enjoy the Caribbean vibes of Cartagena.'
        },
        {
          'day': '10',
          'description': 'Return to Bogotá and explore further.'
        },
        {
          'day': '11',
          'description': 'Depart from Bogotá. Return flight to Belgrade.'
        },
        {
          'day': '12',
          'description': 'Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Bogotá
      Domestic flights within Colombia
      Accommodation in centrally located hotels and haciendas
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Amazon': {
      id: 7,
      country: 'Brasil',
      city: 'Amazon',
      latitude: -2.163106,
      longitude: -60.126648,
      price: 2500,
      imageUrl: '/',
      dateRange: 'MAY 28 - 5',
      days: 8,
      description: 'Embark on an immersive adventure into the heart of the Amazon Rainforest, the world\'s largest tropical rainforest teeming with unparalleled biodiversity. From winding river tributaries and lush jungle canopies to encounters with indigenous tribes and exotic wildlife, this journey promises an unforgettable exploration of the Amazon\'s natural wonders.',
      tripRoute: 'Belgrade (Serbia) -> Manaus (Brazil) -> Amazon Rainforest (Brazil) -> Manaus (Brazil) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Manaus. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the bustling city of Manaus and prepare for your Amazon adventure.'
        },
        {
          'day': '4-5',
          'description': 'Embark on guided jungle expeditions and immerse yourself in the wonders of the Amazon Rainforest.'
        },
        {
          'day': '6',
          'description': 'Return to Manaus and relax.'
        },
        {
          'day': '7',
          'description': 'Depart from Manaus. Return flight to Belgrade.'
        },
        {
          'day': '8',
          'description': 'Arrive in Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Manaus
      Accommodation in eco-friendly lodges within the Amazon Rainforest
      All meals during the stay in the rainforest
      Guided jungle expeditions with experienced naturalist guides
      Visits to indigenous communities and cultural experiences
      Transportation between Manaus and the rainforest (boat or small aircraft)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
  },
  'North America': {
    'California': {
      id: 1,
      country: 'United States',
      city: 'California',
      latitude: 36.7783,
      longitude: -119.4179,
      price: 4000,
      imageUrl: '/',
      dateRange: 'NOV 13 - 27',
      days: 14,
      description: 'Explore the diverse landscapes, iconic cities, and cultural attractions of California. From the stunning coastline of Big Sur to the bustling streets of San Francisco and the majestic beauty of Yosemite National Park, this journey promises an unforgettable Californian adventure.',
      tripRoute: 'Belgrade (Serbia) -> San Francisco (California) -> Big Sur (California) -> Monterey (California) -> Carmel-by-the-Sea (California) -> Yosemite National Park (California) -> Napa Valley (California) -> San Francisco (California) -> Los Angeles (California) -> Santa Barbara (California) -> Los Angeles (California) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in San Francisco. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the iconic city of San Francisco.'
        },
        {
          'day': '4-5',
          'description': 'Drive along the breathtaking coastline of Big Sur.'
        },
        {
          'day': '6-7',
          'description': 'Visit Monterey and Carmel-by-the-Sea.'
        },
        {
          'day': '8-9',
          'description': 'Discover the natural wonders of Yosemite National Park.'
        },
        {
          'day': '10-11',
          'description': 'Explore the vineyards of Napa Valley.'
        },
        {
          'day': '12-13',
          'description': 'Experience the vibrant city of Los Angeles and Santa Barbara.'
        },
        {
          'day': '14',
          'description': 'Depart from Los Angeles. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to San Francisco and Los Angeles
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'New York': {
      id: 2,
      country: 'United States',
      city: 'New York',
      latitude: 40.7128,
      longitude: -74.0060,
      price: 4500,
      imageUrl: '/',
      dateRange: 'OCT 5 - 15',
      days: 10,
      description: 'Discover the iconic landmarks, world-class museums, and vibrant culture of New York City. From the bright lights of Times Square to the historic streets of Greenwich Village and the stunning views from the top of the Empire State Building, this journey promises an unforgettable New York experience.',
      tripRoute: 'Belgrade (Serbia) -> New York City (New York) -> Brooklyn (New York) -> Queens (New York) -> Staten Island (New York) -> New York City (New York) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in New York City. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant neighborhoods of Brooklyn and Queens.'
        },
        {
          'day': '4-5',
          'description': 'Visit the iconic landmarks of Staten Island and Manhattan.'
        },
        {
          'day': '6-7',
          'description': 'Discover the cultural diversity of New York City.'
        },
        {
          'day': '8',
          'description': 'Depart from New York City. Return flight to Belgrade.'
        },
        {
          'day': '9',
          'description': 'Arrive in Belgrade.'
        },
        {
          'day': '10',
          'description': 'Free day to rest and reflect on your New York adventure.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to New York City
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation within New York City (subway passes, ferry tickets)
      English-speaking guide
      All taxes and service charges`
    },
    'Canada': {
      id: 3,
      country: 'Canada',
      city: 'Toronto',
      latitude: 43.651070,
      longitude: -79.347015,
      price: 3800,
      imageUrl: '/',
      dateRange: 'OCT 10 - 22',
      days: 12,
      description: 'Explore the stunning natural landscapes, vibrant cities, and rich cultural heritage of Canada. From the bustling streets of Toronto to the majestic beauty of the Canadian Rockies and the charming coastal towns of Nova Scotia, this journey promises an unforgettable Canadian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Toronto (Ontario, Canada) -> Niagara Falls (Ontario, Canada) -> Ottawa (Ontario, Canada) -> Montreal (Quebec, Canada) -> Quebec City (Quebec, Canada) -> Calgary (Alberta, Canada) -> Banff National Park (Alberta, Canada) -> Jasper National Park (Alberta, Canada) -> Vancouver (British Columbia, Canada) -> Victoria (British Columbia, Canada) -> Vancouver (British Columbia, Canada) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Toronto. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Toronto and visit Niagara Falls.'
        },
        {
          'day': '4-5',
          'description': 'Discover the capital city of Ottawa and the historic streets of Montreal.'
        },
        {
          'day': '6-7',
          'description': 'Explore the charming city of Quebec City.'
        },
        {
          'day': '8-9',
          'description': 'Immerse yourself in the natural beauty of the Canadian Rockies in Banff and Jasper National Parks.'
        },
        {
          'day': '10-11',
          'description': 'Experience the vibrant city of Vancouver and visit Victoria on Vancouver Island.'
        },
        {
          'day': '12',
          'description': 'Depart from Vancouver. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Toronto and Vancouver
      Domestic flights within Canada (Toronto to Calgary, Quebec City to Montreal)
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Florida': {
      id: 4,
      country: 'United States',
      city: 'Florida',
      latitude: 27.9944,
      longitude: -81.7603,
      price: 2000,
      imageUrl: '/',
      dateRange: 'SEP 21 - 28',
      days: 7,
      description: 'Experience the magic of Florida with its world-renowned theme parks, beautiful beaches, and vibrant cities. From the excitement of Orlando to the relaxation of Miami Beach, this trip offers a perfect blend of adventure and relaxation.',
      tripRoute: 'Belgrade (Serbia) -> Orlando (Florida) -> Miami (Florida) -> Key West (Florida) -> Everglades National Park (Florida) -> Orlando (Florida) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Orlando. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Experience the thrills of Orlando\'s theme parks.'
        },
        {
          'day': '4-5',
          'description': 'Relax on the beautiful beaches of Miami and Key West.'
        },
        {
          'day': '6',
          'description': 'Explore the unique ecosystem of the Everglades National Park.'
        },
        {
          'day': '7',
          'description': 'Depart from Orlando. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Orlando
      Accommodation in centrally located hotels
      Daily breakfast and selected meals
      Entrance fees to theme parks and attractions mentioned in the itinerary
      Transportation between cities (rental car or private transfers)
      English-speaking tour guide throughout the trip
      All taxes and service charges`
    },
    'Jamaica': {
      id: 5,
      country: 'Jamaica',
      city: 'Kingston',
      latitude: 18.1096,
      longitude: -77.2975,
      price: 3000,
      imageUrl: '/',
      dateRange: 'MAR 6 - 14',
      days: 8,
      description: 'Immerse yourself in the vibrant culture, stunning beaches, and lush landscapes of Jamaica. From the reggae beats of Kingston to the pristine shores of Negril and the majestic waterfalls of Ocho Rios, this journey promises an unforgettable Jamaican experience.',
      tripRoute: 'Belgrade (Serbia) -> Kingston (Jamaica) -> Negril (Jamaica) -> Montego Bay (Jamaica) -> Ocho Rios (Jamaica) -> Kingston (Jamaica) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Kingston. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant city of Kingston and immerse yourself in its rich culture.'
        },
        {
          'day': '4-5',
          'description': 'Relax on the pristine beaches of Negril and Montego Bay.'
        },
        {
          'day': '6-7',
          'description': 'Discover the natural beauty of Ocho Rios and its majestic waterfalls.'
        },
        {
          'day': '8',
          'description': 'Depart from Kingston. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Kingston
      Accommodation in beach resorts and hotels
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Cuba': {
      id: 6,
      country: 'Cuba',
      city: 'Havana',
      latitude: 23.1136,
      longitude: -82.3666,
      price: 3200,
      imageUrl: '/',
      dateRange: 'OCT 21 - 31',
      days: 10,
      description: 'Discover the rich history, vibrant culture, and stunning architecture of Cuba. From the colorful streets of Havana to the lush tobacco fields of Viñales and the beautiful beaches of Varadero, this journey promises an unforgettable Cuban adventure.',
      tripRoute: 'Belgrade (Serbia) -> Havana (Cuba) -> Viñales (Cuba) -> Cienfuegos (Cuba) -> Trinidad (Cuba) -> Varadero (Cuba) -> Havana (Cuba) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Havana. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the vibrant streets of Havana and immerse yourself in its rich history and culture.'
        },
        {
          'day': '4-5',
          'description': 'Visit the picturesque tobacco fields of Viñales and explore the surrounding countryside.'
        },
        {
          'day': '6-7',
          'description': 'Discover the colonial architecture of Cienfuegos and the colorful streets of Trinidad.'
        },
        {
          'day': '8-9',
          'description': 'Relax on the beautiful beaches of Varadero.'
        },
        {
          'day': '10',
          'description': 'Depart from Havana. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Havana
      Accommodation in casas particulares and beach resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Mexico': {
      id: 7,
      country: 'Mexico',
      city: 'Mexico City',
      latitude: 23.6345,
      longitude: -102.5528,
      price: 3500,
      imageUrl: '/',
      dateRange: 'AUG 10 - 20',
      days: 10,
      description: 'Immerse yourself in the rich history, vibrant culture, and stunning landscapes of Mexico. From the ancient ruins of Teotihuacan to the colorful streets of Mexico City and the pristine beaches of the Riviera Maya, this journey promises an unforgettable Mexican adventure.',
      tripRoute: 'Belgrade (Serbia) -> Mexico City (Mexico) -> Teotihuacan (Mexico) -> Puebla (Mexico) -> Oaxaca (Mexico) -> Riviera Maya (Mexico) -> Cancún (Mexico) -> Mexico City (Mexico) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Mexico City. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the historic sites and vibrant culture of Mexico City.'
        },
        {
          'day': '4-5',
          'description': 'Visit the ancient ruins of Teotihuacan and explore the colonial charm of Puebla.'
        },
        {
          'day': '6-7',
          'description': 'Immerse yourself in the rich cultural heritage of Oaxaca.'
        },
        {
          'day': '8-9',
          'description': 'Relax on the pristine beaches of the Riviera Maya and Cancún.'
        },
        {
          'day': '10',
          'description': 'Depart from Mexico City. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Mexico City
      Domestic flights within Mexico (Mexico City to Oaxaca, Oaxaca to Cancún)
      Accommodation in centrally located hotels and beach resorts
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    },
    'Washington': {
      id: 8,
      country: 'United States',
      city: 'Washington DC',
      latitude: 38.889805,
      longitude: -77.009056,
      price: 3800,
      imageUrl: '/',
      dateRange: 'DEC 2 - 12',
      days: 10,
      description: 'Discover the historic landmarks, vibrant culture, and natural beauty of Washington State. From the iconic monuments of Washington, D.C. to the lush forests of Olympic National Park and the charming waterfront of Seattle, this journey promises an unforgettable Washingtonian adventure.',
      tripRoute: 'Belgrade (Serbia) -> Washington, D.C. (USA) -> Shenandoah National Park (Virginia, USA) -> Baltimore (Maryland, USA) -> Annapolis (Maryland, USA) -> Washington, D.C. (USA) -> Seattle (Washington, USA) -> Olympic National Park (Washington, USA) -> Mount Rainier National Park (Washington, USA) -> Seattle (Washington, USA) -> Belgrade (Serbia)',
      travelPlan: [
        {
          'day': '1',
          'description': 'Arrive in Washington, D.C. Transfer to your accommodation and settle in.'
        },
        {
          'day': '2-3',
          'description': 'Explore the historic landmarks and museums of Washington, D.C.'
        },
        {
          'day': '4-5',
          'description': 'Discover the natural beauty of Shenandoah National Park and the historic city of Baltimore.'
        },
        {
          'day': '6-7',
          'description': 'Explore the charming waterfront of Annapolis and its maritime heritage.'
        },
        {
          'day': '8-9',
          'description': 'Immerse yourself in the lush forests of Olympic National Park and the stunning landscapes of Mount Rainier National Park.'
        },
        {
          'day': '10',
          'description': 'Depart from Seattle. Return flight to Belgrade.'
        }
      ],
      includedIn: `Roundtrip flights from Belgrade to Washington, D.C. and Seattle
      Domestic flights within the USA (Washington, D.C. to Seattle)
      Accommodation in centrally located hotels and lodges
      Daily breakfast and selected meals
      Guided tours and entrance fees to attractions mentioned in the itinerary
      Transportation between cities
      English-speaking guide
      All taxes and service charges`
    }
  }
};