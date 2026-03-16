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
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3] overflow-hidden flex flex-col h-full hover:shadow-[0_12px_40px_-8px_rgba(20,184,166,0.2)] hover:border-[#14B8A6]/40 transition-all duration-300">

        {/* Card Header */}
        <div className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="border border-white/30 rounded-lg p-2 bg-white/10 backdrop-blur-sm">
              <Building2 className="w-5 h-5 opacity-90" strokeWidth={2} />
            </div>
            <h3 className="font-bold text-sm tracking-wide truncate max-w-[180px]">{hospital.name}</h3>
          </div>
          <div className="flex items-center gap-1.5 text-white text-[9px] uppercase font-bold tracking-widest bg-white/15 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
            {AppConstants.STATUS_ACTIVE}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-3 h-3 text-pink-500 flex-shrink-0" strokeWidth={2.5} fill="#EC4899" />
            <p className="text-xs text-gray-400 font-medium truncate">{hospital.address}</p>
          </div>

          <div className="flex gap-3 mb-5">
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 text-center border border-[#E5F3F3] shadow-sm">
              <div className="text-[9px] text-gray-400 font-bold mb-1.5 uppercase tracking-wider">Patients</div>
              <div className="font-bold text-gray-700 text-lg">{hospital.patients}</div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 text-center border border-[#E5F3F3] shadow-sm">
              <div className="text-[9px] text-gray-400 font-bold mb-1.5 uppercase tracking-wider">Studies</div>
              <div className="font-bold text-gray-700 text-lg">{hospital.studies}</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-[9px] font-bold text-gray-400 mb-2.5 tracking-wider uppercase">{AppConstants.MODALITIES}</div>
            <div className="flex flex-wrap gap-2">
              {hospital.modalities.map(m => (
                <span key={m} className="text-xs font-bold text-[#14B8A6] bg-[#14B8A6]/10 py-1.5 px-3 border border-[#14B8A6]/20 rounded-full">{m}</span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-[9px] font-bold text-gray-400 mb-2.5 tracking-wider uppercase">{AppConstants.DEPARTMENTS}</div>
            <div className="flex flex-wrap gap-2">
              {hospital.departments.map(d => (
                <span key={d} className="text-xs text-gray-500 font-medium bg-gray-100 py-1.5 px-3 rounded-full border border-gray-200">{d}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-5 py-3.5 border-t border-[#E5F3F3] bg-gradient-to-r from-gray-50/50 to-white flex items-center justify-between group-hover:from-[#14B8A6]/5 group-hover:to-white transition-all">
          <span className="text-xs text-gray-400 font-medium">Click to open dashboard</span>
          <span className="text-xs font-bold text-[#14B8A6] flex items-center group-hover:translate-x-1 transition-transform">
            View <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  );
}
