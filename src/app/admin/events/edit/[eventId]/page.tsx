import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateEvent } from "@/actions/eventActions";

interface Props {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function EditEventPage({
  params,
}: Props) {

  const { eventId } = await params;

  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 py-12">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-5xl font-bold text-slate-900">
            Edit Event
          </h1>

          <p className="text-slate-500 mt-2">
            Update event information and settings.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-10">

          <form
            action={async (formData) => {
              "use server";

              await updateEvent(
                event.id,
                formData.get("title") as string,
                formData.get("description") as string,
                formData.get("category") as string,
                formData.get("location") as string,
                Number(formData.get("capacity"))
              );
            }}
            className="space-y-7"
          >

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Event Title
              </label>

              <input
                name="title"
                defaultValue={event.title}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category
              </label>

              <input
                name="category"
                defaultValue={event.category}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Location
              </label>

              <input
                name="location"
                defaultValue={event.location}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
            </div>

            {/* Capacity */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Capacity
              </label>

              <input
                name="capacity"
                type="number"
                defaultValue={event.capacity}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                rows={6}
                defaultValue={event.description}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">

              <button
                className="
                flex-1
                bg-slate-900
                text-white
                py-4
                rounded-2xl
                font-semibold
                hover:bg-slate-800
                transition
                "
              >
                Update Event
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}