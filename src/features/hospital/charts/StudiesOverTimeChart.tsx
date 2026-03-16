import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export function StudiesOverTimeChart({ data }: { data: { name: string; val: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex flex-col relative overflow-hidden h-full">
      <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div> Studies Over Time
      </h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, left: -10, right: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tick={{fontSize: 10, fill: '#9CA3AF'}}
              axisLine={false}
              tickLine={false}
              dy={5}
              interval="preserveStartEnd"
            />
            <YAxis tick={{fontSize: 10, fill: '#9CA3AF'}} axisLine={false} tickLine={false} dx={-5} />
            <Tooltip
              contentStyle={{
                fontSize: 11,
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
            />
            <Line type="monotone" dataKey="val" stroke="#14B8A6" strokeWidth={2.5} dot={false} activeDot={{ r: 5, strokeWidth: 0 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
