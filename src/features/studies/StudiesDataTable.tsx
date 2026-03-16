const tableData = [
  { id: 1, name: 'Hamad Khadija', pid: '89581', priority: '—', status: '—', images: '2', date: '2025-04-20', mod: 'PT', desc: '—', acc: '89581' },
  { id: 2, name: 'Gebril Ahmed', pid: '82522', priority: '—', status: '—', images: '1034', date: '2025-04-20', mod: 'CT', desc: '—', acc: '82522' },
  { id: 3, name: 'Mohamed Zakeya', pid: '77969', priority: '—', status: '—', images: '4', date: '2025-04-22', mod: 'PT', desc: '—', acc: '77969' }
];

export function StudiesDataTable() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] overflow-hidden">
      <div className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] p-4 flex items-center justify-between text-white">
        <h2 className="font-bold text-lg">Search Results</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">1000 studies</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[#E5F3F3]">
              {['Patient Name', 'Patient ID', 'Priority', 'Status', 'No. of Images', 'Study Date', 'Modality', 'Description', 'Accession #', 'Actions'].map(th => (
                <th key={th} className="py-4 px-4 text-xs font-bold text-gray-500 whitespace-nowrap uppercase tracking-wider">{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-[#E5F3F3] hover:bg-[#F0F9F9] transition-colors">
                <td className="py-4 px-4 font-bold text-gray-700 text-sm">{row.name}</td>
                <td className="py-4 px-4 text-gray-500 text-sm font-medium">{row.pid}</td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.priority}</td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.status}</td>
                <td className="py-4 px-4 text-gray-700 font-bold text-sm">{row.images}</td>
                <td className="py-4 px-4 text-gray-500 text-sm whitespace-nowrap">
                  {row.date.split('-').map((d, idx) => idx === 0 ? <div key={idx}>{d}</div> : <span key={idx}>-{d}</span>)}
                </td>
                <td className="py-4 px-4"><span className="text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/10 px-2 py-1 rounded">{row.mod}</span></td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.desc}</td>
                <td className="py-4 px-4 text-gray-500 text-sm">{row.acc}</td>
                <td className="py-4 px-4">
                  <button className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white text-[10px] font-bold px-3 py-2 rounded-lg flex flex-col items-center shadow-md shadow-[#14B8A6]/20 transition-all">
                    <span className="leading-tight">View</span>
                    <span className="leading-tight">Series</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
