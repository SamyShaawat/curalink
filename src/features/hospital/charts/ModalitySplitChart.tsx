import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const COLORS = ['#1CA7BD', '#F97316', '#1A919E', '#6366F1', '#10B981'];

export function ModalitySplitChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 flex flex-col justify-between relative overflow-hidden">
      <h3 className="font-bold text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-orange-400"></div> Modality Split
      </h3>
      <div className="flex-1 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px]">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={data} 
                cx="50%" 
                cy="50%" 
                innerRadius={35} 
                outerRadius={55} 
                fill="#1CA7BD" 
                stroke="none" 
                dataKey="value"
                paddingAngle={2}
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
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-500 font-bold mt-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span className="whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
