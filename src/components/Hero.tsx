import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/content";

interface HeroProps {
  onContact: () => void;
}

export default function Hero({ onContact }: HeroProps) {
  return (
    <section id="home" className="relative isolate overflow-hidden py-20 lg:py-28 bg-hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/main-street-hero.jpg"
          alt="Minnesota Main Street"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_2px_hsl(25_95%_55%/0.4)]" />
            <span className="text-xs uppercase tracking-[0.08em] font-semibold text-accent">
              Built correctly. Supported locally.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Reliable WiFi. Smarter Security.{" "}
            <span className="text-accent">Systems That Just Work.</span>
          </h1>

          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
            We design and manage secure video and property awareness systems for farms, small businesses, churches, and rural properties across Minnesota. Clear architecture. Clean installs. Ongoing oversight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="cta" size="lg" onClick={onContact} className="group">
              Request a Site Assessment
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById("video-security")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works
            </Button>
          </div>

          <div className="border-t border-white/20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.figure} className="text-center">
                <div className="text-4xl font-extrabold text-accent">{s.figure}</div>
                <div className="text-sm text-white/85 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
