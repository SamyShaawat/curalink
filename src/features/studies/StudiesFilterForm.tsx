import { Calendar } from 'lucide-react';
import { InputGroup } from '@components/form/InputGroup';
import { SelectGroup } from '@components/form/SelectGroup';

export function StudiesFilterForm() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-[#E5F3F3]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <InputGroup label="Patient Family Name" placeholder="Enter family name" />
        <InputGroup label="Patient ID" placeholder="Enter Patient ID" />
        <InputGroup label="Institutional name" placeholder="Enter Institutional name" />
        <SelectGroup label="Modality" value="All" />

        <InputGroup label="Accession number" placeholder="Enter Accession number" sub={<div className="flex items-center gap-2 mt-2"><input type="checkbox" className="rounded text-[#14B8A6] border-gray-300" /><span className="text-xs text-gray-500 font-medium">Fuzzy Matching</span></div>}/>
        <InputGroup label="Study Description" placeholder="Enter Study Description" />
        <InputGroup label="Study date" placeholder="mm/dd/yyyy" icon={<Calendar className="w-4 h-4 text-gray-400" />} />
        <SelectGroup label="Report Status" value="All" />

        <SelectGroup label="Web App Service" value="AS_RECEIVED" />
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-8 pt-6 border-t border-[#E5F3F3] gap-4">
        <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold px-6 py-2.5 rounded-full text-sm transition-colors">Clear</button>
        <button className="w-full sm:w-auto bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white font-bold px-8 py-2.5 rounded-full text-sm shadow-md shadow-[#14B8A6]/25 transition-all">SUBMIT</button>
      </div>
    </div>
  );
}
