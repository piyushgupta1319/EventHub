import { CheckCircle, Clock, Trash2 } from 'lucide-react';

interface Registration {
  id: string;
  eventTitle: string;
  date: string;
  registeredOn: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface RegistrationTableProps {
  registrations: Registration[];
  onCancel?: (id: string) => void;
}

const statusStyles = {
  confirmed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: Trash2 },
};

export default function RegistrationTable({
  registrations,
  onCancel,
}: RegistrationTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-gray-900">#</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Event Title</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Registered On</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Status</th>
              <th className="px-6 py-4 text-center font-bold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, idx) => {
              const statusStyle = statusStyles[reg.status];
              const StatusIcon = statusStyle.icon;

              return (
                <tr key={reg.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                  <td className="px-6 py-4 text-gray-700">{reg.eventTitle}</td>
                  <td className="px-6 py-4 text-gray-600">{reg.date}</td>
                  <td className="px-6 py-4 text-gray-600">{reg.registeredOn}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 w-fit px-3 py-1 rounded-full font-semibold ${statusStyle.bg} ${statusStyle.text}`}>
                      <StatusIcon size={18} />
                      <span className="capitalize">{reg.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {reg.status === 'confirmed' && onCancel && (
                      <button
                        onClick={() => onCancel(reg.id)}
                        className="text-red-600 hover:text-red-800 font-semibold transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
