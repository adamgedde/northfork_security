import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  tone?: "background" | "section" | "muted";
  children: ReactNode;
}

export function Section({ id, tone = "background", children }: SectionProps) {
  const bg =
    tone === "section"
      ? "bg-section"
      : tone === "muted"
      ? "bg-secondary"
      : "bg-background";
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  lead?: string;
  align?: "center" | "left";
}

export function SectionHeader({ title, lead, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h2>
      {lead && <p className="text-xl text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}
