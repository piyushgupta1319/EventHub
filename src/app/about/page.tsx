'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About EventHub</h1>
          <p className="text-xl text-blue-100">Empowering college communities through events</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              EventHub is dedicated to transforming the way colleges manage and experience events. We believe that events are the heartbeat of campus life, creating opportunities for students to learn, connect, and grow.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform simplifies event management while fostering genuine community engagement. We empower students to discover opportunities, organizers to reach audiences efficiently, and institutions to celebrate their vibrant campus culture.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a world where every student has access to meaningful events and opportunities. A place where geographical and logistical barriers no longer limit participation and growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              EventHub aims to be the leading event management platform for educational institutions, known for our commitment to user experience, reliability, and community impact.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Community', desc: 'Building genuine connections' },
              { icon: '⭐', title: 'Excellence', desc: 'Quality in everything we do' },
              { icon: '🚀', title: 'Innovation', desc: 'Always improving and evolving' },
              { icon: '💡', title: 'Impact', desc: 'Making a real difference' }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dedicated to Your Success</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team of passionate developers, designers, and event enthusiasts work tirelessly to ensure EventHub remains the best event management platform for colleges.
          </p>
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
            Est. 2024 | Serving 50+ Institutions
          </div>
        </div>
      </div>
    </div>
  );
}
