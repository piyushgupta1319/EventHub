'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sparkles } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-slate-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
  href="/"
  className="flex items-center gap-4"
>
  {/* Logo */}
  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-purple-300">
    <span className="text-xl font-bold text-white">
      EH
    </span>

    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300" />
  </div>

  {/* Brand */}
  <div>
    <h2 className="text-2xl font-extrabold tracking-tight leading-none">
      <span className="text-slate-900">
        Event
      </span>

      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Hub
      </span>
    </h2>

    <p className="text-xs text-slate-500 mt-1">
      Manage • Organize • Connect
    </p>
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