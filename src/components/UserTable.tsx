import { Trash2, Edit2 } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  university: string;
  department: string;
  role: 'user' | 'admin' | 'organizer';
  joinDate: string;
}

interface UserTableProps {
  users: User[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const roleColors = {
  user: 'bg-blue-100 text-blue-800',
  admin: 'bg-red-100 text-red-800',
  organizer: 'bg-purple-100 text-purple-800',
};

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-gray-900">#</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Name</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">University</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Department</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Role</th>
              <th className="px-6 py-4 text-left font-bold text-gray-900">Join Date</th>
              <th className="px-6 py-4 text-center font-bold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-900">{idx + 1}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-gray-600">{user.university}</td>
                <td className="px-6 py-4 text-gray-600">{user.department}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${roleColors[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600 text-sm">{user.joinDate}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(user.id)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(user.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
