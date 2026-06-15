
import {
  Award,
  Trophy,
  Users,
  Clock3,
} from "lucide-react";

export default function EventHighlights() {

  const items = [
    {
      icon: Trophy,
      title: "Certificates",
      desc: "Get participation certificates",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Networking",
      desc: "Meet students and experts",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock3,
      title: "Full Day Event",
      desc: "Hands-on learning sessions",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Award,
      title: "Skill Development",
      desc: "Practical experience",
      color: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold text-slate-900 mb-10">
        Event Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="flex gap-5"
            >

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >

                <Icon
                  size={24}
                  className={item.iconColor}
                />

              </div>

              <div>

                <h3 className="font-bold text-lg text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.desc}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );
}