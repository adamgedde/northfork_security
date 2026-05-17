import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Privacy Policy.</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            <span className="text-xs text-muted-foreground">Last updated: May 2026</span>
          </p>

          <p>
            North Fork Security operates this website to provide information about our services and to receive site assessment requests from prospective clients. This policy describes what information we collect, how we use it, and how we protect it.
          </p>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Information we collect.</h3>
            <p>
              When you submit a site assessment request through our contact form, we collect the information you provide: your name, email address, phone number, property type, property address, and any message you include. We do not collect this information passively — only when you choose to submit the form.
            </p>
            <p>
              This website does not currently use analytics tracking, advertising pixels, or third-party cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">How we use your information.</h3>
            <p>
              We use the information you submit solely to respond to your inquiry and schedule your site assessment. We do not sell, rent, or share your information with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">How your form submission is handled.</h3>
            <p>
              Contact form submissions are processed through Formspree, a third-party form handling service. Your submission is transmitted to Formspree's servers and forwarded to our email inbox. Formspree's own privacy policy governs how they handle data in transit. We do not store your submission in any database we operate.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Data retention.</h3>
            <p>
              Inquiry emails are retained in our business email inbox for as long as they are relevant to an active or potential client relationship. If you would like your information removed, contact us at the address below and we will delete it promptly.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Security.</h3>
            <p>
              This website is served over HTTPS. We do not store payment information or sensitive personal data. The information you submit through the contact form is limited to what you voluntarily provide.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Your rights.</h3>
            <p>
              You may request access to, correction of, or deletion of any personal information you have submitted to us. To make a request, contact us at{" "}
              <a href="mailto:info@northforksecurity.io" className="text-primary hover:underline">
                info@northforksecurity.io
              </a>{" "}
              or by phone at (320) 228-3541.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Changes to this policy.</h3>
            <p>
              If we make material changes to this policy, we will update the date at the top of this page. We encourage you to review it periodically.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold text-foreground">Contact.</h3>
            <p>
              North Fork Security<br />
              Statewide Minnesota<br />
              <a href="mailto:info@northforksecurity.io" className="text-primary hover:underline">
                info@northforksecurity.io
              </a><br />
              (320) 228-3541
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
