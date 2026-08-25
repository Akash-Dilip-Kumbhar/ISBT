

export const TERMINAL_IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKk6YwAI2qmqpXlXEAWVUIXjW10tsbQnB1HGoXuCSZZSZlxhvbHSX-G4qOL3_XB4XhaJLtiTtrcYgPbmw-E-qEmzgQbjo7Q5fgprIGiU2GO0hCZyzD7A_J-RH1RQpzbMRuwEbWd3hh7hjWTKCKugBzJPZy9iB7Y77NpO0sCy8oj9jrIwz-Apyjjreuranv2tSAdHA9FoY0G0ZhLR9wWEy8a7XV3k5AVjCVC0n5_uvGPUBkY9xg0SmN7w',
  rendering: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnP94yT1f8uZfw8DnNCRAzOjE_FcInsTR6cGPIYNu4WpzuuQEakdFKjyooMCcol9AwMBY_rqjizZp8efyk6HKg32Hfs9mPz7ZTfJixIG7k2ktyEtnc2AhXR8PMszMMNLWgX51-mV9fUcOq6n-E27obXh9y49Lr6RsJL58H939sJH17fJMr6jefWtbak2dhaLkW3a9lryBImY5kpqJfqelSfb0UbMkklaE6gfXfVtHepJ2Qgxo8LkFbrA',
};

export const BUS_ROUTES: BusRoute[] = [
  {
    id: 'bus-1',
    busNumber: 'MP-09-FA-8812',
    operator: 'AICTSL Premier Intercity',
    operatorType: 'AICTSL',
    source: 'ISBT Kumedi, Indore',
    destination: 'Bhopal (ISBT Habibganj)',
    departureTime: '08:30 AM',
    arrivalTime: '11:45 AM',
    bayNumber: 'Bay 04',
    busType: 'Electric AC Seater',
    fare: 380,
    availableSeats: 14,
    totalSeats: 45,
    status: 'Boarding',
    viaCities: ['Dewas Bypass', 'Ashta', 'Sehore'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-2',
    busNumber: 'MP-13-ZB-4490',
    operator: 'MP Tourism Superfast',
    operatorType: 'MP Tourism',
    source: 'ISBT Kumedi, Indore',
    destination: 'Ujjain (Mahakal Connector)',
    departureTime: '09:00 AM',
    arrivalTime: '10:10 AM',
    bayNumber: 'Bay 02',
    busType: 'Electric AC Seater',
    fare: 120,
    availableSeats: 26,
    totalSeats: 40,
    status: 'On Time',
    viaCities: ['Sanwer Road', 'Dharampura'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-3',
    busNumber: 'GJ-01-XX-9102',
    operator: 'Chartered Speed Volvo Express',
    operatorType: 'Chartered Speed',
    source: 'ISBT Kumedi, Indore',
    destination: 'Ahmedabad (Geeta Mandir)',
    departureTime: '09:45 AM',
    arrivalTime: '05:30 PM',
    bayNumber: 'Bay 11',
    busType: 'AC Volvo Sleeper',
    fare: 850,
    availableSeats: 8,
    totalSeats: 36,
    status: 'Scheduled',
    viaCities: ['Dhar', 'Jhabua', 'Godhra', 'Vadodara Bypass'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-4',
    busNumber: 'MH-04-HY-7741',
    operator: 'Royal Travels Multi-Axle',
    operatorType: 'Royal Travels',
    source: 'ISBT Kumedi, Indore',
    destination: 'Mumbai (Borivali / Dadar)',
    departureTime: '06:30 PM',
    arrivalTime: '06:45 AM',
    bayNumber: 'Bay 15',
    busType: 'AC Volvo Sleeper',
    fare: 1450,
    availableSeats: 5,
    totalSeats: 32,
    status: 'Scheduled',
    viaCities: ['Sendhwa', 'Dhule', 'Nashik', 'Thane'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-5',
    busNumber: 'RJ-14-PC-3319',
    operator: 'Intercity Express Platinum',
    operatorType: 'Intercity Express',
    source: 'ISBT Kumedi, Indore',
    destination: 'Jaipur (Sindhi Camp)',
    departureTime: '07:15 PM',
    arrivalTime: '06:00 AM',
    bayNumber: 'Bay 08',
    busType: 'Bharat Benz AC',
    fare: 920,
    availableSeats: 19,
    totalSeats: 42,
    status: 'Scheduled',
    viaCities: ['Ratlam', 'Mandsaur', 'Neemuch', 'Bhilwara', 'Ajmer'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-6',
    busNumber: 'MP-07-GA-1120',
    operator: 'MP State Roadways Gold',
    operatorType: 'MP Tourism',
    source: 'ISBT Kumedi, Indore',
    destination: 'Gwalior (Jayendraganj)',
    departureTime: '08:00 PM',
    arrivalTime: '07:30 AM',
    bayNumber: 'Bay 09',
    busType: 'Super Deluxe 2x2',
    fare: 750,
    availableSeats: 22,
    totalSeats: 48,
    status: 'Scheduled',
    viaCities: ['Sarangpur', 'Guna', 'Shivpuri'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-7',
    busNumber: 'MH-12-QE-5561',
    operator: 'Chartered Speed Volvo',
    operatorType: 'Chartered Speed',
    source: 'ISBT Kumedi, Indore',
    destination: 'Pune (Swargate / Wakad)',
    departureTime: '08:45 PM',
    arrivalTime: '08:15 AM',
    bayNumber: 'Bay 16',
    busType: 'AC Volvo Sleeper',
    fare: 1350,
    availableSeats: 11,
    totalSeats: 34,
    status: 'Scheduled',
    viaCities: ['Shirdi Bypass', 'Ahmednagar'],
    platformLevel: 'Ground Bay'
  },
  {
    id: 'bus-8',
    busNumber: 'MP-20-JK-9080',
    operator: 'AICTSL Intercity Express',
    operatorType: 'AICTSL',
    source: 'ISBT Kumedi, Indore',
    destination: 'Jabalpur (Damoh Naka)',
    departureTime: '09:30 PM',
    arrivalTime: '06:30 AM',
    bayNumber: 'Bay 06',
    busType: 'AC Volvo Sleeper',
    fare: 890,
    availableSeats: 15,
    totalSeats: 36,
    status: 'Scheduled',
    viaCities: ['Bhopal', 'Hoshangabad', 'Narsinghpur'],
    platformLevel: 'Ground Bay'
  }
];

export const COMMERCIAL_UNITS: CommercialUnit[] = [
  {
    id: 'unit-gf-04',
    unitNumber: 'Shop GF-04',
    floor: 'Ground Floor',
    category: 'Retail Shop',
    carpetAreaSqFt: 385,
    superBuiltUpSqFt: 550,
    baseReservePrice: 4200000,
    monthlyRentEstimate: 45000,
    frontageFt: 18,
    suitableFor: ['Pharmacy & Chemist', 'Convenience Store', 'Travel Accessories', 'Packaged Snacks'],
    status: 'Under Bidding',
    auctionId: 'auc-01',
    description: 'High visibility frontage facing the primary passenger departure concourse with heavy pedestrian throughput.',
    features: ['3-Phase 10KW Power', 'Full Glass Frontage', 'Fire Sprinklers & Smoke Sensor', 'Rolling Shutter + Glass Door']
  },
  {
    id: 'unit-gf-12',
    unitNumber: 'Shop GF-12 (Corner)',
    floor: 'Ground Floor',
    category: 'Retail Shop',
    carpetAreaSqFt: 520,
    superBuiltUpSqFt: 740,
    baseReservePrice: 5800000,
    monthlyRentEstimate: 65000,
    frontageFt: 28,
    suitableFor: ['Branded Apparel', 'Footwear', 'Consumer Electronics', 'Indori Namkeen Flagship'],
    status: 'Open for E-Auction',
    auctionId: 'auc-02',
    description: 'Premium dual-frontage corner unit adjacent to main escalators leading to the first-floor ticketing hall.',
    features: ['Dual Entry Access', 'Central AC Connection', 'Independent Water Line', 'Dedicated Signage Fascia']
  },
  {
    id: 'unit-fc-02',
    unitNumber: 'Kiosk FC-02',
    floor: '1st Floor',
    category: 'Food Court / Cafe',
    carpetAreaSqFt: 290,
    superBuiltUpSqFt: 410,
    baseReservePrice: 3100000,
    monthlyRentEstimate: 38000,
    frontageFt: 14,
    suitableFor: ['Quick Service Restaurant (QSR)', 'Coffee & Bakery', 'Indori Chaat / Poha Jalebi', 'Juice Bar'],
    status: 'Open for E-Auction',
    auctionId: 'auc-03',
    description: 'Fully piped culinary kiosk inside the 300-seat central air-conditioned Food Court overlooking the bus bays.',
    features: ['Commercial Exhaust Ducting', 'Heavy Duty Gas Line Provision', '3-Phase Power', 'Grease Trap Plumbing']
  },
  {
    id: 'unit-of-108',
    unitNumber: 'Office OF-108',
    floor: '1st Floor',
    category: 'Corporate Office',
    carpetAreaSqFt: 980,
    superBuiltUpSqFt: 1400,
    baseReservePrice: 7900000,
    monthlyRentEstimate: 85000,
    frontageFt: 35,
    suitableFor: ['Tour & Travel Corporate HQ', 'Logistics Operations Office', 'Banking Regional Office', 'Consultancy'],
    status: 'Open for E-Auction',
    auctionId: 'auc-04',
    description: 'Spacious modern office space with double glazed soundproof glass windows facing MR-10 Super Corridor arterial road.',
    features: ['100% DG Power Backup', 'Fiber Optic High-Speed LAN Line', 'Private Washroom', 'Access Control Ready']
  },
  {
    id: 'unit-atm-01',
    unitNumber: 'ATM Kiosk ATM-01',
    floor: 'Ground Floor',
    category: 'ATM Kiosk',
    carpetAreaSqFt: 95,
    superBuiltUpSqFt: 135,
    baseReservePrice: 1600000,
    monthlyRentEstimate: 22000,
    frontageFt: 8,
    suitableFor: ['Nationalised Banks', 'Private Sector Banks', 'White-label ATM Operators'],
    status: 'Allotted',
    description: 'High footfall ATM space located directly next to the terminal main entrance and passenger security check.',
    features: ['24/7 Power Backup', 'Secure Concrete Enclosure', 'CCTV Provision']
  },
  {
    id: 'unit-rt-01',
    unitNumber: 'Terrace Restaurant RT-01',
    floor: 'Rooftop Terrace',
    category: 'Food Court / Cafe',
    carpetAreaSqFt: 2400,
    superBuiltUpSqFt: 3500,
    baseReservePrice: 18500000,
    monthlyRentEstimate: 190000,
    frontageFt: 60,
    suitableFor: ['Fine Dining Rooftop Lounge', 'Microbrewery / Resto-Bar', 'Open-Air Banquet'],
    status: 'Upcoming',
    description: 'Panoramic rooftop commercial hospitality space with unobstructed views of the Indore skyline and transit concourse.',
    features: ['Dedicated High-Speed Passenger Lift', 'Open Terrace Deck (1100 sqft)', 'Full Commercial Kitchen Ducting', 'Valet Parking Link']
  }
];

export const AUCTION_ITEMS: AuctionItem[] = [
  {
    id: 'auc-01',
    nitNumber: 'IDA/ISBT-KUMEDI/NIT-2026/089',
    title: 'E-Auction for Retail Shop GF-04 (Passenger Concourse)',
    unitNumber: 'Shop GF-04',
    category: 'Retail Shop',
    floor: 'Ground Floor',
    areaSqFt: 385,
    reservePrice: 4200000,
    currentHighBid: 4650000,
    totalBidsPlaced: 14,
    minIncrement: 50000,
    emdAmount: 210000,
    tenderFee: 5900,
    startDate: '2026-08-15 10:00 AM',
    endDate: '2026-08-25 05:00 PM',
    endTimestamp: Date.now() + 7 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000, // ~7 days from now
    status: 'LIVE',
    bidHistory: [
      { id: 'b-1', bidderAlias: 'BIDDER_ID_8842', amount: 4650000, timestamp: '10 mins ago' },
      { id: 'b-2', bidderAlias: 'BIDDER_ID_3019', amount: 4600000, timestamp: '35 mins ago' },
      { id: 'b-3', bidderAlias: 'BIDDER_ID_8842', amount: 4550000, timestamp: '1 hour ago' },
      { id: 'b-4', bidderAlias: 'BIDDER_ID_1904', amount: 4500000, timestamp: '2 hours ago' },
      { id: 'b-5', bidderAlias: 'BIDDER_ID_3019', amount: 4400000, timestamp: '5 hours ago' }
    ]
  },
  {
    id: 'auc-02',
    nitNumber: 'IDA/ISBT-KUMEDI/NIT-2026/090',
    title: 'E-Auction for Premium Corner Retail Shop GF-12',
    unitNumber: 'Shop GF-12 (Corner)',
    category: 'Retail Shop',
    floor: 'Ground Floor',
    areaSqFt: 520,
    reservePrice: 5800000,
    currentHighBid: 6350000,
    totalBidsPlaced: 9,
    minIncrement: 50000,
    emdAmount: 290000,
    tenderFee: 5900,
    startDate: '2026-08-16 11:00 AM',
    endDate: '2026-08-26 04:00 PM',
    endTimestamp: Date.now() + 8 * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000,
    status: 'LIVE',
    bidHistory: [
      { id: 'b-201', bidderAlias: 'BIDDER_ID_7411', amount: 6350000, timestamp: '18 mins ago' },
      { id: 'b-202', bidderAlias: 'BIDDER_ID_9012', amount: 6300000, timestamp: '1 hour ago' },
      { id: 'b-203', bidderAlias: 'BIDDER_ID_5521', amount: 6200000, timestamp: '3 hours ago' }
    ]
  },
  {
    id: 'auc-03',
    nitNumber: 'IDA/ISBT-KUMEDI/NIT-2026/091',
    title: 'E-Auction for Food Court QSR Kiosk FC-02',
    unitNumber: 'Kiosk FC-02',
    category: 'Food Court / Cafe',
    floor: '1st Floor',
    areaSqFt: 290,
    reservePrice: 3100000,
    currentHighBid: 3400000,
    totalBidsPlaced: 6,
    minIncrement: 25000,
    emdAmount: 155000,
    tenderFee: 3540,
    startDate: '2026-08-17 02:00 PM',
    endDate: '2026-08-28 05:00 PM',
    endTimestamp: Date.now() + 10 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000,
    status: 'LIVE',
    bidHistory: [
      { id: 'b-301', bidderAlias: 'BIDDER_ID_1190', amount: 3400000, timestamp: '42 mins ago' },
      { id: 'b-302', bidderAlias: 'BIDDER_ID_6641', amount: 3350000, timestamp: '4 hours ago' }
    ]
  },
  {
    id: 'auc-04',
    nitNumber: 'IDA/ISBT-KUMEDI/NIT-2026/094',
    title: 'E-Auction for Corporate Office Space OF-108',
    unitNumber: 'Office OF-108',
    category: 'Corporate Office',
    floor: '1st Floor',
    areaSqFt: 980,
    reservePrice: 7900000,
    currentHighBid: 8200000,
    totalBidsPlaced: 4,
    minIncrement: 100000,
    emdAmount: 395000,
    tenderFee: 11800,
    startDate: '2026-08-18 10:00 AM',
    endDate: '2026-08-30 05:00 PM',
    endTimestamp: Date.now() + 12 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000,
    status: 'LIVE',
    bidHistory: [
      { id: 'b-401', bidderAlias: 'BIDDER_ID_4419', amount: 8200000, timestamp: '1 hour ago' },
      { id: 'b-402', bidderAlias: 'BIDDER_ID_9901', amount: 8100000, timestamp: '6 hours ago' }
    ]
  },
  {
    id: 'auc-05',
    nitNumber: 'IDA/ISBT-KUMEDI/NIT-2026/098',
    title: 'E-Auction for Rooftop Fine Dine & Banquet Space RT-01',
    unitNumber: 'Terrace Restaurant RT-01',
    category: 'Food Court / Cafe',
    floor: 'Rooftop Terrace',
    areaSqFt: 2400,
    reservePrice: 18500000,
    currentHighBid: 18500000,
    totalBidsPlaced: 0,
    minIncrement: 200000,
    emdAmount: 925000,
    tenderFee: 23600,
    startDate: '2026-09-01 10:00 AM',
    endDate: '2026-09-15 05:00 PM',
    endTimestamp: Date.now() + 20 * 24 * 60 * 60 * 1000,
    status: 'UPCOMING',
    bidHistory: []
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'fac-1',
    name: 'Air-Conditioned Waiting Lounges',
    category: 'Passenger Care',
    icon: 'chair',
    location: 'Ground & 1st Floor Concourse',
    operatingHours: '24 Hours',
    description: 'Spacious seating for 1,500+ passengers with ergonomically designed stainless steel seating, charging docks, and digital flight/bus display screens.',
    features: ['High-efficiency HVAC Cooling', 'Universal Mobile Charging Ports', 'Braille Signage & Tactile Paving', 'Flight-grade Departure Boards'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-2',
    name: 'Digital Ticketing & Smart ITMS Desks',
    category: 'Transit & Ticketing',
    icon: 'confirmation_number',
    location: 'Central Entrance Lobby',
    operatingHours: '24 Hours',
    description: '32 dedicated automated ticket vending machines (ATVMs) and multi-state operator ticket counters supporting UPI, QR, and smart transit cards.',
    features: ['Contactless UPI/Card Payments', 'Multi-Language Touchscreen Kiosks', 'Real-time Seat Matrix Display', 'Inter-state Transport Pass Counters'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-3',
    name: 'Multi-Level Car & Two-Wheeler Parking',
    category: 'Mobility & Parking',
    icon: 'local_parking',
    location: 'Dedicated Parking Block (Basement & G+2)',
    operatingHours: '24 Hours',
    description: 'Automated boom barriers with ANPR (Automatic Number Plate Recognition) for 800+ 4-wheelers and 1,500+ 2-wheelers with EV fast charging.',
    features: ['Fastag-enabled Entry & Exit', '24 EV Fast Chargers (CCS2 & Type 2)', 'Covered Safe Surveillance', 'Disabled Parking Spots (Direct Lift Access)'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-4',
    name: 'Air-Conditioned Food Court & Retail Hub',
    category: 'Commercial & Food',
    icon: 'restaurant',
    location: '1st Floor Mezzanine',
    operatingHours: '05:00 AM - 12:00 AM',
    description: 'Over 25 branded food outlets, specialty Indori delicacies, cafes, packaged food supermarts, and travel accessories stores.',
    features: ['300-seat Seating Capacity', 'FSSAI Certified Hygiene Rating', 'Digital Order Pick-up Screens', 'Family Seating Enclaves'],
    status: 'Operational 05:00 - 23:00'
  },
  {
    id: 'fac-5',
    name: 'Digital Cloakroom & Smart Luggage Lockers',
    category: 'Passenger Care',
    icon: 'luggage',
    location: 'Ground Floor (Adjacent to Bay 01)',
    operatingHours: '24 Hours',
    description: 'Secure, temperature-controlled baggage storage with biometric access, barcode tracking, and 24/7 security guarding.',
    features: ['Barcode Automated Check-in', 'Luggage X-Ray Security Screening', 'Hourly and Daily Tariff Options', 'Insured Baggage Handling'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-6',
    name: '24/7 Medical Emergency Post & First Aid',
    category: 'Security & Health',
    icon: 'medical_services',
    location: 'Ground Floor (Near VIP Lounge)',
    operatingHours: '24 Hours',
    description: 'Round-the-clock emergency medical paramedic room, automated external defibrillators (AEDs), oxygen support, and standby ambulance.',
    features: ['Trained Emergency Paramedics', 'Dedicated Ambulance Bay', 'Wheelchair Assistance Hotline', 'Maternal & Child Care Lounge'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-7',
    name: 'Integrated Police Post & Security Control',
    category: 'Security & Health',
    icon: 'security',
    location: 'Terminal Main Gate & CCTV Command Center',
    operatingHours: '24 Hours',
    description: 'High-definition 360° AI-enabled surveillance network with 280+ cameras monitored 24/7 by Madhya Pradesh Police and terminal security forces.',
    features: ['Facial Recognition Surveillance', 'Emergency Panic Buttons at every Bay', 'Women & Child Safety Helpdesk', 'Lost & Found Bureau'],
    status: 'Operational 24/7'
  },
  {
    id: 'fac-8',
    name: 'Mother & Child Care Room (Feeding Lounge)',
    category: 'Passenger Care',
    icon: 'child_care',
    location: '1st Floor Waiting Concourse',
    operatingHours: '24 Hours',
    description: 'Private, sanitized and tranquil nursing lounge for mothers with infant changing tables, warm water dispensers, and comfortable seating.',
    features: ['Sanitized Diaper Changing Stations', 'Private Nursing Cabins', 'Drinking Water & Milk Warmers', 'Complimentary Baby Care Essentials'],
    status: 'Operational 24/7'
  }
];

// export const ANNOUNCEMENTS: Announcement[] = [
//   {
//     id: 'ann-1',
//     date: '18 Aug 2026',
//     title: 'IDA E-Auction Notice NIT-2026/094 for Commercial Office Spaces on 1st Floor is now LIVE',
//     category: 'Auction Notice',
//     isImportant: true,
//     downloadUrl: '#'
//   },
//   {
//     id: 'ann-2',
//     date: '17 Aug 2026',
//     title: 'Commencement of 12 New Electric Intercity AC Buses on Indore-Ujjain & Indore-Bhopal Corridor',
//     category: 'Bus Operations',
//     isImportant: false,
//     downloadUrl: '#'
//   },
//   {
//     id: 'ann-3',
//     date: '15 Aug 2026',
//     title: 'Indore Metro Yellow Line Feeder Shuttles Operational from ISBT Kumedi Entrance Bay 1',
//     category: 'Passenger Alert',
//     isImportant: true,
//     downloadUrl: '#'
//   },
//   {
//     id: 'ann-4',
//     date: '10 Aug 2026',
//     title: 'Notice for Pre-Bid Meeting regarding 25 Food Court Kiosks & Retail Spaces (22 Aug 2026)',
//     category: 'Auction Notice',
//     isImportant: false,
//     downloadUrl: '#'
//   }
// ];

export const TECHNICAL_SPECIFICATIONS = [
  { label: 'Project Executing Authority', value: 'Indore Development Authority (IDA)' },
  { label: 'Total Land Parcel Area', value: '16.5 Acres (66,773 Sq. Meters)' },
  { label: 'Total Built-up Concourse Area', value: '4,50,000 Sq. Feet (G+2 Modern Structure)' },
  { label: 'Active Departure / Arrival Bays', value: '32 Passenger Boarding Bays' },
  { label: 'Idle Bus Holding Capacity', value: '250+ Intercity Buses' },
  { label: 'Daily Bus Handling Capacity', value: '1,200+ Buses / Day' },
  { label: 'Multi-Level Vehicle Parking', value: '800 Cars & 1,500 Two-Wheelers' },
  { label: 'Green Energy Infrastructure', value: '750 kWp Rooftop Solar Grid' },
  { label: 'Water Management', value: '100 KLD Zero-Liquid Discharge STP' },
  { label: 'Green Building Rating', value: 'IGBC Gold Pre-Certified' }
];

export const LOCATION_ADVANTAGES = [
  {
    title: 'Strategic Super Corridor Hub',
    desc: 'Positioned on the 8-lane Super Corridor & MR-10 junction, providing direct signal-free access to national highways.'
  },
  {
    title: '10 Mins from Indore International Airport',
    desc: 'Devi Ahilya Bai Holkar Airport is just 6.5 km away, offering effortless multi-modal air-to-bus transit.'
  },
  {
    title: 'Direct Indore Metro Connectivity',
    desc: 'Adjacent to upcoming Metro Station on Yellow Ring Line with dedicated pedestrian overhead skywalk connection.'
  },
  {
    title: 'Decongesting Indore City Core',
    desc: 'Redirects inter-state bus movement away from Sarwate and Navlakha, eliminating heavy vehicle congestion in central city.'
  }
];
