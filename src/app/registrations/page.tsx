'use client';

export default function RegistrationsPage() {
  const registrations = [
    {
      id: 1,
      event: 'React.js Workshop',
      date: '2026-06-15',
      status: 'confirmed',
      registeredOn: '2026-06-01'
    },
    {
      id: 2,
      event: 'Coding Challenge',
      date: '2026-06-18',
      status: 'confirmed',
      registeredOn: '2026-06-02'
    },
    {
      id: 3,
      event: 'Cultural Night',
      date: '2026-06-22',
      status: 'pending',
      registeredOn: '2026-06-03'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">My Registrations</h1>
          <p className="text-lg text-blue-100">Manage all your event registrations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 border-b-2 border-blue-200">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">#</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Event</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Registered On</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg, idx) => (
                <tr key={reg.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900 font-semibold">{idx + 1}</td>
                  <td className="px-6 py-4 text-gray-900">{reg.event}</td>
                  <td className="px-6 py-4 text-gray-600">{reg.date}</td>
                  <td className="px-6 py-4 text-gray-600">{reg.registeredOn}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      reg.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {reg.status.charAt(0).toUpperCase() + reg.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
