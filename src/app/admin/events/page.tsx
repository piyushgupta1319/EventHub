import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteEvent } from "@/actions/eventActions";

export default async function AdminEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      eventDate: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-5xl font-bold text-slate-900">
            Manage Events
          </h1>

          <p className="text-slate-500 mt-2">
            Create, edit and manage all events from one place.
          </p>
        </div>

        <Link
          href="/events/create"
          className="
          bg-slate-900
          text-white
          px-6
          py-3
          rounded-2xl
          font-semibold
          hover:bg-slate-800
          transition
          "
        >
          + Create Event
        </Link>

      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          {/* Table Head */}
          <thead className="bg-slate-900 text-white">

            <tr>
              <th className="p-5 text-left">Title</th>
              <th className="p-5 text-left">Category</th>
              <th className="p-5 text-left">Location</th>
              <th className="p-5 text-left">Capacity</th>
              <th className="p-5 text-left">Actions</th>
            </tr>

          </thead>

          {/* Table Body */}
          <tbody>

            {events.map((event) => (

              <tr
                key={event.id}
                className="
                border-b
                border-slate-200
                hover:bg-slate-50
                transition
                "
              >

                {/* Title */}
                <td className="p-5 font-semibold text-slate-900">
                  {event.title}
                </td>

                {/* Category */}
                <td className="p-5">

                  <span className="
                  px-3
                  py-1
                  rounded-full
                  bg-slate-100
                  text-slate-700
                  text-sm
                  font-medium
                  ">
                    {event.category}
                  </span>

                </td>

                {/* Location */}
                <td className="p-5 text-slate-700">
                  {event.location}
                </td>

                {/* Capacity */}
                <td className="p-5 font-semibold text-slate-800">
                  {event.capacity}
                </td>

                {/* Actions */}
                <td className="p-5">

                  <div className="flex gap-3">

                    <Link
                      href={`/admin/events/edit/${event.id}`}
                      className="
                      px-4
                      py-2
                      rounded-xl
                      border
                      border-slate-300
                      text-slate-700
                      hover:bg-slate-100
                      transition
                      "
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/admin/events/participants/${event.id}`}
                      className="
                      px-4
                      py-2
                      rounded-xl
                      border
                      border-slate-300
                      text-slate-700
                      hover:bg-slate-100
                      transition
                      "
                    >
                      Participants
                    </Link>

                    <form
                      action={async () => {
                        "use server";
                        await deleteEvent(event.id);
                      }}
                    >
                      <button
                        className="
                        px-4
                        py-2
                        rounded-xl
                        border
                        border-red-200
                        text-red-600
                        hover:bg-red-50
                        transition
                        "
                      >
                        Delete
                      </button>
                    </form>

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