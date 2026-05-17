import * as LucideIcons from "lucide-react";
import { type LucideProps } from "lucide-react";

interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
}

function FeatureCard({ icon, title, text }: FeatureItem) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[icon];
  return (
    <div className="group bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-hero transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-primary/10 text-primary">
        {IconComponent && <IconComponent className="h-6 w-6" />}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <FeatureCard key={item.title} {...item} />
      ))}
    </div>
  );
}
