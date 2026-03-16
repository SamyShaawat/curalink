import { PieChart, Pie, ResponsiveContainer } from 'recharts';

export function ModalitySplitChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/50 flex flex-col justify-between relative overflow-hidden">
      <h3 className="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-orange-400"></div> Modality Split
      </h3>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={70} fill="#1CA7BD" stroke="none" dataKey="value" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold mt-2">
          <div className="w-1.5 h-1.5 bg-[#1CA7BD] rounded-full"></div> CT
        </div>
      </div>
    </div>
  );
}
