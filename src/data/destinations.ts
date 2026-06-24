export interface DestinationAttraction {
  name: string;
  description: string;
  image: string;
  location: string;
}

export interface LocalFood {
  name: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  longDescription: string;
  rating: number;
  image: string;
  bannerImage: string;
  bestTime: string;
  weather: string;
  culture: string;
  history: string;
  budget: 'Budget' | 'Mid-Range' | 'Luxury';
  thingsToDo: string[];
  attractions: DestinationAttraction[];
  famousFood: LocalFood[];
  travelTips: string[];
  lat: number;
  lng: number;
}

export const destinations: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City of India, famous for its magnificent palaces, forts, and royal heritage.',
    longDescription: 'Jaipur, the capital of Rajasthan, is a marvelous city of history, culture, and architecture. Founded in 1727 by Maharaja Sawai Jai Singh II, it is globally renowned as the "Pink City" due to the dominant terracotta pink color of its historic buildings. The city is a perfect blend of ancient heritage and modern urban living, featuring wide avenues, vibrant bazaars, and grand palaces.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'October to March (Pleasant winter season)',
    weather: 'Warm days and cool nights, ranging from 10°C to 28°C in winter. Summer can exceed 40°C.',
    culture: 'Rich Rajasthani heritage filled with folk music, Ghoomar dance, colorful turbans, block-printed textiles, and warm hospitality ("Padharo Mhare Desh").',
    history: 'Built as one of India\'s earliest planned cities. Designed according to Vastu Shastra principles and built from sandstone, it served as the stronghold of the Rajput clan.',
    budget: 'Mid-Range',
    thingsToDo: [
      'Take a hot air balloon ride over Amber Fort',
      'Shop for gemstones and block-print textiles in Johri Bazaar',
      'Watch the sunset from Nahargarh Fort overlooking the city',
      'Take photos in front of the iconic Hawa Mahal facade'
    ],
    attractions: [
      {
        name: 'Hawa Mahal (Palace of Winds)',
        description: 'An extraordinary five-story pyramid-shaped palace built in 1799 with 953 small casements (jharokhas) decorated with intricate latticework, designed to let royal ladies observe everyday street life without being seen.',
        image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80',
        location: 'Hawa Mahal Rd, Badi Choupad, Jaipur'
      },
      {
        name: 'Amber Fort',
        description: 'A majestic hilltop fortress featuring grand ramparts, cobbled paths, and a stunning interior of Rajput style, including the Sheesh Mahal (Mirror Palace) where walls are covered in thousands of tiny convex mirrors.',
        image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=800&q=80',
        location: 'Devisinghpura, Amer, Jaipur'
      },
      {
        name: 'City Palace',
        description: 'A majestic royal residence combining Rajput, Mughal, and European architecture, housing an active royal residence and museum showcasing weapons, clothing, and rare manuscripts.',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        location: 'Tulsi Marg, Gangori Bazaar, Jaipur'
      }
    ],
    famousFood: [
      {
        name: 'Dal Baati Churma',
        description: 'The signature Rajasthani dish consisting of round wheat flour balls (Baati) baked over coals, served with a rich lentil curry (Dal) and sweetened crushed wheat dessert (Churma) with a heavy drizzle of ghee.',
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Pyaaz Kachori',
        description: 'A crisp, deep-fried pastry filled with a spiced onion stuffing, served with tangy tamarind chutney and spicy mint chutney. A staple breakfast item in Jaipur.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Hire authorized guides at Amber Fort and City Palace to understand the rich historical details.',
      'Always negotiate with auto-rickshaw drivers or use ride-hailing apps like Uber or Ola.',
      'Purchase the Composite Ticket if you plan to visit multiple monuments; it saves substantial money.'
    ],
    lat: 26.9124,
    lng: 75.7873
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    description: 'A breathtaking hill station known for its rolling tea plantations, mist-covered valleys, and rare flora.',
    longDescription: 'Munnar is a tranquil hill station nestled in the Western Ghats of Kerala. Located at an altitude of 1,600 meters, it was once the summer resort of the British Government in South India. Munnar is famous for its sprawling, neat tea estates, dramatic mist-capped peaks, clean mountain air, and rich wildlife sanctuaries housing the endangered Nilgiri Tahr.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'September to May (Cool and pleasant climate)',
    weather: 'Refreshingly cool throughout the year, varying between 10°C and 25°C. Heavy rainfall during monsoons (June-August).',
    culture: 'Traditional South Indian hospitality blended with plantation heritage. Influence of both Keralite (Malayali) and Tamil cultures, visible in local temple festivals and food.',
    history: 'Originally inhabited by tribal communities, it was transformed in the late 19th century when British pioneers introduced commercial cultivation of tea, coffee, and cardamom.',
    budget: 'Mid-Range',
    thingsToDo: [
      'Walk through the lush green Tata Tea Gardens',
      'Go boating on the calm waters of Mattupetty Dam',
      'Trek up to Anamudi Peak, the highest point in South India',
      'Watch a traditional Kathakali and Kalaripayattu performance'
    ],
    attractions: [
      {
        name: 'Eravikulam National Park',
        description: 'A beautiful sanctuary shelter for the endangered Nilgiri Tahr (mountain goat). It features rolling grasslands and offers panoramic views of the mist-shrouded hills.',
        image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80',
        location: 'Kannan Devan Hills, Munnar'
      },
      {
        name: 'Tea Museum',
        description: 'India\'s first tea museum, chronicling the growth and mechanization of Munnar\'s tea plantations since the 1880s, complete with historical machinery and tea-tasting sessions.',
        image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=800&q=80',
        location: 'Nallathanni Estate, Munnar'
      },
      {
        name: 'Top Station',
        description: 'The highest point in Munnar, offering spectacular panoramic views of the neighboring state of Tamil Nadu and valleys. Famous for the rare Neelakurinji flowers which bloom once in 12 years.',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
        location: 'Kottagudi, Tamil Nadu border near Munnar'
      }
    ],
    famousFood: [
      {
        name: 'Kerala Puttu and Kadala Curry',
        description: 'A classic Kerala breakfast consisting of steamed cylinders of ground rice and grated coconut (Puttu), served with a rich, aromatic black chickpea curry flavored with roasted coconut gravy (Kadala Curry).',
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Malabar Parotta with Veg Kurma',
        description: 'Flaky, multi-layered flatbread made of refined flour, paired with a mildly spiced, coconut-based vegetable gravy cooked with fresh whole spices.',
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Carry warm clothing, especially for early mornings and nights when the temperature drops.',
      'Book national park tickets online in advance to avoid long queues at the counter.',
      'Hire a local auto or cab driver for sightseeing, as driving on winding, narrow, misty roads can be dangerous for outsiders.'
    ],
    lat: 10.0889,
    lng: 77.0595
  },
  {
    id: 'ladakh',
    name: 'Leh-Ladakh',
    state: 'Jammu & Kashmir / Ladakh',
    description: 'A high-altitude desert known for its stark mountain landscapes, deep blue lakes, and Tibetan Buddhist culture.',
    longDescription: 'Ladakh, the "Land of High Passes," is a stunning Union Territory situated in the Trans-Himalayan region. Characterized by high-altitude arid valleys, rugged mountains, pristine cobalt-blue lakes, and colorful Tibetan monasteries, it is a dream destination for adventure seekers, trekkers, and road trippers. The isolation has preserved a peaceful Buddhist lifestyle centered around ancient gompas.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1614531341773-3bef8ca0da3b?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'May to September (Highways open, pleasant summer climate)',
    weather: 'Cool summers (15°C to 25°C). Winters are extremely harsh, with temperatures dropping to -20°C or below, freezing the lakes.',
    culture: 'Deeply influenced by Tibetan Buddhism. Prayer flags flutter on houses and passes, monasteries host vibrant masked dance festivals (Cham), and locals speak Ladakhi.',
    history: 'An independent Himalayan kingdom for centuries, Ladakh was a key trade route crossroads between India, Tibet, and Central Asia before being integrated into India.',
    budget: 'Luxury',
    thingsToDo: [
      'Camp alongside the surreal blue waters of Pangong Tso',
      'Ride double-humped Bactrian camels on the sand dunes of Nubra Valley',
      'Drive across Khardung La, one of the world\'s highest motorable passes',
      'Attend the morning prayer sessions at Thiksey Monastery'
    ],
    attractions: [
      {
        name: 'Pangong Tso Lake',
        description: 'A breathtaking endorheic lake situated at 4,350 meters, famous for its color-changing water that transitions from light blue to deep cobalt and green. One-third of the lake lies in India and two-thirds in China.',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        location: 'Leh District, Ladakh'
      },
      {
        name: 'Thiksey Monastery',
        description: 'A spectacular 12-story monastery complex resembling the Potala Palace in Lhasa, Tibet. It houses a magnificent 49-foot statue of Maitreya Buddha (the future Buddha) occupying two stories.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
        location: 'Leh Manali Hwy, Thiksey, Ladakh'
      },
      {
        name: 'Nubra Valley',
        description: 'A cold high-altitude desert valley famous for its shifting sand dunes, double-humped camels, and the giant Maitreya Buddha statue at Diskit Monastery.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
        location: 'North of Leh, Ladakh'
      }
    ],
    famousFood: [
      {
        name: 'Thukpa',
        description: 'A hearty Tibetan noodle soup featuring freshly cut vegetables, meat (optional), and handmade wheat noodles in a clear, warm broth spiced with ginger, garlic, and coriander.',
        image: 'https://images.unsplash.com/photo-1547928500-300988147e06?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Momos with Butter Tea',
        description: 'Steamed flour dumplings stuffed with seasoned vegetables or minced meat, paired with traditional Ladakhi Gur-Gur Cha (butter tea made with tea leaves, yak butter, and salt).',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'CRITICAL: Rest completely for the first 24-36 hours in Leh to acclimatize to the high altitude (3,500m) and prevent acute mountain sickness (AMS).',
      'Obtain the Inner Line Permit (ILP) online or via a travel agent before visiting Pangong Tso, Nubra Valley, or Tso Moriri.',
      'Carry cash, as ATMs are scarce outside Leh, and mobile connectivity is mostly limited to postpaid BSNL and Airtel connections.'
    ],
    lat: 34.1526,
    lng: 77.5771
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'India\'s beach capital, merging Portuguese history, vibrant coastal cuisine, and active nightlife.',
    longDescription: 'Goa is India\'s smallest state, but its cultural presence is immense. Known worldwide for its beautiful white-sand beaches, coconut palm groves, centuries-old Portuguese churches, spice plantations, and laid-back "Susegad" lifestyle, Goa is the ultimate destination for both relaxation and lively party culture.',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'November to February (Cool breeze and peak beach activities)',
    weather: 'Warm and humid. Winter temperatures range from 20°C to 32°C. Monsoon (June-September) brings visual greenery but halts beach water sports.',
    culture: 'An eclectic fusion of Indian and Portuguese influences. Catholicism and Hinduism exist side-by-side. Famed for carnival parades, music festivals, and a relaxed outlook.',
    history: 'A Portuguese colony for over 450 years until it was annexed by India in 1961, leaving behind distinct architectural styles, chapels, and culinary habits.',
    budget: 'Budget',
    thingsToDo: [
      'Try parasailing and jet-skiing at Calangute and Baga beaches',
      'Explore the colorful Portuguese quarters of Fontainhas in Panaji',
      'Visit a spice plantation and enjoy a traditional Goan buffet lunch',
      'Take a cruise on the Mandovi River at sunset'
    ],
    attractions: [
      {
        name: 'Basilica of Bom Jesus',
        description: 'A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier. Built in 1605, it represents one of the finest examples of baroque architecture in India.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        location: 'Old Goa Rd, Bainguinim, Goa'
      },
      {
        name: 'Dudhsagar Falls',
        description: 'A spectacular four-tiered waterfall on the Mandovi River, looking like a cascade of milk pouring down the lush green mountain. Famous for the railway bridge running right across it.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        location: 'Sonalium, Goa-Karnataka border'
      },
      {
        name: 'Palolem Beach',
        description: 'A beautiful crescent-shaped bay in South Goa, famed for its calm, shallow waters, colorful beach shacks, and quiet, relaxing atmosphere compared to the bustling North Goa beaches.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        location: 'Canacona, South Goa'
      }
    ],
    famousFood: [
      {
        name: 'Goan Fish Curry Rice',
        description: 'The staple dish of Goa: fresh kingfish or pomfret simmered in a spicy, tangy coconut gravy made with Kashmiri chilies, tamarind, and local spices, served with steaming white rice.',
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Bebinca',
        description: 'The queen of Goan desserts. A traditional layered cake made of egg yolks, coconut milk, sugar, and ghee, baked layer-by-layer (traditionally 7 to 16 layers) with a hint of nutmeg.',
        image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Rent a scooter or car for convenient and cost-effective travel, as local taxis can be very expensive.',
      'Respect the local culture and guidelines; avoid wearing bikinis outside the beach and pool areas.',
      'Visit South Goa if you want serene beaches and nature, and North Goa if you prefer parties, clubs, and water sports.'
    ],
    lat: 15.2993,
    lng: 74.1240
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'One of the world\'s oldest continually inhabited cities, representing the spiritual heart of India.',
    longDescription: 'Varanasi (also known as Kashi or Benares) is situated on the banks of the sacred river Ganges. It is considered the spiritual capital of India and holds deep religious significance for Hindus, who believe that dying here brings salvation (moksha). The city is a maze of narrow streets (galis) lined with old houses, temples, and bustling ghats where religious rituals take place day and night.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1561361049-571e45ee9007?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1601999109332-542b18dbec57?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'November to February (Cool temperatures suitable for walking tours)',
    weather: 'Hot summers exceeding 40°C. Pleasant winters (10°C to 25°C) with foggy mornings on the river.',
    culture: 'Deeply spiritual and ritualistic. Famous for classical music (Benares Gharana), silk weaving (Banarasi Sarees), Sanskrit learning, and mystical sadhus.',
    history: 'With history dating back to the 11th century BCE, legend says it was founded by Lord Shiva. Mark Twain wrote: "Benares is older than history, older than tradition, older even than legend..."',
    budget: 'Budget',
    thingsToDo: [
      'Take a sunrise boat ride on the Ganges River',
      'Watch the majestic Ganga Aarti ceremony at Dashashwamedh Ghat',
      'Explore the ruins and museum at Sarnath, where Lord Buddha gave his first sermon',
      'Walk through the ancient narrow alleyways behind the ghats'
    ],
    attractions: [
      {
        name: 'Dashashwamedh Ghat',
        description: 'The oldest and most lively ghat in Varanasi, where priests perform the synchronized Agni Pooja (Ganga Aarti) every evening with brass lamps, bells, and incense.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a45f0d2?auto=format&fit=crop&w=800&q=80',
        location: 'Dashashwamedh Ghat Rd, Varanasi'
      },
      {
        name: 'Kashi Vishwanath Temple (Golden Temple)',
        description: 'Dedicated to Lord Shiva, it is one of the most famous Hindu temples in India. The temple spire is covered in 800 kilograms of pure gold plates, donated by Maharaja Ranjit Singh.',
        image: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=800&q=80',
        location: 'Lahori Tola, Varanasi'
      },
      {
        name: 'Sarnath',
        description: 'Located 10 km from Varanasi, it is one of the four key Buddhist pilgrimage sites. Features the giant Dhamek Stupa, temple gardens, and the Ashoka Pillar capital museum.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80',
        location: 'Sarnath, Varanasi'
      }
    ],
    famousFood: [
      {
        name: 'Kachori Sabzi & Jalebi',
        description: 'The ultimate Varanasi breakfast. Flaky, lentil-stuffed kachoris served with a spicy potato and chickpea gravy (sabzi), followed by hot, syrup-dripping crispy jalebis.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Banarasi Lassi & Tamatar Chaat',
        description: 'Thick, creamy yogurt lassi served in earthen cups (kulhad), topped with rabri (condensed milk) and malai. Paired with unique local tomato-based chaat cooked in a clay pot.',
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Be cautious of aggressive vendors, boatmen, and self-proclaimed priests requesting heavy donations. Politely decline.',
      'Dress modestly while visiting temples and ghats; cover shoulders and legs out of respect.',
      'Hire a boat for the evening Ganga Aarti early, as the river gets extremely crowded with boats by sunset.'
    ],
    lat: 25.3176,
    lng: 82.9739
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    description: 'An open-air museum of giant boulders and spectacular ruins of the medieval Vijayanagara Empire.',
    longDescription: 'Hampi is a stunning UNESCO World Heritage Site in northern Karnataka. Surrounded by a surreal landscape of rusty red boulders and the winding Tungabhadra River, it preserves the ruins of Vijayanagara, the capital of one of the greatest Hindu empires in Indian history. The site spans over 4,100 hectares and contains remains of palaces, temples, markets, and aquatic structures.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600100397608-f010e42fa4fa?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&w=1600&q=80',
    bestTime: 'October to February (Moderate climate for outdoor exploration)',
    weather: 'Dry and hot. Winter days average 30°C but are windy and pleasant. Summer can reach 42°C with no shade.',
    culture: 'Rich South Indian heritage with historic Kannada culture. The village of Hampi has a vibrant backpacker community on the other side of the river ("Hippie Island").',
    history: 'Served as the capital of the Vijayanagara Empire in the 14th century, which was described by medieval travelers as one of the richest and most beautiful cities in the world before being sacked in 1565.',
    budget: 'Mid-Range',
    thingsToDo: [
      'Rent a bicycle or moped to ride through the massive ruins',
      'Cross the Tungabhadra River in a traditional circular coracle boat',
      'Watch the sunrise from Matanga Hill for a view of the boulder landscape',
      'Visit the Sanapur Lake for cliff jumping and relaxation'
    ],
    attractions: [
      {
        name: 'Virupaksha Temple',
        description: 'Dedicated to Lord Shiva, this is the oldest active temple in Hampi, featuring a grand 50-meter-tall gateway tower (gopuram) and housing the temple elephant Lakshmi.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e42fa4fa?auto=format&fit=crop&w=800&q=80',
        location: 'Hampi Bazaar, Hampi'
      },
      {
        name: 'Vittala Temple (Stone Chariot)',
        description: 'A spectacular 16th-century temple complex renowned for its pillared halls, dynamic carvings, and the iconic Stone Chariot, a shrine styled as a royal chariot that stands as a symbol of Karnataka tourism.',
        image: 'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&w=800&q=80',
        location: 'Vittala Temple Rd, Hampi'
      },
      {
        name: 'Lotus Mahal & Elephant Stables',
        description: 'An elegant, symmetrical two-story palace displaying a blend of Indo-Islamic architecture, adjacent to a grand dome-roofed stable that once housed the eleven royal army elephants.',
        image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=800&q=80',
        location: 'Zenana Enclosure, Hampi'
      }
    ],
    famousFood: [
      {
        name: 'South Indian Filter Coffee & Idli',
        description: 'Freshly brewed aromatic coffee frothed using traditional steel cups (dabarah), paired with soft, fluffy steamed rice cakes (idli) served on a banana leaf with coconut chutney.',
        image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Bisi Bele Bath',
        description: 'A hot, comforting, and spicy rice dish cooked with lentils, mixed vegetables, tamarind, and a unique blend of freshly roasted spices, topped with fried cashews.',
        image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Wear sturdy shoes, sunglasses, and a hat, as there is a lot of walking across rough rock surfaces with minimal shade.',
      'Hire a government-approved tour guide at Vittala Temple to understand the architectural secrets, like the musical pillars.',
      'Carry plenty of water and stay hydrated throughout the day; Hampi\'s dry climate can cause quick fatigue.'
    ],
    lat: 15.3350,
    lng: 76.4620
  }
];
