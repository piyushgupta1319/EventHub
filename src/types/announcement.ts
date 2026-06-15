export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'urgent' | 'general' | 'event' | 'system';
  date: string;
  icon?: string;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  updatedAt: string;
}
