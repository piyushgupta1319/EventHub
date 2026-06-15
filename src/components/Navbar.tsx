'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import AuthSection from './AuthSection';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/events',
      label: 'Events',
    },
    {
      href: '/dashboard',
      label: 'Dashboard',
    },
    {
      href: '/announcements',
      label: 'Announcements',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              📅
            </div>

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                EventHub
              </h2>

            </div>

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-medium transition
                ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center">

            <AuthSection />

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden border-t border-slate-200 bg-white">

          <div className="px-6 py-4 space-y-2">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl
                ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-slate-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>

        </div>

      )}

    </header>
  );
}