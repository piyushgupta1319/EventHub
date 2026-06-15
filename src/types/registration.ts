export interface Registration {
  id: string;
  userId: string;
  eventId: string;
  eventTitle: string;
  registrationDate: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  ticketNumber?: string;
  createdAt: string;
  updatedAt: string;
}
