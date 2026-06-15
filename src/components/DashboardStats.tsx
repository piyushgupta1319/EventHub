import {
  LucideIcon,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

interface DashboardStatsProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number | string;
  changeText?: string;
  color: "blue" | "purple" | "green" | "orange";
}

export default function DashboardStats({
  title,
  value,
  icon,
  change,
  changeText,
  color,
}: DashboardStatsProps) {

  const Icon = icon;

  const changeValue =
    typeof change === "string"
      ? Number(change.replace(/[^0-9.-]/g, ""))
      : change;
  const isPositive = Number(changeValue) >= 0;

  const iconColors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div
      className="
      bg-white
      border
      border-slate-200
      rounded-2xl
      p-7
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
    >

      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm font-medium mb-4">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            {value}
          </h2>

          {change !== undefined && (
            <div className="flex items-center gap-1 mt-4">
              {isPositive ? (
                <>
                  <ArrowUpRight
                    size={16}
                    className="text-green-600"
                  />

                  <span className="text-green-600 text-sm font-medium">
                    {change} {changeText}
                  </span>
                </>
              ) : (
                <>
                  <ArrowDownRight
                    size={16}
                    className="text-red-600"
                  />

                  <span className="text-red-600 text-sm font-medium">
                    {Math.abs(Number(changeValue))}% {changeText}
                  </span>
                </>
              )}
            </div>
          )}

        </div>

        <div
          className={`
          w-14 h-14
          rounded-xl
          flex items-center justify-center
          ${iconColors[color]}
          `}
        >
          <Icon size={26} />
        </div>

      </div>

    </div>
  );
}