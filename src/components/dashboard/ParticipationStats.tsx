interface ParticipationStatsProps {
  attendanceRate: number;
  eventCompletion: number;
}

export default function ParticipationStats({ attendanceRate, eventCompletion }: ParticipationStatsProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">

      <h2 className="text-2xl font-bold text-slate-900 mb-8">Participation</h2>

      <div className="space-y-7">

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-600">Attendance Rate</span>
            <span className="font-semibold text-slate-900">{attendanceRate}%</span>
          </div>

          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: `${attendanceRate}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-600">Event Completion</span>
            <span className="font-semibold text-slate-900">{eventCompletion}%</span>
          </div>

          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-600" style={{ width: `${eventCompletion}%` }} />
          </div>
        </div>

      </div>

    </div>
  );
}