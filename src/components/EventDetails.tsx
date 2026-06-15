import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface EventDetailsProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  participantCount: number;
  capacity: number;
  category: string;
  image?: string;
  onRegister?: () => void;
}

export default function EventDetails({
  title,
  date,
  time,
  location,
  description,
  organizer,
  participantCount,
  capacity,
  category,
  image,
  onRegister,
}: EventDetailsProps) {
  const filledPercentage = (participantCount / capacity) * 100;

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link href="/events">
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
          <ArrowLeft size={20} />
          Back to Events
        </button>
      </Link>

      {/* Banner */}
      <div className="h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-9xl shadow-lg">
        {image || '📸'}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Title & Category */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                {category}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-600 text-lg">{description}</p>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 py-8 border-y border-gray-200">
            <div>
              <p className="text-gray-600 text-sm mb-2">Date & Time</p>
              <p className="text-2xl font-bold text-gray-900">{date}</p>
              <p className="text-lg text-gray-700">{time}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Location</p>
              <p className="text-2xl font-bold text-gray-900">{location}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Organizer</p>
              <p className="text-lg font-bold text-gray-900">{organizer}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-2">Capacity</p>
              <p className="text-lg font-bold text-gray-900">
                {participantCount} / {capacity} Participants
              </p>
            </div>
          </div>

          {/* Capacity Bar */}
          <div className="mb-12">
            <p className="text-gray-600 text-sm mb-2">Registration Status</p>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
                style={{ width: `${Math.min(filledPercentage, 100)}%` }}
              />
            </div>
            <p className="text-gray-600 text-sm mt-2">
              {participantCount} registered ({Math.round(filledPercentage)}% full)
            </p>
          </div>
        </div>

        {/* Sidebar - Register Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-lg sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Ready to Join?</h2>

            {/* Quick Info */}
            <div className="space-y-4 mb-8 pb-8 border-b border-white/20">
              <div>
                <p className="text-blue-100 text-sm mb-1">Date</p>
                <p className="font-bold">{date}</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Time</p>
                <p className="font-bold">{time}</p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-1">Location</p>
                <p className="font-bold">{location}</p>
              </div>
            </div>

            {/* Register Button */}
            {participantCount < capacity ? (
              <button
                onClick={onRegister}
                className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Register Now
              </button>
            ) : (
              <button disabled className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg cursor-not-allowed">
                Event Full
              </button>
            )}

            {/* Share Button */}
            <button className="w-full mt-3 border-2 border-white text-white font-bold py-2 rounded-lg hover:bg-white/10 transition-colors">
              Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
