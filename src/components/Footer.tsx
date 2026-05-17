import { useState } from "react";
import { Shield } from "lucide-react";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";

export default function Footer() {
  const year = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-white m-0">North Fork Security</p>
              <p className="text-sm text-white/70 m-0">Video Security &amp; Monitoring Solutions</p>
            </div>
          </div>
          <p className="text-white/80 mb-6 leading-relaxed">
            Providing Minnesota farms, businesses, churches, and professional offices with thoughtfully designed video security and monitoring systems - backed by reliable local service.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/northforksecurity"
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.86.24-1.45 1.48-1.45H17V4.45A21.3 21.3 0 0 0 14.7 4.33c-2.3 0-3.86 1.4-3.86 3.97v2.2H8.2v3h2.64V21h2.66Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/70 flex-wrap">
              <p className="m-0">© {year} North Fork Security. All rights reserved.</p>
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                NDAA Approved
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Minnesota Owned
              </span>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
}
