import { Calendar } from 'lucide-react';
import { InputGroup } from '@components/form/InputGroup';
import { SelectGroup } from '@components/form/SelectGroup';

export function StudiesFilterForm() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InputGroup label="Patient Family Name" placeholder="Enter family name" />
        <InputGroup label="Patient ID" placeholder="Enter Patient ID" />
        <InputGroup label="Institutional name" placeholder="Enter Institutional name" />
        <SelectGroup label="Modality" value="All" />
        
        <InputGroup label="Accession number" placeholder="Enter Accession number" sub={<div className="flex items-center gap-2 mt-2"><input type="checkbox" className="rounded text-[#1A919E]" /><span className="text-xs text-gray-500 font-medium">Fuzzy Matching</span></div>}/>
        <InputGroup label="Study Description" placeholder="Enter Study Description" />
        <InputGroup label="Study date" placeholder="mm/dd/yyyy" icon={<Calendar className="w-4 h-4 text-gray-400" />} />
        <SelectGroup label="Report Status" value="All" />

        <SelectGroup label="Web App Service" value="AS_RECEIVED" />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-8 pt-6 border-t border-white/50 gap-4">
        <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-600 font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors">Clear</button>
        <button className="w-full sm:w-auto bg-[#1A919E] hover:bg-[#127173] text-white font-bold px-8 py-2.5 rounded-full text-sm shadow-md shadow-[#1A919E]/20 transition-colors">SUBMIT</button>
      </div>
    </div>
  );
}
