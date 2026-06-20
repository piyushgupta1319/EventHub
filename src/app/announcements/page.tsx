'use client';

import { useState } from 'react';
import { Megaphone, Info } from 'lucide-react';
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <Megaphone size={32} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2">Announcements</h1>
              <p className="text-blue-100 text-lg">Stay updated with the latest news and updates from EventHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {announcements.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
            <Megaphone size={48} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 text-lg">All announcements have been dismissed</p>
            <p className="text-slate-500 text-sm mt-2">Check back later for new updates</p>
          </div>
        ) : (
          <div>
            {/* Info Banner */}
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <Info size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-semibold text-sm">Showing {announcements.length} announcements</p>
                <p className="text-blue-700 text-sm">You can dismiss announcements by clicking the delete button</p>
              </div>
            </div>

            {/* Announcements Grid */}
            <div className="space-y-4">
              {announcements.map((announcement) => (
                <AnnouncementCard 
                  key={announcement.id} 
                  {...announcement}
                  onDismiss={handleDismiss}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
