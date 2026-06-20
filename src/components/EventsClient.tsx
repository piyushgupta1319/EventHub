'use client';

import { useState } from "react";
import EventCard from "./EventCard";
import { Search, Sparkles, Calendar } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  eventDate: Date;
  capacity: number;
  participants: number;
}

interface Props {
  events: Event[];
}

export default function EventsClient({ events }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technical",
    "Workshops",
    "Sports",
    "Cultural",
  ];

  const filteredEvents = events.filter((event) => {
    const searchMatch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

      {/* Hero Section - Matching Home Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <Calendar size={24} />
            <span className="text-blue-100 font-semibold">Explore Events</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Find Amazing <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Events</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl">
            Explore hackathons, workshops, seminars and competitions happening across campus
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-2xl">
            {[
              { label: 'Events', value: `${events.length}+` },
              { label: 'Students', value: '3000+' },
              { label: 'Categories', value: '25+' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-blue-100 text-sm mb-2">{stat.label}</p>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search events by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-12 pr-5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-white text-blue-600 shadow-lg"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-16 text-center">
            <Calendar size={48} className="text-slate-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-2">No Events Found</h2>
            <p className="text-slate-500 text-lg">Try changing your search or filter to find more events</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={new Date(event.eventDate).toLocaleDateString("en-GB")}
                time={new Date(event.eventDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                location={event.location}
                category={event.category}
                participants={event.participants}
                capacity={event.capacity}
                organizer="EventHub"
                gradientFrom="from-blue-500"
                gradientTo="to-purple-600"
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}