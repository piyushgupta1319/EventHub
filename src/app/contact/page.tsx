'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { submitContactForm } from '@/actions/contactActions';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSuccessMessage(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setErrorMessage(result.message);
        setTimeout(() => setErrorMessage(''), 5000);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Matching Home Page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare size={24} />
            <span className="text-blue-100 font-semibold">Get In Touch</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            We'd Love to <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">Hear From You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Have questions or feedback? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Background */}
      <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-full">
        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { 
                icon: Mail, 
                title: 'Email', 
                value: 'guptapiyush6336@gmail.com',
                color: 'from-blue-500 to-blue-600',
                lightColor: 'bg-blue-50'
              },
              { 
                icon: Phone, 
                title: 'Phone', 
                value: '+91 8298127340',
                color: 'from-purple-500 to-purple-600',
                lightColor: 'bg-purple-50'
              },
              { 
                icon: MapPin, 
                title: 'Address', 
                value: 'College Campus, Building A, Greater Noida',
                color: 'from-pink-500 to-pink-600',
                lightColor: 'bg-pink-50'
              }
            ].map((contact, i) => {
              const IconComponent = contact.icon;
              return (
                <div 
                  key={i} 
                  className={`${contact.lightColor} rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`bg-gradient-to-br ${contact.color} rounded-xl p-3 w-fit mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{contact.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{contact.value}</p>
                </div>
              );
            })}
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 md:px-12 py-12 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Send size={28} />
                  <h2 className="text-4xl font-bold">Send us a Message</h2>
                </div>
                <p className="text-blue-100 text-lg">We're here to help and answer any question you might have</p>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                {successMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-in">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 font-semibold">{successMessage}</p>
                  </div>
                )}
                
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 font-semibold">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-900 font-semibold mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-900 font-semibold mb-3">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                      placeholder="your.email@college.edu"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-900 font-semibold mb-3">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-slate-900 placeholder-slate-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-900 font-semibold mb-3">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none text-slate-900 placeholder-slate-400"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 transform"
                  >
                    <Send size={22} />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-slate-600">
                Expected response time: <span className="font-semibold text-slate-900">Within 24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
