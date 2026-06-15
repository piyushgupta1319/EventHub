// Event Categories
export const EVENT_CATEGORIES = [
  'Technical',
  'Cultural',
  'Sports',
  'Social',
  'Workshop'
] as const;

// Feedback Categories
export const FEEDBACK_CATEGORIES = [
  'event-quality',
  'organization',
  'venue',
  'speakers',
  'other'
] as const;

// User Roles
export const USER_ROLES = ['user', 'admin', 'organizer'] as const;

// Registration Status
export const REGISTRATION_STATUS = ['confirmed', 'pending', 'cancelled'] as const;

// Announcement Priority
export const ANNOUNCEMENT_PRIORITY = ['high', 'medium', 'low'] as const;

// Color Themes for Events
export const EVENT_COLORS = [
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-green-500 to-green-600',
  'from-pink-500 to-pink-600',
  'from-orange-500 to-orange-600',
  'from-indigo-500 to-indigo-600'
] as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/events', label: 'Events' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
] as const;
