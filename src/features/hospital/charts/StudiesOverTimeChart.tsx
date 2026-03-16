import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function StudiesOverTimeChart({ data }: { data: { name: string; val: number }[] }) {
  return (
    <div className="col-span-2 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50 flex flex-col relative overflow-hidden">
      <h3 className="font-bold text-gray-700 text-sm mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-indigo-400"></div> Studies Over Time
      </h3>
      <div className="flex-1 w-full h-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 0, left: -20, right: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1A919E" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#1A919E" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" tick={{fontSize: 9, fill: '#A0AEC0'}} axisLine={false} tickLine={false} dy={5} />
            <YAxis tick={{fontSize: 9, fill: '#A0AEC0'}} axisLine={false} tickLine={false} dx={-5} />
            <Tooltip />
            <Line type="monotone" dataKey="val" stroke="#1A919E" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
