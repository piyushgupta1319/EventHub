export default function EventFAQ() {

  const faqs = [
    {
      q: "Will certificates be provided?",
      a: "Yes, certificates will be issued after completion.",
    },
    {
      q: "Is registration free?",
      a: "Yes, participation is completely free.",
    },
    {
      q: "Who can attend?",
      a: "Students from all departments are welcome.",
    },
  ];

  return (

    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-10">

      <h2 className="text-3xl font-bold mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="border-b pb-6"
          >

            <h3 className="font-bold text-lg text-slate-900">
              {faq.q}
            </h3>

            <p className="text-slate-500 mt-3">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}