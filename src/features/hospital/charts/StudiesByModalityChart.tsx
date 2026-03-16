import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export function StudiesByModalityChart({ data }: { data: { name: string; val: number }[] }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 flex flex-col relative overflow-hidden">
      <h3 className="font-bold text-gray-700 text-sm mb-4 flex items-center gap-2">
        <span className="w-3 h-3 text-[#1A919E]" role="img" aria-label="chart">📊</span> Studies by Modality
      </h3>
      <div className="flex-1 w-full h-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, left: -20, right: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" tick={{fontSize: 10, fill: '#A0AEC0'}} axisLine={false} tickLine={false} dy={5} />
            <YAxis tick={{fontSize: 10, fill: '#A0AEC0'}} axisLine={false} tickLine={false} dx={-5} />
            <Bar dataKey="val" fill="#25B4C2" radius={[4, 4, 0, 0]} maxBarSize={300} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
