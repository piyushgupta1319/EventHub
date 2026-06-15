import {
  Calendar,
  MapPin,
  Users,
  Tag,
} from "lucide-react";

interface Props {
  title: string;
  category: string;
  location: string;
  date: string;
  registered: number;
}

export default function EventHero({
  title,
  category,
  location,
  date,
  registered,
}: Props) {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[40px]
      bg-gradient-to-br
      from-slate-900
      via-blue-900
      to-violet-900
      p-14
      text-white
      shadow-xl
      "
    >
      {/* Background Blur */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10">

        {/* Category Badge */}
        <div
          className="
          inline-flex
          items-center
          gap-2
          bg-white/10
          backdrop-blur-md
          px-5
          py-3
          rounded-full
          mb-8
          "
        >
          <Tag size={16} />

          <span className="font-medium">
            {category}
          </span>

        </div>

        {/* Title */}
        <h1
          className="
          text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          max-w-4xl
          "
        >
          {title}
        </h1>

        <p className="text-slate-300 text-lg mt-6 max-w-3xl">
          Join students, professionals and innovators for an unforgettable learning experience.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-12">

          <div className="flex items-center gap-3 text-slate-300">

            <Calendar size={20} />

            <span>{date}</span>

          </div>

          <div className="flex items-center gap-3 text-slate-300">

            <MapPin size={20} />

            <span>{location}</span>

          </div>

          <div className="flex items-center gap-3 text-slate-300">

            <Users size={20} />

            <span>{registered} Registered</span>

          </div>

        </div>

      </div>
    </div>
  );
}