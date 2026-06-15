interface Props {
  description: string;
}

export default function EventAbout({
  description,
}: Props) {
  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        About Event
      </h2>

      <p className="text-slate-600 leading-9 text-lg">
        {description}
      </p>

    </div>

  );
}
