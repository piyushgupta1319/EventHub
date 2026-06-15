'use client';

export default function AdminParticipantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Participants</h1>
          <p className="text-blue-100">Manage event participants</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Total Participants', value: '892' },
              { label: 'Registered', value: '756' },
              { label: 'Attended', value: '712' }
            ].map((stat, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-6 text-center">
                <p className="text-gray-600 font-semibold">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
