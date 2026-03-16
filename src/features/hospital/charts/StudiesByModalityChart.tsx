import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

export function StudiesByModalityChart({ data }: { data: { name: string; val: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex flex-col relative overflow-hidden h-full">
      <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-4 flex items-center gap-2">
        <span className="w-3 h-3 text-[#14B8A6]" role="img" aria-label="chart">📊</span> Studies by Modality
      </h3>
      <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, left: -20, right: 0, bottom: 0 }}>
            <XAxis dataKey="name" tick={{fontSize: 10, fill: '#9CA3AF'}} axisLine={false} tickLine={false} dy={5} />
            <YAxis tick={{fontSize: 10, fill: '#9CA3AF'}} axisLine={false} tickLine={false} dx={-5} />
            <Bar dataKey="val" fill="#14B8A6" radius={[6, 6, 0, 0]} maxBarSize={300} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
