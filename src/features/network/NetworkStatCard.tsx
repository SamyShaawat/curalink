export function NetworkStatCard({ stat }: { stat: { label: string, value: string, sub?: string } }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-sm border border-white/50 flex flex-col justify-between hover:shadow-md transition-shadow hover:bg-white/95">
      <h3 className="text-sm font-semibold text-gray-500 mb-2">{stat.label}</h3>
      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold text-gray-800">{stat.value}</span>
        {stat.sub && <span className="text-xs text-gray-400 font-medium pb-1">{stat.sub}</span>}
      </div>
    </div>
  );
}
