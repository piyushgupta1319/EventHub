'use client';

import { useState } from 'react';
import { Megaphone } from 'lucide-react';
import AnnouncementCard from '@/components/AnnouncementCard';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([
    {
      id: '1',
      title: 'Summer Event Season Begins',
      date: 'June 8, 2026',
      category: 'event' as const,
      content: 'Get ready for an amazing summer filled with exciting events! Registration is now open for all June and July events.',
      priority: 'high' as const
    },
    {
      id: '2',
      title: 'New Certificate Program Launched',
      date: 'June 5, 2026',
      category: 'general' as const,
      content: 'We\'re excited to announce our new certificate program for event participation. Earn badges and unlock exclusive rewards!',
      priority: 'medium' as const
    },
    {
      id: '3',
      title: 'Platform Maintenance Scheduled',
      date: 'June 3, 2026',
      category: 'system' as const,
      content: 'EventHub will undergo scheduled maintenance on June 10. Expected downtime: 2 hours. Thank you for your patience!',
      priority: 'high' as const
    },
    {
      id: '4',
      title: 'Meet the EventHub Team',
      date: 'May 30, 2026',
      category: 'general' as const,
      content: 'Join us for a virtual meet-and-greet with the EventHub team. Learn how the platform was built and share your feedback.',
      priority: 'low' as const
    }
  ]);

  const handleDismiss = (id: string) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
            <Megaphone size={48} />
            Announcements
          </h1>
          <p className="text-lg text-blue-100">Stay updated with the latest news and updates</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {announcements.length === 0 ? (
          <div className="text-center py-12">
            <Megaphone size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">All announcements have been dismissed</p>
          </div>
        ) : (
          <div className="space-y-6">
            {announcements.map((announcement) => (
              <AnnouncementCard 
                key={announcement.id} 
                {...announcement}
                onDismiss={handleDismiss}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
