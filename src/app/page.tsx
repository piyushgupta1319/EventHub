'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Trophy, Zap, Heart, Share2 } from 'lucide-react';
import EventCard from '@/components/EventCard';

const FEATURED_EVENTS = [
  {
    id: '1',
    title: 'React Workshop 2026',
    date: '2026-06-15',
    time: '10:00 AM',
    location: 'Tech Building, Room 101',
    category: 'Technical',
    participants: 45,
    capacity: 100,
    organizer: 'Tech Club',
    isFeatured: true,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    id: '2',
    title: 'AI & Machine Learning Summit',
    date: '2026-06-18',
    time: '2:00 PM',
    location: 'Main Auditorium',
    category: 'Technical',
    participants: 120,
    capacity: 200,
    organizer: 'AI Society',
    isFeatured: false,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600',
  },
  {
    id: '3',
    title: 'Cultural Festival 2026',
    date: '2026-06-22',
    time: '6:00 PM',
    location: 'Campus Grounds',
    category: 'Cultural',
    participants: 200,
    capacity: 500,
    organizer: 'Cultural Committee',
    isFeatured: false,
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-600',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={24} />
            <span className="text-blue-100 font-semibold">Welcome to EventHub</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Discover & Join Amazing <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Events</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Connect with thousands of students, attend incredible events, and create unforgettable memories on campus
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/login">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Now
              </button>
            </Link>
            <Link href="/events">
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Explore Events <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Trophy size={32} />, label: 'Events', value: '500+' },
              { icon: <Users size={32} />, label: 'Members', value: '50K+' },
              { icon: <Heart size={32} />, label: 'Registered', value: '100K+' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="text-blue-100 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Why Choose EventHub?</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            The most comprehensive platform for discovering and managing college events
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={32} className="text-blue-600" />, title: 'Instant Notifications', desc: 'Get real-time updates about events you care about' },
              { icon: <Share2 size={32} className="text-purple-600" />, title: 'Easy Sharing', desc: 'Share events with friends and build a community' },
              { icon: <Trophy size={32} className="text-pink-600" />, title: 'Earn Certificates', desc: 'Get recognized for your participation and achievements' },
              { icon: <Users size={32} className="text-green-600" />, title: 'Network & Connect', desc: 'Meet like-minded people and build lasting friendships' },
              { icon: <Heart size={32} className="text-red-600" />, title: 'Save Favorites', desc: 'Bookmark events and create your personal calendar' },
              { icon: <Sparkles size={32} className="text-yellow-600" />, title: 'Exclusive Access', desc: 'Early access to premium and limited-capacity events' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Featured Events</h2>
              <p className="text-gray-600 mt-2">Don't miss these amazing opportunities</p>
            </div>
            <Link href="/events">
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                View All <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_EVENTS.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Event Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Technical', emoji: '💻', color: 'from-blue-500 to-blue-600' },
              { name: 'Cultural', emoji: '🎭', color: 'from-pink-500 to-pink-600' },
              { name: 'Sports', emoji: '⚽', color: 'from-green-500 to-green-600' },
              { name: 'Social', emoji: '🎉', color: 'from-purple-500 to-purple-600' },
              { name: 'Workshop', emoji: '🛠️', color: 'from-orange-500 to-orange-600' },
            ].map((cat) => (
              <Link key={cat.name} href={`/events?category=${cat.name}`}>
                <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-8 text-white text-center hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer h-full flex flex-col items-center justify-center`}>
                  <div className="text-5xl mb-3">{cat.emoji}</div>
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Students Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', role: 'CS Student', text: 'EventHub helped me discover amazing events and meet wonderful people!', avatar: '👩‍🎓' },
              { name: 'Arjun Patel', role: 'Event Organizer', text: 'The best platform to manage and promote events. Highly recommended!', avatar: '👨‍💼' },
              { name: 'Neha Singh', role: 'Active Member', text: 'I love how easy it is to find events and earn certificates here.', avatar: '👩‍🏫' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students experiencing amazing events on EventHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg">
                Browse Events
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Sign Up Free
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}