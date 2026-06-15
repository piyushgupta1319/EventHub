export interface Event {
  id: string;
  title: string;
  description: string;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Social' | 'Workshop';
  date: string;
  time: string;
  venue: string;
  image?: string;
  capacity: number;
  registrations: number;
  isFeatured?: boolean;
  color?: string;
  participants?: string[];
  timeline?: TimelineItem[];
  speakers?: Speaker[];
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}
