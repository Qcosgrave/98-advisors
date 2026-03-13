interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <span className="text-xs tracking-[0.25em] uppercase text-bronze font-medium">
      {label}
    </span>
  );
}
