import { Search } from 'lucide-react';

export function NetworkSearch({ count }: { count: number }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 shadow-sm border border-white/50 flex items-center relative">
      <Search className="w-5 h-5 text-gray-300 mr-2 sm:mr-3 absolute left-4 sm:left-5" />
      <input 
        type="text" 
        placeholder="Search institutions..." 
        className="w-full bg-transparent border-none focus:outline-none text-gray-600 pl-8 pr-4 sm:pr-36 placeholder-gray-300 text-sm"
      />
      <div className="hidden sm:block bg-[#1A919E]/10 text-[#1A919E] text-xs font-bold px-4 py-1.5 rounded-full absolute right-3 pointer-events-none">
        {count} / {count} institutions
      </div>
    </div>
  );
}
