import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import FooterCTA from "@/components/landing/FooterCTA";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Access = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    useCase: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\n\nUse Case:\n${form.useCase}`
    );
    const subject = encodeURIComponent(`OpenFlux Access Request — ${form.organization || form.name}`);
    // Open mailto and mark submitted
    window.location.href = `mailto:research@openflux.io?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 lg:pb-32 relative">
        <div className="section-container">
          {/* Header */}
          <motion.div
            className="max-w-2xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-xs text-muted-foreground mb-4 tracking-widest uppercase">
              Institutional Access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Request <span className="text-accent">Access.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              OpenFlux is deployed on a by-request basis. Tell us about your research context and we will get back to you directly.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {submitted ? (
                <div className="border border-accent/30 bg-accent/5 p-10 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl font-semibold">Request Submitted</h2>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    Your email client has been opened with the pre-filled request. Send it and we will follow up within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Jane Smith"
                        className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        Organization
                      </label>
                      <input
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="Firm / Fund / Independent"
                        className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@fund.io"
                      className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                      Research Context <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      name="useCase"
                      value={form.useCase}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your asset universe, research objectives, and how you intend to use the engine..."
                      className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto gap-2"
                  >
                    Submit Request
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right: Info panel */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="border border-border bg-card p-8 space-y-6">
                <div className="font-mono text-[10px] text-accent uppercase tracking-[0.3em]">
                  What You Get
                </div>
                <div className="space-y-5">
                  {[
                    {
                      title: "Runs on Your Machine",
                      desc: "Full local deployment. Your data never leaves your infrastructure.",
                    },
                    {
                      title: "Fully Customized Configurations",
                      desc: "Asset universe, timeframes, regime filters, and rule constraints — all configurable.",
                    },
                    {
                      title: "Ready-to-Export Rules",
                      desc: "Every discovered edge is a readable, auditable decision tree ready for deployment.",
                    },
                    {
                      title: "Institutional Validation Pipeline",
                      desc: "Temporal isolation, shared kernel, unbiased labelling — rigour built into the architecture.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground mb-0.5">{item.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-border bg-card p-6">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  Direct Contact
                </div>
                <a
                  href="mailto:research@openflux.io"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  research@openflux.io
                </a>
                <div className="flex items-center gap-2 mt-4 px-3 py-1.5 bg-accent/10 border border-accent/20 w-fit">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] text-accent font-bold">ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterCTA />
    </div>
  );
};

export default Access;
