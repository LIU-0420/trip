type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#b86f44]">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl text-slate-900 sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
