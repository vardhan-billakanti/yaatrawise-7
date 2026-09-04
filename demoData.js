// YatraWise Multi-Destination Data Repository
// Scalable destination database for Hackathon evaluation

window.YATRA_DESTINATIONS = {
  "araku valley": {
    id: "araku",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    tagline: "The Ooty of Andhra Pradesh & Tribal Coffee Highlands",
    coords: { lat: 18.3273, lng: 82.8808 },
    station: { code: "ARK", name: "Araku Railway Station", city: "Araku", lat: 18.3273, lng: 82.8808 },
    interchangeStation: { code: "VSKP", name: "Visakhapatnam Junction", lat: 17.7231, lng: 83.2906 },
    airport: { code: "VTZ", name: "Visakhapatnam International Airport" },
    altitude: "911 meters (2,989 ft) above sea level",
    bestSeason: "October to February",
    highlights: [
      "Million-year-old Borra limestone caves with dramatic stalactites",
      "World-renowned GI-tagged tribal Arabica coffee plantations",
      "Vistadome panoramic glass train through 58 tunnels and 84 bridges",
      "Vibrant Dhimsa tribal dance and traditional bamboo chicken"
    ],
    seasons: [
      {
        season: "Winter (Oct – Feb)",
        status: "⭐ Prime Best Time",
        temp: "12°C – 25°C",
        weather: "Misty mornings, crisp chilly evenings, and crystal clear skies. Perfect for trekking and sightseeing.",
        crowd: "Moderate to High",
        approxCost: "Moderate seasonal rates"
      },
      {
        season: "Monsoon (Jul – Sep)",
        status: "Lush & Waterfalls",
        temp: "20°C – 28°C",
        weather: "Verdant green hills, gushing waterfalls, foggy ghats. Breathtaking views, light rain gear required.",
        crowd: "Low",
        approxCost: "Discounted off-peak rates"
      },
      {
        season: "Summer (Mar – Jun)",
        status: "Pleasant Hill Escape",
        temp: "22°C – 34°C",
        weather: "Significantly cooler than Hyderabad or coastal plains. Ideal for escaping scorching heat.",
        crowd: "Low",
        approxCost: "Most affordable rates"
      }
    ],
    travelTips: [
      "Pre-book the Vistadome train coach early on IRCTC as seats sell out fast.",
      "Carry light woolens even in summer evenings as hill temperatures drop.",
      "Download YatraWise offline maps because mobile data may dip in Borra and Katiki areas.",
      "Always hire verified local guides to directly support the tribal economy."
    ],
    attractions: [
      {
        id: "act-araku-1",
        title: "Borra Caves (Stalactites & Stalagmites)",
        time: "10:00 AM",
        type: "attraction",
        icon: "mountain",
        duration: "2 hours",
        cost: 80,
        rating: 4.8,
        bestTime: "Morning before 11:00 AM",
        crowd: "Moderate Crowd",
        crowdLevel: "yellow",
        crowdTip: "Recommended visit: before 11 AM to avoid arriving tour buses.",
        lat: 18.2804,
        lng: 83.0392,
        photo: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        description: "One million-year-old limestone karst caves extending 80 meters deep with dramatic natural mineral pillars."
      },
      {
        id: "act-araku-2",
        title: "Katiki Waterfalls Jeep Safari & Trek",
        time: "09:00 AM",
        type: "attraction",
        icon: "droplets",
        duration: "2.5 hours",
        cost: 150,
        rating: 4.8,
        bestTime: "Morning",
        crowd: "Moderate Crowd",
        crowdLevel: "yellow",
        crowdTip: "Wear comfortable grip shoes; rocks near the pool can be slippery.",
        lat: 18.2934,
        lng: 83.0039,
        photo: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
        description: "50-foot waterfall cascading from Ghostani river. Adventure jeep ride through red mud trails and scenic bamboo trek."
      },
      {
        id: "act-araku-3",
        title: "Araku Tribal Museum & Heritage Village",
        time: "02:00 PM",
        type: "attraction",
        icon: "landmark",
        duration: "1.5 hours",
        cost: 40,
        rating: 4.6,
        bestTime: "Early afternoon",
        crowd: "Low Crowd",
        crowdLevel: "green",
        lat: 18.3288,
        lng: 82.8682,
        photo: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80",
        description: "Learn indigenous Dhimsa dance, view preserved mud-huts, tribal jewelry, metallurgy, and archery exhibits."
      },
      {
        id: "act-araku-4",
        title: "Araku Organic Coffee Estate & Tasting",
        time: "04:30 PM",
        type: "attraction",
        icon: "coffee",
        duration: "1.5 hours",
        cost: 60,
        rating: 4.9,
        bestTime: "Late afternoon golden hour",
        crowd: "Low Crowd",
        crowdLevel: "green",
        lat: 18.3340,
        lng: 82.8820,
        photo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        description: "Walk under shade-grown Arabica coffee trees, see the roasting process, and savor fresh organic brew."
      },
      {
        id: "act-araku-5",
        title: "Chaparai Natural Water Cascade",
        time: "02:00 PM",
        type: "attraction",
        icon: "sun",
        duration: "1.5 hours",
        cost: 20,
        rating: 4.5,
        bestTime: "Afternoon",
        crowd: "Moderate Crowd",
        crowdLevel: "yellow",
        lat: 18.2980,
        lng: 82.7830,
        photo: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        description: "Gentle natural rock stream where clear cold waters flow over smooth sloped boulders."
      },
      {
        id: "act-araku-6",
        title: "Galikonda Scenic Viewpoint Peak",
        time: "04:30 PM",
        type: "attraction",
        icon: "camera",
        duration: "1 hour",
        cost: 0,
        rating: 4.9,
        bestTime: "Sunset / Late afternoon",
        crowd: "Low Crowd",
        crowdLevel: "green",
        lat: 18.2750,
        lng: 82.9100,
        photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        description: "Highest peak in Visakhapatnam district (3,800 ft above sea level) offering 360-degree panoramic valley views."
      },
      {
        id: "act-araku-7",
        title: "Padmapuram Botanical Gardens & Treehouses",
        time: "11:30 AM",
        type: "attraction",
        icon: "trees",
        duration: "1 hour",
        cost: 40,
        rating: 4.5,
        bestTime: "Midday",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 18.3315,
        lng: 82.8710,
        photo: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80",
        description: "Historic WWII-era botanical nursery featuring exotic flowers, orchards, and hanging tree-top huts."
      },
      {
        id: "act-araku-8",
        title: "Tribal Cooperative Evening Market",
        time: "06:00 PM",
        type: "shopping",
        icon: "shopping-bag",
        duration: "1 hour",
        cost: 200,
        rating: 4.8,
        bestTime: "Evening",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 18.3280,
        lng: 82.8750,
        photo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
        description: "Buy direct GI-tagged Araku Valley Arabica Coffee beans, wild mountain honey, and handmade bamboo crafts."
      }
    ],
    stays: [
      {
        id: "stay-araku-1",
        name: "Hill View Tribal Homestay",
        category: "Budget Stay 💰",
        pricePerNight: 700,
        rating: 4.7,
        reviewsCount: 84,
        distance: "1.2 km from Araku Town Centre",
        amenities: ["Free Wi-Fi", "Geyser Hot Water", "Home-Cooked Food", "Campfire Yard", "Mountain View"],
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Ultra-affordable, clean, and run by a verified tribal host family.",
        owner: { name: "Laxman & Vani Rao (Demo Host)", phone: "+91 98XXX XXXXX", speaks: "Telugu, Hindi", experience: "Homestay host since 2019" },
        lat: 18.3240,
        lng: 82.8710
      },
      {
        id: "stay-araku-2",
        name: "Padmapuram Pine Cottages",
        category: "Best Location 📍",
        pricePerNight: 900,
        rating: 4.8,
        reviewsCount: 142,
        distance: "400m from Day 1 Attractions",
        amenities: ["Pine Tree Garden", "Running Hot Water", "In-house Kitchen", "Balcony Hammock", "Free Parking"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended for your itinerary",
        recommendationReason: "Adjacent to key attractions, saving travel time and local auto fares.",
        owner: { name: "S. K. Naidu (Demo Host)", phone: "+91 94XXX XXXXX", speaks: "Telugu, English, Hindi", experience: "Hospitality manager" },
        lat: 18.3315,
        lng: 82.8710
      },
      {
        id: "stay-araku-3",
        name: "Araku Valley Eco Resort",
        category: "Premium Comfort ⭐",
        pricePerNight: 1600,
        rating: 4.9,
        reviewsCount: 230,
        distance: "2.5 km from Station",
        amenities: ["Mountain Valley View", "Organic Dining Room", "Bonfire Nightly", "Bicycle Rentals", "Guided Walks"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Premium Comfort",
        recommendationReason: "Ideal for travelers seeking sweeping sunrise balcony views and organic farm meals.",
        owner: { name: "Ramesh Varma (Demo Host)", phone: "+91 99XXX XXXXX", speaks: "Telugu, Hindi, English", experience: "Eco-tourism operator" },
        lat: 18.3350,
        lng: 82.8770
      }
    ],
    guides: [
      {
        id: "guide-araku-1",
        name: "Ravi Kumar",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 128,
        experience: "5 years experience",
        languages: ["Telugu", "Hindi", "English"],
        specialities: ["Nature", "Local Culture", "Cave Geology"],
        pricePerDay: 800,
        availability: "Available for your dates",
        verified: true,
        bio: "Born and raised in Araku Valley. Authorized local guide passionate about tribal traditions, hidden waterfalls, and cave formations.",
        sampleContact: "ravi.demo@yatrawise.local"
      },
      {
        id: "guide-araku-2",
        name: "Swathi Rao",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 94,
        experience: "4 years experience",
        languages: ["Telugu", "English"],
        specialities: ["Photography", "Trekking", "Coffee Plantations"],
        pricePerDay: 900,
        availability: "Available for your dates",
        verified: true,
        bio: "Adventure photographer and botany enthusiast. Takes travelers to secret sunrise viewpoints and organic coffee estates.",
        sampleContact: "swathi.demo@yatrawise.local"
      },
      {
        id: "guide-araku-3",
        name: "Mohan Naidu",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 160,
        experience: "8 years experience",
        languages: ["Telugu", "Hindi"],
        specialities: ["History", "Birdwatching", "Budget Routes"],
        pricePerDay: 750,
        availability: "Available for your dates",
        verified: true,
        bio: "Veteran guide with encyclopedic knowledge of Eastern Ghats wildlife, tribal languages, and budget-friendly local eateries.",
        sampleContact: "mohan.demo@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-araku-1",
        name: "Tribal Flavours Kitchen",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹200 / person",
        distance: "800m from Museum",
        cuisine: "Tribal Andhra Specialties",
        specialtyDish: "Authentic Araku Bamboo Chicken (Bongu Kodi)",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Must-Try Local Delicacy",
        description: "Tender chicken marinated in crushed green chillies, wild herbs, roasted inside raw bamboo stalks over charcoal without oil."
      },
      {
        id: "food-araku-2",
        name: "Araku Hill Coffee House",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹90 / person",
        distance: "Inside Coffee Museum Complex",
        cuisine: "Beverages & Bakery",
        specialtyDish: "Single-Estate Arabica Filter Coffee & Millet Cookies",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "GI-Tagged Pure Arabica",
        description: "Award-winning organic coffee grown by tribal farmers at 3,500 ft elevation. Smooth chocolate and berry undertones."
      },
      {
        id: "food-araku-3",
        name: "Vasundhara Pure Veg Andhra Mess",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹140 / person (Unlimited)",
        distance: "Near RTC Bus Stand",
        cuisine: "Traditional Andhra Vegetarian",
        specialtyDish: "Gongura Pachadi, Pappu & Hot Ghee Rice on Banana Leaf",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Budget Vegetarian Pick",
        description: "Homestyle authentic Andhra bhojanam served warm on fresh plantain leaves with unlimited refills."
      },
      {
        id: "food-araku-4",
        name: "Hilltop Charcoal Dhaba",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        priceRange: "₹250 / person",
        distance: "On Ghat Road",
        cuisine: "Tandoori & Indian Breads",
        specialtyDish: "Smoked Mutton Curry & Butter Roti",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Evening Dinner Spot",
        description: "Cozy roadside eatery with campfire pit, warm blankets for diners, and sizzling tandoori items."
      }
    ],
    aiLensData: [
      {
        id: "lens-araku-1",
        name: "Borra Caves",
        confidence: "98.8% Match",
        type: "Geological Karst Landmark",
        period: "Over 1 Million Years Old",
        rating: 4.8,
        entryFee: "₹80 Adults / ₹60 Kids",
        cameraFee: "₹100 Still",
        bestHours: "09:30 AM – 11:30 AM",
        crowdStatus: "Moderate (Arrive early)",
        funFact: "A naturally formed Shivalinga stalagmite inside the cave attracts thousands of tribal pilgrims every Shivratri.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-araku-2",
        name: "Katiki Waterfalls",
        confidence: "97.4% Match",
        type: "Natural Waterfall & Trekking Spot",
        period: "Originates from Ghostani River",
        rating: 4.8,
        entryFee: "₹30 Forest Entry + ₹250 Jeep",
        cameraFee: "Free",
        bestHours: "10:00 AM – 02:00 PM",
        crowdStatus: "Low to Moderate",
        funFact: "The water falls from an altitude of over 50 feet forming a natural crystal plunge pool.",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-araku-3",
        name: "Araku Coffee Plantations",
        confidence: "99.1% Match",
        type: "Agro-Tourism & GI-Tagged Estate",
        period: "Tribal cooperative brand founded in 2000s",
        rating: 4.9,
        entryFee: "Free Entry / ₹60 Tasting",
        cameraFee: "Free",
        bestHours: "03:30 PM – 05:30 PM",
        crowdStatus: "Low (Peaceful)",
        funFact: "Araku Coffee won the Gold Medal for best coffee pod in the world at the Prix Epicures in Paris.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Telugu",
      languages: ["Telugu", "Hindi", "English"],
      phrases: [
        { english: "Where is the nearest bus stand?", local: "దగ్గరలోని బస్ స్టేషన్ ఎక్కడ ఉంది?", phonetic: "Daggaraloni bus station ekkada undi?" },
        { english: "How do I get to Borra Caves?", local: "ఇక్కడి నుండి బొర్రా గుహలకు ఎలా వెళ్ళాలి?", phonetic: "Ikkadi nundi Borra guhalaku elaa vellaali?" },
        { english: "How much does this cost?", local: "దీని ధర ఎంత?", phonetic: "Deeni dhara entha?" },
        { english: "Is this food spicy?", local: "ఈ ఆహారం కారంగా ఉంటుందా?", phonetic: "Ee aahaaram kaaramgaa untundaa?" },
        { english: "Please call emergency help!", local: "దయచేసి అత్యవసర సహాయం పిలవండి!", phonetic: "Dayachesi atyavasara sahaayam pilavandi!" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Explore Stalactites at Borra Caves", points: 20, done: true },
      { id: "b2", title: "Taste Authentic Bamboo Chicken", points: 15, done: true },
      { id: "b3", title: "Sip Fresh Arabica Araku Coffee", points: 10, done: true },
      { id: "b4", title: "Visit Tribal Heritage Museum", points: 15, done: false },
      { id: "b5", title: "Jeep Ride to Katiki Waterfalls", points: 20, done: false },
      { id: "b6", title: "Catch Golden Hour at Galikonda Peak", points: 20, done: false }
    ],
    transportDefaults: {
      busOperator: "APSRTC Amaravathi Multi-Axle Volvo",
      trainName: "Visakhapatnam – Kirandul Passenger Special (18551)",
      flightHub: "Visakhapatnam (VTZ) + Hill Taxi to Araku"
    },
    emergencyContacts: [
      { title: "National Emergency Service", number: "112", icon: "phone-call", desc: "Toll-free 24/7 central emergency response" },
      { title: "Police Emergency", number: "100", icon: "shield", desc: "Araku Valley Police Station (08936-249133)" },
      { title: "Ambulance & Medical", number: "108", icon: "activity", desc: "Area Community Health Centre, Araku" },
      { title: "Railway Helpline (Rail Madad)", number: "139", icon: "train", desc: "Indian Railways 24/7 passenger assistance" },
      { title: "Tourist Helpline (AP Tourism)", number: "1800-425-45454", icon: "compass", desc: "Official Andhra Pradesh Tourism Assistance" }
    ]
  },

  "goa": {
    id: "goa",
    name: "Goa",
    state: "Goa",
    tagline: "Golden Sands, Portuguese Architecture & Coastal Vibrance",
    coords: { lat: 15.4989, lng: 73.8278 },
    station: { code: "MAO", name: "Madgaon Junction", city: "Madgaon", lat: 15.2736, lng: 73.9789 },
    interchangeStation: { code: "KRMI", name: "Karmali Railway Station (North Goa)", lat: 15.4914, lng: 73.9219 },
    airport: { code: "GOI", name: "Dabolim International Airport / Manohar Int Airport (GOX)" },
    altitude: "Sea Level to 1,022 meters (Western Ghats fringe)",
    bestSeason: "November to February",
    highlights: [
      "Pristine sun-drenched beaches: Baga, Calangute, and Anjuna",
      "17th-century Portuguese fortress: Fort Aguada overlooking the Arabian Sea",
      "UNESCO World Heritage Site: Basilica of Bom Jesus in Old Goa",
      "Spectacular multi-tiered cascade: Dudhsagar Falls in Bhagwan Mahavir Sanctuary"
    ],
    seasons: [
      {
        season: "Peak Winter (Nov – Feb)",
        status: "⭐ Prime Best Time",
        temp: "20°C – 31°C",
        weather: "Gentle coastal sea breezes, pleasant evenings, clear blue skies, and vibrant beach shacks.",
        crowd: "High",
        approxCost: "Peak holiday rates"
      },
      {
        season: "Monsoon (Jun – Sep)",
        status: "Lush & Romantic",
        temp: "24°C – 29°C",
        weather: "Vibrant emerald green paddy fields, gushing Dudhsagar waterfalls, and dramatic oceanic swells.",
        crowd: "Low to Moderate",
        approxCost: "Discounted off-peak rates"
      },
      {
        season: "Summer (Mar – May)",
        status: "Budget Beach Days",
        temp: "26°C – 35°C",
        weather: "Warm and tropical. Perfect for early morning swims and late sunset beach lounging.",
        crowd: "Low",
        approxCost: "Most affordable stay rates"
      }
    ],
    travelTips: [
      "Rent a verified scooter or self-drive car at Madgaon or Airport for flexible coastal travel.",
      "Visit Basilica of Bom Jesus early in the morning for peaceful photography and respectful church attire.",
      "Take a shared licensed safari jeep to reach Dudhsagar Falls base through the Mollem National Park.",
      "Bargain with respect at the Saturday Night Market and Anjuna Flea Market."
    ],
    attractions: [
      {
        id: "act-goa-1",
        title: "Baga Beach Watersports & Shacks",
        time: "09:30 AM",
        type: "beach",
        icon: "sun",
        duration: "2.5 hours",
        cost: 0,
        rating: 4.7,
        bestTime: "Morning or Sunset",
        crowd: "Moderate to High",
        crowdLevel: "yellow",
        crowdTip: "Visit before 11 AM for uncrowded shore walks and water activities.",
        lat: 15.5553,
        lng: 73.7517,
        photo: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
        description: "Famous North Goa coastline with soft golden sands, parasailing, jet skis, and beachside cafes."
      },
      {
        id: "act-goa-2",
        title: "Fort Aguada & Historic Portuguese Lighthouse",
        time: "02:30 PM",
        type: "heritage",
        icon: "shield",
        duration: "2 hours",
        cost: 25,
        rating: 4.8,
        bestTime: "Afternoon into Sunset",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 15.4925,
        lng: 73.7736,
        photo: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80",
        description: "Imposing 17th-century Portuguese fortress standing at the confluence of the Mandovi River and the Arabian Sea."
      },
      {
        id: "act-goa-3",
        title: "Basilica of Bom Jesus (UNESCO Heritage Site)",
        time: "11:30 AM",
        type: "heritage",
        icon: "landmark",
        duration: "1.5 hours",
        cost: 0,
        rating: 4.9,
        bestTime: "Morning",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 15.5008,
        lng: 73.9117,
        photo: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=600&q=80",
        description: "Stunning Baroque architecture housing the sacred mortal remains of St. Francis Xavier in Old Goa."
      },
      {
        id: "act-goa-4",
        title: "Dudhsagar Waterfalls Jungle Safari",
        time: "08:00 AM",
        type: "nature",
        icon: "droplets",
        duration: "4 hours",
        cost: 450,
        rating: 4.9,
        bestTime: "Morning",
        crowd: "Moderate",
        crowdLevel: "yellow",
        crowdTip: "Mandatory life jacket and registered forest jeep transfer required at Kulem.",
        lat: 15.3144,
        lng: 74.3144,
        photo: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        description: "Majestic four-tiered 310-meter waterfall roaring through the Western Ghats jungle on the Goa-Karnataka border."
      },
      {
        id: "act-goa-5",
        title: "Calangute Beach Promenade",
        time: "04:30 PM",
        type: "beach",
        icon: "compass",
        duration: "1.5 hours",
        cost: 0,
        rating: 4.6,
        bestTime: "Late afternoon",
        crowd: "High",
        crowdLevel: "red",
        lat: 15.5442,
        lng: 73.7552,
        photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        description: "Known as the 'Queen of Beaches', brimming with vibrant souvenir stalls, seafood shacks, and sun loungers."
      },
      {
        id: "act-goa-6",
        title: "Fontainhas Latin Quarter Walking Tour",
        time: "04:00 PM",
        type: "heritage",
        icon: "camera",
        duration: "2 hours",
        cost: 0,
        rating: 4.8,
        bestTime: "Afternoon",
        crowd: "Low to Moderate",
        crowdLevel: "green",
        lat: 15.4988,
        lng: 73.8315,
        photo: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "Charming pastel-colored colonial villas, red-tiled roofs, overhanging balconies, and quaint European-style bakeries."
      },
      {
        id: "act-goa-7",
        title: "Anjuna Beach & Rocky Sunset Point",
        time: "05:30 PM",
        type: "beach",
        icon: "sun",
        duration: "1.5 hours",
        cost: 0,
        rating: 4.7,
        bestTime: "Sunset",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 15.5733,
        lng: 73.7410,
        photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
        description: "Iconic bohemian beach framed by red laterite cliffs and famous for sunset trance shacks."
      },
      {
        id: "act-goa-8",
        title: "Mandovi River Sunset Cruise",
        time: "06:30 PM",
        type: "entertainment",
        icon: "anchor",
        duration: "1 hour",
        cost: 500,
        rating: 4.5,
        bestTime: "Dusk",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 15.5015,
        lng: 73.8290,
        photo: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=600&q=80",
        description: "Lively evening boat cruise with Goan folk dances, music, and illuminated views of Panaji city."
      }
    ],
    stays: [
      {
        id: "stay-goa-1",
        name: "Casa Da Silva Portuguese Homestay",
        category: "Budget Homestay 💰",
        pricePerNight: 950,
        rating: 4.8,
        reviewsCount: 112,
        distance: "1.5 km from Calangute Beach",
        amenities: ["Free Wi-Fi", "AC Rooms", "Garden Courtyard", "Goan Breakfast Included", "Bike Rental Desk"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Authentic Portuguese heritage home run by a local family with home-cooked breakfast.",
        owner: { name: "Maria & Antonio Silva", phone: "+91 98XXX XXXXX", speaks: "Konkani, English, Hindi", experience: "Host since 2017" },
        lat: 15.5380,
        lng: 73.7600
      },
      {
        id: "stay-goa-2",
        name: "Baywatch Coastal Cottages",
        category: "Near the Beach 📍",
        pricePerNight: 1600,
        rating: 4.7,
        reviewsCount: 198,
        distance: "200m from Baga Beach Coast",
        amenities: ["Direct Beach Access", "Swimming Pool", "Balcony Hammock", "Bar & Shack", "Free Parking"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended for beach lovers",
        recommendationReason: "Steps away from watersports and beach shacks, eliminating local taxi expenses.",
        owner: { name: "Cedric Fernandes", phone: "+91 97XXX XXXXX", speaks: "Konkani, English", experience: "Resort manager" },
        lat: 15.5560,
        lng: 73.7530
      },
      {
        id: "stay-goa-3",
        name: "Heritage Palms Luxury Boutique Resort",
        category: "Premium Coastal Luxury ⭐",
        pricePerNight: 2800,
        rating: 4.9,
        reviewsCount: 310,
        distance: "Candolim Beachfront",
        amenities: ["Sea View Suites", "Infinity Pool", "Ayurvedic Spa", "Multicuisine Dining", "Private Cabanas"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Luxury Pick",
        recommendationReason: "Indulgent Portuguese-Goan hospitality with oceanfront sunsets and gourmet coastal seafood.",
        owner: { name: "Karan D'Souza", phone: "+91 99XXX XXXXX", speaks: "English, Hindi, Konkani", experience: "Luxury hotelier" },
        lat: 15.5180,
        lng: 73.7650
      }
    ],
    guides: [
      {
        id: "guide-goa-1",
        name: "Savio D'Souza",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 145,
        experience: "7 years experience",
        languages: ["Konkani", "English", "Hindi", "Portuguese"],
        specialities: ["Colonial History", "Latin Quarter", "Old Goa Churches"],
        pricePerDay: 900,
        availability: "Available for your dates",
        verified: true,
        bio: "Certified Goa Tourism guide and heritage architecture researcher. Unravels 450 years of Portuguese history and hidden culinary spots.",
        sampleContact: "savio.goa@yatrawise.local"
      },
      {
        id: "guide-goa-2",
        name: "Neha Naik",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 88,
        experience: "4 years experience",
        languages: ["Konkani", "English", "Hindi"],
        specialities: ["Waterfalls", "Spice Plantations", "Secret Beaches"],
        pricePerDay: 850,
        availability: "Available for your dates",
        verified: true,
        bio: "Wildlife enthusiast and trekking leader for Dudhsagar and Netravali forests. Expert in coastal ecology and authentic Goan spices.",
        sampleContact: "neha.goa@yatrawise.local"
      },
      {
        id: "guide-goa-3",
        name: "Premanand Kamat",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 120,
        experience: "9 years experience",
        languages: ["Konkani", "Hindi", "Marathi", "English"],
        specialities: ["Local Food", "Nightlife", "Budget Navigation"],
        pricePerDay: 750,
        availability: "Available for your dates",
        verified: true,
        bio: "Local beach lover who knows every coastal shortcut, live music venue, and family-run seaside seafood taverna.",
        sampleContact: "prem.goa@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-goa-1",
        name: "Fisherman's Wharf Coastal Kitchen",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹350 / person",
        distance: "Near Panaji Riverside",
        cuisine: "Authentic Goan Seafood",
        specialtyDish: "Goan Fish Curry Rice with Rava Fried Kingfish",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Iconic Goan Staple",
        description: "Fresh catch of the day simmered in rich coconut milk, tart kokum, and ground Kashmiri red chillies."
      },
      {
        id: "food-goa-2",
        name: "Viva Panjim Heritage Taverna",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹250 / person",
        distance: "Fontainhas Latin Quarter",
        cuisine: "Goan-Portuguese Fusion",
        specialtyDish: "Pork Vindaloo & Bebinca Multi-layered Cake",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Heritage Recipe",
        description: "Classic slow-cooked fiery vindaloo in toddy vinegar served in a quaint 150-year-old Indo-Portuguese ancestral home."
      },
      {
        id: "food-goa-3",
        name: "Navtara Pure Vegetarian Coastal Mess",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹160 / person",
        distance: "Calangute Circle",
        cuisine: "Goan & South Indian Vegetarian",
        specialtyDish: "Alsande Tonak (Black-eyed pea curry) with Poi Bread",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Top Vegetarian Pick",
        description: "Flavorful Goan vegetarian curry cooked with roasted coconut and local spices served with fresh Goan wheat poi."
      },
      {
        id: "food-goa-4",
        name: "Curlies Beach Shack & Bakery",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        priceRange: "₹300 / person",
        distance: "Anjuna Beachfront",
        cuisine: "Continental, Woodfired Pizzas & Cocktails",
        specialtyDish: "Butter Garlic Prawns & Fresh Watermelon Cooler",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Sunset Shack Vibes",
        description: "Iconic beachfront shack with panoramic sunset views, chilled sea breezes, and wood-fired oven specialties."
      }
    ],
    aiLensData: [
      {
        id: "lens-goa-1",
        name: "Fort Aguada",
        confidence: "99.2% Match",
        type: "17th Century Portuguese Coastal Fort",
        period: "Constructed in 1612 AD by Portuguese Empire",
        rating: 4.8,
        entryFee: "₹25 Indian / ₹300 Foreigner",
        cameraFee: "Free",
        bestHours: "04:00 PM – 06:00 PM (Sunset silhouette)",
        crowdStatus: "Moderate",
        funFact: "The fort had a massive freshwater spring that provided 2,376,000 gallons of water to ships, giving it the name 'Aguada' (Watering place).",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-goa-2",
        name: "Basilica of Bom Jesus",
        confidence: "98.7% Match",
        type: "UNESCO Baroque Cathedral",
        period: "Completed 1605 AD",
        rating: 4.9,
        entryFee: "Free Entry",
        cameraFee: "Free (No flash inside)",
        bestHours: "09:00 AM – 11:00 AM",
        crowdStatus: "Moderate",
        funFact: "Contains the silver casket holding the incorrupt body of St. Francis Xavier, which has remained miraculously preserved for over 450 years.",
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-goa-3",
        name: "Dudhsagar Falls",
        confidence: "98.1% Match",
        type: "Tiered Mountain Waterfall",
        period: "Mandovi River Basin",
        rating: 4.9,
        entryFee: "₹100 Sanctuary Entry + ₹500 Jeep",
        cameraFee: "₹40",
        bestHours: "08:30 AM – 01:00 PM",
        crowdStatus: "High on weekends",
        funFact: "Translates to 'Sea of Milk' in Konkani due to the intense white frothy foam formed as water cascades over four tiers.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Konkani",
      languages: ["Konkani", "English", "Hindi"],
      phrases: [
        { english: "Hello / Good Day", local: "Deu boro dis dium", phonetic: "Dev boro dees di-um" },
        { english: "How are you?", local: "Tu koso asa?", phonetic: "Too ko-so a-sa?" },
        { english: "Where is the beach?", local: "Daryawelo vello kaim asa?", phonetic: "Dar-ya-ve-lo vel-lo ka-im a-sa?" },
        { english: "How much is this?", local: "Haka kitlem zata?", phonetic: "Ha-ka kit-lem za-ta?" },
        { english: "Is this fish fresh?", local: "Hem nustem tajeem asa?", phonetic: "Hem nus-tem ta-jeem a-sa?" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Walk along Baga Beach Sands", points: 20, done: true },
      { id: "b2", title: "Taste Authentic Goan Fish Curry", points: 15, done: true },
      { id: "b3", title: "Photograph Fort Aguada Lighthouse", points: 20, done: false },
      { id: "b4", title: "Visit Basilica of Bom Jesus", points: 15, done: false },
      { id: "b5", title: "Explore Latin Quarter Fontainhas", points: 15, done: false },
      { id: "b6", title: "Catch Arabian Sea Golden Sunset", points: 15, done: false }
    ],
    transportDefaults: {
      busOperator: "Kadamba Transport / KSRTC Airavat Club Class",
      trainName: "Goa Express / Mandovi Superfast Express",
      flightHub: "Dabolim Airport (GOI) / Mopa (GOX) + Coastal Taxi"
    },
    emergencyContacts: [
      { title: "National Emergency", number: "112", icon: "phone-call", desc: "Central Goa Emergency Response" },
      { title: "Goa Police Helpline", number: "100", icon: "shield", desc: "Panaji / Calangute Police Station (0832-2410540)" },
      { title: "Medical Ambulance", number: "108", icon: "activity", desc: "Goa Medical College & Hospital (GMC)" },
      { title: "Tourist Police Assistance", number: "1364", icon: "compass", desc: "Dedicated Goa Beach & Tourist Safety Desk" },
      { title: "Railway Helpline", number: "139", icon: "train", desc: "Konkan Railway 24/7 passenger assistance" }
    ]
  },

  "ooty": {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    tagline: "Queen of Hill Stations & Nilgiri Mountain Toy Train",
    coords: { lat: 11.4102, lng: 76.6950 },
    station: { code: "UAM", name: "Udagamandalam Railway Station", city: "Ooty", lat: 11.4064, lng: 76.6932 },
    interchangeStation: { code: "MTP", name: "Mettupalayam Junction", lat: 11.2990, lng: 76.9410 },
    airport: { code: "CJB", name: "Coimbatore International Airport (88 km away)" },
    altitude: "2,240 meters (7,350 ft) above sea level",
    bestSeason: "October to June",
    highlights: [
      "UNESCO World Heritage Nilgiri Mountain Toy Train steam journey",
      "Expansive 22-hectare Government Botanical Gardens with fossil trees",
      "Panoramic views from Doddabetta Peak (highest in Nilgiris at 8,650 ft)",
      "Serene boating on Ooty Lake and cascading waters of Pykara Falls"
    ],
    seasons: [
      { season: "Summer (Mar – Jun)", status: "⭐ Prime Best Time", temp: "15°C – 25°C", weather: "Delightfully cool, colorful flower shows, perfect hill weather.", crowd: "High", approxCost: "Peak seasonal rates" },
      { season: "Winter (Oct – Feb)", status: "Crisp & Chilly", temp: "5°C – 20°C", weather: "Chilly misty mornings, frost on meadows, roaring fireplace evenings.", crowd: "Moderate", approxCost: "Moderate rates" },
      { season: "Monsoon (Jul – Sep)", status: "Mist & Waterfalls", temp: "12°C – 18°C", weather: "Heavy mountain showers, lush green tea slopes, and cloud valleys.", crowd: "Low", approxCost: "Budget off-season rates" }
    ],
    travelTips: [
      "Book the Nilgiri Mountain Railway (Toy Train) 90 days in advance on IRCTC.",
      "Carry warm jackets and woolens; night temperatures frequently drop below 10°C.",
      "Purchase genuine homemade chocolates and single-estate Nilgiri tea directly from cooperative stores.",
      "Visit Doddabetta Peak before 10 AM before valley clouds and fog obstruct the telescope view."
    ],
    attractions: [
      {
        id: "act-ooty-1",
        title: "Nilgiri Mountain Railway Heritage Toy Train",
        time: "09:00 AM",
        type: "heritage",
        icon: "train",
        duration: "3.5 hours",
        cost: 205,
        rating: 4.9,
        bestTime: "Morning",
        crowd: "High",
        crowdLevel: "red",
        lat: 11.4064,
        lng: 76.6932,
        photo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
        description: "Historic steam rack-and-pinion locomotive chugging through 16 tunnels, 250 bridges, and sprawling tea estates."
      },
      {
        id: "act-ooty-2",
        title: "Government Botanical Garden & Fossil Tree",
        time: "11:30 AM",
        type: "nature",
        icon: "trees",
        duration: "2 hours",
        cost: 40,
        rating: 4.7,
        bestTime: "Midday",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 11.4172,
        lng: 76.7112,
        photo: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
        description: "Lush 55-acre terraced garden established in 1848, featuring over 1,000 species of exotic flora and a 20-million-year-old fossilized tree trunk."
      },
      {
        id: "act-ooty-3",
        title: "Doddabetta Peak & Telescope House",
        time: "02:30 PM",
        type: "nature",
        icon: "mountain",
        duration: "1.5 hours",
        cost: 20,
        rating: 4.8,
        bestTime: "Early Afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 11.4011,
        lng: 76.7364,
        photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        description: "Highest vantage point in the Nilgiri mountains (2,637m) offering breathtaking views of Mysore plateau and Coimbatore plains."
      },
      {
        id: "act-ooty-4",
        title: "Pykara Waterfalls & Speedboat Lake",
        time: "09:30 AM",
        type: "nature",
        icon: "droplets",
        duration: "2.5 hours",
        cost: 175,
        rating: 4.8,
        bestTime: "Morning",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 11.4550,
        lng: 76.6000,
        photo: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        description: "Sacred Toda river cascading in two separate falls through dense pine forests, followed by tranquil lake boating."
      },
      {
        id: "act-ooty-5",
        title: "Ooty Lake Boating & Eucalyptus Forest",
        time: "04:30 PM",
        type: "leisure",
        icon: "compass",
        duration: "1.5 hours",
        cost: 250,
        rating: 4.6,
        bestTime: "Late afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 11.4080,
        lng: 76.6850,
        photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        description: "Artificial lake constructed in 1824 fringed by towering eucalyptus trees with pedal and row boats."
      },
      {
        id: "act-ooty-6",
        title: "Government Rose Garden (India's Largest)",
        time: "10:30 AM",
        type: "nature",
        icon: "sun",
        duration: "1.5 hours",
        cost: 40,
        rating: 4.8,
        bestTime: "Morning",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 11.4055,
        lng: 76.7090,
        photo: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80",
        description: "Sprawling 10-acre curved terrace showcasing more than 20,000 varieties of roses in vivid colors."
      }
    ],
    stays: [
      {
        id: "stay-ooty-1",
        name: "Pine View Colonial Cottage",
        category: "Budget Heritage 💰",
        pricePerNight: 850,
        rating: 4.7,
        reviewsCount: 130,
        distance: "1 km from Ooty Lake",
        amenities: ["Fireplace", "Hot Water Geyser", "Homemade Nilgiri Tea", "Lawn Garden", "Free Wi-Fi"],
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Cozy British-era bungalow with wood-burning fireplace and morning hill views.",
        owner: { name: "David Rajan", phone: "+91 94XXX XXXXX", speaks: "Tamil, English", experience: "Host since 2016" },
        lat: 11.4120,
        lng: 76.6900
      },
      {
        id: "stay-ooty-2",
        name: "Nilgiri Mountain Tea Estate Stay",
        category: "Tea Garden Views 📍",
        pricePerNight: 1500,
        rating: 4.8,
        reviewsCount: 215,
        distance: "Surrounded by Tea Slopes",
        amenities: ["Tea Tasting", "Balcony Valley View", "Campfire", "South Indian Meals", "Nature Walks"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended for scenery",
        recommendationReason: "Directly located inside a working tea plantation with birdsong mornings.",
        owner: { name: "Meena Chandran", phone: "+91 98XXX XXXXX", speaks: "Tamil, English, Malayalam", experience: "Estate host" },
        lat: 11.4250,
        lng: 76.7150
      },
      {
        id: "stay-ooty-3",
        name: "Fernhills Royal Palace Heritage Resort",
        category: "Royal Heritage ⭐",
        pricePerNight: 3200,
        rating: 4.9,
        reviewsCount: 190,
        distance: "Fernhill Estate",
        amenities: ["Maharaja Suites", "Cedar Ballroom", "Horse Riding", "English High Tea", "Fireplace in all rooms"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Historic Luxury",
        recommendationReason: "Former summer palace of the Maharaja of Mysore built in 1844 on a 50-acre private estate.",
        owner: { name: "K. R. Varma", phone: "+91 99XXX XXXXX", speaks: "English, Tamil, Kannada", experience: "Palace hospitality" },
        lat: 11.3980,
        lng: 76.6870
      }
    ],
    guides: [
      {
        id: "guide-ooty-1",
        name: "Karthik Subramanian",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 150,
        experience: "8 years experience",
        languages: ["Tamil", "English", "Malayalam", "Hindi"],
        specialities: ["Trekking", "Toda Tribal Culture", "Tea Estate History"],
        pricePerDay: 850,
        availability: "Available for your dates",
        verified: true,
        bio: "Local Nilgiris naturalist who conducts walking tours through Toda tribal hamlets and secret pine forest ridges.",
        sampleContact: "karthik.ooty@yatrawise.local"
      },
      {
        id: "guide-ooty-2",
        name: "Ananya Pillai",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 92,
        experience: "5 years experience",
        languages: ["Tamil", "English"],
        specialities: ["Birdwatching", "Botanical Walks", "Photography"],
        pricePerDay: 900,
        availability: "Available for your dates",
        verified: true,
        bio: "Certified botanist passionate about endemic Western Ghats birds and colonial British architecture.",
        sampleContact: "ananya.ooty@yatrawise.local"
      },
      {
        id: "guide-ooty-3",
        name: "Ramesh Kannan",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 115,
        experience: "6 years experience",
        languages: ["Tamil", "Hindi", "Kannada"],
        specialities: ["Budget Sightseeing", "Toy Train Bookings", "Local Eateries"],
        pricePerDay: 700,
        availability: "Available for your dates",
        verified: true,
        bio: "Friendly local driver-cum-guide who ensures you never miss a scenic hairpin bend or warm plate of hot vadas.",
        sampleContact: "ramesh.ooty@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-ooty-1",
        name: "King Star Homemade Chocolates & Bakery",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹180 / person",
        distance: "Commercial Road",
        cuisine: "Confectionery & Bakery",
        specialtyDish: "Rum & Raisin Dark Chocolate, Almond Fudge & Tea Buns",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Ooty Heritage Chocolatier",
        description: "Operating since 1942, handcrafting over 40 varieties of rich Nilgiri chocolates using pure cocoa butter."
      },
      {
        id: "food-ooty-2",
        name: "Junior Kuppanna South Indian Mess",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹220 / person",
        distance: "Near Bus Terminal",
        cuisine: "Kongu & Chettinad Cuisine",
        specialtyDish: "Kongu Country Chicken Curry & Mutton Biryani on Banana Leaf",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Authentic Regional Flavor",
        description: "Aromatic slow-cooked spicy gravies, steaming hot parottas, and traditional banana leaf service."
      },
      {
        id: "food-ooty-3",
        name: "Shinkows Chinese Heritage Restaurant",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹280 / person",
        distance: "Commissioner's Road",
        cuisine: "Traditional Cantonese & Hakka",
        specialtyDish: "Hot Garlic Steamed Dumplings & Sweet Corn Soup",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Cozy Hill Classic",
        description: "Opened by Chinese emigrants in 1954, serving comforting hot noodles and soups perfect for chilly Ooty nights."
      },
      {
        id: "food-ooty-4",
        name: "Nilgiri Tea Board Cafe",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹60 / cup",
        distance: "Near Botanical Garden Gate",
        cuisine: "Tea Lounge & Snacks",
        specialtyDish: "Orange Pekoe Black Tea & Crispy Mirchi Bajjis",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Fresh From Slopes",
        description: "Freshly brewed single-origin orthodox black and green teas directly harvested from high-elevation Nilgiri estates."
      }
    ],
    aiLensData: [
      {
        id: "lens-ooty-1",
        name: "Nilgiri Mountain Railway (Toy Train)",
        confidence: "99.4% Match",
        type: "UNESCO World Heritage Mountain Rail",
        period: "Completed 1908 AD",
        rating: 4.9,
        entryFee: "₹205 First Class",
        cameraFee: "Free",
        bestHours: "09:00 AM – 12:00 PM",
        crowdStatus: "High",
        funFact: "India's only rack-and-pinion railway system climbing 4,100 feet over a distance of 46 kilometers.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-ooty-2",
        name: "Doddabetta Peak",
        confidence: "98.2% Match",
        type: "Mountain Summit Viewpoint",
        period: "Highest peak in Nilgiris",
        rating: 4.8,
        entryFee: "₹20",
        cameraFee: "₹20",
        bestHours: "08:30 AM – 10:30 AM",
        crowdStatus: "Moderate",
        funFact: "Stands at 2,637 meters (8,650 ft). The summit house features two telescopes offering views across three states.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-ooty-3",
        name: "Pykara Waterfalls",
        confidence: "97.6% Match",
        type: "Sacred Cascade & Forest Reservoir",
        period: "Sacred to Toda tribe",
        rating: 4.8,
        entryFee: "₹30 Entry + Boat Fee",
        cameraFee: "₹20",
        bestHours: "10:00 AM – 02:00 PM",
        crowdStatus: "Moderate",
        funFact: "Revered by the indigenous Toda people as their sacred goddess river flowing down in two tiered drops of 55m and 61m.",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Tamil",
      languages: ["Tamil", "English", "Hindi"],
      phrases: [
        { english: "Hello / Greetings", local: "Vanakkam", phonetic: "Va-nak-kam" },
        { english: "Where is the toy train station?", local: "Toy train station engay irukku?", phonetic: "Toy train station eng-gay i-ruk-ku?" },
        { english: "How much is this tea?", local: "Indha tea evvalavu?", phonetic: "In-dha tea ev-va-la-vu?" },
        { english: "Is it cold today?", local: "Innaiku kuliraa irukka?", phonetic: "In-nai-ku ku-li-raa i-ruk-ka?" },
        { english: "Please call emergency help", local: "Dayavuseidhu udhavi kooppidungal!", phonetic: "Da-ya-vu-sei-dhu ud-ha-vi koop-pi-dung-gal!" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Ride the Nilgiri Mountain Toy Train", points: 25, done: true },
      { id: "b2", title: "Taste Authentic Ooty Handmade Chocolates", points: 15, done: true },
      { id: "b3", title: "Stand on Top of Doddabetta Peak", points: 20, done: false },
      { id: "b4", title: "Boating on Misty Ooty Lake", points: 15, done: false },
      { id: "b5", title: "Sip Fresh Nilgiri Orthodox Black Tea", points: 10, done: false },
      { id: "b6", title: "Walk through Government Botanical Garden", points: 15, done: false }
    ],
    transportDefaults: {
      busOperator: "KSRTC Airavat / SETC Ultra Deluxe",
      trainName: "Nilgiri Mountain Express (Mettupalayam ➔ Ooty)",
      flightHub: "Coimbatore (CJB) Airport + 3h Mountain Taxi"
    },
    emergencyContacts: [
      { title: "National Emergency", number: "112", icon: "phone-call", desc: "Central Nilgiris Emergency" },
      { title: "Ooty Police Helpline", number: "100", icon: "shield", desc: "Ooty Town Police (0423-2442222)" },
      { title: "Government Hospital Ooty", number: "108", icon: "activity", desc: "District Headquarters Hospital, Hospital Road" },
      { title: "Tourist Information Centre", number: "0423-2443977", icon: "compass", desc: "Tamil Nadu Tourism (TTDC) Ooty" },
      { title: "Railway Helpline", number: "139", icon: "train", desc: "Southern Railway 24/7 passenger assistance" }
    ]
  },

  "jaipur": {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City of Fortresses, Royal Palaces & Rich Heritage",
    coords: { lat: 26.9124, lng: 75.7873 },
    station: { code: "JP", name: "Jaipur Junction", city: "Jaipur", lat: 26.9196, lng: 75.7878 },
    interchangeStation: { code: "GADJ", name: "Gandhinagar Jaipur", lat: 26.8833, lng: 75.8000 },
    airport: { code: "JAI", name: "Jaipur International Airport (12 km away)" },
    altitude: "431 meters (1,414 ft) above sea level",
    bestSeason: "October to March",
    highlights: [
      "Majestic hilltop Amber Fort with Sheesh Mahal mirror palace",
      "Iconic 953-casement Hawa Mahal (Palace of Winds)",
      "City Palace and Jantar Mantar (world's largest stone sundial)",
      "Authentic Rajasthani village experience and cuisine at Chokhi Dhani"
    ],
    seasons: [
      { season: "Winter (Oct – Mar)", status: "⭐ Prime Best Time", temp: "8°C – 24°C", weather: "Chilly crisp mornings, warm sunny afternoons, ideal for fort walking.", crowd: "High", approxCost: "Peak seasonal rates" },
      { season: "Monsoon (Jul – Sep)", status: "Pleasant & Green", temp: "24°C – 32°C", weather: "Monsoon showers wash the pink terracotta city; Aravalli hills turn lush.", crowd: "Moderate", approxCost: "Moderate rates" },
      { season: "Summer (Apr – Jun)", status: "Hot Desert Sun", temp: "28°C – 43°C", weather: "Very hot during midday. Sightseeing best done early morning.", crowd: "Low", approxCost: "Budget summer discounts" }
    ],
    travelTips: [
      "Buy the Jaipur Composite Ticket (Amber, Hawa Mahal, Jantar Mantar, Nahargarh) to save entry fees.",
      "Arrive at Amber Fort before 09:30 AM to avoid crowds and afternoon heat.",
      "Bargain politely at Johari Bazaar for blue pottery, block print textiles, and lac bangles.",
      "Experience royal heritage by dining on Dal Baati Churma with pure desi ghee."
    ],
    attractions: [
      {
        id: "act-jaipur-1",
        title: "Amber Fort & Sheesh Mahal Mirror Palace",
        time: "09:00 AM",
        type: "heritage",
        icon: "shield",
        duration: "3 hours",
        cost: 100,
        rating: 4.9,
        bestTime: "Morning",
        crowd: "High",
        crowdLevel: "red",
        lat: 26.9855,
        lng: 75.8513,
        photo: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
        description: "Opulent 16th-century fortress of red sandstone and marble overlooking Maota Lake, famous for its hall of mirrors."
      },
      {
        id: "act-jaipur-2",
        title: "Hawa Mahal (Palace of Winds)",
        time: "01:30 PM",
        type: "heritage",
        icon: "landmark",
        duration: "1 hour",
        cost: 50,
        rating: 4.8,
        bestTime: "Early Afternoon / Sunrise",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 26.9239,
        lng: 75.8267,
        photo: "https://images.unsplash.com/photo-1603204077693-0182ec7dc5dc?auto=format&fit=crop&w=600&q=80",
        description: "Extraordinary five-story pink honeycomb facade built in 1799 with 953 jharokhas designed for royal ladies to view street festivals."
      },
      {
        id: "act-jaipur-3",
        title: "City Palace & Royal Armory Museum",
        time: "03:00 PM",
        type: "heritage",
        icon: "home",
        duration: "2 hours",
        cost: 200,
        rating: 4.8,
        bestTime: "Afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 26.9258,
        lng: 75.8236,
        photo: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=600&q=80",
        description: "Magnificent complex blending Rajput, Mughal, and European architecture; home to the Jaipur royal family and antique museum."
      },
      {
        id: "act-jaipur-4",
        title: "Jantar Mantar Astronomical Observatory",
        time: "11:30 AM",
        type: "heritage",
        icon: "compass",
        duration: "1.5 hours",
        cost: 50,
        rating: 4.7,
        bestTime: "Midday (Sun dial accuracy)",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 26.9248,
        lng: 75.8246,
        photo: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80",
        description: "UNESCO World Heritage Site with 19 architectural astronomical instruments built by King Sawai Jai Singh II in 1734."
      },
      {
        id: "act-jaipur-5",
        title: "Nahargarh Fort Sunset Viewpoint",
        time: "05:00 PM",
        type: "nature",
        icon: "camera",
        duration: "2 hours",
        cost: 50,
        rating: 4.9,
        bestTime: "Sunset",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 26.9374,
        lng: 75.8156,
        photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        description: "Perched on the rugged Aravalli ridge, offering the most spectacular panoramic sunset views of the entire Pink City skyline."
      },
      {
        id: "act-jaipur-6",
        title: "Chokhi Dhani Cultural Village & Dinner",
        time: "07:30 PM",
        type: "entertainment",
        icon: "utensils",
        duration: "3 hours",
        cost: 950,
        rating: 4.8,
        bestTime: "Evening",
        crowd: "High",
        crowdLevel: "red",
        lat: 26.7667,
        lng: 75.8333,
        photo: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
        description: "Award-winning ethnic village resort featuring puppet shows, fire dancers, camel rides, and grand traditional royal thali feasts."
      }
    ],
    stays: [
      {
        id: "stay-jaipur-1",
        name: "Kalyan Heritage Haveli",
        category: "Budget Haveli 💰",
        pricePerNight: 900,
        rating: 4.7,
        reviewsCount: 180,
        distance: "1.5 km from Jaipur Station",
        amenities: ["Rooftop Restaurant", "AC Rooms", "Free Wi-Fi", "Rajasthani Decor", "Travel Desk"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Clean traditional Haveli with rooftop fort views and friendly local host family.",
        owner: { name: "Bhanwar Singh Rathore", phone: "+91 94XXX XXXXX", speaks: "Hindi, English, Rajasthani", experience: "Host since 2012" },
        lat: 26.9150,
        lng: 75.7900
      },
      {
        id: "stay-jaipur-2",
        name: "Shahpura House Heritage Hotel",
        category: "Royal Heritage 📍",
        pricePerNight: 1800,
        rating: 4.8,
        reviewsCount: 290,
        distance: "Bani Park",
        amenities: ["Swimming Pool", "Fresco Murals", "Courtyard Dining", "Spa Services", "Free Parking"],
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended heritage stay",
        recommendationReason: "200-year-old restored royal residence featuring hand-painted frescoes and marble courtyards.",
        owner: { name: "Digvijay Singh", phone: "+91 98XXX XXXXX", speaks: "Hindi, English", experience: "Heritage hospitality" },
        lat: 26.9280,
        lng: 75.7920
      },
      {
        id: "stay-jaipur-3",
        name: "Rambagh Palace (The Jewel of Jaipur)",
        category: "Luxury Grand Palace ⭐",
        pricePerNight: 4500,
        rating: 4.9,
        reviewsCount: 420,
        distance: "Bhawani Singh Road",
        amenities: ["47 Acres Palace Gardens", "Butler Service", "Jiva Grand Spa", "Fine Dining Polo Lounge", "Peacock Courtyard"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "World's Best Hotel",
        recommendationReason: "Former residence of the Maharaja of Jaipur, ranked repeatedly among the world's most luxurious palace hotels.",
        owner: { name: "Taj Palace Management", phone: "+91 99XXX XXXXX", speaks: "English, Hindi, French", experience: "Palace heritage" },
        lat: 26.8980,
        lng: 75.8080
      }
    ],
    guides: [
      {
        id: "guide-jaipur-1",
        name: "Vikram Singh Rathore",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 195,
        experience: "10 years experience",
        languages: ["Hindi", "English", "Rajasthani"],
        specialities: ["Amber Fort Lore", "Rajput Dynasties", "Palace Architecture"],
        pricePerDay: 900,
        availability: "Available for your dates",
        verified: true,
        bio: "Government-licensed Rajasthan Tourism guide with royal lineage storytelling. Specializes in secret fort tunnels and architectural marvels.",
        sampleContact: "vikram.jaipur@yatrawise.local"
      },
      {
        id: "guide-jaipur-2",
        name: "Pooja Shekhawat",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 110,
        experience: "6 years experience",
        languages: ["Hindi", "English", "French"],
        specialities: ["Bazaar Shopping", "Handicrafts", "Photography"],
        pricePerDay: 850,
        availability: "Available for your dates",
        verified: true,
        bio: "Textile designer and heritage walking tour leader. Guides travelers safely through ancient Johari Bazaar jewelers and spice alleys.",
        sampleContact: "pooja.jaipur@yatrawise.local"
      },
      {
        id: "guide-jaipur-3",
        name: "Mahesh Sharma",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 140,
        experience: "8 years experience",
        languages: ["Hindi", "English"],
        specialities: ["Astronomy & Jantar Mantar", "Food Walks", "Budget Tips"],
        pricePerDay: 750,
        availability: "Available for your dates",
        verified: true,
        bio: "Science enthusiast and astronomer. Explains the exact mathematical genius behind Jantar Mantar and takes you to Jaipur's oldest lassi shops.",
        sampleContact: "mahesh.jaipur@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-jaipur-1",
        name: "Laxmi Mishthan Bhandar (LMB)",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹250 / person",
        distance: "Johari Bazaar",
        cuisine: "Authentic Rajasthani Vegetarian",
        specialtyDish: "Special Rajasthani Dal Baati Churma Thali & Ghewar",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Centuries-Old Institution",
        description: "Operating since 1727 in the walled city. Famous worldwide for crisp baatis drowned in ghee and melt-in-mouth paneer ghewar."
      },
      {
        id: "food-jaipur-2",
        name: "Rawat Mishthan Bhandar",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹80 / person",
        distance: "Station Road",
        cuisine: "Snacks & Sweets",
        specialtyDish: "Steaming Hot Pyaaz Kachori & Mawa Kachori",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Legendary Breakfast",
        description: "Golden flaky pastry stuffed with spicy caramelised onion filling. The undisputed breakfast champion of Rajasthan."
      },
      {
        id: "food-jaipur-3",
        name: "Lassiwala (Original since 1944)",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹60 / clay kulhad",
        distance: "MI Road",
        cuisine: "Beverages & Dairy",
        specialtyDish: "Thick Creamy Sweet Lassi in Earthen Kulhad",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Must-Visit Landmark",
        description: "Hand-churned creamy thick yoghurt served chilled in clay cups topped with a thick layer of golden malai cream."
      },
      {
        id: "food-jaipur-4",
        name: "Handi Restaurant (Maya Mansion)",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹350 / person",
        distance: "MI Road",
        cuisine: "Royal Mughlai & Rajasthani Non-Veg",
        specialtyDish: "Handi Laal Maas (Fiery Mathania Chili Mutton Curry)",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Royal Meat Curry",
        description: "Tender lamb cooked in earthenware handi infused with fiery Rajasthani Mathania red chilies, garlic, and clove smoke."
      }
    ],
    aiLensData: [
      {
        id: "lens-jaipur-1",
        name: "Hawa Mahal",
        confidence: "99.6% Match",
        type: "Royal Rajput Architectural Landmark",
        period: "Built in 1799 by Maharaja Sawai Pratap Singh",
        rating: 4.8,
        entryFee: "₹50 Indian / ₹200 Foreigner",
        cameraFee: "Free",
        bestHours: "07:00 AM – 09:00 AM (Golden sunrise illumination)",
        crowdStatus: "Moderate",
        funFact: "Constructed in the shape of the crown of Lord Krishna. Its 953 miniature casements create a natural air conditioning Venturi effect.",
        image: "https://images.unsplash.com/photo-1603204077693-0182ec7dc5dc?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-jaipur-2",
        name: "Amber Fort (Amer)",
        confidence: "99.1% Match",
        type: "Hilltop Rajput Fortress",
        period: "Commenced 1592 by Raja Man Singh I",
        rating: 4.9,
        entryFee: "₹100 Indian / ₹500 Foreigner",
        cameraFee: "₹50",
        bestHours: "09:00 AM – 11:30 AM",
        crowdStatus: "High",
        funFact: "The Sheesh Mahal (Mirror Palace) was engineered so that a single lit candle could illuminate the entire royal chamber through convex Belgian mirrors.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-jaipur-3",
        name: "Jantar Mantar",
        confidence: "98.4% Match",
        type: "UNESCO Stone Astrological Observatory",
        period: "1734 AD",
        rating: 4.7,
        entryFee: "₹50",
        cameraFee: "₹50",
        bestHours: "12:00 PM (Solar noon shadow)",
        crowdStatus: "Moderate",
        funFact: "Houses the Vrihat Samrat Yantra, the world's largest stone sundial, measuring 27 meters high and accurate to within 2 seconds.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Hindi",
      languages: ["Hindi", "English"],
      phrases: [
        { english: "Hello / Welcome", local: "Khamma Ghani / Namaste", phonetic: "Kham-ma Gha-ni" },
        { english: "Where is Hawa Mahal?", local: "Hawa Mahal kis taraf hai?", phonetic: "Ha-wa Ma-hal kis ta-raf hai?" },
        { english: "How much does this cost?", local: "Yeh kitne ka hai?", phonetic: "Yeh kit-ne ka hai?" },
        { english: "Please reduce the price a bit", local: "Thoda kam keejiye na", phonetic: "Tho-da kam kee-ji-ye na" },
        { english: "Where is the nearest police station?", local: "Nazdeeki police thana kahan hai?", phonetic: "Naz-dee-ki po-lice tha-na ka-han hai?" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Photograph Hawa Mahal's 953 Windows", points: 20, done: true },
      { id: "b2", title: "Eat Pyaaz Kachori with Mint Chutney", points: 15, done: true },
      { id: "b3", title: "Marvel at Amber Fort's Sheesh Mahal", points: 20, done: false },
      { id: "b4", title: "Drink Creamy Lassi from Lassiwala", points: 15, done: false },
      { id: "b5", title: "Watch Sunset from Nahargarh Fort", points: 20, done: false },
      { id: "b6", title: "Shop for Blue Pottery in Johari Bazaar", points: 10, done: false }
    ],
    transportDefaults: {
      busOperator: "RSRTC Super Deluxe Airavat Volvo",
      trainName: "Jaipur Superfast Express / Vande Bharat Express",
      flightHub: "Jaipur International Airport (JAI) + Pre-paid Cab"
    },
    emergencyContacts: [
      { title: "National Emergency", number: "112", icon: "phone-call", desc: "24/7 Central Emergency Hotline" },
      { title: "Jaipur Police Control", number: "100", icon: "shield", desc: "Walled City Police Station (0141-2602333)" },
      { title: "SMS Medical Hospital", number: "108", icon: "activity", desc: "Sawai Man Singh (SMS) Hospital, JLN Marg" },
      { title: "Rajasthan Tourism Help", number: "0141-2822800", icon: "compass", desc: "Official Department of Tourism, Jaipur" },
      { title: "Railway Helpline", number: "139", icon: "train", desc: "North Western Railway 24/7 assistance" }
    ]
  },

  "kerala": {
    id: "kerala",
    name: "Kerala (Munnar)",
    state: "Kerala",
    tagline: "God's Own Country, Tea Highlands & Backwater Serenity",
    coords: { lat: 10.0889, lng: 77.0595 },
    station: { code: "ERS", name: "Ernakulam Junction (Kochi)", city: "Kochi", lat: 9.9723, lng: 76.2878 },
    interchangeStation: { code: "AWY", name: "Aluva Railway Station (Nearest to Munnar)", lat: 10.1076, lng: 76.3533 },
    airport: { code: "COK", name: "Cochin International Airport (110 km from Munnar)" },
    altitude: "1,600 meters (5,200 ft) above sea level",
    bestSeason: "September to March",
    highlights: [
      "Vast rolling emerald green tea plantations of KDHP & Tata Tea",
      "Eravikulam National Park (home to the endangered Nilgiri Tahr mountain goat)",
      "Mattupetty Dam lake boating and Echo Point acoustic valley",
      "Traditional Kathakali classical dance and Kalaripayattu martial arts shows"
    ],
    seasons: [
      { season: "Winter (Oct – Feb)", status: "⭐ Prime Best Time", temp: "10°C – 22°C", weather: "Chilly crisp hill climate, blanket mist, emerald valleys.", crowd: "High", approxCost: "Peak seasonal rates" },
      { season: "Monsoon (Jun – Sep)", status: "Ayurveda & Waterfalls", temp: "18°C – 25°C", weather: "Dramatic monsoon showers, surging Cheeyappara waterfalls, ideal for Ayurvedic wellness.", crowd: "Low", approxCost: "Discounted off-peak rates" },
      { season: "Summer (Mar – May)", status: "Cool Mountain Refuge", temp: "15°C – 28°C", weather: "Pleasantly mild while plains are hot. Great for trekking.", crowd: "Moderate", approxCost: "Standard rates" }
    ],
    travelTips: [
      "Book Eravikulam National Park safari permits online in advance on the forest department portal.",
      "Carry umbrellas and rain jackets; weather in Munnar shifts quickly between sunshine and mist.",
      "Buy fresh spices (cardamom, cinnamon, pepper) directly from Spice Garden outlets.",
      "Experience an authentic Kerala Sadhya on a fresh plantain leaf."
    ],
    attractions: [
      {
        id: "act-kerala-1",
        title: "Eravikulam National Park & Nilgiri Tahr Safari",
        time: "08:30 AM",
        type: "nature",
        icon: "trees",
        duration: "3 hours",
        cost: 200,
        rating: 4.9,
        bestTime: "Morning",
        crowd: "High",
        crowdLevel: "red",
        lat: 10.2000,
        lng: 77.0667,
        photo: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
        description: "Sanctuary for the rare Nilgiri Tahr, rolling grasslands, and view of Anamudi (South India's highest peak at 2,695m)."
      },
      {
        id: "act-kerala-2",
        title: "Mattupetty Dam & Speedboating",
        time: "12:30 PM",
        type: "leisure",
        icon: "droplets",
        duration: "1.5 hours",
        cost: 150,
        rating: 4.7,
        bestTime: "Midday",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 10.1060,
        lng: 77.1235,
        photo: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        description: "Gravity masonry dam surrounded by tea plantations and tranquil lake with thrilling speedboats."
      },
      {
        id: "act-kerala-3",
        title: "Tea Museum & CTC Tea Factory Tour",
        time: "03:00 PM",
        type: "heritage",
        icon: "coffee",
        duration: "1.5 hours",
        cost: 125,
        rating: 4.8,
        bestTime: "Afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 10.0890,
        lng: 77.0580,
        photo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        description: "Tata Tea museum tracing the history of century-old tea processing from plucking to drying and grading."
      },
      {
        id: "act-kerala-4",
        title: "Echo Point Natural Acoustic Valley",
        time: "04:30 PM",
        type: "nature",
        icon: "compass",
        duration: "1 hour",
        cost: 30,
        rating: 4.6,
        bestTime: "Late afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 10.1250,
        lng: 77.1400,
        photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        description: "Confluence of three mountain streams where natural acoustics return your voice reverberating through misty green hills."
      }
    ],
    stays: [
      {
        id: "stay-kerala-1",
        name: "Misty Valley Cardamom Homestay",
        category: "Budget Plantation 💰",
        pricePerNight: 950,
        rating: 4.8,
        reviewsCount: 110,
        distance: "2 km from Munnar Town",
        amenities: ["Free Wi-Fi", "Homemade Kerala Appams", "Balcony Tea View", "Hot Geyser", "Spice Garden Tour"],
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Set inside a family-owned cardamom and coffee garden with home-cooked Malabar breakfast.",
        owner: { name: "Babu & Shanti Thomas", phone: "+91 94XXX XXXXX", speaks: "Malayalam, English, Tamil", experience: "Host since 2018" },
        lat: 10.0850,
        lng: 77.0620
      },
      {
        id: "stay-kerala-2",
        name: "Tea Valley Heritage Resort",
        category: "Tea Hills View 📍",
        pricePerNight: 1750,
        rating: 4.8,
        reviewsCount: 240,
        distance: "Surrounded by Tea Slopes",
        amenities: ["Valley View Cottages", "Bonfire", "Ayurvedic Massages", "Mountain Trekking Desk", "Restaurant"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended for views",
        recommendationReason: "Unmatched sunrise panoramas over rolling tea carpets and early morning mist.",
        owner: { name: "Mathew Varghese", phone: "+91 98XXX XXXXX", speaks: "Malayalam, English, Hindi", experience: "Resort manager" },
        lat: 10.0920,
        lng: 77.0700
      },
      {
        id: "stay-kerala-3",
        name: "The Windflower Luxury Spa & Resort",
        category: "Premium Wellness ⭐",
        pricePerNight: 3100,
        rating: 4.9,
        reviewsCount: 185,
        distance: "Chithirapuram",
        amenities: ["Infinity Hill Pool", "Panchakarma Ayurvedic Spa", "Private Villa Balconies", "Organic Dining", "Birding Tours"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Luxury Wellness",
        recommendationReason: "Perched high on the cliffside offering authentic Ayurvedic rejuvenation and world-class luxury.",
        owner: { name: "Windflower Hospitality", phone: "+91 99XXX XXXXX", speaks: "English, Hindi, Malayalam", experience: "Wellness hoteliers" },
        lat: 10.0450,
        lng: 77.0120
      }
    ],
    guides: [
      {
        id: "guide-kerala-1",
        name: "Gopakumar Nair",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 165,
        experience: "9 years experience",
        languages: ["Malayalam", "English", "Tamil", "Hindi"],
        specialities: ["Trekking", "Wildlife Tracking", "Spice Identification"],
        pricePerDay: 850,
        availability: "Available for your dates",
        verified: true,
        bio: "Registered Kerala Forest Department eco-tourism guide. Led hundreds of successful wildlife expeditions through high-altitude shola forests.",
        sampleContact: "gopu.kerala@yatrawise.local"
      },
      {
        id: "guide-kerala-2",
        name: "Deepa Menon",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 95,
        experience: "5 years experience",
        languages: ["Malayalam", "English"],
        specialities: ["Tea Culture", "Ayurvedic Herbs", "Photography"],
        pricePerDay: 800,
        availability: "Available for your dates",
        verified: true,
        bio: "Agricultural botanist and tea master. Shows travelers how orthodox teas are handcrafted and identifies indigenous medicinal plants.",
        sampleContact: "deepa.kerala@yatrawise.local"
      },
      {
        id: "guide-kerala-3",
        name: "Sujith Kurian",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 130,
        experience: "7 years experience",
        languages: ["Malayalam", "Hindi", "Tamil"],
        specialities: ["Budget Cab Connections", "Hidden Waterfalls", "Local Shacks"],
        pricePerDay: 750,
        availability: "Available for your dates",
        verified: true,
        bio: "Expert hill navigator with warm hospitality. Ensures your travel from Kochi to Munnar is packed with scenic roadside tea stops.",
        sampleContact: "sujith.kerala@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-kerala-1",
        name: "Saravana Kerala Banana Leaf Mess",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹180 / person",
        distance: "Munnar Town Centre",
        cuisine: "Authentic Kerala Sadhya",
        specialtyDish: "Full Kerala Banana Leaf Sadhya (Avial, Sambar, Payasam)",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Traditional Feast",
        description: "Grand traditional feast featuring red matta rice, avial, thoran, olan, crispy banana chips, and warm jaggery payasam."
      },
      {
        id: "food-kerala-2",
        name: "Rapsy Restaurant (Hill Icon)",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹150 / person",
        distance: "Main Bazaar",
        cuisine: "Kerala & Parotta Corner",
        specialtyDish: "Flaky Malabar Parotta with Kerala Beef/Chicken Roast",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Budget Favorite",
        description: "Famous cozy diner known for hot layered flaky Malabar parottas served with spicy coconut-roasted meat gravy."
      },
      {
        id: "food-kerala-3",
        name: "Cloud 9 High Altitude Coffee Lounge",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹90 / cup",
        distance: "Top Station Road",
        cuisine: "Hot Beverages & Spiced Bakes",
        specialtyDish: "Single-Estate Cardamom Spiced Tea & Banana Fritters (Pazham Pori)",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Tea & Fritters",
        description: "Crispy sweet golden batter-fried ripe bananas paired with freshly crushed cardamom mountain tea."
      },
      {
        id: "food-kerala-4",
        name: "Al-Bake Charcoal Kitchen",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
        priceRange: "₹240 / person",
        distance: "Near KSRTC Stand",
        cuisine: "Tandoori & Kerala Seafood",
        specialtyDish: "Karimeen Pollichathu (Pearl Spot Fish in Banana Leaf)",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Coastal Classic",
        description: "Pearl spot fish marinated in spicy shallots and ginger, wrapped in wilted plantain leaf and pan-roasted over charcoal."
      }
    ],
    aiLensData: [
      {
        id: "lens-kerala-1",
        name: "Eravikulam National Park",
        confidence: "99.3% Match",
        type: "High-Altitude Shola Reserve",
        period: "Established 1978",
        rating: 4.9,
        entryFee: "₹200",
        cameraFee: "₹50",
        bestHours: "08:30 AM – 11:00 AM",
        crowdStatus: "High",
        funFact: "Home to the largest surviving wild population of the endangered Nilgiri Tahr mountain goat and the blooming Neelakurinji flower that blossoms once every 12 years.",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-kerala-2",
        name: "Mattupetty Dam",
        confidence: "98.5% Match",
        type: "Gravity Masonry Dam & Reservoir",
        period: "Constructed in 1953 AD",
        rating: 4.7,
        entryFee: "₹10 Dam Entry",
        cameraFee: "Free",
        bestHours: "11:00 AM – 03:00 PM",
        crowdStatus: "Moderate",
        funFact: "Wild elephant herds frequently emerge from the dense forests at dusk to drink and bathe in the tranquil reservoir waters.",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-kerala-3",
        name: "Munnar Tea Estates",
        confidence: "99.5% Match",
        type: "High-Elevation Tea Plantation",
        period: "Pioneered in 1870s",
        rating: 4.9,
        entryFee: "Free Slopes / ₹125 Museum",
        cameraFee: "Free",
        bestHours: "04:00 PM – 06:00 PM",
        crowdStatus: "Low to Moderate",
        funFact: "Munnar produces some of the highest-grown teas in the world, with estates reaching up to 7,200 feet above sea level.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Malayalam",
      languages: ["Malayalam", "English", "Tamil"],
      phrases: [
        { english: "Hello / Greetings", local: "Namaskaram", phonetic: "Na-mas-kaa-ram" },
        { english: "Where is the tea factory?", local: "Tea factory evideyaanu?", phonetic: "Tea factory e-vi-de-yaa-nu?" },
        { english: "How much is this?", local: "Idhinu ethrayaayi?", phonetic: "I-dhi-nu eth-ra-yaa-yi?" },
        { english: "Is this food tasty?", local: "Ee bhakshanam nallathaano?", phonetic: "Ee bhak-sha-nam nal-la-thaa-no?" },
        { english: "Please help!", local: "Dhayavayi sahayikku!", phonetic: "Dha-ya-va-yi sa-ha-yik-ku!" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Spot a Nilgiri Tahr in Eravikulam", points: 25, done: true },
      { id: "b2", title: "Feast on a Full Kerala Banana Leaf Sadhya", points: 15, done: true },
      { id: "b3", title: "Walk through Endless Tea Slopes", points: 15, done: false },
      { id: "b4", title: "Speedboating on Mattupetty Lake", points: 15, done: false },
      { id: "b5", title: "Shout your Name at Echo Point", points: 10, done: false },
      { id: "b6", title: "Buy Fresh Cardamom from Spice Gardens", points: 20, done: false }
    ],
    transportDefaults: {
      busOperator: "KSRTC Swift Multi-Axle Scania Sleeper",
      trainName: "Vanchinad Express / Kerala Superfast (to Kochi)",
      flightHub: "Cochin International Airport (COK) + 3.5h Hill Taxi"
    },
    emergencyContacts: [
      { title: "National Emergency", number: "112", icon: "phone-call", desc: "Kerala Emergency Services" },
      { title: "Munnar Police Station", number: "100", icon: "shield", desc: "Munnar Town Police (04865-230321)" },
      { title: "Tata General Hospital Munnar", number: "108", icon: "activity", desc: "Emergency Care, KDHP Munnar" },
      { title: "Kerala Tourism Information", number: "1800-425-4747", icon: "compass", desc: "Official Kerala Tourism Help Desk" },
      { title: "Railway Helpline", number: "139", icon: "train", desc: "Southern Railway 24/7 passenger assistance" }
    ]
  },

  "hyderabad": {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tagline: "City of Pearls, Nizam Royal Palaces & World-Famous Biryani",
    coords: { lat: 17.3850, lng: 78.4867 },
    station: { code: "SC", name: "Secunderabad Junction", city: "Secunderabad", lat: 17.4399, lng: 78.4983 },
    interchangeStation: { code: "HYB", name: "Hyderabad Deccan (Nampally)", lat: 17.3926, lng: 78.4697 },
    airport: { code: "HYD", name: "Rajiv Gandhi International Airport (RGIA Shamshabad)" },
    altitude: "542 meters (1,778 ft) above sea level",
    bestSeason: "October to March",
    highlights: [
      "Iconic 430-year-old Charminar and bustling Laad Bazaar pearl stalls",
      "Massive acoustic fortress of Golconda Fort with evening light & sound show",
      "World's largest film studio complex: Ramoji Film City",
      "World-renowned Hyderabadi Dum Biryani, Haleem, and Irani Chai with Osmania biscuits"
    ],
    seasons: [
      { season: "Winter (Oct – Feb)", status: "⭐ Prime Best Time", temp: "15°C – 28°C", weather: "Delightfully pleasant days, cool breezy evenings, ideal for heritage walks.", crowd: "High", approxCost: "Standard rates" },
      { season: "Monsoon (Jul – Sep)", status: "Lush & Breezy", temp: "22°C – 31°C", weather: "Moderate showers, breezy evenings by Hussain Sagar Lake, pleasant sightseeing.", crowd: "Moderate", approxCost: "Discounted hotel rates" },
      { season: "Summer (Apr – Jun)", status: "Warm & Sunny", temp: "28°C – 41°C", weather: "Hot summer afternoons; sightseeing best planned for mornings and evenings.", crowd: "Low", approxCost: "Budget summer offers" }
    ],
    travelTips: [
      "Take the Hyderabad Metro Rail for fast, air-conditioned city travel between Secunderabad, Hitec City, and Old City.",
      "Visit Golconda Fort at 04:30 PM to explore the ramparts and stay for the English/Hindi Sound & Light show at 06:30 PM.",
      "Bargain politely in Laad Bazaar for handcrafted lac bangles and pearls.",
      "Always order authentic Dum Biryani with mirchi ka salan and dahi ki chutney."
    ],
    attractions: [
      {
        id: "act-hyd-1",
        title: "Charminar & Laad Bazaar Pearl Market",
        time: "09:30 AM",
        type: "heritage",
        icon: "landmark",
        duration: "2 hours",
        cost: 25,
        rating: 4.8,
        bestTime: "Morning",
        crowd: "Moderate to High",
        crowdLevel: "yellow",
        lat: 17.3616,
        lng: 78.4747,
        photo: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
        description: "Monumental four-minaret gateway built in 1591 AD surrounded by bustling perfume, bangle, and pearl markets."
      },
      {
        id: "act-hyd-2",
        title: "Golconda Fort & Acoustic Fateh Darwaza",
        time: "03:30 PM",
        type: "heritage",
        icon: "shield",
        duration: "3 hours",
        cost: 25,
        rating: 4.9,
        bestTime: "Late Afternoon",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 17.3833,
        lng: 78.4011,
        photo: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
        description: "Impregnable fortress renowned for its acoustic engineering where a hand clap at the entrance gate resonates at the 400-foot hilltop pavilion."
      },
      {
        id: "act-hyd-3",
        title: "Chowmahalla Palace of the Nizams",
        time: "11:30 AM",
        type: "heritage",
        icon: "home",
        duration: "2 hours",
        cost: 100,
        rating: 4.8,
        bestTime: "Midday",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 17.3578,
        lng: 78.4717,
        photo: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=600&q=80",
        description: "Seat of the Asaf Jahi dynasty featuring grand durbar halls, pure Belgian crystal chandeliers, and vintage royal 1912 Rolls-Royce cars."
      },
      {
        id: "act-hyd-4",
        title: "Hussain Sagar Lake & Monolithic Buddha",
        time: "06:00 PM",
        type: "leisure",
        icon: "anchor",
        duration: "1.5 hours",
        cost: 100,
        rating: 4.7,
        bestTime: "Sunset",
        crowd: "Moderate",
        crowdLevel: "yellow",
        lat: 17.4239,
        lng: 78.4738,
        photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        description: "Scenic boat ride to the world's tallest monolithic statue of Gautama Buddha standing in the center of the lake."
      }
    ],
    stays: [
      {
        id: "stay-hyd-1",
        name: "Abids Heritage Residency",
        category: "Budget City Stay 💰",
        pricePerNight: 800,
        rating: 4.6,
        reviewsCount: 160,
        distance: "1 km from Nampally Station",
        amenities: ["Free Wi-Fi", "AC Rooms", "24/7 Check-in", "Lift", "Metro Access"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Maximum Savings",
        recommendationReason: "Central location near major shopping markets and railway station.",
        owner: { name: "Syed Abdul Rahman", phone: "+91 98XXX XXXXX", speaks: "Urdu, Telugu, Hindi, English", experience: "Host since 2015" },
        lat: 17.3900,
        lng: 78.4750
      },
      {
        id: "stay-hyd-2",
        name: "Banjara Hills Boutique Suites",
        category: "Prime Location 📍",
        pricePerNight: 1650,
        rating: 4.8,
        reviewsCount: 220,
        distance: "Banjara Hills Road No. 12",
        amenities: ["Free Breakfast", "Balcony View", "Gym", "Restaurant", "Cab Desk"],
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Recommended for city comfort",
        recommendationReason: "Upscale neighborhood close to top restaurants, shopping malls, and cafes.",
        owner: { name: "Ananya Reddy", phone: "+91 97XXX XXXXX", speaks: "Telugu, English, Hindi", experience: "Hospitality host" },
        lat: 17.4150,
        lng: 78.4400
      },
      {
        id: "stay-hyd-3",
        name: "Taj Falaknuma Palace (Mirror of the Sky)",
        category: "Royal Nizam Palace ⭐",
        pricePerNight: 4900,
        rating: 4.9,
        reviewsCount: 380,
        distance: "Falaknuma Heights",
        amenities: ["Horse-drawn Carriage Arrival", "Jade Room Collection", "Royal Dining", "Palace Historian Walk", "Spa"],
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
        recommendedBadge: "Supreme Luxury",
        recommendationReason: "Former palace of the Nizam of Hyderabad perched 2,000 ft above the city; sheer royal indulgence.",
        owner: { name: "Taj Luxury Hotels", phone: "+91 99XXX XXXXX", speaks: "English, Hindi, Urdu", experience: "Royal palace hospitality" },
        lat: 17.3310,
        lng: 78.4680
      }
    ],
    guides: [
      {
        id: "guide-hyd-1",
        name: "Mirza Asadullah",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        reviewsCount: 210,
        experience: "11 years experience",
        languages: ["Urdu", "Hindi", "Telugu", "English"],
        specialities: ["Golconda Architecture", "Nizam Dynasty", "Old City Food Trails"],
        pricePerDay: 850,
        availability: "Available for your dates",
        verified: true,
        bio: "Passionate historian and author of Old City heritage monographs. Unveils secret acoustics and royal culinary lore.",
        sampleContact: "mirza.hyd@yatrawise.local"
      },
      {
        id: "guide-hyd-2",
        name: "Radhika Rao",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        reviewsCount: 96,
        experience: "5 years experience",
        languages: ["Telugu", "English", "Hindi"],
        specialities: ["Pearl Shopping", "Crafts", "Photography"],
        pricePerDay: 800,
        availability: "Available for your dates",
        verified: true,
        bio: "Guides travelers through authentic pearl grading in Laad Bazaar and photogenic hidden courtyards.",
        sampleContact: "radhika.hyd@yatrawise.local"
      },
      {
        id: "guide-hyd-3",
        name: "K. Venkatesh",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        reviewsCount: 135,
        experience: "7 years experience",
        languages: ["Telugu", "Hindi"],
        specialities: ["Budget City Travel", "Ramoji Film City", "Street Food"],
        pricePerDay: 700,
        availability: "Available for your dates",
        verified: true,
        bio: "Energetic guide who ensures you visit all landmarks on time with the best metro and auto connections.",
        sampleContact: "venkat.hyd@yatrawise.local"
      }
    ],
    food: [
      {
        id: "food-hyd-1",
        name: "Bawarchi Restaurant (RTC X Roads)",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹250 / person",
        distance: "RTC X Roads",
        cuisine: "Authentic Hyderabadi Dum Cooking",
        specialtyDish: "Hyderabadi Mutton Dum Biryani with Mirchi ka Salan",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "Undisputed Biryani King",
        description: "Fragrant long-grain basmati layered with succulent tender meat marinated in yoghurt and royal spices, slow-steamed under dough seal."
      },
      {
        id: "food-hyd-2",
        name: "Nimrah Cafe & Bakery (Opposite Charminar)",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80",
        rating: 4.9,
        priceRange: "₹40 / person",
        distance: "Right opposite Charminar",
        cuisine: "Hyderabadi Irani Chai & Bakes",
        specialtyDish: "Special Irani Chai with Warm Osmania & Tie Biscuits",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Historic Tea Landmark",
        description: "Dense sweetened brew infused with mawa and cardamom, paired with traditional salted buttery Osmania biscuits."
      },
      {
        id: "food-hyd-3",
        name: "Chutneys (Pure Veg Heritage)",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
        priceRange: "₹200 / person",
        distance: "Banjara Hills / Himayatnagar",
        cuisine: "South Indian Vegetarian",
        specialtyDish: "Steamed Guntur Idli with 6 Assorted Chutneys",
        isVeg: true,
        vegOptionsAvailable: true,
        tag: "Top Vegetarian Pick",
        description: "Piping hot ghee-drizzled button idlis served with signature roasted tomato, ginger, peanut, and coconut chutneys."
      },
      {
        id: "food-hyd-4",
        name: "Pista House Charminar",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
        rating: 4.8,
        priceRange: "₹220 / person",
        distance: "Old City Charminar",
        cuisine: "Royal Hyderabadi Delicacies",
        specialtyDish: "GI-Tagged Hyderabadi Mutton Haleem & Zafrani Phirni",
        isVeg: false,
        vegOptionsAvailable: true,
        tag: "GI-Tagged Haleem",
        description: "Slow-pounded meat, wheat, lentils, and pure ghee cooked for 12 hours over firewood, garnished with golden fried onions and cashew."
      }
    ],
    aiLensData: [
      {
        id: "lens-hyd-1",
        name: "Charminar",
        confidence: "99.8% Match",
        type: "Indo-Islamic Architectural Gateway",
        period: "Erected 1591 AD by Muhammad Quli Qutb Shah",
        rating: 4.8,
        entryFee: "₹25 Indian / ₹300 Foreigner",
        cameraFee: "Free",
        bestHours: "08:30 AM – 10:30 AM",
        crowdStatus: "High",
        funFact: "Constructed to commemorate the eradication of a deadly plague from the city; each minaret stands 48.7 meters high.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-hyd-2",
        name: "Golconda Fort",
        confidence: "99.2% Match",
        type: "Medieval Diamond Capital Fortress",
        period: "Kakatiya Dynasty origin, expanded in 16th century",
        rating: 4.9,
        entryFee: "₹25",
        cameraFee: "₹25",
        bestHours: "03:30 PM – 06:30 PM",
        crowdStatus: "Moderate",
        funFact: "Golconda was the world's only known source of legendary diamonds including the Koh-i-Noor and Hope Diamond.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "lens-hyd-3",
        name: "Chowmahalla Palace",
        confidence: "98.7% Match",
        type: "Nizam Royal Palace Complex",
        period: "Completed 1869 AD",
        rating: 4.8,
        entryFee: "₹100",
        cameraFee: "₹50",
        bestHours: "10:00 AM – 01:00 PM",
        crowdStatus: "Moderate",
        funFact: "The Khilwat Mubarak durbar hall is adorned with 19 magnificent Belgian chandeliers that have illuminated Nizam coronation banquets.",
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=600&q=80"
      }
    ],
    languageAssistant: {
      primaryLanguage: "Telugu & Dakhini Urdu",
      languages: ["Telugu", "Hindi / Urdu", "English"],
      phrases: [
        { english: "Hello / Greetings", local: "Namaskaram / Aadab", phonetic: "Na-mas-kaa-ram / Aa-daab" },
        { english: "Where can I get good Biryani?", local: "Manchi Biryani ekkada dorukuthundi?", phonetic: "Man-chi Bir-ya-ni ek-ka-da do-ru-ku-thun-di?" },
        { english: "How much is this?", local: "Idi entha?", phonetic: "I-di en-tha?" },
        { english: "Is this food very spicy?", local: "Kaaram ekkuva undaa?", phonetic: "Kaa-ram ek-ku-va un-daa?" },
        { english: "Please call for help", local: "Sahayam cheyandi!", phonetic: "Sa-haa-yam che-yan-di!" }
      ]
    },
    touristBingo: [
      { id: "b1", title: "Eat Authentic Hyderabadi Dum Biryani", points: 20, done: true },
      { id: "b2", title: "Drink Irani Chai with Osmania Biscuit at Nimrah", points: 15, done: true },
      { id: "b3", title: "Clap at Golconda Fort's Acoustic Gate", points: 20, done: false },
      { id: "b4", title: "Photograph Charminar Minarets", points: 15, done: false },
      { id: "b5", title: "Shop for Pearls at Laad Bazaar", points: 15, done: false },
      { id: "b6", title: "Boat ride on Hussain Sagar Lake", points: 15, done: false }
    ],
    transportDefaults: {
      busOperator: "TSRTC Pushpak Airport Liner / Garuda Plus",
      trainName: "Vande Bharat Express / Godavari Superfast",
      flightHub: "Rajiv Gandhi International Airport (HYD)"
    },
    emergencyContacts: [
      { title: "National Emergency", number: "112", icon: "phone-call", desc: "Telangana Central Emergency Hotline" },
      { title: "Hyderabad Police", number: "100", icon: "shield", desc: "Old City Police Station (040-27853400)" },
      { title: "Osmania General Hospital", number: "108", icon: "activity", desc: "Afzal Gunj, Hyderabad" },
      { title: "Telangana Tourism Helpline", number: "1800-425-46464", icon: "compass", desc: "Official Telangana Tourism Assistance" },
      { title: "Railway Helpline", number: "139", icon: "train", desc: "South Central Railway 24/7 assistance" }
    ]
  }
};

// Aliases
window.YATRA_DESTINATIONS["munnar"] = window.YATRA_DESTINATIONS["kerala"];
window.YATRA_DESTINATIONS["kerala (munnar)"] = window.YATRA_DESTINATIONS["kerala"];

// Comprehensive Destination-Based Local Guides Database
window.YATRA_GUIDE_DATA = {
  araku: [
    {
      id: "guide-araku-1",
      name: "Ravi Kumar",
      location: "Araku",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 128,
      experience: "5 years experience",
      languages: ["Telugu", "Hindi", "English"],
      specialities: ["Tribal Culture", "Borra Caves", "Waterfalls"],
      specialty: "Tribal culture and waterfalls",
      pricePerDay: 800,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Born and raised in Araku Valley. Authorized local guide passionate about tribal traditions, hidden waterfalls, and Borra Caves limestone geology.",
      sampleContact: "ravi.araku@yatrawise.local"
    },
    {
      id: "guide-araku-2",
      name: "Swathi Rao",
      location: "Araku",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 94,
      experience: "4 years experience",
      languages: ["Telugu", "English"],
      specialities: ["Photography", "Trekking", "Coffee Plantations"],
      specialty: "Photography, trekking & organic coffee trails",
      pricePerDay: 900,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Adventure photographer and botany enthusiast. Takes travelers to secret sunrise viewpoints and organic Araku coffee estates.",
      sampleContact: "swathi.araku@yatrawise.local"
    },
    {
      id: "guide-araku-3",
      name: "Appala Raju",
      location: "Araku",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewsCount: 156,
      experience: "8 years experience",
      languages: ["Telugu", "Hindi"],
      specialities: ["Tribal History", "Hidden Caves", "Katiki Treks"],
      specialty: "Tribal folklore & Katiki waterfalls trek",
      pricePerDay: 750,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Senior guide with deep knowledge of tribal history and ancient cave paths. Certified Andhra Pradesh Tourism partner.",
      sampleContact: "appala.araku@yatrawise.local"
    }
  ],

  hampi: [
    {
      id: "guide-hampi-1",
      name: "Manjunath Gowda",
      location: "Hampi",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 184,
      experience: "8 years experience",
      languages: ["Kannada", "English", "Hindi"],
      specialities: ["Heritage & Temples", "Stone Chariot", "Inscriptions"],
      specialty: "Heritage and temples",
      pricePerDay: 1000,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Archaeology graduate and licensed ASI guide in Hampi. Deeply knowledgeable about 14th-century Vijayanagara empire architecture, stone chariot, and boulder ruins.",
      sampleContact: "manjunath.hampi@yatrawise.local"
    },
    {
      id: "guide-hampi-2",
      name: "Ananya Kulkarni",
      location: "Hampi",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 112,
      experience: "5 years experience",
      languages: ["Kannada", "English", "Hindi", "Marathi"],
      specialities: ["Virupaksha Temple", "Coracle Rides", "Sunset Viewpoints"],
      specialty: "Virupaksha temple lore & Tungabhadra river walks",
      pricePerDay: 950,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Cultural heritage storyteller who leads sunrise hikes up Matanga Hill, Hemakuta hill sunsets, and serene coracle excursions across the Tungabhadra River.",
      sampleContact: "ananya.hampi@yatrawise.local"
    },
    {
      id: "guide-hampi-3",
      name: "Basavaraj Patil",
      location: "Hampi",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewsCount: 140,
      experience: "10 years experience",
      languages: ["Kannada", "English", "Telugu", "Hindi"],
      specialities: ["Royal Enclosure", "Musical Pillars", "Queens Bath"],
      specialty: "Vittala temple musical pillars & Royal Enclosure walks",
      pricePerDay: 900,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Native of Hosapete and veteran Hampi guide. Guides history enthusiasts and families across the sprawling UNESCO World Heritage monument complex.",
      sampleContact: "basavaraj.hampi@yatrawise.local"
    }
  ],

  munnar: [
    {
      id: "guide-munnar-1",
      name: "Gopakumar Nair",
      location: "Munnar",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 165,
      experience: "9 years experience",
      languages: ["Malayalam", "English", "Tamil", "Hindi"],
      specialities: ["Tea Plantations", "Wildlife Tracking", "Spice Trails"],
      specialty: "Tea plantations and nature",
      pricePerDay: 1100,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Registered Kerala Forest Department eco-tourism guide. Led hundreds of successful wildlife expeditions through high-altitude shola forests and tea estates.",
      sampleContact: "gopu.munnar@yatrawise.local"
    },
    {
      id: "guide-munnar-2",
      name: "Sreedevi Pillai",
      location: "Munnar",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 120,
      experience: "7 years experience",
      languages: ["Malayalam", "English", "Hindi"],
      specialities: ["Eravikulam Park", "Nilgiri Tahr", "Organic Tea Gardens"],
      specialty: "Eravikulam National Park & tea garden biodiversity",
      pricePerDay: 1050,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Botanist and tea sommelier in Munnar. Leads travelers through aromatic spice gardens, Lockhart tea factory, and high-altitude flora.",
      sampleContact: "sreedevi.munnar@yatrawise.local"
    },
    {
      id: "guide-munnar-3",
      name: "Binu Mathew",
      location: "Munnar",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewsCount: 88,
      experience: "6 years experience",
      languages: ["Malayalam", "English", "Tamil"],
      specialities: ["Anamudi Treks", "Hidden Waterfalls", "Mattupetty Lake"],
      specialty: "Mountain trekking & hidden valley waterfalls",
      pricePerDay: 950,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Adventure mountaineer who knows every scenic hairpin curve, hidden waterfall, and viewpoint across the Munnar hills.",
      sampleContact: "binu.munnar@yatrawise.local"
    }
  ],

  goa: [
    {
      id: "guide-goa-1",
      name: "Savio D'Souza",
      location: "Goa",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 145,
      experience: "7 years experience",
      languages: ["Konkani", "English", "Hindi", "Portuguese"],
      specialities: ["Colonial History", "Latin Quarter", "Old Goa Churches"],
      specialty: "Portuguese colonial heritage & Old Goa churches",
      pricePerDay: 1200,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Certified Goa Tourism guide and heritage architecture researcher. Unravels 450 years of Portuguese history, Basilica of Bom Jesus, and Fontainhas culinary spots.",
      sampleContact: "savio.goa@yatrawise.local"
    },
    {
      id: "guide-goa-2",
      name: "Maria Fernandes",
      location: "Goa",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 110,
      experience: "5 years experience",
      languages: ["English", "Hindi", "Konkani"],
      specialities: ["Spice Farms", "Goan Culinary Walks", "Coastal Forts"],
      specialty: "Goan food walks, spice farms & Fort Aguada",
      pricePerDay: 1100,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Culinary guide and local historian. Leads travelers through authentic village bakeries, Sahakari spice plantation feasts, and sunset walks along coastal ramparts.",
      sampleContact: "maria.goa@yatrawise.local"
    },
    {
      id: "guide-goa-3",
      name: "Nilesh Naik",
      location: "Goa",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewsCount: 92,
      experience: "6 years experience",
      languages: ["Konkani", "Marathi", "Hindi", "English"],
      specialities: ["Dudhsagar Treks", "Secret Beaches", "Water Sports"],
      specialty: "Dudhsagar Falls & hidden South Goa beaches",
      pricePerDay: 1000,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Outdoor eco-guide specializing in Dudhsagar waterfall jeep safaris, Bhagwan Mahaveer wildlife sanctuary, and secluded beach coves in South Goa.",
      sampleContact: "nilesh.goa@yatrawise.local"
    }
  ],

  jaipur: [
    {
      id: "guide-jaipur-1",
      name: "Vikram Singh Rathore",
      location: "Jaipur",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 195,
      experience: "10 years experience",
      languages: ["Hindi", "English", "Rajasthani"],
      specialities: ["Amber Fort Lore", "Rajput Dynasties", "Palace Architecture"],
      specialty: "Amber Fort lore & Rajput palace architecture",
      pricePerDay: 1100,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Government-licensed Rajasthan Tourism guide with royal heritage storytelling. Specializes in secret fort tunnels, Hawa Mahal architecture, and royal lore.",
      sampleContact: "vikram.jaipur@yatrawise.local"
    },
    {
      id: "guide-jaipur-2",
      name: "Pooja Meena",
      location: "Jaipur",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 125,
      experience: "6 years experience",
      languages: ["Hindi", "English"],
      specialities: ["Johari Bazaar", "Block Printing", "Textile Walks"],
      specialty: "Johari bazaar gems, block printing & heritage walks",
      pricePerDay: 950,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Textile designer and heritage walking tour leader. Guides travelers safely through ancient Johari Bazaar jewelers, blue pottery artisans, and spice alleys.",
      sampleContact: "pooja.jaipur@yatrawise.local"
    },
    {
      id: "guide-jaipur-3",
      name: "Mahesh Sharma",
      location: "Jaipur",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 4.7,
      reviewsCount: 140,
      experience: "8 years experience",
      languages: ["Hindi", "English"],
      specialities: ["Jantar Mantar Astronomy", "Street Food", "Nahargarh Sunset"],
      specialty: "Jantar Mantar astronomy & Old City street food",
      pricePerDay: 900,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Science enthusiast and astronomer. Explains the exact mathematical genius behind Jantar Mantar sundials and takes you to Jaipur's oldest kachori & lassi shops.",
      sampleContact: "mahesh.jaipur@yatrawise.local"
    }
  ],

  ooty: [
    {
      id: "guide-ooty-1",
      name: "Karthik Subramanian",
      location: "Ooty",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 150,
      experience: "8 years experience",
      languages: ["Tamil", "English", "Malayalam", "Hindi"],
      specialities: ["Trekking", "Toda Tribal Culture", "Tea Estate History"],
      specialty: "Nilgiri tea plantations, Toda tribal culture & toy train heritage",
      pricePerDay: 950,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Local Nilgiris naturalist who conducts walking tours through Toda tribal hamlets and secret pine forest ridges.",
      sampleContact: "karthik.ooty@yatrawise.local"
    },
    {
      id: "guide-ooty-2",
      name: "Ananya Belliappa",
      location: "Ooty",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 98,
      experience: "6 years experience",
      languages: ["English", "Tamil", "Kannada"],
      specialities: ["Botanical Gardens", "Doddabetta Peak", "Chocolates"],
      specialty: "Botanical gardens & Doddabetta peak viewpoints",
      pricePerDay: 900,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Horticulture graduate guiding visitors through the Government Rose Garden, colonial bungalows, and homemade chocolate factories.",
      sampleContact: "ananya.ooty@yatrawise.local"
    }
  ],

  hyderabad: [
    {
      id: "guide-hyd-1",
      name: "Mirza Asadullah",
      location: "Hyderabad",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      rating: 4.9,
      reviewsCount: 210,
      experience: "11 years experience",
      languages: ["Urdu", "Hindi", "Telugu", "English"],
      specialities: ["Golconda Architecture", "Nizam Dynasty", "Old City Food Trails"],
      specialty: "Golconda Fort acoustics, Charminar & royal culinary trails",
      pricePerDay: 1000,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Passionate historian and author of Old City heritage monographs. Unveils secret acoustics, royal jewelry lore, and authentic biryani joints.",
      sampleContact: "mirza.hyd@yatrawise.local"
    },
    {
      id: "guide-hyd-2",
      name: "Radhika Reddy",
      location: "Hyderabad",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      rating: 4.8,
      reviewsCount: 95,
      experience: "5 years experience",
      languages: ["Telugu", "English", "Hindi"],
      specialities: ["Laad Bazaar", "Chowmahalla Palace", "Pearls Grading"],
      specialty: "Laad Bazaar pearls, Salar Jung museum & Chowmahalla Palace",
      pricePerDay: 850,
      availability: "Available for your dates",
      verified: true,
      demo: false,
      bio: "Guides travelers through authentic pearl grading in Laad Bazaar and photogenic hidden courtyards of Chowmahalla.",
      sampleContact: "radhika.hyd@yatrawise.local"
    }
  ]
};

// Aliases
window.YATRA_GUIDE_DATA["araku valley"] = window.YATRA_GUIDE_DATA["araku"];
window.YATRA_GUIDE_DATA["kerala"] = window.YATRA_GUIDE_DATA["munnar"];
window.YATRA_GUIDE_DATA["kerala (munnar)"] = window.YATRA_GUIDE_DATA["munnar"];
window.YATRA_GUIDE_DATA["secunderabad"] = window.YATRA_GUIDE_DATA["hyderabad"];

// Normalized Destination-Based Guide Retriever (Crash-Proof for ANY Destination)
window.getYatraDestinationGuides = function(destinationInput) {
  if (!destinationInput) return window.YATRA_GUIDE_DATA["araku"] || [];

  const raw = typeof destinationInput === "string" ? destinationInput.trim() : (destinationInput?.name || "");
  const firstPart = raw.toLowerCase().split(",")[0].trim();

  // 1. Direct key match
  if (window.YATRA_GUIDE_DATA[firstPart] && window.YATRA_GUIDE_DATA[firstPart].length > 0) {
    return window.YATRA_GUIDE_DATA[firstPart];
  }

  // 2. Canonical substring match
  if (firstPart.includes("araku")) return window.YATRA_GUIDE_DATA["araku"];
  if (firstPart.includes("hampi")) return window.YATRA_GUIDE_DATA["hampi"];
  if (firstPart.includes("munnar") || firstPart.includes("kerala")) return window.YATRA_GUIDE_DATA["munnar"];
  if (firstPart.includes("goa")) return window.YATRA_GUIDE_DATA["goa"];
  if (firstPart.includes("jaipur")) return window.YATRA_GUIDE_DATA["jaipur"];
  if (firstPart.includes("ooty") || firstPart.includes("nilgiri") || firstPart.includes("udagamandalam")) return window.YATRA_GUIDE_DATA["ooty"];
  if (firstPart.includes("hyderabad") || firstPart.includes("secunderabad")) return window.YATRA_GUIDE_DATA["hyderabad"];

  // 3. Search keys in dictionary
  for (const k in window.YATRA_GUIDE_DATA) {
    if (firstPart.includes(k) || k.includes(firstPart)) {
      return window.YATRA_GUIDE_DATA[k];
    }
  }

  // 4. Dynamic Fallback: Constructs authentic demo guide profiles specifically for the chosen destination
  const capName = raw ? (raw.charAt(0).toUpperCase() + raw.slice(1)) : "Local";
  const cleanId = capName.toLowerCase().replace(/[^a-z0-9]/g, "-");

  return [
    {
      id: `guide-${cleanId}-1`,
      name: "Suresh Kumar",
      location: capName,
      experience: "6+ years experience",
      languages: ["English", "Hindi"],
      rating: 4.8,
      reviewsCount: 94,
      pricePerDay: 950,
      specialty: `Heritage & local sightseeing in ${capName}`,
      specialities: ["Heritage Sightseeing", "Walking Tours", "Secret Spots"],
      verified: false,
      demo: true,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      bio: `Certified local guide born and raised in ${capName}. Passionate about sharing historical trivia, ancient architecture, and scenic viewpoints around ${capName}.`,
      sampleContact: `guide.${cleanId}@yatrawise.local`
    },
    {
      id: `guide-${cleanId}-2`,
      name: "Pooja Sharma",
      location: capName,
      experience: "4+ years experience",
      languages: ["English", "Hindi"],
      rating: 4.7,
      reviewsCount: 78,
      pricePerDay: 850,
      specialty: `Cultural walks & street food in ${capName}`,
      specialities: ["Food Walks", "Artisan Bazaars", "Photography"],
      verified: false,
      demo: true,
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      bio: `Cultural tour specialist passionate about local street delicacies, textiles, and architecture around ${capName}.`,
      sampleContact: `pooja.${cleanId}@yatrawise.local`
    },
    {
      id: `guide-${cleanId}-3`,
      name: "Ramesh Verma",
      location: capName,
      experience: "7+ years experience",
      languages: ["English", "Hindi"],
      rating: 4.9,
      reviewsCount: 112,
      pricePerDay: 1000,
      specialty: `Scenic viewpoints & day excursions around ${capName}`,
      specialities: ["Panoramic Viewpoints", "Day Excursions", "Nature Trails"],
      verified: false,
      demo: true,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      bio: `Experienced guide providing safe, personalized excursions and nature walks across ${capName} and nearby hills.`,
      sampleContact: `ramesh.${cleanId}@yatrawise.local`
    }
  ];
};

// Primary Scenario Preset
window.YATRA_DEMO_DATA = {
  primaryScenario: {
    origin: "Secunderabad",
    destination: "Araku Valley",
    days: 2,
    budget: 5000,
    travelers: 2,
    mode: "train",
    preferences: ["Nature", "Adventure", "Local Food"],
    tagline: "2-Day Scenic Eastern Ghats & Tribal Heritage Trail"
  },

  destinations: [
    { id: "araku", name: "Araku Valley", state: "Andhra Pradesh", tag: "Hill Station & Tribal Culture", coords: { lat: 18.3273, lng: 82.8808 } },
    { id: "goa", name: "Goa", state: "Goa", tag: "Beaches, Forts & Nightlife", coords: { lat: 15.4989, lng: 73.8278 } },
    { id: "ooty", name: "Ooty", state: "Tamil Nadu", tag: "Nilgiri Hills, Tea & Toy Train", coords: { lat: 11.4102, lng: 76.6950 } },
    { id: "jaipur", name: "Jaipur", state: "Rajasthan", tag: "Pink City, Palaces & Forts", coords: { lat: 26.9124, lng: 75.7873 } },
    { id: "kerala", name: "Kerala (Munnar)", state: "Kerala", tag: "Backwaters & Tea Highlands", coords: { lat: 10.0889, lng: 77.0595 } },
    { id: "hyderabad", name: "Hyderabad", state: "Telangana", tag: "City of Pearls & Nizam Forts", coords: { lat: 17.3850, lng: 78.4867 } }
  ]
};
