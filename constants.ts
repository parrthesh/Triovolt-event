import { CampusEvent, EventCategory, EventLocation } from './types';

export const LOCATIONS: Record<string, EventLocation> = {
  MAIN_GATE: { 
    id: 'MAIN_GATE', 
    name: 'Campus Main Gate', 
    x: 95, y: 85, 
    description: 'Main entry from the highway.', 
    type: 'gate',
    lat: 22.391200,
    lng: 73.368800 
  },
  MAGNAM_NETLINK: { 
    id: 'MAGNAM_NETLINK', 
    name: 'Magnam Netlink', 
    x: 82, y: 55, 
    description: 'Corporate park and tech collaboration center.', 
    type: 'building',
    lat: 22.394100,
    lng: 73.369200
  },
  SLS_UNIVERSITY: { 
    id: 'SLS_UNIVERSITY', 
    name: 'ITM SLS Baroda University', 
    x: 55, y: 65, 
    description: 'Main academic building and administrative block.', 
    type: 'building',
    lat: 22.393436,
    lng: 73.367812
  },
  PHARMACY_SCHOOL: { 
    id: 'PHARMACY_SCHOOL', 
    name: 'ITM School of Pharmacy', 
    x: 40, y: 35, 
    description: 'Labs and classrooms for pharmaceutical studies.', 
    type: 'building',
    lat: 22.395200,
    lng: 73.366500
  },
  H_BLOCK: { 
    id: 'H_BLOCK', 
    name: 'H Block (Medical)', 
    x: 58, y: 20, 
    description: 'Medical center and health services.', 
    type: 'building',
    lat: 22.396000,
    lng: 73.367200
  },
  SPORTS_GROUND: { 
    id: 'SPORTS_GROUND', 
    name: 'Cricket Ground', 
    x: 20, y: 65, 
    description: 'Large oval ground for cricket and athletics.', 
    type: 'park',
    lat: 22.393000,
    lng: 73.364800
  },
  CANTEEN: { 
    id: 'CANTEEN', 
    name: 'Central Canteen', 
    x: 48, y: 55, 
    description: 'Food court and student hangout area.', 
    type: 'building',
    lat: 22.393800,
    lng: 73.367000
  },
  HOSTEL: { 
    id: 'HOSTEL', 
    name: 'Student Hostels', 
    x: 85, y: 90, 
    description: 'On-campus accommodation.', 
    type: 'building',
    lat: 22.390500,
    lng: 73.369500
  }
};

export const MOCK_EVENTS: CampusEvent[] = [
  {
    id: '1',
    title: 'AI Innovation Hackathon',
    description: 'Build the future with Gemini API. 24 hours of coding, pizza, and prizes.',
    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    category: EventCategory.ACADEMIC,
    location: LOCATIONS.SLS_UNIVERSITY,
    attendees: 142,
    imageUrl: 'https://picsum.photos/id/2/800/600'
  },
  {
    id: '2',
    title: 'Inter-College Cricket Final',
    description: 'Trivolt Titans vs. Pharma Pharmacists. A match for the history books!',
    date: new Date(Date.now() + 172800000).toISOString(), // 2 days later
    category: EventCategory.SPORTS,
    location: LOCATIONS.SPORTS_GROUND,
    attendees: 530,
    imageUrl: 'https://picsum.photos/id/453/800/600'
  },
  {
    id: '3',
    title: 'Pharmacy Research Symposium',
    description: 'Presenting breakthrough studies in medicinal chemistry.',
    date: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago (Live now)
    category: EventCategory.ACADEMIC,
    location: LOCATIONS.PHARMACY_SCHOOL,
    attendees: 800,
    imageUrl: 'https://picsum.photos/id/158/800/600'
  },
  {
    id: '4',
    title: 'Tech Talk: Future of Cloud',
    description: 'Industry experts from Magnam Netlink share insights.',
    date: new Date(Date.now() + 3600000 * 5).toISOString(),
    category: EventCategory.CAREER,
    location: LOCATIONS.MAGNAM_NETLINK,
    attendees: 45,
    imageUrl: 'https://picsum.photos/id/60/800/600'
  },
  {
    id: '5',
    title: 'Health & Wellness Camp',
    description: 'Free checkups and health awareness sessions.',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    category: EventCategory.SOCIAL,
    location: LOCATIONS.H_BLOCK,
    attendees: 300,
    imageUrl: 'https://picsum.photos/id/4/800/600'
  }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are "Volt", the intelligent AI assistant for the Trivolt Smart Campus platform (based on the ITM SLS Baroda University layout).
Your goal is to help students find events, navigate the campus, and answer questions about university life.
You have access to the list of current events and campus locations.
Always be energetic, helpful, and concise. Use emojis where appropriate ⚡.
If a user asks about a specific event location, guide them using the campus map landmarks like the School of Pharmacy, SLS University block, or the Magnam building.
`;