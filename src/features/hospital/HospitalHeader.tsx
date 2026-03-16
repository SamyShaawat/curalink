import { ArrowLeft, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TargetIcon } from '@components/common/TargetIcon';

export function HospitalHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start md:items-center gap-3 md:gap-4">
        <Link to="/dashboard" className="bg-white p-2 rounded-full shadow-sm hover:shadow active:scale-95 transition-all text-gray-500 hover:text-[#1A919E] border border-gray-100 mt-1 md:mt-0 shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-3">
          <TargetIcon className="w-6 h-6 md:w-8 md:h-8 text-[#1A919E] hidden sm:block" />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-[#2A4454] tracking-tight leading-tight">AIN SHAMS GENERAL HOSPITAL</h1>
            <div className="flex items-center gap-2 mt-1 md:mt-1.5">
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
              <div className="bg-[#E2F5EE] text-[#0BB68C] text-[10px] uppercase font-extrabold px-2 py-0.5 rounded shadow-sm border border-[#0BB68C]/20 tracking-wider">
                ACTIVE
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm font-bold mt-2 md:mt-0">
        <button className="px-3 md:px-4 py-1.5 rounded-full bg-white text-gray-400 hover:text-gray-700 shadow-sm border border-gray-100 transition-colors">7d</button>
        <button className="px-3 md:px-4 py-1.5 rounded-full bg-[#1A919E] text-white shadow-sm shadow-[#1A919E]/20">30d</button>
        <button className="px-3 md:px-4 py-1.5 rounded-full bg-white text-gray-400 hover:text-gray-700 shadow-sm border border-gray-100 transition-colors">90d</button>
        <div className="hidden sm:block w-[1px] h-8 bg-gray-200 mx-1 md:mx-2 self-center"></div>
        <button className="px-3 md:px-4 py-1.5 rounded-full bg-white text-[#1A919E] flex items-center gap-2 shadow-sm border border-[#1A919E]/30 hover:bg-[#EAF5F5] transition-colors ml-auto sm:ml-0">
          <Settings className="w-4 h-4" /> Filter
        </button>
      </div>
    </div>
  );
}
