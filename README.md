# YatraWise

An intelligent smart tourism and journey planning platform that crafts end-to-end itineraries with multi-modal transport comparisons, train connections, curated stays, and budget optimization.

## Overview

**YatraWise** is a web-based travel intelligence platform engineered to simplify travel across India. By combining geographic distance calculations, curated Indian Railways corridors, intercity transit options, vetted local stays, and dynamic budget calculators, YatraWise enables travelers to explore destinations efficiently while avoiding tourist traps and logistical friction.

## Features

- **Multi-Modal Transit Comparison**: Real-time evaluation of Indian Railways train connections (Superfast, Sleeper, 3AC, Vistadome coaches), state roadways AC Volvo sleepers, and regional flight transfers with cost and duration metrics.
- **End-to-End Itinerary Planning**: Origin-to-destination routing factoring in layovers, scenic corridors, and first/last-mile station transfers.
- **Curated Destination Dossiers**: Comprehensive profiles for top Indian destinations (e.g., Araku Valley, Hampi, Munnar, Goa, Varanasi) detailing regional cuisine, peak seasons, safety ratings, and landmark itineraries.
- **Accommodations & Certified Guides**: Catalog of verified homestays, heritage hotels, and licensed local storytellers and guides.
- **Interactive Budget Optimizer**: Real-time spending breakdown categorized by transit, lodging, food, and activities.
- **Portable Architecture**: Built as a responsive client application with zero complex server requirements.

## Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), React (in-browser Babel JSX)
- **Styling**: Tailwind CSS (CDN-driven with custom design system extensions)
- **Typography**: Google Fonts (Plus Jakarta Sans & Outfit)
- **Services Engine**: Custom geometric routing, geocoding cache, and railway schedule matching

## Architecture

```
User Location & Destination Input
               │
               ▼
       services.js Engine
               │
      ├────────┼────────┬────────┐
      ▼        ▼        ▼        ▼
 Geolocation Distance Railway   Bus & Flight
  Service   Matrix   Corridors Estimates
      │        │        │        │
      └────────┴────────┴────────┘
               │
               ▼
          app.jsx / index.html (React State & UI View)
               │
               ▼
     Interactive Itinerary, Map & Budget Breakdown
```

## Project Structure

```
├── index.html     # Main application interface and Tailwind runtime
├── app.jsx        # Core React component tree, modal views, and booking flows
├── services.js    # Routing algorithms, train schedules, and geocoding services
├── demoData.js    # Curated regional destinations, hotels, and guide listings
├── styles.css     # Bespoke animations, typography tweaks, and custom styles
├── build.ps1      # PowerShell build helper for standalone HTML bundles
└── .gitignore     # Git ignore configuration
```

## Getting Started

### Prerequisites

A modern web browser (Chrome, Firefox, Edge, Safari).

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vardhan-billakanti/yaatrawise-7.git
   cd yaatrawise-7
   ```

2. Open `index.html` directly in your browser or run a lightweight local static server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

3. Navigate to `http://localhost:8000`.

## Security

YatraWise runs entirely in client-side runtime. It does not transmit private credentials, store personal tracking data, or rely on sensitive server-side database tokens.

## Author

**Billakanti Jaya Vardhan**
- GitHub: [@vardhan-billakanti](https://github.com/vardhan-billakanti)
