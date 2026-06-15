export interface Feedback {
  id: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  rating: number; // 1-5
  comment: string;
  category: 'event-quality' | 'organization' | 'venue' | 'speakers' | 'other';
  createdAt: string;
  updatedAt: string;
}
