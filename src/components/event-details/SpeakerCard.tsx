interface Props {
  name: string;
  role: string;
  company: string;
}

export default function SpeakerCard({
  name,
  role,
  company,
}: Props) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      p-8
      shadow-sm
      hover:shadow-xl
      duration-300
      "
    >

      {/* Avatar */}
      <div
        className="
        w-20
        h-20
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        flex
        items-center
        justify-center
        text-3xl
        text-white
        font-bold
        "
      >
        {name.charAt(0)}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mt-6">
        {name}
      </h3>

      <p className="text-blue-600 font-medium mt-2">
        {role}
      </p>

      <p className="text-slate-500 mt-2">
        {company}
      </p>

    </div>

  );
}