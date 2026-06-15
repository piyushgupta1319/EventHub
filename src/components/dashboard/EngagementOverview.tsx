import { Flame, Trophy, Star } from "lucide-react";

interface EngagementOverviewProps {
  activityStreak: number;
  certificatesEarned: number;
  userRating: number;
}

export default function EngagementOverview({
  activityStreak,
  certificatesEarned,
  userRating,
}: EngagementOverviewProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold text-slate-900 mb-8">Engagement</h2>

      <div className="space-y-7">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <Flame size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Activity Streak</h3>
            <p className="text-slate-500 text-sm">{activityStreak} days</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Trophy size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Certificates Earned</h3>
            <p className="text-slate-500 text-sm">{certificatesEarned} certificates</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Star size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">User Rating</h3>
            <p className="text-slate-500 text-sm">{userRating.toFixed(1)} / 5</p>
          </div>
        </div>

      </div>

    </div>
  );
}