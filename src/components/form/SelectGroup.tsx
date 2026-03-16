import { ChevronDown } from 'lucide-react';

export function SelectGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col relative w-full">
      <label className="text-sm font-semibold text-gray-500 mb-2">{label}</label>
      <div className="relative cursor-pointer">
        <select className="appearance-none w-full bg-[#EAF5F5]/60 hover:bg-[#EAF5F5] focus:bg-[#EAF5F5] border border-transparent focus:border-[#1A919E]/30 rounded-lg px-4 py-2.5 outline-none transition-colors text-sm text-gray-700 font-medium cursor-pointer">
          <option>{value}</option>
        </select>
        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-3 pointer-events-none" />
      </div>
    </div>
  );
}
