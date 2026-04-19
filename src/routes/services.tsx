import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Plane, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Study & Visit Visa Consultancy | Apply 2 Fly" },
      {
        name: "description",
        content:
          "Study visa consultation, visit visa processing, and embassy-ready file preparation for the USA, UK, Italy, Germany, and Hungary.",
      },
      { property: "og:title", content: "Services — Apply 2 Fly Visa Consultants" },
      {
        property: "og:description",
        content:
          "Study visa consultation, visit visa processing, and professional file preparation. Step-by-step support until approval.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "Study Visa Consultation",
    intro:
      "From shortlisting universities to your first day on campus — we guide students through every milestone.",
    items: [
      "Profile & eligibility assessment",
      "University and course shortlisting",
      "Application & admission support",
      "Financial documentation planning",
      "Visa filing & interview preparation",
      "Pre-departure briefing",
    ],
  },
  {
    icon: Plane,
    title: "Visit Visa Processing",
    intro:
      "Tourist, family, and business visit applications prepared with the credibility embassies expect.",
    items: [
      "Itinerary and travel plan design",
      "Sponsor & invitation letter drafting",
      "Bank statement and tax review",
      "Cover letter and SOP writing",
      "Appointment booking & filing",
      "Interview coaching",
    ],
  },
  {
    icon: FileText,
    title: "File Preparation",
    intro:
      "Already have a case? We build embassy-ready files from scratch or refine existing applications.",
    items: [
      "Document checklist & gap analysis",
      "Translation and notarization guidance",
      "Statement of Purpose (SOP) writing",
      "Financial file structuring",
      "Form filling & cross-checks",
      "Final embassy submission package",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive visa support, from inquiry to approval."
        subtitle="Three core services, one promise — clear guidance and a meticulously prepared file at every step."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6 lg:px-10">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-navy p-12 text-white shadow-luxury md:p-16">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[var(--gold)]/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gold)] text-navy">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
                    Service 0{i + 1}
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-white/80">{s.intro}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">What's included</p>
                <div className="mt-3 gold-divider" />
                <ul className="mt-6 space-y-4">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--gold)] hover:text-navy"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Discuss your case
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Not sure which service you need?
          </h2>
          <p className="mt-5 text-white/75">
            Send us a message. We'll review your situation and recommend the right path — free of charge.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Free WhatsApp Consultation
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
