import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Calendar, Users, Settings, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

interface SidebarProps {
  items: SidebarItem[];
  onLogout?: () => void;
}

export default function Sidebar({ items, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-2">
              <BarChart3 size={24} />
            </div>
            <h2 className="text-xl font-bold">EventHub</h2>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-6 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <div
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-semibold">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700 space-y-2">
          <Link href="/dashboard/profile">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-all">
              <Users size={20} />
              <span>Profile</span>
            </button>
          </Link>
          <Link href="/admin/settings">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-all">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </Link>
          {onLogout && (
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-all"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
