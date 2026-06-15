'use client';

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  CalendarDays,
  Bell,
  Award,
  LogOut,
  ChevronDown,
} from "lucide-react";

export default function AuthSection() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/auth/login"
          className="font-medium text-slate-700 hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 hover:bg-slate-100 px-3 py-2 rounded-xl transition"
      >
        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {session.user?.name?.charAt(0)}
        </div>

        <div className="hidden lg:block text-left">
          <p className="font-semibold text-slate-900">
            {session.user?.name}
          </p>

          <p className="text-sm text-slate-500">
            {session.user?.email}
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`text-slate-500 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-16 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-200">

            <h3 className="font-bold text-slate-900">
              {session.user?.name}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {session.user?.email}
            </p>

          </div>

          {/* Menu */}
          <div className="py-2">

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 text-slate-700"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 text-slate-700"
            >
              <User size={18} />
              Profile
            </Link>

            <Link
              href="/dashboard/my-events"
              className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 text-slate-700"
            >
              <CalendarDays size={18} />
              My Events
            </Link>

            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 text-slate-700"
            >
              <Bell size={18} />
              Notifications
            </Link>

            <Link
              href="/certificates"
              className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 text-slate-700"
            >
              <Award size={18} />
              Certificates
            </Link>
          </div>

          {/* Logout */}
          <div className="border-t border-slate-200">

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50 transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}