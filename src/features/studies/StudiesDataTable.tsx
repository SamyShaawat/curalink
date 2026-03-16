const tableData = [
  { id: 1, name: 'Hamad Khadija', pid: '89581', priority: '—', status: '—', images: '2', date: '2025-04-20', mod: 'PT', desc: '—', acc: '89581' },
  { id: 2, name: 'Gebrli Ahmed', pid: '82522', priority: '—', status: '—', images: '1034', date: '2025-04-20', mod: 'CT', desc: '—', acc: '82522' },
  { id: 3, name: 'Mohamed Zakeya', pid: '77969', priority: '—', status: '—', images: '4', date: '2025-04-22', mod: 'PT', desc: '—', acc: '77969' }
];

export function StudiesDataTable() {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/40 overflow-hidden">
      <div className="bg-[#197B82]/90 backdrop-blur-sm p-4 flex items-center justify-between text-white">
        <h2 className="font-bold text-lg">Search Results</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">1000 studies</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-100">
              {['Patient Name', 'Patient ID', 'Priority', 'Status', 'No. of Images', 'Study Date', 'Modality', 'Description', 'Accession #', 'Actions'].map(th => (
                <th key={th} className="py-4 px-4 text-xs font-bold text-gray-500 whitespace-nowrap">{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4 font-bold text-gray-700 text-sm">{row.name}</td>
                <td className="py-4 px-4 text-gray-500 text-sm font-medium">{row.pid}</td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.priority}</td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.status}</td>
                <td className="py-4 px-4 text-gray-700 font-bold text-sm">{row.images}</td>
                <td className="py-4 px-4 text-gray-500 text-sm whitespace-nowrap">
                  {row.date.split('-').map((d, idx) => idx === 0 ? <div key={idx}>{d}</div> : <span key={idx}>-{d}</span>)}
                </td>
                <td className="py-4 px-4"><span className="text-xs font-bold text-[#0BB68C]">{row.mod}</span></td>
                <td className="py-4 px-4 text-gray-400 text-sm">{row.desc}</td>
                <td className="py-4 px-4 text-gray-500 text-sm">{row.acc}</td>
                <td className="py-4 px-4">
                  <button className="bg-[#1A919E] hover:bg-[#127173] text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex flex-col items-center shadow-sm">
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
