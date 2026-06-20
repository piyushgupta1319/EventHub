"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  category: string;
  participants: number;
  capacity: number;
  organizer: string;
  isFeatured?: boolean;
  gradientFrom: string;
  gradientTo: string;
}

const categoryGradients: { [key: string]: { gradient: string; light: string } } = {
  Technical: { gradient: 'from-blue-500 to-blue-600', light: 'bg-blue-50' },
  Workshops: { gradient: 'from-purple-500 to-purple-600', light: 'bg-purple-50' },
  Sports: { gradient: 'from-pink-500 to-pink-600', light: 'bg-pink-50' },
  Cultural: { gradient: 'from-orange-500 to-orange-600', light: 'bg-orange-50' },
  default: { gradient: 'from-slate-500 to-slate-600', light: 'bg-slate-50' },
};

export default function EventCard({
  id,
  title,
  date,
  time,
  location,
  category,
  participants,
  capacity,
}: EventCardProps) {

  const { data: session } = useSession();
  const [participantsCount, setParticipantsCount] = useState<number>(participants);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const percentage = Math.min((participantsCount / capacity) * 100, 100);
  const categoryStyle = categoryGradients[category] || categoryGradients.default;
  const isAlmostFull = percentage > 85;

  const handleRegister = async () => {
    if (!session?.user) {
      signIn();
      return;
    }

    if (isRegistered || isRegistering) return;

    setIsRegistering(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventId: id }),
      });

      const data = await res.json();

      if (data.success) {
        setParticipantsCount((p) => p + 1);
        setIsRegistered(true);
      }

      alert(data.message);
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="h-full">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

        {/* Image Header */}
        <Link href={`/events/${id}`}>
          <div className={`h-40 bg-gradient-to-br ${categoryStyle.gradient} relative overflow-hidden group`}>
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold capitalize">
                {category}
              </span>
            </div>
            
            {isAlmostFull && (
              <div className="absolute top-4 right-4">
                <span className="bg-red-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold">
                  Almost Full
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">

          {/* Title */}
          <Link href={`/events/${id}`}>
            <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition line-clamp-2 mb-4">
              {title}
            </h3>
          </Link>

          {/* Info Items */}
          <div className="space-y-3 flex-1 mb-6">
            
            {/* Date & Time */}
            <div className="flex items-start gap-3 text-slate-600">
              <Calendar size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium">{date}</p>
                <p className="text-xs text-slate-500">{time}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm line-clamp-1">{location}</span>
            </div>

            {/* Participants */}
            <div className="flex items-center gap-3 text-slate-600">
              <Users size={18} className="text-slate-400 flex-shrink-0" />
              <span className="text-sm">{participantsCount} Registered</span>
            </div>

          </div>

          {/* Progress Bar */}
          <div className="mb-6 pb-6 border-t border-slate-200">
            <div className="flex justify-between mb-2 mt-4">
              <span className="text-xs text-slate-500 font-medium">Capacity</span>
              <span className="text-xs font-bold text-slate-900">
                {participantsCount}/{capacity}
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isAlmostFull 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
              disabled={isRegistering || isRegistered || percentage >= 100}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                isRegistered
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : percentage >= 100
                  ? 'bg-slate-100 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md transform hover:scale-105'
              }`}
            >
              {isRegistered ? (
                <>
                  <CheckCircle size={18} />
                  Registered
                </>
              ) : isRegistering ? (
                'Registering...'
              ) : percentage >= 100 ? (
                'Event Full'
              ) : (
                'Register'
              )}
            </button>

            <Link
              href={`/events/${id}`}
              className="px-4 py-3 rounded-xl font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-1 flex-shrink-0"
              title="View event details"
            >
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
