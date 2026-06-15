'use client';

export default function GalleryPage() {
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    event: `Event ${i + 1}`,
    emoji: ['🎉', '🎭', '⚽', '🏆', '🎤', '📸', '🎨', '🎪', '🎬', '🎯', '🎲', '🎸'][i]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-lg text-blue-100">Relive the moments from amazing events</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110 overflow-hidden cursor-pointer aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-8xl mb-4">{photo.emoji}</div>
                <p className="text-white font-semibold">{photo.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
