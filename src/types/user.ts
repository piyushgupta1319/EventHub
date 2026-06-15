export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  university?: string;
  department?: string;
  bio?: string;
  avatar?: string;
  role: 'user' | 'admin' | 'organizer';
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends Omit<User, 'role'> {
  eventsRegistered: number;
  certificatesEarned: number;
  totalEventAttended: number;
}
