import { twMerge } from 'tailwind-merge';

export function TargetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={twMerge("fill-current", className)}>
      <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 70C33.4 80 20 66.6 20 50s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30z"></path>
      <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"></path>
    </svg>
  );
}
