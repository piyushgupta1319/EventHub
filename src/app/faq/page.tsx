'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      q: 'How do I register for an event?',
      a: 'Simply navigate to the Events page, find an event you\'re interested in, and click the "Register" button. You\'ll receive a confirmation email once registered.'
    },
    {
      id: 2,
      q: 'Can I cancel my registration?',
      a: 'Yes, you can cancel your registration anytime by going to your Dashboard > My Events and clicking the "Cancel Registration" button.'
    },
    {
      id: 3,
      q: 'How do I earn certificates?',
      a: 'Certificates are automatically issued when you complete an event. You can view all your certificates on the Certificates page.'
    },
    {
      id: 4,
      q: 'How do I update my profile?',
      a: 'Go to Dashboard > Profile Settings to update your personal information, profile picture, and preferences.'
    },
    {
      id: 5,
      q: 'Is there a limit on event registrations?',
      a: 'No, you can register for as many events as you want. However, ensure you can attend all registered events.'
    },
    {
      id: 6,
      q: 'How do I contact support?',
      a: 'You can reach our support team via the Contact page or email us directly at support@eventhub.com.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-100">Find answers to common questions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between font-semibold text-gray-900 hover:bg-blue-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-2xl transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-700 border-t border-gray-200 bg-blue-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
