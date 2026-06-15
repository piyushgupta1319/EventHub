import { AlertCircle, Check, Trash2 } from 'lucide-react';

interface AnnouncementCardProps {
  id: string;
  title: string;
  content: string;
  category: 'urgent' | 'general' | 'event' | 'system';
  date: string;
  priority: 'high' | 'medium' | 'low';
  onDismiss?: (id: string) => void;
}

const categoryColors = {
  urgent: 'from-red-500 to-red-600',
  general: 'from-blue-500 to-blue-600',
  event: 'from-purple-500 to-purple-600',
  system: 'from-green-500 to-green-600',
};

const priorityIcons = {
  high: <AlertCircle className="text-red-600" size={24} />,
  medium: <AlertCircle className="text-yellow-600" size={24} />,
  low: <Check className="text-green-600" size={24} />,
};

export default function AnnouncementCard({
  id,
  title,
  content,
  category,
  date,
  priority,
  onDismiss,
}: AnnouncementCardProps) {
  return (
    <div className={`bg-gradient-to-br ${categoryColors[category]} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all`}>
      <div className="p-6 text-white">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 rounded-lg p-2 mt-1">
              {priorityIcons[priority]}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full capitalize">
                {category}
              </span>
            </div>
          </div>

          {onDismiss && (
            <button
              onClick={() => onDismiss(id)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <Trash2 size={20} />
            </button>
          )}
        </div>

        {/* Content */}
        <p className="text-white/90 mb-4 line-clamp-3">{content}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <span className="text-xs text-white/70">{date}</span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
            priority === 'high' ? 'bg-red-600/30' : priority === 'medium' ? 'bg-yellow-600/30' : 'bg-green-600/30'
          }`}>
            {priority} Priority
          </span>
        </div>
      </div>
    </div>
  );
}
