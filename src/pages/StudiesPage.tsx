import { TargetIcon } from '@components/common/TargetIcon';
import { HeaderBanner } from '@components/common/HeaderBanner';
import { StudiesFilterForm } from '@features/studies/StudiesFilterForm';
import { StudiesDataTable } from '@features/studies/StudiesDataTable';

export function StudiesPage() {
  return (
    <div className="space-y-6 animate-in fade-in pb-10">
      <HeaderBanner 
        title="Studies" 
        icon={<TargetIcon className="w-7 h-7 text-[#1A919E]" />} 
      />

      <StudiesFilterForm />

      <StudiesDataTable />
    </div>
  );
}
