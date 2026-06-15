import {
  Bell,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Registration Successful",
    description:
      "You have successfully registered for React.js Workshop.",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
  },

  {
    id: 2,
    title: "Certificate Earned",
    description:
      "Web Development Bootcamp certificate added to your account.",
    time: "1 day ago",
    icon: Award,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },

  {
    id: 3,
    title: "New Event Added",
    description:
      "AI & Machine Learning Summit has been announced.",
    time: "2 days ago",
    icon: Calendar,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },

  {
    id: 4,
    title: "Reminder",
    description:
      "Coding Challenge 2026 starts tomorrow.",
    time: "3 days ago",
    icon: Bell,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="bg-slate-900 rounded-3xl px-10 py-12 text-white shadow-xl mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Notifications
          </h1>

          <p className="text-slate-300 text-lg">
            Stay updated with your latest activities.
          </p>

        </div>

        {/* Notifications */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

          <div className="space-y-7">

            {notifications.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.id}
                  className="
                  flex gap-5
                  pb-7
                  border-b
                  border-slate-200
                  "
                >

                  <div
                    className={`
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    ${item.bg}
                    `}
                  >
                    <Icon
                      size={24}
                      className={item.color}
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between items-start">

                      <div>

                        <h3 className="font-semibold text-slate-900 text-lg">

                          {item.title}

                        </h3>

                        <p className="text-slate-500 mt-1">

                          {item.description}

                        </p>

                      </div>

                      <span className="text-sm text-slate-400">

                        {item.time}

                      </span>

                    </div>

                  </div>

                </div>

              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}