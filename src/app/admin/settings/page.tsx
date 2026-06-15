'use client';

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Settings</h1>
          <p className="text-blue-100">Configure system settings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
          <div className="space-y-6">
            {[
              { label: 'System Name', value: 'EventHub' },
              { label: 'Admin Email', value: 'admin@eventhub.com' },
              { label: 'Max Events Per Day', value: '10' },
              { label: 'Event Duration (hours)', value: '4' }
            ].map((setting, i) => (
              <div key={i} className="flex justify-between items-center pb-6 border-b border-gray-200">
                <label className="font-semibold text-gray-900">{setting.label}</label>
                <input
                  type="text"
                  defaultValue={setting.value}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500"
                />
              </div>
            ))}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
