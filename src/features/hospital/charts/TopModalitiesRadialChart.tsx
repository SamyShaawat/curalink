import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

export function TopModalitiesRadialChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex flex-col relative overflow-hidden h-full">
      <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-4 flex items-center gap-2">
        <div className="w-2 h-2 border-2 border-[#EC4899] rounded-full bg-transparent"></div> Top Modalities (Radial)
      </h3>
      <div className="flex-1 flex flex-col items-center justify-center -mt-4">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={30} outerRadius={65} fill="#14B8A6" stroke="none" dataKey="value">
                <Cell fill="#14B8A6" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-[9px] text-gray-400 font-bold -translate-x-3 -rotate-90">{data[0]?.value || 701}</div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold -mt-4">
          <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div> CT
        </div>
      </div>
    </div>
  )
}
