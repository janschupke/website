interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`section mb-12 opacity-0 translate-y-8 transition-all duration-800 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6 pb-2 border-b-2 border-border-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

