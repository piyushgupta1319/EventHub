'use client';

import { useState } from "react";
import EventCard from "./EventCard";
import { Search } from "lucide-react";

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
  <div className="min-h-screen bg-slate-100">

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Hero */}
      <div
        className="
        rounded-[40px]
        bg-gradient-to-br
        from-slate-900
        via-blue-900
        to-violet-900
        text-white
        p-12
        shadow-xl
        "
      >

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Find Amazing Events
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Explore hackathons, workshops, seminars and competitions
            happening across the campus.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">

            <div>
              <h2 className="text-4xl font-bold">
                {events.length}+
              </h2>

              <p className="text-slate-400 mt-2">
                Events
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                3000+
              </h2>

              <p className="text-slate-400 mt-2">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                25+
              </h2>

              <p className="text-slate-400 mt-2">
                Categories
              </p>
            </div>

          </div>

          {/* Search */}
          <div className="flex justify-center mt-12">

            <div className="relative w-full max-w-lg">

              <Search
                size={18}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
              />

              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                w-full
                h-12
                pl-12
                pr-5
                rounded-2xl
                bg-white
                border
                border-slate-300
                text-slate-800
                placeholder:text-slate-400
                shadow-sm
                focus:outline-none
                focus:ring-4
                focus:ring-blue-200
                focus:border-blue-500
                "
              />

            </div>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Cards */}
      <div
        className="
        grid
        sm:grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        mt-16
        "
      >

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

        {filteredEvents.length === 0 && (

          <div className="col-span-full">

            <div className="bg-white rounded-3xl p-16 text-center shadow-sm">

              <h2 className="text-3xl font-bold text-slate-900">
                No Events Found
              </h2>

              <p className="text-slate-500 mt-4">
                Try changing search or category filters.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>

  </div>
);
}