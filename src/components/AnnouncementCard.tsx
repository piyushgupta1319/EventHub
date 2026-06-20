import { AlertCircle, Check, Trash2, Bell, Zap } from 'lucide-react';

interface AnnouncementCardProps {
  id: string;
  title: string;
  content: string;
  category: 'urgent' | 'general' | 'event' | 'system';
  date: string;
  priority: 'high' | 'medium' | 'low';
  onDismiss?: (id: string) => void;
}

const categoryConfig = {
  urgent: {
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    accentColor: 'from-red-500 to-red-600',
  },
  general: {
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    accentColor: 'from-blue-500 to-blue-600',
  },
  event: {
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-700',
    accentColor: 'from-purple-500 to-purple-600',
  },
  system: {
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-700',
    accentColor: 'from-slate-500 to-slate-600',
  },
};

const categoryIcons = {
  urgent: <AlertCircle size={20} />,
  general: <Bell size={20} />,
  event: <Zap size={20} />,
  system: <Check size={20} />,
};

const priorityConfig = {
  high: {
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    dotColor: 'bg-red-500',
  },
  medium: {
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-700',
    dotColor: 'bg-amber-500',
  },
  low: {
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-700',
    dotColor: 'bg-green-500',
  },
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
  const config = categoryConfig[category];
  const priorityStyle = priorityConfig[priority];

  return (
    <div className={`${config.bgColor} border-l-4 ${config.borderColor.replace('border-', 'border-l-')} rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Priority Indicator */}
            <div className="flex flex-col items-center gap-1 mt-1">
              <div className={`${priorityStyle.dotColor} w-3 h-3 rounded-full`}></div>
              <div className={`${config.accentColor} w-1 h-8 rounded-full`}></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className={`${config.badgeText}`}>
                    {categoryIcons[category]}
                  </span>
                  {title}
                </h3>
              </div>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`${config.badgeBg} ${config.badgeText} text-xs font-semibold px-3 py-1 rounded-full capitalize`}>
                  {category}
                </span>
                <span className={`${priorityStyle.badgeBg} ${priorityStyle.badgeText} text-xs font-semibold px-3 py-1 rounded-full uppercase`}>
                  {priority} Priority
                </span>
              </div>

              {/* Content */}
              <p className="text-slate-700 text-sm leading-relaxed line-clamp-2 mb-3">{content}</p>

              {/* Date */}
              <span className="text-xs text-slate-500">{date}</span>
            </div>
          </div>

          {/* Dismiss Button */}
          {onDismiss && (
            <button
              onClick={() => onDismiss(id)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-200/50 rounded-lg"
              title="Dismiss announcement"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
