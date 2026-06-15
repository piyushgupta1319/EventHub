export default function EventSchedule() {

  const schedule = [
    {
      time: "09:00 AM",
      title: "Registration & Check-In",
    },

    {
      time: "10:00 AM",
      title: "Opening Ceremony",
    },

    {
      time: "11:00 AM",
      title: "Keynote Session",
    },

    {
      time: "01:00 PM",
      title: "Lunch Break",
    },

    {
      time: "02:00 PM",
      title: "Hands-on Workshop",
    },

    {
      time: "05:00 PM",
      title: "Closing Ceremony",
    },
  ];

  return (
    <div
      className="
      bg-white
      rounded-[32px]
      border
      border-slate-200
      shadow-sm
      p-10
      "
    >

      <h2 className="text-3xl font-bold text-slate-900 mb-10">
        Event Schedule
      </h2>

      <div className="space-y-8">

        {schedule.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-6"
          >

            {/* Circle */}
            <div
              className="
              w-5
              h-5
              rounded-full
              bg-blue-600
              mt-2
              "
            />

            {/* Content */}
            <div className="flex-1 border-b border-slate-200 pb-6">

              <p className="text-blue-600 font-bold">
                {item.time}
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-2">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}