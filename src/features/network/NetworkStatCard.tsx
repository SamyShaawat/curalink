export function NetworkStatCard({ stat }: { stat: { label: string, value: string, sub?: string } }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] flex flex-col justify-between hover:shadow-[0_8px_30px_-4px_rgba(20,184,166,0.15)] hover:border-[#14B8A6]/30 transition-all duration-300 group">
      <h3 className="text-sm font-semibold text-gray-500 mb-3">{stat.label}</h3>
      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold text-gray-800 group-hover:text-[#14B8A6] transition-colors">{stat.value}</span>
        {stat.sub && <span className="text-xs text-gray-400 font-medium pb-1">{stat.sub}</span>}
      </div>
    </div>
  );
}
