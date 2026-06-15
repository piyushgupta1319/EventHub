'use client';

export default function AdminReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Reports</h1>
          <p className="text-blue-100">Generate and view system reports</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '📊', title: 'Event Performance', desc: 'View performance metrics' },
            { icon: '👥', title: 'User Statistics', desc: 'User engagement reports' },
            { icon: '💰', title: 'Revenue Report', desc: 'Financial overview' },
            { icon: '📈', title: 'Growth Metrics', desc: 'System growth analysis' }
          ].map((report, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer">
              <div className="text-4xl mb-3">{report.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{report.title}</h3>
              <p className="text-gray-600 text-sm">{report.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
