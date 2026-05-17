import * as LucideIcons from "lucide-react";
import { type LucideProps } from "lucide-react";
import { industries } from "@/lib/content";

export default function IndustriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {industries.map((ind) => {
        const IconComponent = (LucideIcons as unknown as Record<string, React.FC<LucideProps>>)[ind.icon];
        return (
          <div
            key={ind.title}
            className="group relative rounded-xl overflow-hidden border border-border shadow-card hover:shadow-hero transition-all duration-300"
            style={{ minHeight: 320 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ind.photo})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/35" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6" style={{ minHeight: 320 }}>
              <div className="flex items-center gap-2 mb-2">
                {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
                <h3 className="text-xl font-bold text-white m-0">{ind.title}</h3>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">{ind.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
