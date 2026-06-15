import { Mail, MapPin, Award, Share2 } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  email: string;
  university: string;
  department: string;
  bio: string;
  eventsAttended: number;
  certificatesEarned: number;
  avatar?: string;
}

export default function ProfileCard({
  name,
  email,
  university,
  department,
  bio,
  eventsAttended,
  certificatesEarned,
  avatar,
}: ProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header Background */}
      <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600" />

      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="flex justify-center -mt-16 mb-4">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white flex items-center justify-center text-5xl shadow-lg">
            {avatar || '👤'}
          </div>
        </div>

        {/* Name & Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">{name}</h2>
        <p className="text-center text-gray-600 text-sm mb-4">{department} • {university}</p>

        {/* Bio */}
        <p className="text-center text-gray-700 mb-6">{bio}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{eventsAttended}</p>
            <p className="text-sm text-gray-600">Events Attended</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{certificatesEarned}</p>
            <p className="text-sm text-gray-600">Certificates</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={18} className="text-blue-600" />
            <span className="text-sm">{email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin size={18} className="text-blue-600" />
            <span className="text-sm">{university}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
          <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
