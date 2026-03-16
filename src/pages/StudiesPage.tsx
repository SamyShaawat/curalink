import { FileText } from 'lucide-react';
import { HeaderBanner } from '@components/common/HeaderBanner';
import { StudiesFilterForm } from '@features/studies/StudiesFilterForm';
import { StudiesDataTable } from '@features/studies/StudiesDataTable';

export function StudiesPage() {
  return (
    <div className="space-y-6 animate-in fade-in pb-10">
      <HeaderBanner
        title="Studies"
        icon={<FileText className="w-6 h-6 text-[#1A919E]" strokeWidth={2} />}
      />

      <StudiesFilterForm />

      <StudiesDataTable />
    </div>
  );
}
