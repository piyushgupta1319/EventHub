import { Save, X, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface EventFormProps {
  onSubmit: (data: EventFormData) => void;
  onCancel?: () => void;
  initialData?: Partial<EventFormData>;
  isLoading?: boolean;
}

export interface EventFormData {
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  organizer: string;
}

export default function EventForm({
  onSubmit,
  onCancel,
  initialData,
  isLoading = false,
}: EventFormProps) {
  const [formData, setFormData] = useState<EventFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'Technical',
    date: initialData?.date || '',
    time: initialData?.time || '',
    location: initialData?.location || '',
    capacity: initialData?.capacity || 100,
    organizer: initialData?.organizer || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'capacity' ? parseInt(value) || 0 : value,
    }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (formData.capacity < 1) newErrors.capacity = 'Capacity must be at least 1';
    if (!formData.organizer.trim()) newErrors.organizer = 'Organizer is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
      {/* Error Alert */}
      {hasErrors && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-4 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-600 mt-1" size={20} />
            <div>
              <h3 className="font-bold text-red-900 mb-1">Please fix the following errors:</h3>
              <ul className="text-sm text-red-800 space-y-1">
                {Object.entries(errors).map(([field, error]) => (
                  <li key={field}>• {error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Title */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.title ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
            placeholder="e.g., React Workshop 2026"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none ${
              errors.description ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
            placeholder="Describe your event..."
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
          >
            <option>Technical</option>
            <option>Cultural</option>
            <option>Sports</option>
            <option>Social</option>
            <option>Workshop</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.date ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.time ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
          />
        </div>

        {/* Location */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.location ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
            placeholder="e.g., Auditorium A, Building 3"
          />
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            min="1"
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.capacity ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
          />
        </div>

        {/* Organizer */}
        <div>
          <label className="block text-gray-700 font-bold mb-2">Organizer</label>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all ${
              errors.organizer ? 'border-red-600 focus:border-red-600' : 'border-gray-200 focus:border-blue-600'
            }`}
            placeholder="e.g., Tech Club"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end pt-6 border-t border-gray-200">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-colors"
          >
            <X size={20} />
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={20} />
          {isLoading ? 'Saving...' : 'Save Event'}
        </button>
      </div>
    </form>
  );
}
