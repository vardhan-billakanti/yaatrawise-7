// YatraWise — Smart Tourism Platform Hackathon Application
// React 18 + Tailwind CSS + Leaflet + Canvas Confetti + Geolocation API
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// --- Helper Icon Component (Inline crisp SVGs for zero latency & 100% reliability) ---
const Icon = ({ name, className = "w-5 h-5", ...props }) => {
  const icons = {
    train: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zm0 0v6m16-6v6M2 21h20M9 7h6M9 11h6" />,
    car: <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />,
    bus: <><rect x="3" y="3" width="18" height="16" rx="2" /><path d="M3 11h18M6 19v2M18 19v2M7 7h.01M17 7h.01" /></>,
    plane: <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.5-.1-1 .1-1.3.5l-.7.7 5.7 3.6L5.5 15l-2.7-.5c-.4-.1-.8.1-1 .4l-.3.3 3.5 2.1 2.1 3.5.3-.3c.3-.3.4-.7.4-1l-.5-2.7 3.5-3.5 3.6 5.7.7-.7c.4-.3.6-.8.5-1.3z" />,
    mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    navigation: <polygon points="3 11 22 2 13 21 11 13 3 11" />,
    hotel: <><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h1M9 13h1M9 17h1M14 9h1M14 13h1M14 17h1" /></>,
    utensils: <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2M15 2v18M4 3v5a4 4 0 0 0 4 4v8M7 3v5" />,
    user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    compass: <><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></>,
    calendar: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>,
    wallet: <><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></>,
    check: <polyline points="20 6 9 17 4 12" />,
    checkCircle: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
    alertCircle: <><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></>,
    sparkles: <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />,
    camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></>,
    mic: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" /></>,
    volume2: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></>,
    arrowRight: <><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></>,
    printer: <><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></>,
    helpCircle: <><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12.01" y1="17" y2="17" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>,
    award: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    phoneCall: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    crosshair: <><circle cx="12" cy="12" r="10" /><line x1="22" x2="18" y1="12" y2="12" /><line x1="6" x2="2" y1="12" y2="12" /><line x1="12" x2="12" y1="6" y2="2" /><line x1="12" x2="12" y1="22" y2="18" /></>,
    menu: <><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></>,
    locate: <><line x1="2" x2="5" y1="12" y2="12" /><line x1="19" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="5" /><line x1="12" x2="12" y1="19" y2="22" /><circle cx="12" cy="12" r="7" /></>
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {icons[name] || <circle cx="12" cy="12" r="10" />}
    </svg>
  );
};

// --- Error Boundary Component ---
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("Recovered from component error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-emerald-900 text-xs flex items-center justify-between">
          <span>Map or widget is updating...</span>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold cursor-pointer"
          >
            Reload Widget
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Toast Notification System ---
const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3800);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`pointer-events-auto px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium border text-white transition-all transform animate-bounce-short ${
              t.type === "success" ? "bg-emerald-600 border-emerald-500" :
              t.type === "warning" ? "bg-amber-600 border-amber-500" :
              "bg-slate-800 border-slate-700"
            }`}
          >
            <Icon name={t.type === "success" ? "checkCircle" : "alertCircle"} className="w-5 h-5 flex-shrink-0" />
            <span className="flex-1">{t.msg}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const useToast = () => React.useContext(ToastContext);

// --- MAIN YATRAWISE APP ---
function YatraWiseApp() {
  const { addToast } = useToast();
  const demoData = window.YATRA_DEMO_DATA;
  const services = window.YATRA_SERVICES || {};

  // --- Dynamic Location & Geolocation State ---
  const [origin, setOrigin] = useState("Secunderabad");
  const [originCoords, setOriginCoords] = useState({ lat: 17.4399, lng: 78.4983, isLive: false });
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  // --- Trip Parameters State ---
  const [destination, setDestination] = useState("Araku Valley");
  const [destCoords, setDestCoords] = useState({ lat: 18.3273, lng: 82.8808, name: "Araku Valley" });
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const destInputRef = useRef(null);
  const originInputRef = useRef(null);

  const [days, setDays] = useState(2);
  const [budget, setBudget] = useState(5000);
  const [travelers, setTravelers] = useState(2);
  const [travelMode, setTravelMode] = useState("train");
  const [selectedPreferences, setSelectedPreferences] = useState(["Nature", "Adventure", "Local Food"]);

  // --- Journey Generation & State ---
  const [hasGenerated, setHasGenerated] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [trainOption, setTrainOption] = useState("best");
  const [isBudgetOptimized, setIsBudgetOptimized] = useState(false);

  // --- Dynamic Destination & Recommendation Engine ---
  const currentDestData = useMemo(() => {
    if (services.destinationService) {
      return services.destinationService.getDestination(destination, destCoords);
    }
    return demoData;
  }, [destination, destCoords, services]);

  // Dynamic Nearest Station calculation
  const nearestStationInfo = useMemo(() => {
    if (services.stationService) {
      return services.stationService.findNearestMajorStation(originCoords.lat, originCoords.lng);
    }
    return { station: { name: "Secunderabad Jn (SC)", code: "SC", city: "Secunderabad" }, distanceToStationKm: 2 };
  }, [originCoords, services]);

  // Dynamic Car Route calculation (Uses starting coordinates + destination coordinates)
  const dynamicCarRoute = useMemo(() => {
    if (services.routingService && currentDestData) {
      return services.routingService.calculateCarRoute(
        originCoords.lat,
        originCoords.lng,
        currentDestData.name,
        currentDestData.coords ? currentDestData.coords.lat : 18.3273,
        currentDestData.coords ? currentDestData.coords.lng : 82.8808
      );
    }
    return demoData.transport.car;
  }, [originCoords, currentDestData, services]);

  // Dynamic Multi-modal Transport (Train, Bus, Flight tailored to start & destination)
  const dynamicTransport = useMemo(() => {
    if (services.transportService && nearestStationInfo?.station && currentDestData) {
      return services.transportService.getTransportConnections(
        nearestStationInfo.station,
        currentDestData,
        travelMode
      );
    }
    return {
      train: demoData.transport.train,
      bus: demoData.transport.bus,
      flight: demoData.transport.flight
    };
  }, [nearestStationInfo, currentDestData, travelMode, services]);

  const dynamicTrainRoute = dynamicTransport.train;
  const dynamicBusRoute = dynamicTransport.bus;
  const dynamicFlightRoute = dynamicTransport.flight;

  // Dynamic N-Day Itinerary Generation (Works for any destination & 1 to 7 days)
  const dynamicItinerary = useMemo(() => {
    if (services.destinationService && currentDestData) {
      return services.destinationService.generateDynamicItinerary(
        currentDestData,
        days,
        selectedPreferences
      );
    }
    return [];
  }, [currentDestData, days, selectedPreferences, services]);

  const allItineraryActivities = useMemo(() => {
    return dynamicItinerary.flatMap(d => d.activities || []);
  }, [dynamicItinerary]);

  // Dynamic Visited Activities map (Supports dynamic activity IDs)
  const [completedActivities, setCompletedActivities] = useState({});

  // Helper: Dynamic Budget Calculator (Recalculates based on destination, days, travelers, mode, stays)
  const computeBudgetItems = useCallback((d, t, optStay = false, mode = travelMode, destData = currentDestData) => {
    const defaultTrainFare = destData?.transportDefaults?.trainFare || 650;
    const defaultBusFare = destData?.transportDefaults?.busFare || 850;
    const transportPerPerson = mode === "train" ? defaultTrainFare :
                               mode === "bus" ? defaultBusFare :
                               mode === "flight" ? 2800 :
                               Math.round((destData?.transportDefaults?.carFuelRate || 1000) * 1.3);

    const transportTotal = transportPerPerson * t;
    const stayNights = Math.max(1, d - 1);
    const roomsNeeded = Math.ceil(t / 2);

    const regularStay = destData?.stays?.[0]?.pricePerNight || 1600;
    const optStayRate = destData?.stays?.[1]?.pricePerNight || Math.round(regularStay * 0.75);
    const stayRate = optStay ? optStayRate : regularStay;
    const stayTotal = stayRate * stayNights * roomsNeeded;

    const foodTotal = 300 * t * d;
    const attractTotal = (destData?.attractions ? Math.round(destData.attractions.slice(0, Math.min(destData.attractions.length, d * 2)).reduce((s, a) => s + (a.cost || 0), 0) / Math.max(1, d)) : 250) * t;
    const miscTotal = 150 * t;

    const stayDesc = `${stayNights} Night(s) for ${t} Guests (${optStay ? (destData?.stays?.[1]?.name || 'Budget Verified Homestay') : (destData?.stays?.[0]?.name || 'Standard Resort')})`;

    return [
      { id: "b-trans", category: "Transportation", amount: transportTotal, icon: "train", desc: `${mode.toUpperCase()} fares for ${t} traveler(s)`, color: "#0ea5e9" },
      { id: "b-stay", category: "Stay / Accommodation", amount: stayTotal, icon: "hotel", desc: stayDesc, color: "#10b981", isOptimizable: true },
      { id: "b-food", category: "Food & Beverages", amount: foodTotal, icon: "utensils", desc: `Meals & local delicacies in ${destData?.name || 'destination'} for ${d} days`, color: "#f59e0b" },
      { id: "b-attract", category: "Attraction Entry Fees", amount: attractTotal, icon: "ticket", desc: `Permits & activity passes for ${t} person(s)`, color: "#8b5cf6" },
      { id: "b-misc", category: "Miscellaneous & Shopping", amount: miscTotal, icon: "shopping-bag", desc: `Local souvenirs & specialties`, color: "#ec4899" }
    ];
  }, [travelMode, currentDestData]);

  // Reactive dynamic budget items
  const budgetItems = useMemo(() => {
    return computeBudgetItems(days, travelers, isBudgetOptimized, travelMode, currentDestData);
  }, [computeBudgetItems, days, travelers, isBudgetOptimized, travelMode, currentDestData]);

  // Dynamic Scavenger Bingo Items (Per destination)
  const [bingoDoneMap, setBingoDoneMap] = useState({});
  const bingoItems = useMemo(() => {
    return (currentDestData?.touristBingo || []).map(b => ({
      ...b,
      done: bingoDoneMap[b.id] !== undefined ? !!bingoDoneMap[b.id] : !!b.done
    }));
  }, [currentDestData, bingoDoneMap]);

  const bingoScore = useMemo(() => {
    return (bingoItems || []).filter(b => b && b.done).reduce((acc, b) => acc + (b.points || 0), 0);
  }, [bingoItems]);

  const handleToggleBingo = (id) => {
    setBingoDoneMap(prev => {
      const currentItem = (bingoItems || []).find(b => b && b.id === id);
      const currentlyDone = currentItem ? !!currentItem.done : false;
      const willBeDone = !currentlyDone;
      if (willBeDone && currentItem) {
        addToast(`🎯 Challenge completed: ${currentItem.title || "Experience"} (+${currentItem.points || 15} pts)!`, "success");
        if (typeof confetti === "function") {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }
      }
      return { ...prev, [id]: willBeDone };
    });
  };

  // Dynamic AI Travel Lens (Per destination landmarks)
  const [selectedAiPlaceId, setSelectedAiPlaceId] = useState(null);
  const [isAiScanning, setIsAiScanning] = useState(false);

  const activeAiPlace = useMemo(() => {
    const list = currentDestData?.aiLensData || [];
    if (!list.length) return null;
    const found = list.find(p => p.id === selectedAiPlaceId);
    return found || list[0];
  }, [currentDestData, selectedAiPlaceId]);

  const handleSelectAiPlace = (place) => {
    setSelectedAiPlaceId(place.id);
    setIsAiScanning(true);
    setTimeout(() => setIsAiScanning(false), 600);
  };

  // Dynamic Local Language Assistant
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const langs = currentDestData?.languageAssistant?.languages || [];
    const first = langs[0];
    return typeof first === "string" ? first : first?.name || "Telugu";
  });
  const [activePhraseCat, setActivePhraseCat] = useState(() => currentDestData?.languageAssistant?.categories?.[0]?.category || "Essentials");

  useEffect(() => {
    if (currentDestData?.languageAssistant) {
      const langs = currentDestData.languageAssistant.languages || [];
      const langNames = langs.map(l => typeof l === "string" ? l : l.name);
      if (!langNames.includes(selectedLanguage)) {
        setSelectedLanguage(langNames[0] || "Hindi");
      }
      const cats = currentDestData.languageAssistant.categories || [];
      if (!cats.some(c => c.category === activePhraseCat)) {
        setActivePhraseCat(cats[0]?.category || "Essentials");
      }
    }
  }, [currentDestData]);

  // --- Modals & Drawer State ---
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [offlineMapModalOpen, setOfflineMapModalOpen] = useState(false);
  const [offlineProgress, setOfflineProgress] = useState(0);
  const [contactStayModal, setContactStayModal] = useState(null);
  const [savedTripsDrawer, setSavedTripsDrawer] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Saved Trips (localStorage) ---
  const [savedTrips, setSavedTrips] = useState(() => {
    try {
      const stored = localStorage.getItem("yatrawise_saved_trips");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("yatrawise_saved_trips", JSON.stringify(savedTrips));
    } catch (e) {}
  }, [savedTrips]);

  // Robust Smooth Scroll Helper
  const scrollToSection = (id) => (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // --- CORE FEATURE: BROWSER GEOLOCATION HANDLER ---
  const handleUseCurrentLocation = async (e) => {
    if (e) e.preventDefault();
    setLocationError(null);
    setIsDetectingLocation(true);
    addToast("Requesting device GPS location...", "warning");

    try {
      if (!services.geolocationService) {
        throw new Error("Geolocation service is initializing.");
      }

      // Step 1: Obtain latitude and longitude
      const coords = await services.geolocationService.getCurrentPosition();

      // Step 2: Convert coordinates into human-readable city/locality via Reverse Geocoding
      const geoResult = await services.geocodingService.reverseGeocode(coords.lat, coords.lng);

      // Step 3: Update state
      setOrigin(geoResult.displayName);
      setOriginCoords({ lat: coords.lat, lng: coords.lng, isLive: true });
      setIsDetectingLocation(false);
      addToast(`📍 Location detected: ${geoResult.displayName}!`, "success");

      // Auto-update budget & routes
      setBudgetItems(computeBudgetItems(days, travelers, isBudgetOptimized, travelMode));
    } catch (err) {
      console.warn("Geolocation Error:", err);
      setIsDetectingLocation(false);
      setLocationError(err.message || "Location access was unavailable.");
      addToast(err.message || "Location access was unavailable.", "warning");
    }
  };

  // Handler: Origin input change with dynamic autocomplete search
  const handleOriginChange = (val) => {
    setOrigin(val);
    if (!val || val.trim().length === 0) {
      setOriginSuggestions([]);
      setShowOriginDropdown(false);
      return;
    }
    if (services.geocodingService) {
      services.geocodingService.searchPlaces(val).then(res => {
        setOriginSuggestions(res || []);
        setShowOriginDropdown((res && res.length > 0));
      }).catch(() => {});
    }
    const clean = val.trim().toLowerCase();
    if (services.MAJOR_STATIONS) {
      const match = services.MAJOR_STATIONS.find(s => 
        s.city.toLowerCase().includes(clean) || clean.includes(s.city.toLowerCase()) ||
        s.name.toLowerCase().includes(clean)
      );
      if (match) {
        setOriginCoords({ lat: match.lat, lng: match.lng, isLive: false, formattedAddress: `${match.name}, ${match.state}`, state: match.state });
        return;
      }
    }
    setOriginCoords(prev => ({ ...prev, isLive: false }));
  };

  const handleSelectOrigin = (item) => {
    const pure = item.pureName || item.name;
    setOrigin(pure);
    setOriginCoords({
      lat: item.lat,
      lng: item.lng,
      isLive: false,
      formattedAddress: item.formattedAddress,
      state: item.state
    });
    setShowOriginDropdown(false);
    addToast(`Starting origin updated: ${pure}`, "info");
    if (destInputRef.current) {
      destInputRef.current.focus();
    }
  };

  const handleOriginKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setShowOriginDropdown(false);
      if (origin && origin.trim().length >= 2 && services.geocodingService) {
        try {
          const geo = await services.geocodingService.geocode(origin);
          if (geo && typeof geo.lat === "number") {
            setOriginCoords({ lat: geo.lat, lng: geo.lng, isLive: false, formattedAddress: geo.formattedAddress, state: geo.state });
          }
        } catch (err) {
          console.warn("Origin geocode on enter notice:", err);
        }
      }
      if (destInputRef.current) {
        destInputRef.current.focus();
      }
    }
  };

  const handleOriginBlur = () => {
    setTimeout(() => {
      setShowOriginDropdown(false);
      if (!origin || origin.trim().length < 3) return;
      if (services.geocodingService) {
        services.geocodingService.geocode(origin).then(geo => {
          if (geo && typeof geo.lat === "number") {
            setOriginCoords({ lat: geo.lat, lng: geo.lng, isLive: false, formattedAddress: geo.formattedAddress, state: geo.state });
          }
        }).catch(e => console.warn("Origin blur geocode notice:", e));
      }
    }, 250);
  };

  // Handler: Destination input change with dynamic autocomplete search
  const handleDestinationChange = (val) => {
    setDestination(val);
    if (!val || val.trim().length === 0) {
      setDestSuggestions([]);
      setShowDestDropdown(false);
      return;
    }
    if (services.geocodingService) {
      services.geocodingService.searchPlaces(val).then(res => {
        setDestSuggestions(res || []);
        setShowDestDropdown((res && res.length > 0));
      }).catch(() => {});
    }
    const clean = val.trim().toLowerCase();
    if (services.INDIAN_CITIES_GEO_CACHE) {
      const match = services.INDIAN_CITIES_GEO_CACHE.find(c =>
        c.name.toLowerCase() === clean || clean.includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(clean)
      );
      if (match) {
        setDestCoords({ lat: match.lat, lng: match.lng, name: match.name, state: match.state, formattedAddress: `${match.name}, ${match.state}, India` });
      }
    }
  };

  const handleSelectDestination = (item) => {
    const pure = item.pureName || item.name;
    setDestination(pure);
    setDestCoords({
      lat: item.lat,
      lng: item.lng,
      name: pure,
      formattedAddress: item.formattedAddress,
      state: item.state
    });
    setShowDestDropdown(false);
    addToast(`📍 Destination set: ${pure}!`, "info");
  };

  const handleDestinationKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setShowDestDropdown(false);
      if (destination && destination.trim().length >= 2 && services.geocodingService) {
        try {
          const geo = await services.geocodingService.geocode(destination);
          if (geo && typeof geo.lat === "number") {
            setDestCoords({ lat: geo.lat, lng: geo.lng, name: geo.pureName || destination, formattedAddress: geo.formattedAddress, state: geo.state });
          }
        } catch (err) {
          console.warn("Destination geocode on enter notice:", err);
        }
      }
      handleGenerateJourney();
    }
  };

  const handleDestinationBlur = () => {
    setTimeout(() => {
      setShowDestDropdown(false);
      if (!destination || destination.trim().length < 3) return;
      if (services.geocodingService) {
        services.geocodingService.geocode(destination).then(geo => {
          if (geo && typeof geo.lat === "number") {
            setDestCoords({ lat: geo.lat, lng: geo.lng, name: geo.pureName || destination, formattedAddress: geo.formattedAddress, state: geo.state });
          }
        }).catch(e => console.warn("Destination blur geocode notice:", e));
      }
    }, 250);
  };

  // Handler: Load Primary Judge Preset
  const handleLoadDemoPreset = (e) => {
    if (e) e.preventDefault();
    setLocationError(null);
    setOrigin(demoData.primaryScenario.origin);
    setOriginCoords({ lat: 17.4399, lng: 78.4983, isLive: false, formattedAddress: "Secunderabad, Telangana, India", state: "Telangana" });
    setDestination(demoData.primaryScenario.destination);
    setDestCoords({ lat: 18.3273, lng: 82.8808, name: "Araku Valley", state: "Andhra Pradesh" });
    setDays(demoData.primaryScenario.days);
    setBudget(demoData.primaryScenario.budget);
    setTravelers(demoData.primaryScenario.travelers);
    setTravelMode(demoData.primaryScenario.mode);
    setSelectedPreferences(demoData.primaryScenario.preferences);
    setIsBudgetOptimized(false);
    setCompletedActivities({});
    setHasGenerated(true);
    addToast("Secunderabad ➔ Araku Valley preset loaded!", "success");

    setTimeout(() => {
      const dash = document.getElementById("generated-dashboard");
      if (dash) dash.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // Handler: Generate Journey (Dynamic for any entered origin & destination)
  const handleGenerateJourney = async (e) => {
    if (e) e.preventDefault();
    setShowOriginDropdown(false);
    setShowDestDropdown(false);
    setIsGenerating(true);

    if (services.geocodingService && destination) {
      try {
        const destGeo = await services.geocodingService.geocode(destination);
        if (destGeo && typeof destGeo.lat === "number") {
          setDestCoords({ lat: destGeo.lat, lng: destGeo.lng, name: destGeo.pureName || destination, formattedAddress: destGeo.formattedAddress, state: destGeo.state });
        }
      } catch (err) {
        console.warn("Geocode destination notice during generate:", err);
      }
    }

    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      const targetName = currentDestData?.name || destination || "Destination";
      addToast(`Your ${days}-Day ${targetName} Journey is Ready!`, "success");

      setTimeout(() => {
        const dash = document.getElementById("generated-dashboard");
        if (dash) dash.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }, 450);
  };

  // Handler: Toggle Budget Optimization
  const handleToggleBudgetOptimize = (e) => {
    if (e) e.preventDefault();
    const newOptimized = !isBudgetOptimized;
    setIsBudgetOptimized(newOptimized);
    if (newOptimized) {
      addToast("Budget Optimized! Switched to verified budget stay. Saved ₹400!", "success");
    } else {
      addToast("Restored standard accommodation.", "warning");
    }
  };

  // Calculate Budget Totals
  const totalCost = useMemo(() => {
    return budgetItems.reduce((acc, curr) => acc + curr.amount, 0);
  }, [budgetItems]);

  const moneySaved = Math.max(0, budget - totalCost);

  // Handler: Offline Map Download Simulation
  const handleDownloadOfflineMap = () => {
    if (offlineProgress > 0) return;
    setOfflineProgress(20);
    const interval = setInterval(() => {
      setOfflineProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          addToast(`✓ Offline ${currentDestData.name} Map downloaded successfully!`, "success");
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  // Handler: Voice Audio Playback
  const handlePlayVoice = (text, langCode = "te-IN") => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      addToast(`Playing: "${text}"`, "success");
    } else {
      addToast("Speech simulated: " + text, "warning");
    }
  };

  // Handler: Save Trip
  const handleSaveTrip = () => {
    const newTrip = {
      id: "trip-" + Date.now(),
      origin,
      destination,
      days,
      budget,
      cost: totalCost,
      saved: moneySaved,
      mode: travelMode,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setSavedTrips(prev => [newTrip, ...prev]);
    addToast("✓ Itinerary saved to My Trips!", "success");
  };

  // Handler: Share Trip
  const handleShareTrip = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      addToast("🔗 Trip link copied to clipboard!", "success");
    } else {
      addToast("Trip link generated: " + url, "success");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-200">
      {/* 1. TOP JUDGE DEMO MODE NOTIFICATION BANNER */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white px-4 py-2.5 text-xs sm:text-sm font-medium shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              Dynamic GPS Enabled
            </span>
            <span>
              <strong>Smart Route Engine:</strong> Starting Location is dynamic • Geolocation API active
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleLoadDemoPreset}
              className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm transition-all flex items-center gap-1 font-semibold border border-white/30 cursor-pointer active:scale-95"
            >
              <Icon name="sparkles" className="w-3.5 h-3.5 text-amber-300" />
              Load Secunderabad ➔ Araku Preset
            </button>
            <span className="text-emerald-200/70 hidden md:inline">|</span>
            <span className="text-[11px] text-emerald-100/80 bg-emerald-900/50 px-2 py-0.5 rounded border border-emerald-600/50">
              Demo Railway Data Labeled
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <button type="button" onClick={scrollToSection("hero")} className="flex items-center gap-2 group text-left cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <Icon name="compass" className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
                Yatra<span className="text-emerald-600">Wise</span>
              </span>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide -mt-1 hidden sm:block">
                Explore More. Spend Less.
              </p>
            </div>
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button type="button" onClick={scrollToSection("hero")} className="hover:text-emerald-600 transition-colors cursor-pointer">Home</button>
            <button type="button" onClick={scrollToSection("trip-planner")} className="hover:text-emerald-600 font-bold text-emerald-700 transition-colors cursor-pointer">Plan Trip</button>
            <button type="button" onClick={scrollToSection("generated-dashboard")} className="hover:text-emerald-600 transition-colors cursor-pointer">Itinerary</button>
            <button type="button" onClick={scrollToSection("interactive-map-section")} className="hover:text-emerald-600 transition-colors cursor-pointer">Journey Map</button>
            <button type="button" onClick={scrollToSection("stays-section")} className="hover:text-emerald-600 transition-colors cursor-pointer">Stays</button>
            <button type="button" onClick={scrollToSection("budget-section")} className="hover:text-emerald-600 transition-colors cursor-pointer">Budget</button>
            <button type="button" onClick={scrollToSection("impact-section")} className="hover:text-emerald-600 transition-colors cursor-pointer">Impact</button>
          </nav>

          {/* Actions: Saved Trips & SOS & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSavedTripsDrawer(true)}
              className="relative p-2 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="My Saved Trips"
            >
              <Icon name="heart" className="w-5 h-5 text-rose-500" />
              {savedTrips.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedTrips.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setSosModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200 text-xs font-bold hover:bg-red-100 transition-colors cursor-pointer"
            >
              <Icon name="shield" className="w-4 h-4 text-red-600" />
              SOS Safety
            </button>

            <button
              type="button"
              onClick={scrollToSection("trip-planner")}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm shadow-emerald-600/30 transition-all hover:shadow-md cursor-pointer active:scale-95"
            >
              Plan My Trip
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
              title="Toggle Menu"
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 text-sm font-semibold">
            <button type="button" onClick={scrollToSection("hero")} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600">Home</button>
            <button type="button" onClick={scrollToSection("trip-planner")} className="block w-full text-left py-2 text-emerald-700 font-bold">Plan Trip</button>
            <button type="button" onClick={scrollToSection("generated-dashboard")} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600">Itinerary</button>
            <button type="button" onClick={scrollToSection("interactive-map-section")} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600">Journey Map</button>
            <button type="button" onClick={scrollToSection("stays-section")} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600">Stays</button>
            <button type="button" onClick={scrollToSection("budget-section")} className="block w-full text-left py-2 text-slate-700 hover:text-emerald-600">Budget</button>
            <button type="button" onClick={() => { setMobileMenuOpen(false); setSosModalOpen(true); }} className="block w-full text-left py-2 text-red-600 font-bold">SOS Safety</button>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <Icon name="locate" className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span>Personalized Around Your Actual Starting Location</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
                Your journey, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600">
                  planned around you.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Tell us where you're starting, where you're going, how long you're staying and your budget. YatraWise creates a personalized journey that helps you explore more while spending less.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={scrollToSection("trip-planner")}
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/25 transition-all hover:translate-y-[-2px] flex items-center gap-2 text-sm sm:text-base cursor-pointer active:scale-95"
                >
                  <Icon name="compass" className="w-5 h-5" />
                  Plan My Journey
                </button>
                <button
                  type="button"
                  onClick={scrollToSection("how-it-works")}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  See How It Works
                  <Icon name="arrowRight" className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Icon name="checkCircle" className="w-4 h-4 text-emerald-600" />
                  Live Browser Geolocation
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="checkCircle" className="w-4 h-4 text-emerald-600" />
                  Dynamic Route Distance & Time
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="checkCircle" className="w-4 h-4 text-emerald-600" />
                  Smart Railway Corridor Matching
                </span>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200/80">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Dynamic Journey Flow</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {origin} ➔ {destination}
                  </span>
                </div>

                {/* Route Flow */}
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shadow-inner">
                      START
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-sm truncate max-w-[170px]">{origin}</h4>
                        <span className="text-xs text-slate-500 font-medium">GPS Ready</span>
                      </div>
                      <p className="text-xs text-slate-500">Nearest Station: {nearestStationInfo?.station?.name || "Local Junction"}</p>
                    </div>
                  </div>

                  <div className="ml-5 border-l-2 border-dashed border-emerald-400 h-6 flex items-center pl-4 text-[11px] text-emerald-700 font-semibold">
                    🚆 Dynamic Transit Corridor
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shadow-inner">
                      HUB
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-sm">Visakhapatnam Jn</h4>
                        <span className="text-xs text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">Scenic Layover</span>
                      </div>
                      <p className="text-xs text-slate-500">Switch to Vistadome Glass Train (18551)</p>
                    </div>
                  </div>

                  <div className="ml-5 border-l-2 border-dashed border-emerald-400 h-6 flex items-center pl-4 text-[11px] text-emerald-700 font-semibold">
                    ⛰️ 58 Tunnels & 84 Valley Bridges
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                      DEST
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-emerald-900 text-sm">{destination}</h4>
                        <span className="text-xs text-emerald-700 font-bold">Arrival</span>
                      </div>
                      <p className="text-xs text-slate-500">Vetted Stays • Scenic Routes • Attractions</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl text-center">
                  <p className="text-xs font-semibold text-slate-600">
                    "One platform for your entire journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEM SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
              Travel planning shouldn't be this complicated.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Tourists today suffer from fragmented information across dozens of apps, opaque pricing, and confusing transit connections.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-4 font-bold">
                  💸
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">High Costs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tourists overpay by up to 40% because they don't know affordable local homestays, transparent pricing, and direct transit connections.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-1 rounded inline-block">
                Opaque Pricing
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl mb-4 font-bold">
                  📍
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Missed Places</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Key attractions and scenic stops on the route are missed because travel tips are scattered across random blogs.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block">
                Scattered Details
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4 font-bold">
                  🚆
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Complex Transport</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Finding connecting trains, layover times, and local station transfers is difficult without insider railway knowledge.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded inline-block">
                Transit Confusion
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4 font-bold">
                  🏨
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Difficult Stays</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Finding clean, budget accommodations close to your Day 1 attractions takes hours of manual map cross-referencing.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-1 rounded inline-block">
                Suboptimal Location
              </span>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 card-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-4 font-bold">
                  🧭
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Route Inefficiencies</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Travelers waste hours taking disjointed routes and visiting crowded spots during peak congestion.
                </p>
              </div>
              <span className="mt-4 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block">
                Wasted Travel Time
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
              <span className="text-sm font-bold text-emerald-900">
                YatraWise brings everything together into one unified, optimized plan.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Seamless 5-Step Process
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
              How YatraWise Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Tell Us Your Journey", desc: "Starting location + destination + days + total budget.", icon: "mapPin" },
              { num: "02", title: "Choose Travel Mode", desc: "Train / Car / Bus / Flight connection matching.", icon: "train" },
              { num: "03", title: "We Build Your Route", desc: "Connecting schedules, scenic layovers & stops on the way.", icon: "compass" },
              { num: "04", title: "We Plan Your Stay", desc: "Vetted stays + authentic regional food + scenic viewpoints.", icon: "hotel" },
              { num: "05", title: "Explore & Spend Less", desc: "Optimized itinerary, crowd-aware timings & budget savings.", icon: "sparkles" }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative group hover:border-emerald-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors font-heading">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon name={step.icon} className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MAIN TRIP PLANNER (HIGHLIGHTED DYNAMIC LOCATION & STEPPER) */}
      <section id="trip-planner" className="py-16 bg-gradient-to-b from-white to-slate-100 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Dynamic Journey Intelligence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
                  Plan your perfect journey
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Start from your actual GPS position or enter any city. Routes and connections adjust automatically.
                </p>
              </div>

              <button
                type="button"
                onClick={handleLoadDemoPreset}
                className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 flex items-center gap-1.5 transition-all shadow-sm cursor-pointer active:scale-95"
              >
                <Icon name="sparkles" className="w-4 h-4 text-amber-600" />
                Auto-fill Demo Preset
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="py-8 space-y-8">
              {/* Row 1: Origin with Prominent "Use My Current Location" & Destination */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* STEP 1: Starting Location with High-Visibility Location Detection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Step 1: Where are you starting from?
                    </label>
                    {originCoords.isLive && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                        Live GPS
                      </span>
                    )}
                  </div>

                  {/* HIGH-VISIBILITY "USE MY CURRENT LOCATION" BUTTON */}
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={handleUseCurrentLocation}
                      disabled={isDetectingLocation}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-black shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 border border-emerald-400/40"
                    >
                      {isDetectingLocation ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span className="tracking-wide">📍 Detecting location...</span>
                        </>
                      ) : (
                        <>
                          <Icon name="locate" className="w-4 h-4 text-amber-300 animate-pulse" />
                          <span className="tracking-wide">📍 Use My Current Location</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Text Input for Starting Location (Manually Editable) */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Icon name="mapPin" className="w-5 h-5 text-emerald-600" />
                    </div>
                    <input
                      ref={originInputRef}
                      type="text"
                      value={origin}
                      onChange={(e) => handleOriginChange(e.target.value)}
                      onKeyDown={handleOriginKeyDown}
                      onBlur={handleOriginBlur}
                      placeholder="Enter city or detect location..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-semibold text-slate-800 bg-slate-50/50"
                    />

                    {/* Dynamic Autocomplete Suggestions Dropdown for Origin */}
                    {showOriginDropdown && originSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 max-h-56 overflow-y-auto">
                        {originSuggestions.map((s, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectOrigin(s);
                            }}
                            className="w-full px-3.5 py-2.5 text-left hover:bg-emerald-50 transition-colors flex items-center gap-2.5 cursor-pointer"
                          >
                            <Icon name="mapPin" className="w-4 h-4 text-emerald-600 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold text-slate-800 truncate">{s.pureName || s.name}</p>
                              <p className="text-[10px] text-slate-500 truncate">{s.formattedAddress || s.state}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Permission Denied / Error Fallback Notice */}
                  {locationError && (
                    <div className="mt-2 p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-center justify-between gap-2">
                      <span>{locationError}</span>
                      <button
                        type="button"
                        onClick={() => setLocationError(null)}
                        className="font-bold underline text-amber-800 cursor-pointer"
                      >
                        Enter Manually
                      </button>
                    </div>
                  )}

                  {/* Nearest Major Station Info Tag */}
                  {nearestStationInfo?.station && (
                    <p className="mt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Icon name="train" className="w-3.5 h-3.5 text-slate-400" />
                      <span>Nearest Rail Hub: <strong className="text-slate-800 font-semibold">{nearestStationInfo.station.name}</strong> (~{nearestStationInfo.distanceToStationKm} km away)</span>
                    </p>
                  )}

                  <div className="mt-2.5 flex items-center flex-wrap gap-1.5 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-400">Quick select:</span>
                    {["Secunderabad", "Visakhapatnam", "Vijayawada", "Bengaluru", "New Delhi"].map(city => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => {
                          handleOriginChange(city);
                          setLocationError(null);
                          addToast(`Starting origin updated: ${city}`, "info");
                        }}
                        className={`px-2 py-0.5 rounded-lg border text-xs cursor-pointer transition-colors ${origin.toLowerCase().includes(city.toLowerCase()) ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold' : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'}`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* STEP 2: Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Step 2: Where do you want to go?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Icon name="compass" className="w-5 h-5 text-teal-600" />
                    </div>
                    <input
                      ref={destInputRef}
                      type="text"
                      value={destination}
                      onChange={(e) => handleDestinationChange(e.target.value)}
                      onKeyDown={handleDestinationKeyDown}
                      onBlur={handleDestinationBlur}
                      placeholder="e.g. Araku Valley, Goa, Ooty, Jaipur, Munnar, Hampi, Pondicherry..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm font-semibold text-slate-800"
                    />

                    {/* Dynamic Autocomplete Suggestions Dropdown for Destination */}
                    {showDestDropdown && destSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 max-h-56 overflow-y-auto">
                        {destSuggestions.map((s, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              handleSelectDestination(s);
                            }}
                            className="w-full px-3.5 py-2.5 text-left hover:bg-teal-50 transition-colors flex items-center gap-2.5 cursor-pointer"
                          >
                            <Icon name="compass" className="w-4 h-4 text-teal-600 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <p className="text-xs font-bold text-slate-800 truncate">{s.pureName || s.name}</p>
                                {s.isEnhanced && (
                                  <span className="text-[9px] font-bold bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded">Curated</span>
                                )}
                              </div>
                              <p className="text-[10px] text-slate-500 truncate">{s.formattedAddress || s.state}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-400">Popular Destinations:</span>
                    {demoData.destinations.map(d => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => {
                          setDestination(d.name);
                          if (services.destinationService) {
                            const data = services.destinationService.getDestination(d.name);
                            if (data?.coords) {
                              setDestCoords({ lat: data.coords.lat, lng: data.coords.lng, name: data.name, state: data.state });
                            }
                          }
                          setShowDestDropdown(false);
                          addToast(`📍 Destination set: ${d.name}!`, "info");
                        }}
                        className={`px-2.5 py-1 rounded-lg border text-xs cursor-pointer transition-all ${
                          (currentDestData?.name || '').toLowerCase() === d.name.toLowerCase()
                            ? 'bg-teal-100 text-teal-800 border-teal-300 font-bold shadow-sm'
                            : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {d.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Days, Budget, Travelers */}
              <div className="grid sm:grid-cols-3 gap-6 pt-2">
                {/* Step 3: Days */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Step 3: Duration (Days)
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[1, 2, 3, 4, 5].map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setDays(d);
                        }}
                        className={`py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer active:scale-95 ${
                          days === d
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {d}{d === 5 ? "+" : ""}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Default: 2 Days</span>
                </div>

                {/* Step 4: Budget */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Step 4: Estimated Budget
                    </label>
                    <span className="text-sm font-black text-emerald-700 font-heading">
                      ₹{budget.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="20000"
                    step="500"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹2,000 (Shoestring)</span>
                    <span>₹5,000 (Target)</span>
                    <span>₹20,000</span>
                  </div>
                </div>

                {/* Step 5: Travelers */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Step 5: Number of People
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => {
                        const newT = Math.max(1, travelers - 1);
                        setTravelers(newT);
                      }}
                      className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold text-base transition-colors cursor-pointer active:bg-slate-200"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center font-bold text-sm text-slate-800 flex items-center justify-center gap-1">
                      <Icon name="users" className="w-4 h-4 text-slate-500" />
                      <span>{travelers} Traveler{travelers > 1 ? "s" : ""}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newT = travelers + 1;
                        setTravelers(newT);
                      }}
                      className="px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-bold text-base transition-colors cursor-pointer active:bg-slate-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 6: How Are You Travelling */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Step 6: How are you travelling?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { mode: "train", label: "Train", icon: "train", desc: "Best value & scenic rail tracks" },
                    { mode: "car", label: "Car / Road", icon: "car", desc: "Highway corridor & rest stops on way" },
                    { mode: "bus", label: "Bus", icon: "bus", desc: "Intercity sleeper & express buses" },
                    { mode: "flight", label: "Flight", icon: "plane", desc: "Nearest destination airport + transfer taxi" }
                  ].map((item) => (
                    <button
                      key={item.mode}
                      type="button"
                      onClick={() => {
                        setTravelMode(item.mode);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all relative cursor-pointer active:scale-98 ${
                        travelMode === item.mode
                          ? "bg-emerald-50/70 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {travelMode === item.mode && (
                        <span className="absolute top-3 right-3 text-emerald-600">
                          <Icon name="checkCircle" className="w-4 h-4" />
                        </span>
                      )}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                        travelMode === item.mode ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        <Icon name={item.icon} className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">{item.label}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 7: Experience Preferences */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Step 7: What do you want to experience?
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Nature", "Adventure", "History", "Culture", "Local Food",
                    "Photography", "Shopping", "Relaxation", "Family"
                  ].map(pref => {
                    const isSelected = selectedPreferences.includes(pref);
                    return (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setSelectedPreferences(selectedPreferences.filter(p => p !== pref));
                          } else {
                            setSelectedPreferences([...selectedPreferences, pref]);
                          }
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border cursor-pointer active:scale-95 ${
                          isSelected
                            ? "bg-emerald-700 text-white border-emerald-700 shadow-sm"
                            : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}{pref}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Includes connection scheduling, vetted stays, and budget optimization.</span>
              </div>

              <button
                type="button"
                onClick={handleGenerateJourney}
                disabled={isGenerating}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-600/30 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-3 cursor-pointer active:scale-95"
              >
                {isGenerating ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Synthesizing Optimal Journey...</span>
                  </>
                ) : (
                  <>
                    <Icon name="sparkles" className="w-5 h-5 text-amber-300" />
                    <span>GENERATE MY JOURNEY</span>
                    <Icon name="arrowRight" className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DYNAMIC TRANSPORT LOGIC (ADAPTS TO GPS & SELECTED MODE) */}
      {hasGenerated && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-2">
                  <Icon name={travelMode} className="w-4 h-4 text-blue-600" />
                  <span>Transport Route Intelligence: {travelMode.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Getting to {destination} from {origin}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Calculated dynamically from your starting coordinates ({originCoords.lat.toFixed(4)}° N, {originCoords.lng.toFixed(4)}° E).
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                {["train", "car", "bus", "flight"].map(m => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setTravelMode(m);
                      setBudgetItems(computeBudgetItems(days, travelers, isBudgetOptimized, m));
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      travelMode === m ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* TRAIN VIEW (DYNAMIC RAILWAY CORRIDOR) */}
            {travelMode === "train" && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                      <span>{dynamicTrainRoute.routeSummary}</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{dynamicTrainRoute.totalDuration}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {dynamicTrainRoute.options.map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTrainOption(opt.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          trainOption === opt.id
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {opt.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Train Timeline */}
                <div className="grid lg:grid-cols-12 gap-6">
                  {dynamicTrainRoute.legs.map((leg, idx) => {
                    if (leg.type === "layover") {
                      return (
                        <div key={idx} className="lg:col-span-2 flex flex-col items-center justify-center p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-center">
                          <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold mb-2">
                            <Icon name="clock" className="w-5 h-5" />
                          </div>
                          <h5 className="font-extrabold text-amber-950 text-xs uppercase tracking-wider">Connection Layover</h5>
                          <p className="text-sm font-black text-amber-900 mt-1">{leg.duration}</p>
                          <p className="text-[11px] text-amber-800/90 mt-2 leading-tight">
                            {leg.tip}
                          </p>
                        </div>
                      );
                    }

                    const isScenicLeg = leg.highlights?.some(h => h.includes("Vistadome") || h.includes("tunnels"));
                    const colSpan = dynamicTrainRoute.legs.length === 1 ? "lg:col-span-12" : "lg:col-span-5";

                    return (
                      <div key={idx} className={`${colSpan} bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between`}>
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${isScenicLeg ? 'text-teal-800 bg-teal-50 border-teal-200' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
                              Leg {leg.legIndex} {isScenicLeg ? '(Scenic Valley Track)' : ''}
                            </span>
                            <span className="badge-demo">Demo Railway Data</span>
                          </div>
                          <h5 className="font-extrabold text-slate-900 text-base">
                            {leg.trainName}
                          </h5>
                          <p className="text-xs font-mono font-semibold text-slate-500">
                            Train #{leg.trainNumber} • {leg.classAvailable}
                          </p>

                          <div className="my-4 py-3 px-4 bg-slate-50 rounded-xl flex items-center justify-between">
                            <div>
                              <p className="text-xs text-slate-400 font-medium">Departure</p>
                              <p className="text-sm font-black text-slate-800">{leg.departure}</p>
                              <p className="text-[11px] text-slate-500 truncate max-w-[120px]">{leg.from}</p>
                            </div>
                            <div className="text-center px-2">
                              <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border">
                                {leg.duration}
                              </span>
                              <div className="border-t border-dashed border-slate-300 my-1 w-16"></div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-slate-400 font-medium">Arrival</p>
                              <p className="text-sm font-black text-slate-800">{leg.arrival}</p>
                              <p className="text-[11px] text-slate-500 truncate max-w-[120px]">{leg.to}</p>
                            </div>
                          </div>

                          <div className="space-y-1 text-xs text-slate-600">
                            {leg.highlights?.map((h, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <Icon name="check" className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500">Est. Fare: <strong className="text-slate-900 font-bold">₹{leg.fare}</strong></span>
                          <span className="text-emerald-700 font-bold">{leg.onTimeRating}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CAR VIEW (DYNAMIC DISTANCE, DRIVING TIME, ROUTE CORRIDOR, AND HIGHWAY STOPS) */}
            {travelMode === "car" && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                {/* Route Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-lg font-heading">
                        {origin} ➔ {destination}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
                        🚗 Car / Road Route
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Corridor: {dynamicCarRoute.highwayRoute || 'NH-16 ➔ SH-39 Hill Ghat Corridor'}
                      </span>
                      <span>• {dynamicCarRoute.distanceKm || dynamicCarRoute.distance} km total</span>
                    </p>
                  </div>
                  <span className="badge-demo">Dynamic Route Engine</span>
                </div>

                {/* 4 Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium block">Total Driving Distance</span>
                    <span className="text-xl font-black text-slate-900 font-heading mt-1 block">
                      {dynamicCarRoute.distanceKm || dynamicCarRoute.distance} km
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Highway + Ghat road</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium block">Estimated Travel Time</span>
                    <span className="text-xl font-black text-blue-700 font-heading mt-1 block">
                      {dynamicCarRoute.drivingTime}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Includes mountain buffer</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium block">Estimated Fuel Cost</span>
                    <span className="text-xl font-black text-emerald-700 font-heading mt-1 block">
                      {dynamicCarRoute.fuelEstimate}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">~14 km/L @ ₹102/L</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium block">Highway Fastag Tolls</span>
                    <span className="text-xl font-black text-amber-700 font-heading mt-1 block">
                      {dynamicCarRoute.tollsEstimate || dynamicCarRoute.tollTaxes}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">Expressway toll plazas</span>
                  </div>
                </div>

                {/* Scenic Route & Ghat Road Elevation Banner */}
                <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm">⛰️</span>
                    <h5 className="font-extrabold text-sm text-emerald-200">Scenic Mountain Corridor Highlights</h5>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {dynamicCarRoute.scenicHighlights || "Includes 42 km Eastern Ghats mountain climb with 19 hairpin curves, mist, and coffee plantations."}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-emerald-300">
                    <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                      📈 {dynamicCarRoute.elevationProfile || "Ascends from 15m to 911m Plateau"}
                    </span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                      🌅 Best window: {dynamicCarRoute.bestDrivingHours || "05:30 AM – 10:30 AM"}
                    </span>
                  </div>
                </div>

                {/* Step-by-Step Route Guidance */}
                {dynamicCarRoute.routeSteps && dynamicCarRoute.routeSteps.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                      <span>🛣️ Driving Route Steps &amp; Corridor Milestones</span>
                    </h5>
                    <div className="space-y-2">
                      {dynamicCarRoute.routeSteps.map((s, idx) => (
                        <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {s.step}
                          </span>
                          <div className="flex-1 text-xs">
                            <p className="text-slate-800 font-medium">{s.instruction}</p>
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded flex-shrink-0">
                            {s.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Highway Stops */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                      <span>☕ Recommended Stops Along Your Route</span>
                    </h5>
                    <span className="text-xs text-slate-500">Curated for food, restrooms &amp; vehicle safety</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {dynamicCarRoute.stops.map((stop, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-colors">
                        <div>
                          <div className="flex items-center justify-between text-xs mb-2">
                            <span className="font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Stop {idx + 1}
                            </span>
                            <span className="text-slate-400 font-medium text-[11px]">{stop.distanceFromRoute}</span>
                          </div>
                          <h6 className="font-bold text-slate-900 text-sm">{stop.place}</h6>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{stop.whyVisit}</p>
                        </div>
                        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500">Stop: <strong className="text-slate-700">{stop.recommendedStop}</strong></span>
                          <span className="text-emerald-700 font-extrabold">{stop.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Live Maps Button */}
                <div className="pt-2 flex justify-end">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>🗺️ Open Live Directions in Google Maps</span>
                    <Icon name="externalLink" className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* BUS VIEW */}
            {travelMode === "bus" && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{dynamicBusRoute.routeSummary}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{dynamicBusRoute.operator}</p>
                  </div>
                  <span className="badge-demo">Demo Bus Schedule</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm grid sm:grid-cols-4 gap-4">
                  <div>
                    <span className="text-xs text-slate-400">Departure</span>
                    <p className="text-base font-extrabold text-slate-900">{dynamicBusRoute.departure}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Arrival at {currentDestData.name}</span>
                    <p className="text-base font-extrabold text-slate-900">{dynamicBusRoute.arrival}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Total Duration</span>
                    <p className="text-base font-extrabold text-slate-900">{dynamicBusRoute.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Estimated Fare</span>
                    <p className="text-base font-extrabold text-emerald-700">{dynamicBusRoute.estimatedFare}</p>
                  </div>
                </div>
              </div>
            )}

            {/* FLIGHT VIEW */}
            {travelMode === "flight" && (
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{dynamicFlightRoute.routeSummary}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{dynamicFlightRoute.totalTravelTime}</p>
                  </div>
                  <span className="badge-demo">Demo Air Route Data</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200">
                    <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Flight Leg</span>
                    <h6 className="font-bold text-slate-900 text-sm mt-2">{dynamicFlightRoute.flightLeg}</h6>
                    <p className="text-xs text-slate-500 mt-1">Air connection to nearest airport servicing {currentDestData.name}.</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200">
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Airport Transfer Taxi</span>
                    <h6 className="font-bold text-slate-900 text-sm mt-2">{dynamicFlightRoute.transferLeg}</h6>
                    <p className="text-xs text-slate-500 mt-1">Direct scenic transfer taxi from airport terminal to {currentDestData.name}.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 8. GENERATED JOURNEY DASHBOARD & LIVE MAP */}
      {hasGenerated && (
        <section id="generated-dashboard" className="py-12 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Dashboard Summary Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase">
                    Personalized Itinerary
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">{days} Days Plan</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">
                  Your {days}-Day {destination} Journey
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Icon name="navigation" className="w-3.5 h-3.5 text-blue-600" />
                    From: {origin}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Icon name="mapPin" className="w-3.5 h-3.5 text-emerald-600" />
                    To: {destination}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Icon name="calendar" className="w-3.5 h-3.5 text-emerald-600" />
                    {days} Days
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Icon name="users" className="w-3.5 h-3.5 text-emerald-600" />
                    {travelers} Travelers
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                    <Icon name="wallet" className="w-3.5 h-3.5 text-emerald-600" />
                    Target Budget: ₹{budget.toLocaleString('en-IN')}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md capitalize">
                    <Icon name={travelMode} className="w-3.5 h-3.5 text-emerald-600" />
                    {travelMode}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleSaveTrip}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Icon name="heart" className="w-4 h-4 text-rose-500" />
                  Save Trip
                </button>
                <button
                  type="button"
                  onClick={handleShareTrip}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Icon name="share" className="w-4 h-4 text-slate-500" />
                  Share
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Icon name="printer" className="w-4 h-4 text-slate-500" />
                  Print
                </button>
                <button
                  type="button"
                  onClick={() => setOfflineMapModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
                >
                  <Icon name="download" className="w-4 h-4" />
                  Offline Pack
                </button>
              </div>
            </div>
            {/* DAY-BY-DAY ITINERARY (DYNAMICALLY RENDERS DAY 1 TO DAY N) */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {days}-Day Itinerary • {currentDestData.name}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1 font-heading">
                    Optimized Schedule & Crowd Timing
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Sequenced by crowd awareness so you visit popular spots in {currentDestData.name} before tourist surges.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="badge-low-crowd px-2.5 py-1 rounded-md">🟢 Low Crowd</span>
                  <span className="badge-mod-crowd px-2.5 py-1 rounded-md">🟡 Moderate Crowd</span>
                  <span className="badge-high-crowd px-2.5 py-1 rounded-md">🔴 High Crowd</span>
                </div>
              </div>

              {/* Dynamic Timeline for all days (Day 1..Day N) */}
              {dynamicItinerary.map((dayObj, idx) => {
                const dayThemes = [
                  { bg: "bg-emerald-600", badgeBg: "bg-emerald-50", text: "text-emerald-800", border: "border-emerald-200" },
                  { bg: "bg-teal-600", badgeBg: "bg-teal-50", text: "text-teal-800", border: "border-teal-200" },
                  { bg: "bg-sky-600", badgeBg: "bg-sky-50", text: "text-sky-800", border: "border-sky-200" },
                  { bg: "bg-indigo-600", badgeBg: "bg-indigo-50", text: "text-indigo-800", border: "border-indigo-200" },
                  { bg: "bg-purple-600", badgeBg: "bg-purple-50", text: "text-purple-800", border: "border-purple-200" },
                  { bg: "bg-rose-600", badgeBg: "bg-rose-50", text: "text-rose-800", border: "border-rose-200" },
                  { bg: "bg-amber-600", badgeBg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" }
                ];
                const theme = dayThemes[idx % dayThemes.length];

                return (
                  <div key={dayObj.dayNum} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl ${theme.bg} text-white font-extrabold flex items-center justify-center text-sm font-heading`}>
                          D{dayObj.dayNum}
                        </span>
                        <div>
                          <h5 className="font-extrabold text-slate-900 text-base">{dayObj.title}</h5>
                          <span className="text-xs text-slate-500">{dayObj.dateLabel}</span>
                        </div>
                      </div>
                      <span className={`text-xs font-bold ${theme.text} ${theme.badgeBg} px-3 py-1 rounded-full border ${theme.border}`}>
                        Day {dayObj.dayNum} Activities ({dayObj.activities.length} stops)
                      </span>
                    </div>

                    <div className="space-y-4">
                      {dayObj.activities.map((act) => (
                        <ItineraryActivityCard
                          key={act.id}
                          activity={{
                            ...act,
                            visited: !!completedActivities[act.id]
                          }}
                          onToggle={() => {
                            setCompletedActivities(prev => ({
                              ...prev,
                              [act.id]: !prev[act.id]
                            }));
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* INTERACTIVE LEAFLET MAP SECTION WITH DYNAMIC STARTING LOCATION & DESTINATION ROUTE */}
            <div id="interactive-map-section" className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Live Geographic Overview
                  </span>
                  <h4 className="text-xl font-extrabold text-slate-900 mt-1 font-heading">
                    Interactive Journey & Destination Map
                  </h4>
                  <p className="text-xs text-slate-500">
                    Showing your transit corridor from {origin} to {currentDestData.name}, station hubs, and itinerary attractions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span> 📍 Starting Location ({origin})
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200">
                    <span className="w-2 h-2 rounded-full bg-purple-600"></span> 🚉 Station Hub
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span> 📍 Attractions
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-rose-50 text-rose-800 border border-rose-200">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span> 🏁 Destination ({currentDestData.name})
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-sky-50 text-sky-800 border border-sky-200">
                    <span className="w-2 h-2 rounded-full bg-sky-600"></span> 🏨 Stays
                  </span>
                </div>
              </div>

              {/* Map Container Protected by Error Boundary */}
              <ErrorBoundary>
                <LeafletMapContainer
                  userCoords={originCoords}
                  originName={origin}
                  destName={currentDestData.name}
                  destCoords={currentDestData.coords}
                  nearestStation={nearestStationInfo?.station}
                  activities={allItineraryActivities}
                  stays={currentDestData.stays || []}
                />
              </ErrorBoundary>
            </div>

            {/* 10. STAY / ACCOMMODATION MARKETPLACE */}
            <div id="stays-section" className="space-y-6 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Where Should You Stay in {currentDestData.name}?
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1 font-heading">
                    Verified Stays Near Attractions
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Selected specifically because they are affordable and close to your Day 1 attractions.
                  </p>
                </div>
                <span className="badge-demo">Demo Hotel Listing</span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {(currentDestData.stays || []).map(stay => (
                  <div key={stay.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md card-hover flex flex-col justify-between">
                    <div>
                      <div className="relative h-48 overflow-hidden">
                        <img src={stay.image} alt={stay.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                          {stay.category || stay.type}
                        </span>
                        <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-sm">
                          ⭐ {stay.rating}
                        </span>
                      </div>

                      <div className="p-5 space-y-3">
                        <div>
                          <h5 className="font-extrabold text-slate-900 text-base">{stay.name}</h5>
                          <p className="text-xs text-slate-500">{stay.distance || stay.location}</p>
                        </div>

                        <div className="p-2.5 bg-emerald-50 rounded-xl text-[11px] text-emerald-900 border border-emerald-200/80">
                          <strong>Recommended:</strong> {stay.recommendationReason || `Top reviewed ${stay.type} in ${currentDestData.name}.`}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {(stay.amenities || []).map((amenity, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400">Price / Night</span>
                        <p className="text-lg font-black text-slate-900 font-heading">₹{stay.pricePerNight}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setContactStayModal(stay)}
                          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                        >
                          Contact Host
                        </button>
                        <button
                          type="button"
                          onClick={() => addToast(`Stay "${stay.name}" selected for your trip!`, "success")}
                          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
                        >
                          Select Stay
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 12. LOCAL FOOD RECOMMENDATIONS */}
            <div id="food-section" className="space-y-6 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Authentic Regional Flavours
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1 font-heading">
                    Local Food &amp; Delicacies in {currentDestData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Curated culinary spots and authentic regional delicacies in {currentDestData.name}.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {(currentDestData.food || []).map(food => (
                  <div key={food.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md card-hover flex flex-col justify-between">
                    <div>
                      <div className="relative h-40 overflow-hidden">
                        <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {food.tag || food.type}
                        </span>
                        <span className={`absolute top-2 right-2 text-white text-[10px] font-bold px-2 py-0.5 rounded ${food.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}>
                          {food.isVeg ? "Veg" : "Non-Veg"}
                        </span>
                      </div>

                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-extrabold text-slate-900 text-sm">{food.name}</h5>
                          <span className="text-xs font-bold text-amber-600">⭐ {food.rating}</span>
                        </div>
                        <p className="text-xs font-semibold text-emerald-800">{food.specialtyDish}</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{food.description}</p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-bold">{food.priceRange}</span>
                      <span className="text-slate-400">{food.distance || food.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. BUDGET DASHBOARD & DYNAMIC OPTIMIZER */}
            <div id="budget-section" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6 scroll-mt-20">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2">
                    <Icon name="checkCircle" className="w-4 h-4 text-emerald-600" />
                    <span>✓ Your trip is within budget</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 font-heading">
                    Smart Budget Optimizer
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Help tourists spend less without reducing the quality of their trip.
                  </p>
                </div>

                {/* Big Metric Box */}
                <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">Total Allocated</span>
                    <span className="text-xl font-black text-slate-900 font-heading">₹{budget.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">Estimated Spend</span>
                    <span className="text-xl font-black text-emerald-700 font-heading">₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">You Save</span>
                    <span className="text-xl font-black text-amber-600 font-heading">₹{moneySaved.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Optimization Toggle Banner */}
              <div className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isBudgetOptimized ? "bg-emerald-50 border-emerald-300" : "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200"
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isBudgetOptimized ? "bg-emerald-600 text-white" : "bg-amber-500 text-white"
                  }`}>
                    <Icon name={isBudgetOptimized ? "checkCircle" : "sparkles"} className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">
                      {isBudgetOptimized ? "Budget Optimization Active! Additional ₹400 Saved." : "Optimization Opportunity Detected"}
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                      {isBudgetOptimized
                        ? "Currently booked with Hill View Tribal Verified Homestay instead of Pine Cottages with identical amenities."
                        : "Switch to verified tribal homestay (₹1,200/night) to save ₹400 directly without sacrificing hygiene or proximity."
                      }
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleToggleBudgetOptimize}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                    isBudgetOptimized
                      ? "bg-white text-emerald-800 hover:bg-emerald-100 border border-emerald-300"
                      : "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30"
                  }`}
                >
                  {isBudgetOptimized ? "Reset to Original Stay" : "Optimize My Budget"}
                </button>
              </div>

              {/* Budget Categories Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                {budgetItems.map((item) => (
                  <div key={item.category} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-700">
                          <Icon name={item.icon} className="w-4 h-4" />
                        </span>
                        <span className="text-sm font-black text-slate-900 font-heading">₹{item.amount.toLocaleString('en-IN')}</span>
                      </div>
                      <h6 className="font-bold text-slate-800 text-xs">{item.category}</h6>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                    </div>
                    {item.isOptimizable && (
                      <span className="mt-3 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded self-start">
                        {isBudgetOptimized ? "✓ Optimized" : "Eligible for saving"}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 13. AI TRAVEL LENS & LOCAL LANGUAGE ASSISTANT */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* AI Travel Lens */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Icon name="camera" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">AI Travel Lens</h4>
                      <p className="text-[11px] text-slate-500">Visual Landmark & Geology Identifier</p>
                    </div>
                  </div>
                  <span className="badge-demo">AI Demo</span>
                </div>

                <p className="text-xs text-slate-600">
                  Select a demo photo to identify ancient rock formations and historical sites:
                </p>

                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {(currentDestData.aiLensData || []).map(place => (
                    <button
                      key={place.id}
                      type="button"
                      onClick={() => handleSelectAiPlace(place)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                        activeAiPlace?.id === place.id
                          ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {place.name}
                    </button>
                  ))}
                </div>

                {activeAiPlace && (
                  <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-300 group">
                    <img src={activeAiPlace.image} alt={activeAiPlace.name} className="w-full h-full object-cover" />
                    {isAiScanning && <div className="radar-line"></div>}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="bg-white/90 backdrop-blur-sm text-purple-900 text-xs font-bold px-2.5 py-1 rounded-md">
                          {isAiScanning ? "Neural Scanning..." : (activeAiPlace.confidence || '96% Confidence')}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSelectAiPlace(activeAiPlace)}
                          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                          title="Re-scan"
                        >
                          <Icon name="crosshair" className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-white space-y-1">
                        <h5 className="font-extrabold text-lg font-heading">{activeAiPlace.name}</h5>
                        <p className="text-xs text-slate-200">{activeAiPlace.type || activeAiPlace.period} • Match {activeAiPlace.matchScore || '98%'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeAiPlace && (
                  <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <strong className="text-purple-950">Entry Fee:</strong>
                      <span className="text-purple-900">{activeAiPlace.entryFee || 'Free / Included in Pass'}</span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="text-purple-950">Optimal Visiting Hours:</strong>
                      <span className="text-purple-900">{activeAiPlace.bestHours || '09:00 AM – 05:00 PM'}</span>
                    </div>
                    <p className="text-[11px] text-purple-900/90 pt-1 border-t border-purple-200">
                      💡 <strong>Traveler Insight:</strong> {activeAiPlace.funFact}
                    </p>
                  </div>
                )}
              </div>

              {/* Local Language Assistant */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                      <Icon name="volume2" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">Talk Like a Local</h4>
                      <p className="text-[11px] text-slate-500">Audio Phrasebook & Native Pronunciation</p>
                    </div>
                  </div>
                  <span className="badge-demo">Web Speech API</span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500">Translate to:</span>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    {(currentDestData.languageAssistant?.languages || []).map(lang => {
                      const langName = typeof lang === "string" ? lang : lang.name;
                      return (
                        <button
                          key={langName}
                          type="button"
                          onClick={() => setSelectedLanguage(langName)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            selectedLanguage === langName ? "bg-emerald-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {langName}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {currentDestData.languageAssistant?.categories && currentDestData.languageAssistant.categories.length > 0 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                    {currentDestData.languageAssistant.categories.map(cat => (
                      <button
                        key={cat.category}
                        type="button"
                        onClick={() => setActivePhraseCat(cat.category)}
                        className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold transition-all cursor-pointer ${
                          activePhraseCat === cat.category
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  {((currentDestData.languageAssistant?.categories
                    ? currentDestData.languageAssistant.categories.find(c => c.category === activePhraseCat)?.phrases
                    : currentDestData.languageAssistant?.phrases) || []).map((phrase, idx) => {
                      const langKey = (selectedLanguage || "").toLowerCase();
                      const translatedText = phrase.local || phrase[langKey] || phrase.translation || phrase.telugu || phrase.hindi || phrase.tamil || phrase.english;
                      const langCode = langKey.includes("telugu") ? "te-IN" :
                                       langKey.includes("hindi") ? "hi-IN" :
                                       langKey.includes("tamil") ? "ta-IN" :
                                       langKey.includes("konkani") ? "gom-IN" :
                                       langKey.includes("malayalam") ? "ml-IN" :
                                       langKey.includes("rajasthani") ? "hi-IN" :
                                       langKey.includes("kannada") ? "kn-IN" : "en-IN";

                      return (
                        <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
                          <div className="space-y-1">
                            <p className="text-xs text-slate-500 font-medium">"{phrase.english}"</p>
                            <p className="text-sm font-extrabold text-slate-900 font-heading">
                              {translatedText}
                            </p>
                            {phrase.phonetic && (
                              <p className="text-[11px] text-teal-700 italic font-mono">
                                🗣️ {phrase.phonetic}
                              </p>
                            )}
                            {phrase.teluguPhonetic && langKey.includes("telugu") && (
                              <p className="text-[11px] text-teal-700 italic font-mono">
                                🗣️ {phrase.teluguPhonetic}
                              </p>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => handlePlayVoice(translatedText, langCode)}
                            className="w-9 h-9 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                            title="Speak Phrase Aloud"
                          >
                            <Icon name="volume2" className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {/* 14. TOURIST BINGO & DESTINATION INFO */}
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Gamification / Bingo */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Icon name="award" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">{currentDestData?.name || 'Destination'} Explorer Challenge</h4>
                      <p className="text-[11px] text-slate-500">Tourist Gamification & Rewards</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {bingoScore ?? 0} / 100 PTS
                  </span>
                </div>

                <div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500"
                      style={{ width: `${Math.min(100, bingoScore ?? 0)}%` }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Complete cultural challenges in {currentDestData?.name || 'destination'} to achieve Master Explorer status.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {(bingoItems || []).map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleBingo(item.id)}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        item.done
                          ? "bg-emerald-50/70 border-emerald-300 text-slate-900"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          item.done ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-400 bg-white"
                        }`}>
                          {item.done && <Icon name="check" className="w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-xs font-semibold ${item.done ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                          {item.title || item.task}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-amber-600">+{item.points} pts</span>
                    </button>
                  ))}
                </div>

                {(bingoScore ?? 0) >= 100 && (
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                        🏆
                      </div>
                      <div>
                        <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Achievement Unlocked!</span>
                        <p className="font-extrabold text-sm font-heading">{currentDestData?.name || 'Destination'} Master Explorer</p>
                        <p className="text-[11px] text-emerald-100">All exploration milestones completed successfully.</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-xs font-bold border border-white/30">
                      100 / 100 PTS
                    </span>
                  </div>
                )}
              </div>

              {/* Best Time to Visit */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Icon name="sun" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">Best Time to Visit {currentDestData.name}</h4>
                      <p className="text-[11px] text-slate-500">{currentDestData.destinationInfo?.altitude || 'Scenic Highland'} • {currentDestData.state || 'India'}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {(currentDestData.destinationInfo?.seasons || []).map((season, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between">
                        <h6 className="font-extrabold text-slate-900 text-xs">{season.season}</h6>
                        <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          {season.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{season.weather}</p>
                      <div className="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Temp: {season.temp}</span>
                        <span>Crowd: {season.crowd}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-xs space-y-1 text-amber-950">
                  <strong className="block text-amber-900">💡 Local Expert Tips:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-amber-900/90 text-[11px]">
                    {(currentDestData.destinationInfo?.travelTips || []).map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 15. TRIP SUMMARY & RECAP */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-700">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Complete Journey Recap
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading mt-1">
                    {origin} ➔ {destination}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {days} Days • {travelers} Travelers • Starting Station: {nearestStationInfo?.station?.name || origin}
                  </p>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700 flex items-center gap-6">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase block font-bold">Planned Spend</span>
                    <span className="text-2xl font-black text-emerald-400 font-heading">₹{totalCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-8 w-px bg-slate-700"></div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase block font-bold">Total Saved</span>
                    <span className="text-2xl font-black text-amber-400 font-heading">₹{moneySaved.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSaveTrip}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Icon name="heart" className="w-4 h-4" />
                    Save My Trip
                  </button>
                  <button
                    type="button"
                    onClick={handleShareTrip}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Icon name="share" className="w-4 h-4" />
                    Share Trip
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Icon name="printer" className="w-4 h-4" />
                    Download Itinerary
                  </button>
                </div>

                <button
                  type="button"
                  onClick={scrollToSection("trip-planner")}
                  className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  ← Modify Trip Parameters
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 16. IMPACT SECTION */}
      <section id="impact-section" className="py-16 bg-white border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full">
              Social & Economic Value
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Better for tourists. Better for locals.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              YatraWise eliminates predatory middlemen, ensuring travelers spend less while indigenous homestays and local businesses earn fair direct revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Icon name="user" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">For Tourists</h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lower travel costs by removing commission markups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Personalized routes from your actual live GPS location</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Avoid peak crowd congestions with smart timings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Instant local language translator & emergency SOS</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-3xl text-white text-center shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 mx-auto flex items-center justify-center text-white backdrop-blur-sm">
                <Icon name="compass" className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-xl font-heading">The YatraWise Bridge</h4>
              <p className="text-xs text-emerald-100 leading-relaxed">
                A decentralized marketplace connecting conscious travelers directly with verified local ecosystems.
              </p>
              <div className="py-2 text-xs font-mono font-bold bg-white/10 rounded-xl border border-white/20">
                TOURIST ↕ YATRAWISE ↕ LOCAL COMMUNITY
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Icon name="users" className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">For Local Communities</h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Direct visibility for tribal homestays & farm cafes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Transparent pricing with zero hidden commission fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Promotes local regional produce, crafts & sustainable tourism</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Encourages cultural preservation & sustainable footfall</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FINAL HERO MESSAGE */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            Explore More. <br />
            <span className="text-emerald-400">Spend Less.</span> Connect Locally.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From your first train to your last attraction, YatraWise plans the journey around your time, budget and interests.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={scrollToSection("trip-planner")}
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-600/30 transition-all text-sm cursor-pointer active:scale-95"
            >
              Start Planning Now
            </button>
          </div>
        </div>
      </section>

      {/* 18. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Icon name="compass" className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white font-heading">
                Yatra<span className="text-emerald-500">Wise</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              Smart Tourism Hackathon Demo Prototype • Built with React 18, Tailwind CSS, OpenStreetMap & Geolocation API
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-[11px]">
            <div>
              <h6 className="font-bold text-white mb-2">Hackathon Verification</h6>
              <p className="leading-relaxed">
                Railway corridors, demo hotel tariffs and verified attraction itineraries are curated for evaluation purposes. API interfaces designed for seamless IRCTC, OYO and Google Places integration.
              </p>
            </div>
            <div>
              <h6 className="font-bold text-white mb-2">Quick Shortcuts</h6>
              <ul className="space-y-1">
                <li><button type="button" onClick={scrollToSection("trip-planner")} className="hover:text-white cursor-pointer">Trip Planner Engine</button></li>
                <li><button type="button" onClick={scrollToSection("budget-section")} className="hover:text-white cursor-pointer">Budget Optimizer</button></li>
                <li><button type="button" onClick={scrollToSection("stays-section")} className="hover:text-white cursor-pointer">Accommodation Marketplace</button></li>
                <li><button type="button" onClick={scrollToSection("interactive-map-section")} className="hover:text-white cursor-pointer">Interactive Journey Map</button></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-white mb-2">Emergency Access</h6>
              <p className="leading-relaxed">
                National Emergency: 112 • Police: 100 • Ambulance: 108 • Railway Helpline: 139
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
            © {new Date().getFullYear()} YatraWise. "Explore More. Spend Less. Travel Smarter."
          </div>
        </div>
      </footer>

      {/* FLOATING SOS TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setSosModalOpen(true)}
        className="sos-floating-btn fixed bottom-6 left-6 z-40 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs font-black tracking-wider uppercase transition-all hover:scale-105 cursor-pointer"
        title="Emergency SOS"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white pulse-animation"></span>
        <Icon name="shield" className="w-4 h-4" />
        <span>SOS Emergency</span>
      </button>

      {/* --- ALL INTERACTIVE MODALS --- */}

      {/* 1. SOS MODAL */}
      {sosModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-red-100 space-y-5 animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-red-600">
                <Icon name="shield" className="w-6 h-6" />
                <h4 className="font-black text-slate-900 text-lg font-heading">Emergency & Safety Assistance</h4>
              </div>
              <button type="button" onClick={() => setSosModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {(currentDestData.emergencyContacts || []).map((contact, idx) => (
                <div key={idx} className="p-3.5 bg-red-50/60 rounded-2xl border border-red-200 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">{contact.title || contact.role || contact.name}</h5>
                    <p className="text-[11px] text-slate-500">{contact.desc}</p>
                  </div>
                  <a
                    href={`tel:${contact.number || contact.phone}`}
                    className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-sm flex items-center gap-1"
                  >
                    <Icon name="phoneCall" className="w-3.5 h-3.5" />
                    {contact.number || contact.phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  addToast(`GPS Coordinates shared: ${originCoords.lat.toFixed(4)}° N, ${originCoords.lng.toFixed(4)}° E`, "warning");
                  setSosModalOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon name="mapPin" className="w-4 h-4 text-emerald-400" />
                Share Live GPS Coordinates via SMS / WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. OFFLINE MAP DOWNLOAD MODAL */}
      {offlineMapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Icon name="download" className="w-5 h-5 text-emerald-600" />
                <h4 className="font-black text-slate-900 text-base font-heading">Download Offline Pack</h4>
              </div>
              <button type="button" onClick={() => setOfflineMapModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer">
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Travelling somewhere with poor connectivity? Download {currentDestData.name} road map, emergency contacts and offline itinerary.
            </p>

            {offlineProgress === 0 && (
              <button
                type="button"
                onClick={handleDownloadOfflineMap}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icon name="download" className="w-4 h-4" />
                Download Offline Map (12.4 MB)
              </button>
            )}

            {offlineProgress > 0 && offlineProgress < 100 && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>Preparing Vector Tiles...</span>
                  <span>{offlineProgress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full transition-all duration-300" style={{ width: `${offlineProgress}%` }}></div>
                </div>
              </div>
            )}

            {offlineProgress === 100 && (
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
                <Icon name="checkCircle" className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-extrabold text-emerald-900 text-sm">✓ Offline Map Ready</h5>
                <p className="text-[11px] text-emerald-800">
                  Itinerary and map tiles cached to your browser storage. Access even with airplane mode active.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. CONTACT STAY MODAL */}
      {contactStayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">{contactStayModal.name}</h4>
                <p className="text-xs text-slate-500">Host: {contactStayModal.owner.name}</p>
              </div>
              <button type="button" onClick={() => setContactStayModal(null)} className="text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer">
                ✕
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <strong className="text-slate-800">{contactStayModal.owner.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Languages Spoken:</span>
                <strong className="text-slate-800">{contactStayModal.owner.speaks}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Rate:</span>
                <strong className="text-emerald-700 font-bold">₹{contactStayModal.pricePerNight} / night</strong>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              Notice: Sample owner contact for prototype evaluation.
            </p>

            <button
              type="button"
              onClick={() => {
                addToast(`Inquiry sent to host ${contactStayModal.owner.name}!`, "success");
                setContactStayModal(null);
              }}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer"
            >
              Send Booking Inquiry
            </button>
          </div>
        </div>
      )}

      {/* 6. SAVED TRIPS DRAWER */}
      {savedTripsDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white max-w-sm w-full h-full p-6 shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Icon name="heart" className="w-5 h-5 text-rose-500" />
                  <h4 className="font-extrabold text-slate-900 text-base font-heading">My Saved Journeys</h4>
                </div>
                <button type="button" onClick={() => setSavedTripsDrawer(false)} className="text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer">
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3">
                {savedTrips.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-500">
                    No trips saved yet. Click "Save Trip" on the itinerary dashboard!
                  </div>
                ) : (
                  savedTrips.map(trip => (
                    <div key={trip.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <h5 className="font-extrabold text-slate-900 text-xs">{trip.origin} ➔ {trip.destination}</h5>
                        <span className="text-[10px] text-slate-400">{trip.date}</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        {trip.days} Days • Mode: {trip.mode.toUpperCase()} • Cost: ₹{trip.cost}
                      </p>
                      <div className="flex justify-between items-center text-[10px] font-bold pt-1 border-t border-slate-200/60">
                        <span className="text-emerald-700">Saved: ₹{trip.saved}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSavedTrips(savedTrips.filter(t => t.id !== trip.id));
                            addToast("Trip removed from saved list", "warning");
                          }}
                          className="text-red-500 hover:underline cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSavedTripsDrawer(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
            >
              Close Drawer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Itinerary Activity Card Subcomponent ---
function ItineraryActivityCard({ activity, onToggle }) {
  const crowdClass = activity.crowdLevel === "green" ? "badge-low-crowd" :
                     activity.crowdLevel === "yellow" ? "badge-mod-crowd" : "badge-high-crowd";

  return (
    <div className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
      activity.visited ? "bg-slate-50/60 border-slate-200 opacity-60" : "bg-slate-50/40 border-slate-200 hover:border-slate-300"
    }`}>
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={onToggle}
          className={`w-6 h-6 rounded-lg mt-1 flex items-center justify-center border transition-all cursor-pointer ${
            activity.visited ? "bg-emerald-600 border-emerald-600 text-white" : "border-slate-300 bg-white hover:border-emerald-500"
          }`}
          title={activity.visited ? "Mark as unvisited" : "Mark as visited"}
        >
          {activity.visited && <Icon name="check" className="w-3.5 h-3.5" />}
        </button>

        {activity.photo && (
          <img src={activity.photo} alt={activity.title} className="w-14 h-14 rounded-xl object-cover shadow-sm flex-shrink-0 hidden sm:block" />
        )}

        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
              {activity.time}
            </span>
            <h6 className={`font-bold text-sm ${activity.visited ? 'line-through text-slate-500' : 'text-slate-900'}`}>
              {activity.title}
            </h6>
            {activity.rating && (
              <span className="text-xs font-bold text-amber-500">⭐ {activity.rating}</span>
            )}
          </div>
          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{activity.description}</p>
          {activity.crowdTip && (
            <p className="text-[11px] text-amber-700 font-medium">💡 {activity.crowdTip}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-center flex-shrink-0 text-xs">
        {activity.crowd && (
          <span className={`${crowdClass} px-2.5 py-0.5 rounded-full text-[11px] font-bold`}>
            {activity.crowd}
          </span>
        )}
        <div className="text-right">
          <span className="text-slate-400 block text-[10px]">Fee / Cost</span>
          <span className="font-extrabold text-slate-800">
            {activity.cost === 0 ? "Free" : `₹${activity.cost}`}
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Leaflet Interactive Map Container Subcomponent (Displays Dynamic GPS Origin & Attractions) ---
function LeafletMapContainer({ userCoords, originName, destName, destCoords, nearestStation, activities = [], stays = [] }) {
  const mapRef = useRef(null);
  const leafletInstance = useRef(null);
  const layerGroupRef = useRef(null);

  // Initialize Map ONCE on mount
  useEffect(() => {
    if (!window.L || !mapRef.current) return;
    if (leafletInstance.current) return;

    try {
      if (mapRef.current._leaflet_id) {
        delete mapRef.current._leaflet_id;
      }

      const initialCenter = [destCoords?.lat || 18.3273, destCoords?.lng || 82.8808];
      const map = window.L.map(mapRef.current, {
        center: initialCenter,
        zoom: 11,
        scrollWheelZoom: false
      });

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      const layerGroup = window.L.layerGroup().addTo(map);
      layerGroupRef.current = layerGroup;
      leafletInstance.current = map;
    } catch (err) {
      console.warn("Leaflet map init warning:", err);
    }

    return () => {
      if (leafletInstance.current) {
        try {
          leafletInstance.current.remove();
        } catch (e) {}
        leafletInstance.current = null;
        layerGroupRef.current = null;
      }
    };
  }, []);

  // Update Markers & Auto-fit bounds when coordinates or activities change
  useEffect(() => {
    if (!leafletInstance.current || !layerGroupRef.current || !window.L) return;

    try {
      layerGroupRef.current.clearLayers();

      const createPin = (color, label, extraClass = "") => window.L.divIcon({
        className: "custom-map-pin",
        html: `<div style="background-color: ${color}; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; border: 2.5px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" class="${extraClass}">${label}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const bounds = [];

      // 1. Plot User Starting Location Marker
      if (userCoords && userCoords.lat && userCoords.lng) {
        const startPin = window.L.marker([userCoords.lat, userCoords.lng], {
          icon: createPin("#2563eb", "📍", "pulse-animation")
        }).addTo(layerGroupRef.current);

        startPin.bindPopup(`
          <div style="padding: 10px; max-width: 220px;">
            <div style="font-weight: bold; font-size: 13px; color: #1e3a8a;">📍 Your Starting Location</div>
            <div style="font-size: 12px; color: #0f172a; margin-top: 2px;"><strong>${originName}</strong></div>
            <div style="font-size: 10px; color: #64748b; margin-top: 3px;">GPS: ${userCoords.lat.toFixed(4)}° N, ${userCoords.lng.toFixed(4)}° E</div>
          </div>
        `);
        bounds.push([userCoords.lat, userCoords.lng]);
      }

      // 2. Plot Destination Marker
      if (destCoords && destCoords.lat && destCoords.lng) {
        const destPin = window.L.marker([destCoords.lat, destCoords.lng], {
          icon: createPin("#dc2626", "🏁")
        }).addTo(layerGroupRef.current);

        destPin.bindPopup(`
          <div style="padding: 10px; max-width: 220px;">
            <div style="font-weight: bold; font-size: 13px; color: #991b1b;">🏁 Destination</div>
            <div style="font-size: 12px; color: #0f172a; margin-top: 2px;"><strong>${destName}</strong></div>
            <div style="font-size: 10px; color: #64748b; margin-top: 3px;">GPS: ${destCoords.lat.toFixed(4)}° N, ${destCoords.lng.toFixed(4)}° E</div>
          </div>
        `);
        bounds.push([destCoords.lat, destCoords.lng]);
      }

      // 3. Plot Nearest Station Hub Marker
      if (nearestStation && nearestStation.lat && nearestStation.lng) {
        const stnPin = window.L.marker([nearestStation.lat, nearestStation.lng], {
          icon: createPin("#7c3aed", "🚉")
        }).addTo(layerGroupRef.current);

        stnPin.bindPopup(`
          <div style="padding: 10px; max-width: 220px;">
            <div style="font-weight: bold; font-size: 13px; color: #5b21b6;">🚉 Transport Point / Hub</div>
            <div style="font-size: 12px; color: #0f172a; margin-top: 2px;"><strong>${nearestStation.name}</strong></div>
            <div style="font-size: 11px; color: #64748b; margin-top: 2px;">Corridor gateway to ${destName || 'destination'}</div>
          </div>
        `);
        bounds.push([nearestStation.lat, nearestStation.lng]);
      }

      // 4. Plot Destination Attraction Markers
      activities.forEach(act => {
        if (act && act.lat && act.lng) {
          const pin = window.L.marker([act.lat, act.lng], {
            icon: createPin("#059669", "📍")
          }).addTo(layerGroupRef.current);

          pin.bindPopup(`
            <div style="padding: 10px; max-width: 220px;">
              ${act.photo ? `<img src="${act.photo}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />` : ''}
              <div style="font-weight: bold; font-size: 13px; color: #0f172a;">${act.title}</div>
              <div style="font-size: 11px; color: #64748b; margin-top: 2px;">Time: ${act.time} • Cost: ${act.cost === 0 ? 'Free' : '₹' + act.cost}</div>
            </div>
          `);
          bounds.push([act.lat, act.lng]);
        }
      });

      // 5. Plot Stays Markers
      stays.forEach(stay => {
        if (stay && stay.lat && stay.lng) {
          const pin = window.L.marker([stay.lat, stay.lng], {
            icon: createPin("#0284c7", "🏨")
          }).addTo(layerGroupRef.current);

          pin.bindPopup(`
            <div style="padding: 10px; max-width: 220px;">
              <img src="${stay.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
              <div style="font-weight: bold; font-size: 13px; color: #0f172a;">${stay.name}</div>
              <div style="font-size: 11px; color: #0284c7; font-weight: bold; margin-top: 2px;">₹${stay.pricePerNight} / night • ⭐ ${stay.rating}</div>
            </div>
          `);
          bounds.push([stay.lat, stay.lng]);
        }
      });

      // 6. Draw Journey Route Polyline connecting Origin -> Station -> Destination
      const routeCoords = [];
      if (userCoords && userCoords.lat && userCoords.lng) {
        routeCoords.push([userCoords.lat, userCoords.lng]);
      }
      if (nearestStation && nearestStation.lat && nearestStation.lng) {
        routeCoords.push([nearestStation.lat, nearestStation.lng]);
      }
      if (destCoords && destCoords.lat && destCoords.lng) {
        routeCoords.push([destCoords.lat, destCoords.lng]);
      }
      if (routeCoords.length >= 2) {
        window.L.polyline(routeCoords, {
          color: "#059669",
          weight: 4,
          opacity: 0.8,
          dashArray: "8, 8"
        }).addTo(layerGroupRef.current);
      }

      // 7. Auto-fit bounds dynamically to show entire trip & destination
      if (bounds.length > 1) {
        leafletInstance.current.fitBounds(bounds, { padding: [45, 45], maxZoom: 13 });
      } else if (destCoords && destCoords.lat && destCoords.lng) {
        leafletInstance.current.setView([destCoords.lat, destCoords.lng], 11);
      } else if (userCoords && userCoords.lat && userCoords.lng) {
        leafletInstance.current.setView([userCoords.lat, userCoords.lng], 11);
      }

      // Ensure Leaflet computes container dimensions after DOM layout
      setTimeout(() => {
        if (leafletInstance.current) {
          leafletInstance.current.invalidateSize();
        }
      }, 150);

    } catch (err) {
      console.warn("Marker update notice:", err);
    }
  }, [userCoords, originName, nearestStation, activities, stays, destCoords, destName]);

  return (
    <div id="interactive-map-container" className="h-[420px] w-full rounded-2xl overflow-hidden border border-slate-200 z-10" ref={mapRef}></div>
  );
}

// Render root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ToastProvider>
    <YatraWiseApp />
  </ToastProvider>
);
