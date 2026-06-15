'use client';

import { useState } from 'react';
import {
  Star,
  MessageCircle,
  ThumbsUp,
  Users,
} from 'lucide-react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      'Thank you for your feedback! We appreciate your input.'
    );

    setRating(0);
    setFeedback('');
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">
            <MessageCircle size={55} />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Feedback
          </h1>

          <p className="text-xl text-blue-100">
            Help us improve EventHub with your valuable suggestions
          </p>

        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">

            <Star
              className="mx-auto text-yellow-500"
              size={40}
            />

            <h2 className="text-3xl font-bold mt-4">
              4.9
            </h2>

            <p className="text-gray-500 mt-2">
              Average Rating
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">

            <Users
              className="mx-auto text-blue-600"
              size={40}
            />

            <h2 className="text-3xl font-bold mt-4">
              250+
            </h2>

            <p className="text-gray-500 mt-2">
              Responses
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">

            <ThumbsUp
              className="mx-auto text-green-600"
              size={40}
            />

            <h2 className="text-3xl font-bold mt-4">
              98%
            </h2>

            <p className="text-gray-500 mt-2">
              Positive Reviews
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm">

            <h2 className="text-3xl font-bold mb-8">
              Share Your Experience
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              <div>

                <label className="font-semibold text-gray-700">

                  Rate Your Experience
                </label>

                <div className="flex gap-3 mt-5">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                    >

                      <Star
                        size={42}
                        className={`transition hover:scale-125 ${
                          rating >= star
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />

                    </button>

                  ))}

                </div>

              </div>

              <div>

                <label className="font-semibold text-gray-700">

                  Your Feedback

                </label>

                <textarea
                  rows={7}
                  value={feedback}
                  onChange={(e) =>
                    setFeedback(e.target.value)
                  }
                  required
                  placeholder="Tell us your experience..."
                  className="
                  mt-4
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  p-5
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  "
                />

              </div>

              <button
                className="
                w-full
                bg-blue-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                hover:bg-blue-700
                transition
                "
              >
                Submit Feedback
              </button>

            </form>

          </div>

          {/* Recent Feedback */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Recent Feedback
              </h2>

              <div className="space-y-6">

                <div className="border-b pb-5">

                  <h3 className="font-semibold">
                    Rahul Sharma
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Amazing platform with smooth event registration.
                  </p>

                </div>

                <div className="border-b pb-5">

                  <h3 className="font-semibold">
                    Priya Singh
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Certificate generation feature is excellent.
                  </p>

                </div>

                <div>

                  <h3 className="font-semibold">
                    Amit Verma
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Very user friendly and responsive UI.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}