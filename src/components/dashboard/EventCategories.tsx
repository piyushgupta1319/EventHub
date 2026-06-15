import { Code, Trophy, Music, Briefcase } from "lucide-react";

interface CategoryItem {
  name: string;
  value: number;
}

interface EventCategoriesProps {
  categories: CategoryItem[];
}

function iconFor(name: string) {
  switch (name.toLowerCase()) {
    case "technical":
      return { Icon: Code, color: "bg-blue-50 text-blue-600" };
    case "sports":
      return { Icon: Trophy, color: "bg-green-50 text-green-600" };
    case "cultural":
      return { Icon: Music, color: "bg-purple-50 text-purple-600" };
    case "workshops":
      return { Icon: Briefcase, color: "bg-orange-50 text-orange-600" };
    default:
      return { Icon: Code, color: "bg-slate-100 text-slate-700" };
  }
}

export default function EventCategories({ categories }: EventCategoriesProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold text-slate-900 mb-8">Event Categories</h2>

      <div className="space-y-5">
        {categories.map((item) => {
          const { Icon, color } = iconFor(item.name);

          return (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.value} events</p>
                </div>
              </div>

              <span className="text-xl font-bold text-slate-900">{item.value}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}