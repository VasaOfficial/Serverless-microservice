export type TravelPlan = {
  day: string;
  description: string;
};

export type TopOffer = {
  id: number;
  city: string;
  country: string;
  price: number;
  imageUrl: string;
  dateRange: string;
  days: number;
  shortDescription: string;
  description: string;
  tripRoute: string;
  travelPlan: TravelPlan[];
  includedIn: string;
}

export const topOffersData: Record<string, TopOffer> = {
  'Hawaii': {
    id: 1,
    country: 'USA',
    city: 'Honolulu',
    price: 2500,
    imageUrl: '///',
    dateRange: 'AUG 5 - 12',
    days: 7,
    shortDescription: 'Discover the enchanting islands of Hawaii with this 7-day adventure!',
    description: 'From the bustling streets of Honolulu to the lush landscapes of Maui, the rugged beauty of Kauai, and the volcanic wonders of the Big Island, immerse yourself in the diverse culture and natural splendor of Hawaii.',
    tripRoute: 'Belgrade → Honolulu → Maui → Kauai → Big Island (Hawaii) → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Honolulu. Check into the hotel and rest. Enjoy a guided tour of Honolulu, including Waikiki Beach and Pearl Harbor.'
      },
      {
        'day': '3',
        'description': 'Travel to Maui. Explore the scenic Road to Hana and visit Haleakalā National Park.'
      },
      {
        'day': '4',
        'description': 'Discover the beauty of Kauai with visits to Waimea Canyon and the Na Pali Coast.'
      },
      {
        'day': '5',
        'description': 'Experience the Big Island (Hawaii) with a tour of Volcanoes National Park and Punaluʻu Black Sand Beach.'
      },
      {
        'day': '7',
        'description': 'Return to Belgrade.'
      },
    ],
    includedIn: `Accommodation in 4-star hotels
    Transportation between islands (flights or ferries)
    Guided tours on each island
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Grand Canyon': {
    id: 2,
    country: 'USA',
    city: 'Grand Canyon',
    price: 1800,
    imageUrl: '///',
    dateRange: 'SEP 5 - 15',
    days: 10,
    shortDescription: 'Embark on an unforgettable journey to one of the world\'s most iconic natural wonders!',
    description: 'Experience the awe-inspiring beauty of the Grand Canyon as you hike along its majestic rim, marvel at its vastness from scenic viewpoints, and learn about its geological history. Immerse yourself in the breathtaking landscapes and diverse wildlife of this iconic American landmark.',
    tripRoute: 'Belgrade → Grand Canyon → Sedona → Monument Valley → Las Vegas → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive at the Grand Canyon. Check into the hotel and rest. Explore the South Rim and visit popular viewpoints such as Mather Point and Yavapai Observation Station.'
      },
      {
        'day': '3',
        'description': 'Venture into the Grand Canyon for a guided hiking tour along the Bright Angel Trail or South Kaibab Trail.'
      },
      {
        'day': '4',
        'description': 'Travel to Sedona. Discover the vibrant red rock formations and mystical energy of this picturesque desert town.'
      },
      {
        'day': '5',
        'description': 'Embark on a scenic drive through Monument Valley, known for its towering sandstone buttes and dramatic landscapes.'
      },
      {
        'day': '6-9',
        'description': 'Explore the dazzling lights and entertainment of Las Vegas at your leisure.'
      },
      {
        'day': '10',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in comfortable lodges
    Transportation between destinations (bus or private vehicle)
    Guided tours in the Grand Canyon and Sedona
    Entrance fees to national parks and attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Singapore': {
    id: 3,
    country: 'Singapore',
    city: 'Singapore',
    price: 2200,
    imageUrl: '///',
    dateRange: 'NOV 10 - 20',
    days: 8,
    shortDescription: 'Experience the vibrant culture, modern marvels, and lush greenery of Singapore!',
    description: 'Discover the melting pot of cultures in Singapore as you explore its bustling neighborhoods, savor diverse culinary delights, and marvel at its futuristic skyline. From the iconic Gardens by the Bay to the historic neighborhoods of Chinatown and Little India, immerse yourself in the rich tapestry of this dynamic city-state.',
    tripRoute: 'Belgrade → Singapore → Sentosa Island → Marina Bay → Jurong Bird Park → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Singapore. Check into the hotel and rest. Explore the vibrant neighborhoods of Chinatown and Little India.'
      },
      {
        'day': '3',
        'description': 'Visit the iconic Gardens by the Bay and marvel at the Supertree Grove and Cloud Forest.'
      },
      {
        'day': '4',
        'description': 'Spend a day of fun and relaxation at Sentosa Island, home to attractions such as Universal Studios Singapore and S.E.A. Aquarium.'
      },
      {
        'day': '5',
        'description': 'Discover the futuristic architecture of Marina Bay and visit attractions like Marina Bay Sands and the Merlion Park.'
      },
      {
        'day': '6',
        'description': 'Explore the lush greenery and exotic birds at Jurong Bird Park, one of the largest bird parks in the world.'
      },
      {
        'day': '7-8',
        'description': 'Return to Belgrade.'
      },
    ],
    includedIn: `Accommodation in well-appointed hotels
    Transportation within Singapore (public transport or private transfers)
    Admission tickets to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Iceland': {
    id: 4,
    country: 'Iceland',
    city: 'Reykjavik',
    price: 3000,
    imageUrl: '///',
    dateRange: 'MAR 15 - 24',
    days: 9,
    shortDescription: 'Embark on an adventure to the land of fire and ice!',
    description: 'Experience the stunning natural beauty of Iceland as you journey through its otherworldly landscapes of glaciers, volcanoes, and geothermal wonders. From the iconic Golden Circle route to the enchanting Blue Lagoon, immerse yourself in the dramatic scenery and unique culture of this Nordic island nation.',
    tripRoute: 'Belgrade → Reykjavik → Golden Circle → South Coast → Jökulsárlón Glacier Lagoon → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Reykjavik. Check into the hotel and rest. Explore the charming capital city and visit landmarks such as Hallgrímskirkja Church and Harpa Concert Hall.'
      },
      {
        'day': '3',
        'description': 'Embark on the Golden Circle route and visit attractions like Thingvellir National Park, Geysir Geothermal Area, and Gullfoss Waterfall.'
      },
      {
        'day': '4',
        'description': 'Journey along the picturesque South Coast, stopping at Seljalandsfoss and Skógafoss waterfalls, and the black sand beaches of Reynisfjara.'
      },
      {
        'day': '5',
        'description': 'Explore the stunning Jökulsárlón Glacier Lagoon and Diamond Beach, where icebergs glisten against the black sand shore.'
      },
      {
        'day': '6-8',
        'description': 'Free days to discover Iceland\'s natural wonders, including optional activities like glacier hiking, snowmobiling, or relaxing in the Blue Lagoon.'
      },
      {
        'day': '9',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in cozy guesthouses
    Transportation in a comfortable minibus
    Guided tours to popular attractions
    Entrance fees to national parks and attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Hurghada': {
    id: 5,
    country: 'Egypt',
    city: 'Hurghada',
    price: 2000,
    imageUrl: '///',
    dateRange: 'AUG 8 - 15',
    days: 7,
    shortDescription: 'Escape to the Red Sea paradise of Hurghada!',
    description: 'Relax and unwind in the tropical paradise of Hurghada, where crystal-clear waters, vibrant coral reefs, and golden sandy beaches await. Dive into the underwater world of the Red Sea, embark on desert adventures, and immerse yourself in the rich history and culture of ancient Egypt.',
    tripRoute: 'Belgrade → Hurghada → Giftun Islands → Luxor → Cairo → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Hurghada. Check into the hotel and rest. Relax on the beautiful beaches, snorkel or dive in the Red Sea, or explore the vibrant marine life.'
      },
      {
        'day': '3',
        'description': 'Cruise to the Giftun Islands for a day of sun, sea, and snorkeling in pristine waters surrounded by colorful coral reefs.'
      },
      {
        'day': '4',
        'description': 'Travel to Luxor for a journey back in time to explore the ancient wonders of the Valley of the Kings, Karnak Temple, and Luxor Temple.'
      },
      {
        'day': '5',
        'description': 'Visit the iconic pyramids of Giza, the Sphinx, and the Egyptian Museum in Cairo, immersing yourself in the history and grandeur of ancient Egypt.'
      },
      {
        'day': '6',
        'description': 'Free days to relax, explore, or participate in optional excursions such as quad biking in the desert or a Nile River cruise.'
      },
      {
        'day': '7',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in beachfront resorts
    Transportation between destinations (private transfers or domestic flights)
    Guided tours to historical sites and attractions
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Thessaloniki': {
    id: 6,
    country: 'Greece',
    city: 'Thessaloniki',
    price: 1800,
    imageUrl: '///',
    dateRange: 'MAY 20 - 36',
    days: 6,
    shortDescription: 'Explore the vibrant culture and rich history of Thessaloniki!',
    description: 'Discover the charm of Greece\'s second-largest city as you wander through its ancient streets, Byzantine churches, and bustling waterfront. From the iconic White Tower to the vibrant markets of Modiano, immerse yourself in the cultural tapestry and culinary delights of Thessaloniki.',
    tripRoute: 'Belgrade → Thessaloniki → Mount Olympus → Halkidiki → Meteora Monasteries → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Thessaloniki. Check into the hotel and rest. Explore the city\'s historic center, including the White Tower, Aristotelous Square, and Rotunda.'
      },
      {
        'day': '3',
        'description': 'Embark on a day trip to Mount Olympus, the mythical home of the Greek gods, and hike through its breathtaking landscapes.'
      },
      {
        'day': '4',
        'description': 'Discover the pristine beaches and crystal-clear waters of Halkidiki, where you can swim, sunbathe, and enjoy water sports.'
      },
      {
        'day': '5',
        'description': 'Visit the awe-inspiring Meteora Monasteries, perched atop towering rock formations, and marvel at their architectural and spiritual significance.'
      },
      {
        'day': '6',
        'description': 'Return to Belgrade.'
      },
    ],
    includedIn: `Accommodation in centrally located hotels
    Transportation between destinations (private vehicle or public transport)
    Guided tours to cultural landmarks and historical sites
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Costa Rica': {
    id: 7,
    country: 'Costa Rica',
    city: 'San José',
    price: 2500,
    imageUrl: '///',
    dateRange: 'OCT 5 - 15',
    days: 10,
    shortDescription: 'Experience the biodiversity and natural wonders of Costa Rica!',
    description: 'Immerse yourself in the lush rainforests, pristine beaches, and diverse wildlife of Costa Rica as you explore its national parks, volcanic landscapes, and ecological reserves. From the towering Arenal Volcano to the remote Osa Peninsula, discover the unparalleled beauty and biodiversity of this Central American gem.',
    tripRoute: 'Belgrade → San José → Arenal Volcano → Monteverde Cloud Forest → Manuel Antonio National Park → Belgrade',
    travelPlan: [
      {
        'day': '1',
        'description': 'Arrive in San José. Check into the hotel and rest. Explore the vibrant capital city and visit attractions like the National Museum and Central Market.'
      },
      {
        'day': '2-3',
        'description': 'Journey to the Arenal Volcano region and enjoy outdoor activities such as hiking, hot springs, and zip-lining amidst the lush rainforest.'
      },
      {
        'day': '4',
        'description': 'Explore the mystical cloud forests of Monteverde and encounter rare wildlife, including the resplendent quetzal and howler monkeys.'
      },
      {
        'day': '5',
        'description': 'Relax on the pristine beaches of Manuel Antonio National Park, known for its abundant wildlife and stunning coastal landscapes.'
      },
      {
        'day': '6-9',
        'description': 'Free days to explore Costa Rica\'s natural wonders, with optional activities such as wildlife tours, snorkeling, or visiting indigenous communities.'
      },
      {
        'day': '10',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in eco-friendly lodges
    Transportation between destinations (private transfers or domestic flights)
    Guided tours to national parks and ecological reserves
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Rio de Janeiro': {
    id: 8,
    country: 'Brazil',
    city: 'Rio de Janeiro',
    price: 2800,
    imageUrl: '///',
    dateRange: 'JUL 10 - 21',
    days: 11,
    shortDescription: 'Experience the vibrant culture and breathtaking landscapes of Rio de Janeiro!',
    description: 'Immerse yourself in the rhythm of Rio as you explore its iconic landmarks, vibrant neighborhoods, and stunning natural beauty. From the world-famous beaches of Copacabana and Ipanema to the towering peaks of Sugarloaf Mountain and Corcovado, discover the allure of Brazil\'s "Marvelous City."',
    tripRoute: 'Belgrade → Rio de Janeiro → Christ the Redeemer Statue → Sugarloaf Mountain → Tijuca Forest → Belgrade',
    travelPlan: [
      {
        'day': '1-2',
        'description': 'Arrive in Rio de Janeiro. Check into the hotel and rest. Explore the city\'s iconic landmarks, including the Christ the Redeemer Statue, Sugarloaf Mountain, and the historic neighborhoods of Santa Teresa and Lapa.'
      },
      {
        'day': '3',
        'description': 'Visit the majestic Christ the Redeemer Statue and enjoy panoramic views of Rio de Janeiro from its summit.'
      },
      {
        'day': '4',
        'description': 'Take a cable car ride to the top of Sugarloaf Mountain for breathtaking views of the city and Guanabara Bay.'
      },
      {
        'day': '5',
        'description': 'Explore the lush Tijuca Forest, the largest urban rainforest in the world, and discover hidden waterfalls and hiking trails.'
      },
      {
        'day': '6-9',
        'description': 'Relax on the golden sands of Copacabana and Ipanema beaches, savoring caipirinhas and soaking up the sun.'
      },
      {
        'day': '10-11',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in beachfront hotels
    Transportation within Rio de Janeiro (private transfers or public transport)
    Guided tours to iconic landmarks and natural attractions
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
  'Texas': {
    id: 9,
    country: 'USA',
    city: 'Austin',
    price: 2200,
    imageUrl: '///',
    dateRange: 'SEP 15 - 25',
    days: 10,
    shortDescription: 'Discover the diverse culture and scenic beauty of Texas!',
    description: 'Experience the Lone Star State\'s unique blend of cowboy culture, vibrant cities, and stunning natural landscapes. From the live music capital of Austin to the historic streets of San Antonio and the rugged beauty of Big Bend National Park, explore the best of Texas.',
    tripRoute: 'Belgrade → Austin → San Antonio → Big Bend National Park → Dallas → Belgrade',
    travelPlan: [
      {
        'day': '1',
        'description': 'Arrive in Austin, the capital of Texas. Check into the hotel and rest. Explore the city\'s vibrant music scene, eclectic food scene, and outdoor attractions like Barton Springs Pool and Lady Bird Lake.'
      },
      {
        'day': '2',
        'description': 'Visit San Antonio and explore its historic sites, including the Alamo, River Walk, and Mission San José.'
      },
      {
        'day': '3-4',
        'description': 'Travel to Big Bend National Park and immerse yourself in its rugged beauty, with opportunities for hiking, birdwatching, and stargazing.'
      },
      {
        'day': '5',
        'description': 'Explore the cultural and culinary scene of Dallas, visiting attractions like the Sixth Floor Museum and Dallas Arboretum.'
      },
      {
        'day': '6-9',
        'description': 'Free days to explore Texas at your leisure, with optional activities such as ranch visits, wine tastings, or a visit to the Space Center Houston.'
      },
      {
        'day': '10',
        'description': 'Return to Belgrade.'
      }
    ],
    includedIn: `Accommodation in centrally located hotels
    Transportation between destinations (private vehicle or domestic flights)
    Guided tours to historical sites and natural attractions
    Entrance fees to attractions mentioned in the itinerary
    Daily breakfast
    Assistance of a tour guide throughout the trip`
  },
}
