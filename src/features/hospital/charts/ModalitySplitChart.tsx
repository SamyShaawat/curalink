import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const COLORS = ['#14B8A6', '#06B6D4', '#10B981', '#3B82F6', '#8B5CF6'];

export function ModalitySplitChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex flex-col justify-between relative overflow-hidden h-full">
      <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-4 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-[#F97316]"></div> Modality Split
      </h3>
      <div className="flex-1 flex flex-col items-center justify-center min-h-0">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                fill="#14B8A6"
                stroke="none"
                dataKey="value"
                paddingAngle={3}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  fontSize: 11,
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-500 font-bold mt-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span className="whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
