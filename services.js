// YatraWise — Modular Services Architecture
// Geolocation, Universal Geocoding, Dynamic Destination Generator, Routing, Station Finder, and Transport Services

(function() {
  // Comprehensive Indian City & Destination Geocoding Cache (Instant 0ms offline capability)
  const INDIAN_CITIES_GEO_CACHE = [
    { name: "Hyderabad", state: "Telangana", lat: 17.3850, lng: 78.4867, station: "HYB" },
    { name: "Secunderabad", state: "Telangana", lat: 17.4399, lng: 78.4983, station: "SC" },
    { name: "Warangal", state: "Telangana", lat: 17.9689, lng: 79.5941, station: "WL" },
    { name: "Khammam", state: "Telangana", lat: 17.2473, lng: 80.1514, station: "KMT" },
    { name: "Nizamabad", state: "Telangana", lat: 18.6725, lng: 78.0941, station: "NZB" },
    { name: "Karimnagar", state: "Telangana", lat: 18.4386, lng: 79.1288, station: "KRMR" },
    { name: "Vijayawada", state: "Andhra Pradesh", lat: 16.5062, lng: 80.6480, station: "BZA" },
    { name: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.6868, lng: 83.2185, station: "VSKP" },
    { name: "Araku Valley", state: "Andhra Pradesh", lat: 18.3273, lng: 82.8808, station: "ARK" },
    { name: "Tirupati", state: "Andhra Pradesh", lat: 13.6288, lng: 79.4192, station: "TPTY" },
    { name: "Guntur", state: "Andhra Pradesh", lat: 16.3067, lng: 80.4365, station: "GNT" },
    { name: "Rajahmundry", state: "Andhra Pradesh", lat: 17.0005, lng: 81.8040, station: "RJY" },
    { name: "Kurnool", state: "Andhra Pradesh", lat: 15.8281, lng: 78.0373, station: "KRNT" },
    { name: "Hampi", state: "Karnataka", lat: 15.3350, lng: 76.4600, station: "HPT" },
    { name: "Bengaluru", state: "Karnataka", lat: 12.9716, lng: 77.5946, station: "SBC" },
    { name: "Mysore", state: "Karnataka", lat: 12.2958, lng: 76.6394, station: "MYS" },
    { name: "Coorg", state: "Karnataka", lat: 12.4244, lng: 75.7382, station: "MYS" },
    { name: "Chikmagalur", state: "Karnataka", lat: 13.3161, lng: 75.7720, station: "CMGR" },
    { name: "Gokarna", state: "Karnataka", lat: 14.5479, lng: 74.3188, station: "GOK" },
    { name: "Hubli", state: "Karnataka", lat: 15.3647, lng: 75.1240, station: "UBL" },
    { name: "Mangalore", state: "Karnataka", lat: 12.9141, lng: 74.8560, station: "MAQ" },
    { name: "Goa", state: "Goa", lat: 15.4989, lng: 73.8278, station: "MAO" },
    { name: "Panaji", state: "Goa", lat: 15.4989, lng: 73.8278, station: "KRMI" },
    { name: "Madgaon", state: "Goa", lat: 15.2736, lng: 73.9789, station: "MAO" },
    { name: "Ooty", state: "Tamil Nadu", lat: 11.4064, lng: 76.6932, station: "UAM" },
    { name: "Chennai", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707, station: "MAS" },
    { name: "Coimbatore", state: "Tamil Nadu", lat: 11.0168, lng: 76.9558, station: "CBE" },
    { name: "Madurai", state: "Tamil Nadu", lat: 9.9252, lng: 78.1198, station: "MDU" },
    { name: "Kodaikanal", state: "Tamil Nadu", lat: 10.2381, lng: 77.4892, station: "KQN" },
    { name: "Kanyakumari", state: "Tamil Nadu", lat: 8.0883, lng: 77.5385, station: "CAPE" },
    { name: "Rameswaram", state: "Tamil Nadu", lat: 9.2876, lng: 79.3129, station: "RMM" },
    { name: "Pondicherry", state: "Puducherry", lat: 11.9416, lng: 79.8083, station: "PDY" },
    { name: "Munnar", state: "Kerala", lat: 10.0889, lng: 77.0595, station: "AWY" },
    { name: "Kochi", state: "Kerala", lat: 9.9312, lng: 76.2673, station: "ERS" },
    { name: "Alleppey", state: "Kerala", lat: 9.4981, lng: 76.3388, station: "ALLP" },
    { name: "Wayanad", state: "Kerala", lat: 11.6854, lng: 76.1320, station: "CLT" },
    { name: "Trivandrum", state: "Kerala", lat: 8.5241, lng: 76.9366, station: "TVC" },
    { name: "Varkala", state: "Kerala", lat: 8.7379, lng: 76.7163, station: "VAK" },
    { name: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873, station: "JP" },
    { name: "Udaipur", state: "Rajasthan", lat: 24.5854, lng: 73.7125, station: "UDZ" },
    { name: "Jodhpur", state: "Rajasthan", lat: 26.2389, lng: 73.0243, station: "JU" },
    { name: "Jaisalmer", state: "Rajasthan", lat: 26.9157, lng: 70.9083, station: "JSM" },
    { name: "Pushkar", state: "Rajasthan", lat: 26.4897, lng: 74.5511, station: "AII" },
    { name: "Delhi", state: "Delhi", lat: 28.6139, lng: 77.2090, station: "NDLS" },
    { name: "New Delhi", state: "Delhi", lat: 28.6139, lng: 77.2090, station: "NDLS" },
    { name: "Agra", state: "Uttar Pradesh", lat: 27.1767, lng: 78.0081, station: "AGC" },
    { name: "Varanasi", state: "Uttar Pradesh", lat: 25.3176, lng: 82.9739, station: "BSB" },
    { name: "Lucknow", state: "Uttar Pradesh", lat: 26.8467, lng: 80.9462, station: "LKO" },
    { name: "Prayagraj", state: "Uttar Pradesh", lat: 25.4358, lng: 81.8463, station: "PRYJ" },
    { name: "Mumbai", state: "Maharashtra", lat: 19.0760, lng: 72.8777, station: "CSMT" },
    { name: "Pune", state: "Maharashtra", lat: 18.5204, lng: 73.8567, station: "PUNE" },
    { name: "Mahabaleshwar", state: "Maharashtra", lat: 17.9237, lng: 73.6586, station: "PUNE" },
    { name: "Lonavala", state: "Maharashtra", lat: 18.7546, lng: 73.4062, station: "LNL" },
    { name: "Nashik", state: "Maharashtra", lat: 19.9975, lng: 73.7898, station: "NK" },
    { name: "Aurangabad", state: "Maharashtra", lat: 19.8762, lng: 75.3433, station: "AWB" },
    { name: "Nagpur", state: "Maharashtra", lat: 21.1458, lng: 79.0882, station: "NGP" },
    { name: "Kolkata", state: "West Bengal", lat: 22.5726, lng: 88.3639, station: "HWH" },
    { name: "Darjeeling", state: "West Bengal", lat: 27.0410, lng: 88.2663, station: "NJP" },
    { name: "Kalimpong", state: "West Bengal", lat: 27.0594, lng: 88.4695, station: "NJP" },
    { name: "Shimla", state: "Himachal Pradesh", lat: 31.1048, lng: 77.1734, station: "SML" },
    { name: "Manali", state: "Himachal Pradesh", lat: 32.2432, lng: 77.1892, station: "CDG" },
    { name: "Dharamshala", state: "Himachal Pradesh", lat: 32.2190, lng: 76.3234, station: "PTK" },
    { name: "Rishikesh", state: "Uttarakhand", lat: 30.0869, lng: 78.2676, station: "RKSH" },
    { name: "Haridwar", state: "Uttarakhand", lat: 29.9457, lng: 78.1642, station: "HW" },
    { name: "Nainital", state: "Uttarakhand", lat: 29.3919, lng: 79.4542, station: "KGM" },
    { name: "Dehradun", state: "Uttarakhand", lat: 30.3165, lng: 78.0322, station: "DDN" },
    { name: "Amritsar", state: "Punjab", lat: 31.6340, lng: 74.8723, station: "ASR" },
    { name: "Chandigarh", state: "Punjab / Haryana", lat: 30.7333, lng: 76.7794, station: "CDG" },
    { name: "Ahmedabad", state: "Gujarat", lat: 23.0225, lng: 72.5714, station: "ADI" },
    { name: "Vadodara", state: "Gujarat", lat: 22.3072, lng: 73.1812, station: "BRC" },
    { name: "Surat", state: "Gujarat", lat: 21.1702, lng: 72.8311, station: "ST" },
    { name: "Bhopal", state: "Madhya Pradesh", lat: 23.2599, lng: 77.4126, station: "BPL" },
    { name: "Indore", state: "Madhya Pradesh", lat: 22.7196, lng: 75.8577, station: "INDB" },
    { name: "Khajuraho", state: "Madhya Pradesh", lat: 24.8318, lng: 79.9199, station: "KURJ" },
    { name: "Gwalior", state: "Madhya Pradesh", lat: 26.2183, lng: 78.1828, station: "GWL" },
    { name: "Bhubaneswar", state: "Odisha", lat: 20.2961, lng: 85.8245, station: "BBS" },
    { name: "Puri", state: "Odisha", lat: 19.8135, lng: 85.8312, station: "PURI" },
    { name: "Patna", state: "Bihar", lat: 25.5941, lng: 85.1376, station: "PNBE" },
    { name: "Bodh Gaya", state: "Bihar", lat: 24.6961, lng: 84.9869, station: "GAYA" },
    { name: "Ranchi", state: "Jharkhand", lat: 23.3441, lng: 85.3096, station: "RNC" },
    { name: "Raipur", state: "Chhattisgarh", lat: 21.2514, lng: 81.6296, station: "R" },
    { name: "Guwahati", state: "Assam", lat: 26.1445, lng: 91.7362, station: "GHY" },
    { name: "Shillong", state: "Meghalaya", lat: 25.5788, lng: 91.8933, station: "GHY" }
  ];

  // Major Indian Railway Junctions for Station Finder
  const MAJOR_STATIONS = [
    { code: "SC", name: "Secunderabad Junction", city: "Secunderabad", state: "Telangana", lat: 17.4399, lng: 78.4983 },
    { code: "HYB", name: "Hyderabad Deccan (Nampally)", city: "Hyderabad", state: "Telangana", lat: 17.3926, lng: 78.4697 },
    { code: "WL", name: "Warangal Railway Station", city: "Warangal", state: "Telangana", lat: 17.9689, lng: 79.5941 },
    { code: "BZA", name: "Vijayawada Junction", city: "Vijayawada", state: "Andhra Pradesh", lat: 16.5186, lng: 80.6195 },
    { code: "VSKP", name: "Visakhapatnam Junction", city: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.7231, lng: 83.2906 },
    { code: "SBC", name: "KSR Bengaluru City", city: "Bengaluru", state: "Karnataka", lat: 12.9781, lng: 77.5694 },
    { code: "HPT", name: "Hosapete Junction (Hampi Gateway)", city: "Hampi", state: "Karnataka", lat: 15.2770, lng: 76.3888 },
    { code: "MAS", name: "Chennai Central", city: "Chennai", state: "Tamil Nadu", lat: 13.0827, lng: 80.2707 },
    { code: "NDLS", name: "New Delhi Railway Station", city: "New Delhi", state: "Delhi", lat: 28.6429, lng: 77.2195 },
    { code: "CSMT", name: "Mumbai CSMT", city: "Mumbai", state: "Maharashtra", lat: 18.9401, lng: 72.8354 },
    { code: "HWH", name: "Howrah Junction", city: "Kolkata", state: "West Bengal", lat: 22.5839, lng: 88.3426 },
    { code: "TPTY", name: "Tirupati Main", city: "Tirupati", state: "Andhra Pradesh", lat: 13.6288, lng: 79.4192 },
    { code: "MAO", name: "Madgaon Junction", city: "Goa", state: "Goa", lat: 15.2736, lng: 73.9789 },
    { code: "JP", name: "Jaipur Junction", city: "Jaipur", state: "Rajasthan", lat: 26.9196, lng: 75.7878 },
    { code: "MTP", name: "Mettupalayam Junction (Ooty Gateway)", city: "Ooty", state: "Tamil Nadu", lat: 11.2990, lng: 76.9410 },
    { code: "ERS", name: "Ernakulam Junction (Kochi)", city: "Kochi", state: "Kerala", lat: 9.9723, lng: 76.2878 },
    { code: "AWY", name: "Aluva Junction (Munnar Gateway)", city: "Munnar", state: "Kerala", lat: 10.1082, lng: 76.3533 },
    { code: "PDY", name: "Puducherry Railway Station", city: "Pondicherry", state: "Puducherry", lat: 11.9288, lng: 79.8277 },
    { code: "PUNE", name: "Pune Junction", city: "Pune", state: "Maharashtra", lat: 18.5284, lng: 73.8744 }
  ];

  // Haversine formula to compute distance in km
  function computeDistanceKm(lat1, lon1, lat2, lon2) {
    if (typeof lat1 !== "number" || typeof lon1 !== "number" || typeof lat2 !== "number" || typeof lon2 !== "number") {
      return 500;
    }
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.max(10, Math.round(R * c));
  }

  // 1. GEOLOCATION SERVICE
  const geolocationService = {
    getCurrentPosition: function() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          return geolocationService.getIpLocation().then(resolve).catch(reject);
        }

        const options = {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 60000
        };

        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              isGps: true
            });
          },
          async error => {
            console.warn("Browser GPS unavailable or denied, attempting live IP fallback...", error);
            try {
              const ipResult = await geolocationService.getIpLocation();
              resolve(ipResult);
            } catch (ipErr) {
              let userMessage = "Location access was unavailable.";
              if (error.code === error.PERMISSION_DENIED) {
                userMessage = "Location access was denied. You can enter your starting location manually.";
              } else if (error.code === error.POSITION_UNAVAILABLE) {
                userMessage = "Location information is currently unavailable.";
              } else if (error.code === error.TIMEOUT) {
                userMessage = "Location request timed out. Please enter manually.";
              }
              const err = new Error(userMessage);
              err.code = error.code;
              reject(err);
            }
          },
          options
        );
      });
    },

    getIpLocation: async function() {
      try {
        const response = await fetch("https://freeipapi.com/api/json");
        if (response.ok) {
          const data = await response.json();
          if (data && data.latitude && data.longitude) {
            return {
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
              latitude: parseFloat(data.latitude),
              longitude: parseFloat(data.longitude),
              cityName: data.cityName || "Hyderabad",
              regionName: data.regionName || "Telangana",
              isIp: true
            };
          }
        }
      } catch (e) {
        console.warn("IP Geolocation fallback notice:", e);
      }
      return {
        lat: 17.4399,
        lng: 78.4983,
        latitude: 17.4399,
        longitude: 78.4983,
        cityName: "Secunderabad",
        regionName: "Telangana",
        isIp: true,
        fallback: true
      };
    }
  };

  // 2. UNIVERSAL GEOCODING SERVICE
  const geocodingService = {
    // Reverse Geocoding (Coordinates -> Address)
    reverseGeocode: async function(lat, lng) {
      try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14&addressdetails=1`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        const response = await fetch(url, {
          headers: { "Accept": "application/json" },
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const addr = data.address || {};
          const locality = addr.suburb || addr.neighbourhood || addr.city_district || addr.residential || addr.subdistrict || "";
          const city = addr.city || addr.town || addr.municipality || addr.village || addr.county || locality;
          const state = addr.state || "";

          let displayName = "";
          if (locality && city && locality !== city) {
            displayName = `${locality}, ${city}`;
          } else if (city && state) {
            displayName = `${city}, ${state}`;
          } else if (city) {
            displayName = city;
          } else {
            displayName = data.display_name.split(",").slice(0, 2).join(",").trim();
          }

          return {
            name: city || displayName,
            displayName,
            pureName: city || locality || "My Location",
            city: city || locality || "My Location",
            state,
            lat,
            lng,
            latitude: lat,
            longitude: lng,
            formattedAddress: data.display_name || displayName,
            raw: data
          };
        }
      } catch (err) {
        console.warn("Nominatim reverse geocode notice:", err);
      }

      // Proximity fallback to nearest city in cache
      let nearest = INDIAN_CITIES_GEO_CACHE[0];
      let minDistance = Infinity;
      INDIAN_CITIES_GEO_CACHE.forEach(c => {
        const dist = computeDistanceKm(lat, lng, c.lat, c.lng);
        if (dist < minDistance) {
          minDistance = dist;
          nearest = c;
        }
      });

      return {
        name: `${nearest.name}, ${nearest.state}`,
        displayName: `${nearest.name}, ${nearest.state}, India`,
        pureName: nearest.name,
        city: nearest.name,
        state: nearest.state,
        lat,
        lng,
        latitude: lat,
        longitude: lng,
        formattedAddress: `${nearest.name}, ${nearest.state}, India`,
        fallback: true
      };
    },

    // Forward Search & Autocomplete (Query -> List of Suggestions)
    searchPlaces: async function(query) {
      if (!query || query.trim().length < 1) return [];
      const clean = query.trim().toLowerCase();

      const results = [];
      const seen = new Set();

      // 1. Instant Cache Search (Matches 70+ cities/places in 0ms)
      INDIAN_CITIES_GEO_CACHE.forEach(c => {
        const cLower = c.name.toLowerCase();
        const sLower = c.state.toLowerCase();
        if (cLower.includes(clean) || clean.includes(cLower) || sLower.includes(clean)) {
          const key = c.name.toLowerCase();
          if (!seen.has(key)) {
            seen.add(key);
            results.push({
              name: `${c.name}, ${c.state}`,
              displayName: `${c.name}, ${c.state}, India`,
              pureName: c.name,
              lat: c.lat,
              lng: c.lng,
              latitude: c.lat,
              longitude: c.lng,
              formattedAddress: `${c.name}, ${c.state}, India`,
              state: c.state
            });
          }
        }
      });

      // 2. Enhanced Destination Registry search
      const destRegistry = window.YATRA_DESTINATIONS || {};
      Object.values(destRegistry).forEach(d => {
        const dLower = d.name.toLowerCase();
        if ((dLower.includes(clean) || clean.includes(dLower)) && !seen.has(dLower)) {
          seen.add(dLower);
          results.push({
            name: `${d.name}, ${d.state || 'India'}`,
            displayName: `${d.name}, ${d.state || 'India'}`,
            pureName: d.name,
            lat: d.coords.lat,
            lng: d.coords.lng,
            latitude: d.coords.lat,
            longitude: d.coords.lng,
            formattedAddress: `${d.name}, ${d.state || 'India'}`,
            state: d.state || "India",
            isEnhanced: true
          });
        }
      });

      // 3. Online OpenStreetMap Nominatim Search (with abort controller)
      if (clean.length >= 3) {
        try {
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", India")}&limit=5&countrycodes=in`;
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1800);

          const response = await fetch(url, {
            headers: { "Accept": "application/json" },
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (response.ok) {
            const items = await response.json();
            items.forEach(item => {
              const primaryPart = item.display_name.split(",")[0].trim();
              const key = primaryPart.toLowerCase();
              if (!seen.has(key)) {
                seen.add(key);
                results.push({
                  name: item.display_name.split(",").slice(0, 3).join(",").trim(),
                  displayName: item.display_name,
                  pureName: primaryPart,
                  lat: parseFloat(item.lat),
                  lng: parseFloat(item.lon),
                  latitude: parseFloat(item.lat),
                  longitude: parseFloat(item.lon),
                  formattedAddress: item.display_name,
                  state: item.display_name.split(",").slice(-3, -2)[0]?.trim() || "India"
                });
              }
            });
          }
        } catch (err) {
          // Graceful fallback to cached results
        }
      }

      return results.slice(0, 6);
    },

    // Resolve Single Query into Exact Coordinates (Crash-Proof)
    geocode: async function(query) {
      if (!query || query.trim().length === 0) {
        return {
          name: "Araku Valley",
          displayName: "Araku Valley, Andhra Pradesh, India",
          pureName: "Araku Valley",
          lat: 18.3273,
          lng: 82.8808,
          latitude: 18.3273,
          longitude: 82.8808,
          formattedAddress: "Araku Valley, Andhra Pradesh, India",
          state: "Andhra Pradesh"
        };
      }

      const clean = query.trim().toLowerCase();

      // 1. Check Cache
      const cached = INDIAN_CITIES_GEO_CACHE.find(c =>
        c.name.toLowerCase() === clean ||
        c.name.toLowerCase().includes(clean) ||
        clean.includes(c.name.toLowerCase())
      );
      if (cached) {
        return {
          name: cached.name,
          displayName: `${cached.name}, ${cached.state}, India`,
          pureName: cached.name,
          lat: cached.lat,
          lng: cached.lng,
          latitude: cached.lat,
          longitude: cached.lng,
          formattedAddress: `${cached.name}, ${cached.state}, India`,
          state: cached.state
        };
      }

      // 2. Check Enhanced Dest Registry
      const destRegistry = window.YATRA_DESTINATIONS || {};
      for (const k in destRegistry) {
        if (k === clean || destRegistry[k].name.toLowerCase().includes(clean) || clean.includes(destRegistry[k].name.toLowerCase())) {
          const d = destRegistry[k];
          return {
            name: d.name,
            displayName: `${d.name}, ${d.state || 'India'}`,
            pureName: d.name,
            lat: d.coords.lat,
            lng: d.coords.lng,
            latitude: d.coords.lat,
            longitude: d.coords.lng,
            formattedAddress: `${d.name}, ${d.state || 'India'}`,
            state: d.state || "India"
          };
        }
      }

      // 3. Try Online Geocoding
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", India")}&limit=1&countrycodes=in`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(url, {
          headers: { "Accept": "application/json" },
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const items = await response.json();
          if (items && items.length > 0) {
            const it = items[0];
            const pName = it.display_name.split(",")[0].trim();
            return {
              name: pName,
              displayName: it.display_name,
              pureName: pName,
              lat: parseFloat(it.lat),
              lng: parseFloat(it.lon),
              latitude: parseFloat(it.lat),
              longitude: parseFloat(it.lon),
              formattedAddress: it.display_name,
              state: it.display_name.split(",").slice(-3, -2)[0]?.trim() || "India"
            };
          }
        }
      } catch (e) {
        console.warn("Geocode online lookup notice:", e);
      }

      // 4. Deterministic Geocoding Fallback (Never crashes, generates consistent coordinates)
      let hash = 0;
      for (let i = 0; i < clean.length; i++) {
        hash = ((hash << 5) - hash) + clean.charCodeAt(i);
        hash |= 0;
      }
      const latOffset = ((Math.abs(hash) % 1000) / 1000) * 14 - 7;
      const lngOffset = ((Math.abs(hash >> 3) % 1000) / 1000) * 16 - 8;
      const lat = Math.round((19.5 + latOffset) * 10000) / 10000;
      const lng = Math.round((77.5 + lngOffset) * 10000) / 10000;
      const cap = query.charAt(0).toUpperCase() + query.slice(1);

      return {
        name: cap,
        displayName: `${cap}, India`,
        pureName: cap,
        lat,
        lng,
        latitude: lat,
        longitude: lng,
        formattedAddress: `${cap}, India`,
        state: "India",
        fallback: true
      };
    }
  };

  // 3. DYNAMIC DESTINATION SERVICE & GENERATOR
  const destinationService = {
    // Retrieves enhanced destination or constructs full dynamic dataset for arbitrary cities
    getDestination: function(destInput, destCoords) {
      const destRegistry = window.YATRA_DESTINATIONS || {};
      if (!destInput && !destCoords) {
        return destRegistry["araku valley"] || Object.values(destRegistry)[0];
      }

      const inputStr = typeof destInput === "string" ? destInput.trim() : (destInput?.name || "");
      const clean = inputStr.toLowerCase();

      // Check Enhanced Curated Destinations
      if (clean) {
        const getGuides = (destKey) => (typeof window.getYatraDestinationGuides === "function") ? window.getYatraDestinationGuides(destKey) : null;

        if (clean.includes("araku")) {
          const base = destRegistry["araku valley"] || destRegistry["araku"] || destinationService.createDynamicDestination("Araku Valley", 18.3273, 82.8808, "Araku Valley, Andhra Pradesh, India", "Andhra Pradesh");
          return { ...base, isEnhanced: true, guides: getGuides("araku") || base.guides || [] };
        }
        if (clean.includes("hampi")) {
          const base = destRegistry["hampi"] || destinationService.createDynamicDestination("Hampi", 15.3350, 76.4600, "Hampi, Karnataka, India", "Karnataka");
          return { ...base, name: "Hampi", state: "Karnataka", isEnhanced: true, guides: getGuides("hampi") || base.guides || [] };
        }
        if (clean.includes("goa")) {
          const base = destRegistry["goa"] || destinationService.createDynamicDestination("Goa", 15.2993, 74.1240, "Goa, India", "Goa");
          return { ...base, isEnhanced: true, guides: getGuides("goa") || base.guides || [] };
        }
        if (clean.includes("ooty") || clean.includes("nilgiri") || clean.includes("udagamandalam")) {
          const base = destRegistry["ooty"] || destinationService.createDynamicDestination("Ooty", 11.4102, 76.6950, "Ooty, Tamil Nadu, India", "Tamil Nadu");
          return { ...base, isEnhanced: true, guides: getGuides("ooty") || base.guides || [] };
        }
        if (clean.includes("jaipur")) {
          const base = destRegistry["jaipur"] || destinationService.createDynamicDestination("Jaipur", 26.9124, 75.7873, "Jaipur, Rajasthan, India", "Rajasthan");
          return { ...base, isEnhanced: true, guides: getGuides("jaipur") || base.guides || [] };
        }
        if (clean.includes("munnar") || clean.includes("kerala")) {
          const base = destRegistry["kerala"] || destRegistry["munnar"] || destinationService.createDynamicDestination("Munnar", 10.0889, 77.0595, "Munnar, Kerala, India", "Kerala");
          return { ...base, name: "Munnar", state: "Kerala", isEnhanced: true, guides: getGuides("munnar") || base.guides || [] };
        }
        if (clean.includes("hyderabad")) {
          const base = destRegistry["hyderabad"] || destinationService.createDynamicDestination("Hyderabad", 17.3850, 78.4867, "Hyderabad, Telangana, India", "Telangana");
          return { ...base, isEnhanced: true, guides: getGuides("hyderabad") || base.guides || [] };
        }

        // Generic registry lookup
        for (const key in destRegistry) {
          if (destRegistry[key] && (clean.includes(key) || key.includes(clean) || (destRegistry[key].name && destRegistry[key].name.toLowerCase() === clean))) {
            return { ...destRegistry[key], isEnhanced: true, guides: getGuides(destRegistry[key].name) || destRegistry[key].guides || [] };
          }
        }
      }

      // Check if city is in cache (e.g. Hampi, Warangal, Vijayawada, Delhi, Bengaluru, etc.)
      const cached = INDIAN_CITIES_GEO_CACHE.find(c =>
        c.name.toLowerCase() === clean || clean.includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(clean)
      );

      let lat = null;
      let lng = null;
      let state = "India";
      let formattedAddress = `${inputStr}, India`;

      // If destCoords matches current input, prioritize destCoords
      const destCoordsMatches = destCoords && (!destCoords.name || destCoords.name.toLowerCase().includes(clean) || clean.includes(destCoords.name.toLowerCase()));
      if (destCoordsMatches && typeof (destCoords.lat || destCoords.latitude) === "number") {
        lat = destCoords.lat || destCoords.latitude;
        lng = destCoords.lng || destCoords.longitude;
        state = destCoords.state || state;
        formattedAddress = destCoords.formattedAddress || formattedAddress;
      } else if (cached) {
        lat = cached.lat;
        lng = cached.lng;
        state = cached.state;
        formattedAddress = `${cached.name}, ${cached.state}, India`;
      } else if (typeof (destCoords?.lat || destCoords?.latitude) === "number") {
        lat = destCoords.lat || destCoords.latitude;
        lng = destCoords.lng || destCoords.longitude;
        state = destCoords.state || state;
        formattedAddress = destCoords.formattedAddress || formattedAddress;
      }

      // If still not resolved, compute deterministic coordinates across India
      if (typeof lat !== "number" || isNaN(lat)) {
        let hash = 0;
        for (let i = 0; i < clean.length; i++) {
          hash = ((hash << 5) - hash) + clean.charCodeAt(i);
          hash |= 0;
        }
        const latOffset = ((Math.abs(hash) % 1000) / 1000) * 14 - 7;
        const lngOffset = ((Math.abs(hash >> 3) % 1000) / 1000) * 16 - 8;
        lat = Math.round((19.5 + latOffset) * 10000) / 10000;
        lng = Math.round((77.5 + lngOffset) * 10000) / 10000;
      }

      // Construct comprehensive dynamic destination data structure
      return destinationService.createDynamicDestination(inputStr || "Destination", lat, lng, formattedAddress, state);
    },

    // Factory: Constructs complete, crash-proof destination data object for ANY location
    createDynamicDestination: function(name, lat, lng, formattedAddress, stateName) {
      const capName = name ? (name.charAt(0).toUpperCase() + name.slice(1)) : "Scenic Destination";
      const cleanId = capName.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const safeLat = (typeof lat === "number" && !isNaN(lat)) ? lat : 15.3350;
      const safeLng = (typeof lng === "number" && !isNaN(lng)) ? lng : 76.4600;
      const state = stateName || "India";

      const dynamicAttractions = [
        {
          id: `act-${cleanId}-1`,
          title: `${capName} Historic Landmark & Fort`,
          time: "09:30 AM",
          type: "heritage",
          icon: "shield",
          duration: "2.5 hours",
          cost: 50,
          rating: 4.8,
          bestTime: "Morning before 11:00 AM",
          crowd: "Moderate",
          crowdLevel: "green",
          crowdTip: "Visit early in the morning for cooler weather and uncrowded photos.",
          lat: safeLat + 0.008,
          lng: safeLng + 0.005,
          photo: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
          description: `Celebrated heritage landmark and cultural monument showcasing regional architecture and history of ${capName}.`
        },
        {
          id: `act-${cleanId}-2`,
          title: `${capName} Panoramic Viewpoint & Ridge`,
          time: "11:30 AM",
          type: "nature",
          icon: "mountain",
          duration: "2 hours",
          cost: 20,
          rating: 4.7,
          bestTime: "Midday or Sunset",
          crowd: "Low",
          crowdLevel: "green",
          lat: safeLat - 0.007,
          lng: safeLng + 0.009,
          photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
          description: `Breathtaking vantage point offering 360-degree sweeping panoramas over ${capName} and nearby valley landscapes.`
        },
        {
          id: `act-${cleanId}-3`,
          title: `${capName} Cultural Museum & Arts Gallery`,
          time: "02:30 PM",
          type: "culture",
          icon: "landmark",
          duration: "1.5 hours",
          cost: 40,
          rating: 4.6,
          bestTime: "Afternoon",
          crowd: "Low",
          crowdLevel: "green",
          lat: safeLat + 0.004,
          lng: safeLng - 0.006,
          photo: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80",
          description: `Curated museum preserving archaeological artifacts, traditional handicrafts, textiles, and folk history.`
        },
        {
          id: `act-${cleanId}-4`,
          title: `${capName} Lake Promenade & Public Gardens`,
          time: "04:30 PM",
          type: "leisure",
          icon: "compass",
          duration: "1.5 hours",
          cost: 0,
          rating: 4.8,
          bestTime: "Golden Hour / Sunset",
          crowd: "Moderate",
          crowdLevel: "yellow",
          lat: safeLat - 0.005,
          lng: safeLng - 0.008,
          photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
          description: `Tranquil public promenade along the waterside, shaded with lush trees and surrounded by street food carts.`
        },
        {
          id: `act-${cleanId}-5`,
          title: `${capName} Traditional Craft Bazaar`,
          time: "06:30 PM",
          type: "shopping",
          icon: "shoppingBag",
          duration: "1.5 hours",
          cost: 150,
          rating: 4.7,
          bestTime: "Evening",
          crowd: "Moderate",
          crowdLevel: "yellow",
          lat: safeLat + 0.002,
          lng: safeLng + 0.003,
          photo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80",
          description: `Lively evening market brimming with authentic regional handicrafts, brassware, textiles, and local snacks.`
        }
      ];

      const dynamicStays = [
        {
          id: `stay-${cleanId}-1`,
          name: `${capName} Heritage Homestay`,
          category: "Budget Homestay 💰",
          pricePerNight: 850,
          rating: 4.8,
          reviewsCount: 114,
          distance: `1.2 km from ${capName} Center`,
          amenities: ["Free Wi-Fi", "Home Cooked Breakfast", "Clean Attached Baths", "Hot Water Geyser", "Local Host Assistance"],
          image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80",
          recommendedBadge: "Maximum Savings",
          recommendationReason: `Verified community homestay providing authentic hospitality and affordable rates in ${capName}.`,
          owner: { name: "Local Host Family (Verified)", phone: "+91 98XXX XXXXX", speaks: "Hindi, English, Regional", experience: "Host since 2018" },
          lat: safeLat + 0.003,
          lng: safeLng - 0.004
        },
        {
          id: `stay-${cleanId}-2`,
          name: `${capName} Central Boutique Hotel`,
          category: "Prime Location 📍",
          pricePerNight: 1500,
          rating: 4.7,
          reviewsCount: 165,
          distance: `Central ${capName}`,
          amenities: ["AC Rooms", "Free Wi-Fi", "In-house Kitchen", "24/7 Front Desk", "Free Parking"],
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
          recommendedBadge: "Recommended for your itinerary",
          recommendationReason: `Conveniently situated near major attractions in ${capName}, reducing local auto and taxi fares.`,
          owner: { name: "City Hotel Management", phone: "+91 94XXX XXXXX", speaks: "Hindi, English", experience: "Hospitality Team" },
          lat: safeLat - 0.002,
          lng: safeLng + 0.005
        },
        {
          id: `stay-${cleanId}-3`,
          name: `${capName} Grand Valley Resort`,
          category: "Premium Comfort ⭐",
          pricePerNight: 2800,
          rating: 4.9,
          reviewsCount: 220,
          distance: `3.5 km from ${capName} Outskirts`,
          amenities: ["Swimming Pool", "Garden Lawn", "Multi-Cuisine Dining", "Spa Services", "Bicycle Rentals"],
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
          recommendedBadge: "Premium Comfort",
          recommendationReason: `Relaxed luxury retreat with scenic garden views and top-rated customer service.`,
          owner: { name: "Resort Concierge Desk", phone: "+91 99XXX XXXXX", speaks: "English, Hindi", experience: "Resort Operator" },
          lat: safeLat + 0.012,
          lng: safeLng - 0.010
        }
      ];

      const dynamicGuides = (typeof window.getYatraDestinationGuides === "function")
        ? window.getYatraDestinationGuides(capName)
        : [
            {
              id: `guide-${cleanId}-1`,
              name: "Suresh Kumar",
              location: capName,
              photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
              rating: 4.8,
              reviewsCount: 94,
              experience: "6+ years experience",
              languages: ["Hindi", "English"],
              specialty: `Heritage & local sightseeing in ${capName}`,
              specialities: ["Heritage Lore", "Walking Tours", "Secret Viewpoints"],
              pricePerDay: 950,
              availability: "Available for your dates",
              verified: false,
              demo: true,
              bio: `Certified local guide born and raised in ${capName}. Passionate about sharing historical trivia, ancient architecture, and scenic viewpoints around ${capName}.`,
              sampleContact: `guide.${cleanId}@yatrawise.local`
            },
            {
              id: `guide-${cleanId}-2`,
              name: "Pooja Sharma",
              location: capName,
              photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
              rating: 4.7,
              reviewsCount: 78,
              experience: "4+ years experience",
              languages: ["English", "Hindi"],
              specialty: `Cultural walks & street food in ${capName}`,
              specialities: ["Culture", "Local Food", "Artisan Walks"],
              pricePerDay: 850,
              availability: "Available for your dates",
              verified: false,
              demo: true,
              bio: `Cultural tour specialist passionate about local street delicacies, textiles, and architecture around ${capName}.`,
              sampleContact: `pooja.${cleanId}@yatrawise.local`
            }
          ];

      const dynamicFood = [
        {
          id: `food-${cleanId}-1`,
          name: `${capName} Authentic Thali House`,
          image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80",
          rating: 4.8,
          priceRange: "₹180 / person",
          distance: "Main Market Area",
          cuisine: "Authentic Regional Thali",
          specialtyDish: `Traditional ${capName} Deluxe Thali with Fresh Breads & Regional Curries`,
          isVeg: true,
          vegOptionsAvailable: true,
          tag: "Top Rated Local Eatery",
          description: `Family-run mess serving piping hot home-style meals, slow-cooked lentils, and freshly churned buttermilk.`
        },
        {
          id: `food-${cleanId}-2`,
          name: `${capName} Heritage Street Kitchen`,
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80",
          rating: 4.7,
          priceRange: "₹220 / person",
          distance: "Near Town Square",
          cuisine: "Regional Grills & Curries",
          specialtyDish: `Signature Spiced Curry & Tandoor Platters`,
          isVeg: false,
          vegOptionsAvailable: true,
          tag: "Crowd Favorite",
          description: `Popular dining spot celebrated for aromatic regional gravies and quick service.`
        }
      ];

      const dynamicAiLens = [
        {
          id: `ai-${cleanId}-1`,
          name: `${capName} Historic Monument`,
          confidence: "98.5% Match",
          type: "Historical & Architectural Landmark",
          period: "Heritage Monument",
          rating: 4.8,
          entryFee: "₹50 / person",
          cameraFee: "Free",
          bestHours: "09:00 AM – 11:30 AM",
          crowdStatus: "Moderate",
          funFact: `One of the most photographed and historically significant landmarks in the ${capName} region.`,
          image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: `ai-${cleanId}-2`,
          name: `${capName} Valley & Ridge View`,
          confidence: "96.8% Match",
          type: "Natural Vantage Point",
          period: "Natural Geological Formation",
          rating: 4.7,
          entryFee: "Free",
          cameraFee: "Free",
          bestHours: "04:30 PM – 06:00 PM",
          crowdStatus: "Low (Peaceful)",
          funFact: `Offers panoramic 360-degree views across ${capName} and nearby hills at twilight.`,
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
        }
      ];

      const dynamicLanguage = {
        primaryLanguage: "Hindi & Regional Language",
        languages: ["Hindi", "English", "Regional Language"],
        phrases: [
          { english: "Where is the nearest bus station?", local: "Nearest bus station kahan hai?", phonetic: "Nee-yur-est bus stay-shun ka-haan hai?" },
          { english: `How do I reach ${capName} center?`, local: `${capName} center kaise jaana hai?`, phonetic: `${capName} center kay-say jaa-naa hai?` },
          { english: "How much does this cost?", local: "Iska daam kitna hai?", phonetic: "Is-kaa daam kit-naa hai?" },
          { english: "Is this food spicy?", local: "Kya yeh khana teekha hai?", phonetic: "Kyaa yeh khaa-naa tee-khaa hai?" },
          { english: "Please call emergency help!", local: "Kripya madad ke liye call karein!", phonetic: "Krip-yaa ma-dad kay li-yay call ka-rayn!" }
        ]
      };

      const dynamicBingo = [
        { id: `b-${cleanId}-1`, title: `Explore historic landmarks in ${capName}`, points: 20, done: true },
        { id: `b-${cleanId}-2`, title: `Savor authentic local thali in ${capName}`, points: 15, done: true },
        { id: `b-${cleanId}-3`, title: `Watch sunset from a scenic viewpoint`, points: 15, done: false },
        { id: `b-${cleanId}-4`, title: `Browse handicrafts at the local bazaar`, points: 15, done: false },
        { id: `b-${cleanId}-5`, title: `Learn 3 words in the native regional dialect`, points: 15, done: false },
        { id: `b-${cleanId}-6`, title: `Capture a panoramic photo of ${capName}`, points: 20, done: false }
      ];

      return {
        id: `dest-dyn-${cleanId}`,
        name: capName,
        state: state,
        tagline: `Explore the heritage, culture, sights & flavors of ${capName}`,
        coords: { lat: safeLat, lng: safeLng },
        station: { code: cleanId.substring(0, 4).toUpperCase(), name: `${capName} Railway Station`, city: capName, lat: safeLat, lng: safeLng },
        altitude: "Regional Destination",
        bestSeason: "October to March",
        isEnhanced: false,
        highlights: [
          `Iconic heritage landmarks and cultural monuments in ${capName}`,
          `Scenic viewpoints, promenades and nature escapes`,
          `Authentic regional cuisine, bakeries and local street food`,
          `Handmade traditional crafts at lively local markets`
        ],
        seasons: [
          { season: "Winter (Oct – Feb)", status: "⭐ Prime Best Time", temp: "15°C – 28°C", weather: "Clear sunny days and pleasant evening breezes. Ideal for sightseeing.", crowd: "Moderate", approxCost: "Moderate seasonal rates" },
          { season: "Monsoon (Jul – Sep)", status: "Lush Season", temp: "22°C – 30°C", weather: "Verdant green landscapes and cool post-rain evenings.", crowd: "Low", approxCost: "Discounted rates" },
          { season: "Summer (Mar – Jun)", status: "Warm Weather", temp: "25°C – 37°C", weather: "Warm afternoons. Best for morning and dusk sightseeing.", crowd: "Low", approxCost: "Budget rates" }
        ],
        travelTips: [
          `Plan major outdoor sightseeing between 08:30 AM and 11:30 AM.`,
          `Carry drinking water and comfortable walking shoes.`,
          `Use YatraWise maps to plan efficient attraction routes.`,
          `Support the local community by buying handicrafts directly from local makers.`
        ],
        destinationInfo: {
          altitude: "Regional Destination",
          seasons: [
            { season: "Winter (Oct – Feb)", status: "⭐ Prime Best Time", temp: "15°C – 28°C", weather: "Clear sunny days and pleasant evening breezes.", crowd: "Moderate", approxCost: "Moderate seasonal rates" },
            { season: "Monsoon (Jul – Sep)", status: "Lush Season", temp: "22°C – 30°C", weather: "Verdant green landscapes and cool post-rain evenings.", crowd: "Low", approxCost: "Discounted rates" },
            { season: "Summer (Mar – Jun)", status: "Warm Weather", temp: "25°C – 37°C", weather: "Warm afternoons. Best for morning sightseeing.", crowd: "Low", approxCost: "Budget rates" }
          ],
          travelTips: [
            `Plan major outdoor sightseeing between 08:30 AM and 11:30 AM.`,
            `Carry drinking water and comfortable walking shoes.`,
            `Use YatraWise maps to plan efficient attraction routes.`,
            `Support the local community by buying handicrafts directly from local makers.`
          ]
        },
        attractions: dynamicAttractions,
        stays: dynamicStays,
        guides: dynamicGuides,
        food: dynamicFood,
        aiLensData: dynamicAiLens,
        languageAssistant: dynamicLanguage,
        touristBingo: dynamicBingo,
        transportDefaults: {
          trainFare: 550,
          busFare: 750,
          carFuelRate: 950
        },
        emergencyContacts: [
          { title: "National Emergency Helpline", number: "112", icon: "phoneCall", desc: "Toll-free 24/7 central emergency response" },
          { title: "Police Emergency", number: "100", icon: "shield", desc: `${capName} Police Station` },
          { title: "Medical Ambulance", number: "108", icon: "activity", desc: `${capName} Community Health Centre` },
          { title: "Railway Helpline (Rail Madad)", number: "139", icon: "train", desc: "Indian Railways 24/7 passenger assistance" },
          { title: "Tourist Helpline", number: "1363", icon: "compass", desc: "Official National Tourist Helpline" }
        ]
      };
    },

    // Generates an N-Day Itinerary dynamically for any destination and duration (1 to 7 days)
    generateDynamicItinerary: function(destData, daysCount = 2, preferences = []) {
      const attractions = destData?.attractions || [];
      const foods = destData?.food || [];
      const days = Math.max(1, Math.min(daysCount, 7));
      const result = [];
      const destName = destData?.name || "Destination";
      const destCoords = destData?.coords || { lat: 18.3273, lng: 82.8808 };

      const itemsPerDay = Math.max(2, Math.floor(Math.max(attractions.length, 2) / days));

      for (let d = 1; d <= days; d++) {
        const startIndex = ((d - 1) * itemsPerDay) % Math.max(1, attractions.length);
        let dayAttractions = attractions.slice(startIndex, startIndex + itemsPerDay);
        if (dayAttractions.length === 0 && attractions.length > 0) {
          dayAttractions = [attractions[(d - 1) % attractions.length]];
        }

        const dayActivities = [];
        const foodItem = foods.length > 0 ? foods[(d - 1) % foods.length] : null;

        // Morning arrival on Day 1
        if (d === 1) {
          dayActivities.push({
            id: `act-dyn-d1-arr`,
            time: "08:30 AM",
            type: "transport",
            icon: "mapPin",
            title: `Arrive in ${destName}`,
            description: `Check-in at your stay, unpack, freshen up, and prepare for your ${destName} exploration.`,
            duration: "45 mins",
            cost: 0,
            crowd: "Low",
            crowdLevel: "green",
            lat: destCoords.lat,
            lng: destCoords.lng,
            photo: dayAttractions[0]?.photo || "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
          });
        }

        // Main Morning Attraction
        if (dayAttractions[0]) {
          dayActivities.push({
            ...dayAttractions[0],
            id: `act-dyn-d${d}-1`,
            time: "10:00 AM"
          });
        }

        // Authentic Local Lunch
        if (foodItem) {
          const costVal = typeof foodItem.priceRange === "string"
            ? parseInt(foodItem.priceRange.replace(/[^\d]/g, "")) || 200
            : 200;

          dayActivities.push({
            id: `act-dyn-d${d}-lunch`,
            time: "01:00 PM",
            type: "food",
            icon: "utensils",
            title: `Authentic Lunch at ${foodItem.name}`,
            description: `Savor ${foodItem.specialtyDish || 'regional delicacies'}. ${foodItem.description || ''}`,
            duration: "1 hour",
            cost: costVal,
            rating: foodItem.rating || 4.8,
            crowd: "Moderate",
            crowdLevel: "yellow",
            lat: destCoords.lat + 0.005 * (d % 2 === 0 ? 1 : -1),
            lng: destCoords.lng + 0.005 * (d % 2 === 0 ? -1 : 1),
            photo: foodItem.image || "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=80"
          });
        }

        // Afternoon Attraction
        if (dayAttractions[1]) {
          dayActivities.push({
            ...dayAttractions[1],
            id: `act-dyn-d${d}-2`,
            time: "03:00 PM"
          });
        } else if (attractions[2]) {
          dayActivities.push({
            ...attractions[2],
            id: `act-dyn-d${d}-2-alt`,
            time: "03:00 PM"
          });
        }

        // Evening Activity
        if (d === days) {
          dayActivities.push({
            id: `act-dyn-d${d}-dep`,
            time: "06:30 PM",
            type: "transport",
            icon: "compass",
            title: `Evening Farewell & Return Transit`,
            description: `Collect souvenirs, pack bags, and begin your journey back with unforgettable memories of ${destName}.`,
            duration: "1 hour",
            cost: 0,
            crowd: "Moderate",
            crowdLevel: "yellow",
            lat: destCoords.lat,
            lng: destCoords.lng,
            photo: dayAttractions[dayAttractions.length - 1]?.photo || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
          });
        } else {
          dayActivities.push({
            id: `act-dyn-d${d}-eve`,
            time: "06:00 PM",
            type: "leisure",
            icon: "sun",
            title: `Evening Sunset Stroll & Local Market`,
            description: `Enjoy sunset views in ${destName}, browse local handicraft stalls, and relax at local tea points.`,
            duration: "1.5 hours",
            cost: 100,
            crowd: "Moderate",
            crowdLevel: "yellow",
            lat: destCoords.lat + 0.003,
            lng: destCoords.lng - 0.003,
            photo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80"
          });
        }

        const dayThemes = [
          `Heritage & Signature Sights of ${destName}`,
          `Nature Trails & Panoramic Ridges`,
          `Arts, Culture & Craft Traditions`,
          `Hidden Waterways & Forest Paths`,
          `Local Villages & Scenic Highlights`,
          `Highland Escapes & Photography Trails`,
          `Farewell Journeys & Regional Flavors`
        ];

        result.push({
          dayNum: d,
          title: `Day ${d}: ${dayThemes[d - 1] || `${destName} Exploration`}`,
          activities: dayActivities
        });
      }

      return result;
    }
  };

  // 4. STATION FINDER SERVICE
  const stationService = {
    findNearestMajorStation: function(lat, lng) {
      if (typeof lat !== "number" || typeof lng !== "number") {
        return { station: MAJOR_STATIONS[0], distanceToStationKm: 2 };
      }

      let nearest = MAJOR_STATIONS[0];
      let minDistance = Infinity;

      MAJOR_STATIONS.forEach(stn => {
        const dist = computeDistanceKm(lat, lng, stn.lat, stn.lng);
        if (dist < minDistance) {
          minDistance = dist;
          nearest = stn;
        }
      });

      return { station: nearest, distanceToStationKm: minDistance };
    }
  };

  // 5. DYNAMIC ROUTING SERVICE (CAR MODE)
  const routingService = {
    calculateCarRoute: function(startLat, startLng, destName = "Araku Valley", destLat, destLng, startName) {
      const destData = destinationService.getDestination(destName, { lat: destLat, lng: destLng });
      const targetLat = destLat || destData.coords.lat;
      const targetLng = destLng || destData.coords.lng;

      const straightLineKm = computeDistanceKm(startLat, startLng, targetLat, targetLng);
      const roadDistanceKm = Math.max(35, Math.round(straightLineKm * 1.28));

      const hours = Math.floor(roadDistanceKm / 55);
      const mins = Math.round(((roadDistanceKm / 55) - hours) * 60);
      const drivingTime = `${hours}h ${mins}m driving time`;

      const fuelLiters = (roadDistanceKm / 14);
      const fuelCost = Math.round(fuelLiters * 102);
      const tollCost = Math.round(roadDistanceKm * 0.95);

      let highwayRoute = "National Highway Corridor";
      const cleanDest = (destData.name || "").toLowerCase();

      if (cleanDest.includes("goa")) {
        highwayRoute = "NH-65 ➔ Raichur ➔ Belagavi ➔ Chorla Ghat ➔ Goa (NH-748)";
      } else if (cleanDest.includes("ooty")) {
        highwayRoute = "NH-44 ➔ Mysore Expressway ➔ Bandipur Tiger Reserve ➔ Mudumalai ➔ 36 Hairpin Ghat Road Ooty";
      } else if (cleanDest.includes("jaipur")) {
        highwayRoute = "NH-44 ➔ Nagpur ➔ Gwalior ➔ Agra-Jaipur Highway (NH-21)";
      } else if (cleanDest.includes("munnar") || cleanDest.includes("kerala")) {
        highwayRoute = "NH-44 / NH-544 ➔ Coimbatore ➔ Chalakudy ➔ Munnar Gap Road (NH-85)";
      } else if (cleanDest.includes("hampi")) {
        highwayRoute = "NH-67 / NH-50 ➔ Ballari ➔ Hospet Bypass ➔ Hampi Heritage Corridor";
      } else if (cleanDest.includes("hyderabad")) {
        highwayRoute = "NH-44 / NH-65 Express Highway Corridor";
      } else if (cleanDest.includes("araku")) {
        highwayRoute = "NH-65 ➔ Vijayawada ➔ NH-16 ➔ SH-39 Hill Ghat Corridor";
      } else {
        highwayRoute = `National Expressway ➔ ${startName || 'Origin'} to ${destData.name} State Corridor`;
      }

      const routeSteps = [
        {
          step: 1,
          instruction: `Depart from ${startName || 'your origin'} and merge onto the primary national expressway connector.`,
          distance: `${Math.round(roadDistanceKm * 0.15)} km`
        },
        {
          step: 2,
          instruction: "Cruise along 4-lane national corridor with multiple Fastag toll plazas and fuel pumps.",
          distance: `${Math.round(roadDistanceKm * 0.55)} km`
        },
        {
          step: 3,
          instruction: `Take regional exit towards ${destData.name} arterial corridor with countryside scenery.`,
          distance: `${Math.round(roadDistanceKm * 0.18)} km`
        },
        {
          step: 4,
          instruction: `Navigate final approach to ${destData.name} with viewpoints, rest bays, and photo spots.`,
          distance: `${Math.round(roadDistanceKm * 0.12)} km`
        },
        {
          step: 5,
          instruction: `Arrive at ${destData.name} center (${destData.altitude || 'Scenic Destination'}).`,
          distance: "Destination"
        }
      ];

      const stops = [
        {
          place: "Highway Food & Fuel Oasis",
          distanceFromRoute: "On National Expressway Corridor",
          recommendedStop: "45 mins",
          whyVisit: "Spacious highway rest stop with regional Indian dining, clean restrooms & EV chargers.",
          cost: "₹180 / person"
        },
        {
          place: "Scenic River Bridge Viewpoint",
          distanceFromRoute: "Midway Corridor Pullout",
          recommendedStop: "25 mins",
          whyVisit: "Panoramic bridge crossing with fresh coconut water and local snack stalls.",
          cost: "Free Scenic Spot"
        },
        {
          place: `${destData.name} Foothills Rest Bay`,
          distanceFromRoute: "15 km before destination",
          recommendedStop: "30 mins",
          whyVisit: "Vehicle brake check and cooling bay before entering destination township.",
          cost: "Free Parking"
        }
      ];

      return {
        distanceKm: roadDistanceKm,
        drivingTime: drivingTime,
        fuelEstimate: `₹${fuelCost.toLocaleString('en-IN')}`,
        tollsEstimate: `₹${tollCost.toLocaleString('en-IN')}`,
        highwayRoute: highwayRoute,
        scenicHighlights: destData.highlights ? destData.highlights[0] : `Scenic highway corridor leading into ${destData.name}.`,
        elevationProfile: `Ascends to ${destData.altitude || 'Destination Plateau'}`,
        bestDrivingHours: "05:30 AM – 10:30 AM (best visibility and cooler engine temperatures)",
        routeSteps: routeSteps,
        stops: stops,
        destinationCoords: { lat: targetLat, lng: targetLng }
      };
    }
  };

  // 6. DYNAMIC MULTI-MODAL TRANSPORT SERVICE (TRAIN, BUS, FLIGHT)
  const transportService = {
    getTransportConnections: function(startStation, destData, travelMode = "train") {
      const stn = startStation || MAJOR_STATIONS[0];
      const destStn = destData.station || { name: `${destData.name} Railway Station`, code: "STN", city: destData.name };

      const distance = computeDistanceKm(stn.lat, stn.lng, destData.coords.lat, destData.coords.lng);
      const cleanDest = (destData.name || "").toLowerCase();

      let trainLegs = [];
      let totalTrainFare = Math.max(280, Math.round(distance * 0.85));
      const hoursEst = Math.max(3, Math.round(distance / 52));
      const minsEst = Math.round((distance % 52) * 1.1);
      let totalTrainDuration = `${hoursEst}h ${minsEst}m`;

      if (cleanDest.includes("goa")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: `${destStn.name} (${destStn.code})`,
            trainName: "Goa Express / Nizamuddin-Vasco Special",
            trainNumber: "12780",
            departure: "08:15 AM",
            arrival: "10:30 PM",
            duration: "14h 15m",
            fare: 580,
            classAvailable: "Sleeper (SL) / 3AC / 2AC",
            onTimeRating: "94% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Traverses Western Ghats Dudhsagar waterfalls", "Pantry car coastal meals", "AC Executive class"]
          }
        ];
        totalTrainFare = 580;
        totalTrainDuration = "14h 15m (Direct Express Route)";
      } else if (cleanDest.includes("ooty")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: "Mettupalayam Junction (MTP)",
            trainName: "Nilgiri Superfast Express",
            trainNumber: "12671",
            departure: "08:45 PM",
            arrival: "06:15 AM (Next day)",
            duration: "9h 30m",
            fare: 440,
            classAvailable: "SL / 3AC / 2AC",
            onTimeRating: "96% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Comfortable overnight sleeper", "Direct gateway to Nilgiri toy train"]
          },
          {
            legIndex: 2,
            type: "layover",
            location: "Mettupalayam Junction (MTP)",
            duration: "55 mins Toy Train connection",
            tip: "Board the heritage meter-gauge steam train on Platform 2."
          },
          {
            legIndex: 3,
            from: "Mettupalayam (MTP)",
            to: "Udagamandalam (Ooty UAM)",
            trainName: "Nilgiri Mountain Railway Toy Train",
            trainNumber: "56136",
            departure: "07:10 AM",
            arrival: "12:00 PM",
            duration: "4h 50m",
            fare: 205,
            classAvailable: "First Class (FC) / Second Class (2S)",
            onTimeRating: "92% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["UNESCO World Heritage steam locomotive", "Crosses 250 bridges & 16 tunnels", "Stunning Nilgiri tea panoramas"]
          }
        ];
        totalTrainFare = 645;
        totalTrainDuration = "15h 15m (including Heritage Toy Train)";
      } else if (cleanDest.includes("jaipur")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: `${destStn.name} (${destStn.code})`,
            trainName: "Jaipur Superfast Express",
            trainNumber: "12975",
            departure: "09:30 PM (Overnight)",
            arrival: "02:45 PM (Next day)",
            duration: "17h 15m",
            fare: 760,
            classAvailable: "SL / 3AC / 2AC",
            onTimeRating: "95% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Smooth fast corridor", "Pantry car dinner & breakfast", "On-time arrival history"]
          }
        ];
        totalTrainFare = 760;
        totalTrainDuration = "17h 15m (Direct Corridor)";
      } else if (cleanDest.includes("araku")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: "Visakhapatnam Jn (VSKP)",
            trainName: "Godavari Superfast Express",
            trainNumber: "12728",
            departure: "06:30 AM",
            arrival: "02:00 PM",
            duration: "7h 30m",
            fare: 520,
            classAvailable: "Sleeper (SL) / 3AC / 2AC",
            onTimeRating: "96% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Fast express corridor", "Pantry car breakfast service", "Charging points at every bay"]
          },
          {
            legIndex: 2,
            type: "layover",
            location: "Visakhapatnam Jn (VSKP)",
            duration: "2h 15m Layover",
            tip: "Relax in the AC Executive Lounge on Platform 1 or try hot Andhra snacks and filter coffee."
          },
          {
            legIndex: 3,
            from: "Visakhapatnam Jn (VSKP)",
            to: `${destStn.name} (${destStn.code})`,
            trainName: "Visakhapatnam – Kirandul Passenger Special",
            trainNumber: "18551",
            departure: "04:15 PM",
            arrival: "08:00 PM",
            duration: "3h 45m",
            fare: 180,
            classAvailable: "Vistadome Glass Coach / 2S / SL",
            onTimeRating: "92% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Iconic Vistadome panoramic glass ceiling", "Crosses 58 tunnels and 84 scenic valley bridges", "Golden hour mountain ride"]
          }
        ];
        totalTrainFare = 700;
        totalTrainDuration = "13h 30m total (including 2h 15m scenic layover in Vizag)";
      } else if (cleanDest.includes("hampi")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: "Hosapete Junction (HPT - Hampi Gateway)",
            trainName: "Hampi Superfast Express",
            trainNumber: "16592",
            departure: "07:30 PM (Overnight)",
            arrival: "07:45 AM (Next day)",
            duration: "12h 15m",
            fare: 480,
            classAvailable: "Sleeper (SL) / 3AC / 2AC",
            onTimeRating: "95% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Direct gateway to UNESCO Hampi ruins", "Scenic Tungabhadra river crossing", "Pantry dinner service"]
          }
        ];
        totalTrainFare = 480;
        totalTrainDuration = "12h 15m (Overnight Express)";
      } else if (cleanDest.includes("munnar")) {
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: "Aluva Railway Station (AWY - Munnar Gateway)",
            trainName: "Kerala Express / Sabari Special",
            trainNumber: "12626",
            departure: "06:15 PM",
            arrival: "08:30 AM (Next morning)",
            duration: "14h 15m",
            fare: 580,
            classAvailable: "SL / 3AC / 2AC",
            onTimeRating: "94% on-time",
            demoBadge: "Demo Railway Data",
            highlights: ["Scenic Western Ghats corridor", "Gateway station for direct hill taxis to Munnar"]
          },
          {
            legIndex: 2,
            type: "layover",
            location: "Aluva (AWY)",
            duration: "45 mins transfer",
            tip: "Board the KSRTC Munnar Express or private cab at Aluva station stand."
          },
          {
            legIndex: 3,
            from: "Aluva Station (AWY)",
            to: "Munnar Town",
            trainName: "KSRTC Fast Passenger Hill Connector",
            trainNumber: "KL-Hill-85",
            departure: "09:30 AM",
            arrival: "01:00 PM",
            duration: "3h 30m",
            fare: 180,
            classAvailable: "Deluxe Bus / Taxi",
            onTimeRating: "96% on-time",
            demoBadge: "Demo Connector",
            highlights: ["Cheeyappara waterfalls enroute", "Scenic tea valley hairpin climb"]
          }
        ];
        totalTrainFare = 760;
        totalTrainDuration = "18h 15m (including hill connector)";
      } else {
        // Universal Dynamic Train Route for Any Destination
        trainLegs = [
          {
            legIndex: 1,
            from: `${stn.name} (${stn.code})`,
            to: `${destStn.name} (${destStn.code})`,
            trainName: `${destData.name} Superfast Express`,
            trainNumber: `${Math.floor(12000 + (destData.name.charCodeAt(0) * 117) % 70000)}`,
            departure: "08:30 PM (Overnight)",
            arrival: `${String(Math.max(6, (8 + Math.floor(hoursEst)) % 24)).padStart(2, "0")}:${String(minsEst).padStart(2, "0")} AM`,
            duration: `${hoursEst}h ${minsEst}m`,
            fare: totalTrainFare,
            classAvailable: "Sleeper (SL) / 3AC / 2AC",
            onTimeRating: "93% on-time",
            demoBadge: "Demo Railway Connection",
            highlights: [
              `Direct express corridor from ${stn.city} to ${destData.name}`,
              "Reserved Sleeper, 3AC & 2AC coaches with charging outlets",
              "Pantry car meals and refreshments available"
            ]
          }
        ];
      }

      const trainOptions = [
        {
          id: "best",
          title: "Best Connection 🥇",
          desc: "Optimal balance of scenic daylight timings, comfort, and reliability.",
          totalTime: totalTrainDuration,
          cost: totalTrainFare,
          badge: "Recommended"
        },
        {
          id: "fastest",
          title: "Fastest ⚡",
          desc: "Superfast intercity express + express taxi connection.",
          totalTime: `${Math.max(3, parseInt(totalTrainDuration) - 3)}h 30m`,
          cost: totalTrainFare + 850,
          badge: "Fastest overall"
        },
        {
          id: "cheapest",
          title: "Cheapest 💰",
          desc: "Standard Sleeper / Express Passenger service.",
          totalTime: `${parseInt(totalTrainDuration) + 2}h 15m`,
          cost: Math.max(180, Math.round(totalTrainFare * 0.7)),
          badge: "Maximum savings"
        }
      ];

      const busConnection = {
        routeSummary: `${stn.city} ➔ National Expressway ➔ ${destData.name}`,
        operator: destData.transportDefaults?.busOperator || "State Roadways Multi-Axle Volvo AC Sleeper",
        departure: "08:30 PM (Overnight Sleeper)",
        arrival: `07:30 AM (Next morning in ${destData.name})`,
        duration: `${Math.max(4, Math.round(distance / 45))} hours`,
        estimatedFare: `₹${Math.round(totalTrainFare * 1.35)} / person`,
        amenities: ["AC Sleeper berths", "Water bottle provided", "USB charging", "Luggage hold"]
      };

      const flightConnection = {
        routeSummary: `${stn.city} Airport ➔ ${destData.airport?.code || 'Nearby Hub'} ➔ ${destData.name} Cab`,
        totalTravelTime: "4h 15m total including transfers",
        flightLeg: `Direct / 1-Stop Flight from ${stn.city} (1h 30m)`,
        transferLeg: `Prepaid taxi to ${destData.name} center (2h 45m scenic highway)`,
        estimatedCost: `₹3,600 (Airfare) + ₹1,200 (Cab) = ₹4,800 / person`
      };

      return {
        train: {
          legs: trainLegs,
          totalFare: totalTrainFare,
          totalDuration: totalTrainDuration,
          options: trainOptions,
          routeSummary: `${stn.name} ➔ ${destStn.name}`
        },
        bus: busConnection,
        flight: flightConnection
      };
    }
  };

  // Expose to window
  window.YATRA_SERVICES = {
    geolocationService,
    geocodingService,
    destinationService,
    stationService,
    routingService,
    transportService,
    MAJOR_STATIONS,
    INDIAN_CITIES_GEO_CACHE,
    computeDistanceKm
  };
})();
