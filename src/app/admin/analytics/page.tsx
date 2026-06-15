'use client';

export default function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Analytics</h1>
          <p className="text-blue-100">View system statistics and analytics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Event Registrations', value: '3,245', trend: '+12% this month' },
            { title: 'Average Attendance', value: '94%', trend: '+3% from last month' },
            { title: 'User Satisfaction', value: '4.8/5', trend: 'Based on 342 ratings' },
            { title: 'Revenue Generated', value: '$12,450', trend: '+18% this quarter' }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-gray-600 font-semibold mb-4">{card.title}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">{card.value}</p>
              <p className="text-gray-500 text-sm">{card.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
