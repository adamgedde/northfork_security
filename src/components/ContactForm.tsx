import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  propertyType: z.string().min(1, "Required"),
  address: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { Icon: Phone, title: "Call Us", details: "(320) 228-3541", description: "" },
  { Icon: Mail, title: "Email Us", details: "info@northforksecurity.io", description: "" },
  { Icon: MapPin, title: "Service Area", details: "Meeker, Wright, McLeod Counties ", description: "" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await fetch("https://formspree.io/f/placeholder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-card rounded-xl p-8 shadow-card border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-6">Request a Site Assessment.</h3>
        {submitted ? (
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-6">
            <div className="flex items-center gap-2 font-semibold mb-1 text-foreground">
              <CheckCircle className="h-5 w-5 text-primary" />
              Request submitted.
            </div>
            <p className="text-sm text-muted-foreground">
              We'll contact you within 24 hours to schedule your site assessment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" {...register("firstName")} className="h-11" />
                {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" {...register("lastName")} className="h-11" />
                {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className="h-11" />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="(320) 228-3541" {...register("phone")} className="h-11" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select onValueChange={(v) => setValue("propertyType", v)}>
                <SelectTrigger className="h-11" id="propertyType">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farm">Farm / Agriculture</SelectItem>
                  <SelectItem value="retail">Retail / Small Business</SelectItem>
                  <SelectItem value="church">Church / Community Center</SelectItem>
                  <SelectItem value="office">Financial / Professional Office</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.propertyType && <p className="text-xs text-destructive">{errors.propertyType.message}</p>}
            </div>
            <div className="space-y-1">
              <Label htmlFor="address">Property Address</Label>
              <Input id="address" placeholder="123 Main St, Rochester, MN" {...register("address")} className="h-11" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe what you'd like to protect and any specific security concerns..."
                {...register("message")}
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" variant="cta" size="lg" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : (
                <>
                  Request a Site Assessment
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>

      <div className="space-y-8">
        <div className="bg-card rounded-xl p-8 shadow-card border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch.</h3>
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <info.Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{info.title}</p>
                  <p className="text-primary font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-xl p-8 text-white">
          <h4 className="text-xl font-bold mb-4">Why North Fork Security.</h4>
          <ul className="space-y-3">
            {[
              "Minnesota-based service",
              "Clean, professional installations",
              "Straightforward recommendations",
              "Enterprise-grade systems",
              "Ongoing support available",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-white/90">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
