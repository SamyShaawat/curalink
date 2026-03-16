import { Building2, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RouteConstants } from '@enums/route.constants';
import { AppConstants } from '@enums/app.constants';

export interface Hospital {
  id: number;
  name: string;
  address: string;
  patients: string;
  studies: string;
  modalities: string[];
  departments: string[];
}

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <Link to={`${RouteConstants.HOSPITAL}/${hospital.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] overflow-hidden flex flex-col h-full hover:shadow-[0_12px_40px_-8px_rgba(26,145,158,0.2)] hover:border-[#1A919E]/40 transition-all duration-300 relative">
        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1A919E] to-[#127173]"></div>

        {/* Card Header */}
        <div className="bg-[#1A919E] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="border border-white/30 rounded-md p-1.5">
              <Building2 className="w-5 h-5 opacity-90" />
            </div>
            <h3 className="font-bold text-sm tracking-wide truncate max-w-[150px]">{hospital.name}</h3>
          </div>
          <div className="flex items-center gap-1.5 text-white text-[10px] uppercase font-bold tracking-widest bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 bg-[#0BB68C] rounded-full shadow-[0_0_4px_rgba(11,182,140,0.8)]"></div>
            {AppConstants.STATUS_ACTIVE}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
            <p className="text-xs text-gray-400 font-medium truncate">{hospital.address}</p>
          </div>

          <div className="flex gap-4 mb-5">
            <div className="flex-1 bg-gray-50/80 rounded-lg p-2 text-center border border-gray-100">
              <div className="text-[10px] text-gray-400 font-semibold mb-1 uppercase">Patients</div>
              <div className="font-bold text-gray-700">{hospital.patients}</div>
            </div>
            <div className="flex-1 bg-gray-50/80 rounded-lg p-2 text-center border border-gray-100">
              <div className="text-[10px] text-gray-400 font-semibold mb-1 uppercase">Studies</div>
              <div className="font-bold text-gray-700">{hospital.studies}</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-[10px] font-bold text-gray-400 mb-2 tracking-wider">{AppConstants.MODALITIES}</div>
            <div className="flex flex-wrap gap-2">
              {hospital.modalities.map(m => (
                <span key={m} className="text-xs font-bold text-[#1A919E] bg-[#1A919E]/10 p-1 px-3 border border-[#1A919E]/20 rounded-full">{m}</span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-[10px] font-bold text-gray-400 mb-2 tracking-wider">{AppConstants.DEPARTMENTS}</div>
            <div className="flex flex-wrap gap-2">
              {hospital.departments.map(d => (
                <span key={d} className="text-xs text-gray-500 font-medium bg-gray-100 p-1 px-3 rounded-full">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-5 py-3 border-t border-gray-50 flex items-center justify-between mt-auto bg-gray-50/30 group-hover:bg-[#1A919E]/5 transition-colors">
          <span className="text-xs text-gray-400 font-medium font-sans">Click to open dashboard</span>
          <span className="text-xs font-bold text-[#1A919E] flex items-center group-hover:translate-x-1 transition-transform">
            View <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
