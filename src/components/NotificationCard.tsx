import { Bell, Check, X } from 'lucide-react';

interface NotificationCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  onMarkRead?: (id: string) => void;
  onDismiss?: (id: string) => void;
}

export default function NotificationCard({
  id,
  icon,
  title,
  message,
  timestamp,
  read,
  onMarkRead,
  onDismiss,
}: NotificationCardProps) {
  return (
    <div
      className={`rounded-xl p-4 shadow-md transition-all ${
        read ? 'bg-white border-l-4 border-gray-200' : 'bg-blue-50 border-l-4 border-blue-600'
      }`}
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl ${
          read ? 'bg-gray-100' : 'bg-blue-100'
        }`}>
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {!read && (
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1" />
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{message}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-shrink-0">
          {!read && onMarkRead && (
            <button
              onClick={() => onMarkRead(id)}
              className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
              title="Mark as read"
            >
              <Check size={18} />
            </button>
          )}
          {onDismiss && (
            <button
              onClick={() => onDismiss(id)}
              className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
              title="Dismiss"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
