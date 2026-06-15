import SpeakerCard from "./SpeakerCard";

export default function SpeakersSection() {

  const speakers = [
    {
      name: "Rahul Sharma",
      role: "Senior Software Engineer",
      company: "Google",
    },

    {
      name: "Priya Verma",
      role: "AI Engineer",
      company: "Microsoft",
    },

    {
      name: "Aman Gupta",
      role: "Cloud Architect",
      company: "Amazon",
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

      <h2 className="text-3xl font-bold mb-10">
        Featured Speakers
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {speakers.map((speaker) => (

          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            role={speaker.role}
            company={speaker.company}
          />

        ))}

      </div>

    </div>

  );
}