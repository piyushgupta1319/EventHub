'use client';

export default function AdminAnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Announcements</h1>
          <p className="text-blue-100">Create and manage announcements</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <button className="mb-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          + Create Announcement
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl mb-4">📢</div>
          <p className="text-gray-600">Announcements management interface ready</p>
        </div>
      </div>
    </div>
  );
}
