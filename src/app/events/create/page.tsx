import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import EventCreateForm from '@/components/event/EventCreateForm';

export default async function CreateEventPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  if (session.user.role !== 'ADMIN') {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-slate-900">Create Event</h1>
          <p className="text-slate-500 mt-2">Create and publish a new event.</p>
        </div>

        <EventCreateForm />
      </div>
    </div>
  );
}
