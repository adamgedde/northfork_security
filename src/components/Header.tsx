import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onContact: () => void;
}

export default function Header({ onContact }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const nav = [
    { name: "Video Security", href: "#video-security" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
  ];
  const linkClass = "text-sm font-medium text-foreground hover:text-primary transition-colors";

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-hero">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xl font-bold text-foreground m-0">North Fork Security</p>
              <p className="text-xs text-muted-foreground m-0">Video Security &amp; Monitoring Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {nav.map((i) => (
              <a
                key={i.name}
                href={i.href}
                className={linkClass}
                onClick={(e) => { e.preventDefault(); scrollTo(i.href); }}
              >
                {i.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="cta" size="lg" onClick={onContact} className="group">
              Request a Site Assessment
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {nav.map((i) => (
                <a
                  key={i.name}
                  href={i.href}
                  className={linkClass}
                  onClick={(e) => { e.preventDefault(); scrollTo(i.href); setOpen(false); }}
                >
                  {i.name}
                </a>
              ))}
              <Button
                variant="cta"
                size="lg"
                className="mt-2 group"
                onClick={() => { onContact(); setOpen(false); }}
              >
                Request a Site Assessment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
