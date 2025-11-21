export enum EventCategory {
  ACADEMIC = 'Academic',
  SOCIAL = 'Social',
  SPORTS = 'Sports',
  CAREER = 'Career',
  ARTS = 'Arts'
}

export type UserRole = 'student' | 'admin';

export interface EventLocation {
  id: string;
  name: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  description: string;
  type: 'building' | 'park' | 'gate';
  lat: number;
  lng: number;
}

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string
  category: EventCategory;
  location: EventLocation;
  attendees: number;
  imageUrl: string;
  isRegistered?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface DashboardStat {
  name: string;
  value: number;
  change: string; // e.g. "+12%"
  positive: boolean;
}

export interface RegistrationFormState {
  full_name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  special_requirements: string;
}

export interface RegistrationResult {
  registration_id: string;
  ticket_code: string;
  qr_path: string;
  qr_url: string; // For frontend display
  event_id: string;
  timestamp: string;
  user_details: RegistrationFormState;
}