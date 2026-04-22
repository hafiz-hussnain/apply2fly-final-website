import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us. Apply 2 Fly Visa Consultants" },
      {
        name: "description",
        content:
          "Reach Apply 2 Fly Visa Consultants on WhatsApp for a free consultation. Email and Lahore office details inside.",
      },
      { property: "og:title", content: "Contact Apply 2 Fly Visa Consultants" },
      {
        property: "og:description",
        content: "WhatsApp-first consultation for study and visit visas. Free, no obligation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk on WhatsApp."
        subtitle="The fastest way to get a clear, honest case assessment. Directly with our consultants."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* WhatsApp primary card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-navy p-10 text-white shadow-luxury md:p-14">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--whatsapp)]/30 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[var(--gold)]/15 blur-3xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--whatsapp)] text-white">
                  <WhatsAppIcon className="h-8 w-8" />
                </div>
                <p className="mt-8 text-lg font-bold uppercase tracking-wide text-[var(--gold)]">
                  Preferred Channel
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Free WhatsApp Consultation
                </h2>
                <p className="mt-5 max-w-md text-white/80">
                  Send a message with your goal. Study or visit, and your destination. We'll
                  respond with the next steps tailored to your case.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Message on WhatsApp
                </a>
                <p className="mt-6 text-sm text-white/70">{SITE.whatsappDisplay}</p>
              </div>
            </div>

            {/* Other channels */}
            <div className="space-y-5">
              <ContactRow
                icon={<Mail className="h-6 w-6" />}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactRow
                icon={<MapPin className="h-6 w-6" />}
                label="Office"
                value={SITE.location}
              />
              <ContactRow
                icon={<Clock className="h-6 w-6" />}
                label="Hours"
                value="Mon – Sat · 10:00 AM to 7:00 PM (PKT)"
              />
              <div className="rounded-2xl border border-border bg-secondary p-8">
                <h3 className="font-display text-xl font-semibold text-navy">
                  Before you message us
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>• Mention whether it's a <strong className="text-foreground">study</strong> or <strong className="text-foreground">visit</strong> visa.</li>
                  <li>• Share your preferred country (USA, UK, Italy, Turkey , Malaysia or Other).</li>
                  <li>• Tell us your background briefly. Education or travel history.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-[var(--gold)] hover:shadow-luxury">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-[var(--gold)]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">{label}</p>
        <p className="mt-1 font-display text-lg font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
