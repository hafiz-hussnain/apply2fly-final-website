import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, GraduationCap, Plane, FileText, Star, Quote, ShieldCheck, Globe2, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE, whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-jet.jpg";
import aboutImg from "@/assets/student-traveler.png";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import italyImg from "@/assets/dest-italy.jpg";
import germanyImg from "@/assets/dest-germany.jpg";
import turkeyImg from "@/assets/turkeyImg.jpg"
import malaysiaImg from "@/assets/malaysiaImg.jpg"
import romaniaImg from "@/assets/romaniaImg.jpg"
import australiaImg from "@/assets/australiaImg.jpg"
import cyprusImg from "@/assets/cyprusImg.jpg"
import thailandImg from "@/assets/thailandImg.jpg"
import switzerlandImg from "@/assets/switzerlandImg.jpg"
import lithuaniaImg from "@/assets/lithuaniaImg.jpg"
import czechImg from "@/assets/czechImg.jpg"
import swedenImg from "@/assets/swedenImg.jpg"
import finlandImg from "@/assets/finlandImg.jpg"
import denmarkImg from "@/assets/denmarkImg.jpg"
// new added images
import latviaImg from "@/assets/latviaImg.jpg";
import belgiumImg from "@/assets/belgiumImg.jpg";
import spainImg from "@/assets/spainImg.jpg";
import hungaryImg from "@/assets/hungaryImg.jpg";

const nameToAnchor: Record<string, string> = {
  "United States":  "united-states",
  "United Kingdom": "united-kingdom",
  "Italy":          "italy",
  "Turkey":         "turkey",
  "Malaysia":       "malaysia",
  "Romania":        "romania",
  "Australia":      "australia",
  "Cyprus":         "cyprus",
  "Thailand":       "thailand",
  "Switzerland":    "switzerland",
  "Lithuania":      "lithuania",
  "Czech Republic": "czech-republic",
  "Sweden":         "sweden",
  "Finland":        "finland",
  "Denmark":        "denmark",
   "Latvia":  "latvia",
  "Belgium": "belgium",
  "Spain":   "spain",
  "Hungary": "hungary",
};
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apply 2 Fly Visa Consultants. Elevate Your Future" },
      {
        name: "description",
        content:
          "Premium visa consultancy for study and visit visas to USA, UK, Italy, Germany & Hungary. Step-by-step guidance until approval. Free WhatsApp consultation.",
      },
      { property: "og:title", content: "Apply 2 Fly Visa Consultants. Elevate Your Future" },
      {
        property: "og:description",
        content:
          "Trusted visa consultants for study and visit visas. Personal support, real success stories, free WhatsApp consultation.",
      },
    ],
  }),
  component: HomePage,
});

const destinations = [
  { name: "United States", img: usaImg, tag: "Study & Visit" },
  { name: "United Kingdom", img: ukImg, tag: "Study & Visit" },
  { name: "Italy", img: italyImg, tag: "Study & Visit" },
  { name: "Turkey", img: turkeyImg, tag: "Study & Visit" },
  { name: "Malaysia", img: malaysiaImg, tag: "Study & Visit" },
  { name: "Romania", img: romaniaImg, tag: "Study & Visit" },
  { name: "Australia", img: australiaImg, tag: "Study & Visit" },
  { name: "Cyprus", img: cyprusImg, tag: "Study & Visit" },
  { name: "Thailand", img: thailandImg, tag: "Study & Visit" },
  { name: "Switzerland", img: switzerlandImg, tag: "Study & Visit" },
  { name: "Lithuania", img: lithuaniaImg, tag: "Study & Visit" },
  { name: "Czech Republic", img: czechImg, tag: "Study & Visit" },
  { name: "Sweden", img: swedenImg, tag: "Study & Visit" },
  { name: "Finland", img: finlandImg, tag: "Study & Visit" },
  { name: "Denmark", img: denmarkImg, tag: "Study & Visit" },
    { name: "Latvia",  img: latviaImg,  tag: "Study & Visit" },
  { name: "Belgium", img: belgiumImg, tag: "Study & Visit" },
  { name: "Spain",   img: spainImg,   tag: "Study & Visit" },
  { name: "Hungary", img: hungaryImg, tag: "Study & Visit" },
];

const services = [
  {
    icon: GraduationCap,
    title: "For Students",
    desc: "- Course selection, GTE/SOP perfection, financial docs, and interview prep so you land on campus, not in confusion.",
  },
  {
    icon: Plane,
    title: "For Professionals",
    desc: "Profile assessment, employer coordination, compliance checks, and relocation support to make career moves seamless.",
  },
  {
    icon: FileText,
    title: "For Travlers",
    desc: "- Strong itineraries, proper financials, family applications, and re-application fixes so your trip actually happens.",
  },
];

const testimonials = [
  {
    name: "Rai Mukhtar Hakim",
    role: "Study Visa. UK",
    text: "From shortlisting universities to my UK landing. Apply 2 Fly handled every step. My file was clean, my interview prep was thorough. Approved on the first try.",
  },
  {
    name: "Hasnat",
    role: "Study Visa. South Korea",
    text: "I was nervous at the beginning. Their team rebuilt my file from scratch and walked me through every detail. Got my South Korea visa within weeks.",
  },
  {
    name: "Abdul Razak",
    role: "Visit Visa. USA",
    text: "Honest advice, no false promises. They told me exactly what was possible and delivered. Visited USA with full guidance even after arrival.",
  },
];

// Stats split into numeric value + suffix + label so CountUp can animate the number
const stats = [
  { num: 100,   suffix: "+",  label: "Students Sent"   },
  { num: 20, suffix: "+",  label: "Successful Visas"   },
  { num: 15,    suffix: "",   label: "Top Destinations"   },
  { num: 98,   suffix: "%",  label: "Client Satisfaction" },
];

// ── CountUp hook ─────────────────────────────────────────────────────────────
// Animates a number from 0 to `target` over `duration` ms once `active` is true.
// Uses cubic ease-out so it feels natural and not too fast.
function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTs: number | null = null;
    let rafId: number;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const elapsed = ts - startTs;
      const progress = Math.min(elapsed / duration, 1);
      // cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);
  return value;
}

// ── StatCell ─────────────────────────────────────────────────────────────────
// Renders one stat with animated number. 1200 displayed as "1,200".
function StatCell({ num, suffix, label, active }: { num: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(num, 2800, active);
  const display = num >= 1000 ? count.toLocaleString() : String(count);
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-[var(--gold)] md:text-4xl">
        {display}{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}

function HomePage() {
  // Trigger CountUp as soon as the hero mounts (stats are visible on load)
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view from a plane wing over turquoise ocean"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-navy/30" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
          {/*
            FIX: replaced `animate-fade-up` with a plain wrapper div.
            The outer max-w-3xl div always occupies its full layout size —
            no animation on it — so the section never "jumps" in size.
            Only the inner hero-fade-in div fades+slides up via CSS.
            It starts opacity:0 but the parent already reserves the space,
            so there is zero layout shift or size glitch on reload.
          */}
          <div className="max-w-3xl">
            <div className="hero-fade-in">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                {SITE.tagline}
              </p>
              <h1 className="text-balance font-sans text-4xl font-bold md:font-semibold leading-[1.05] text-white md:text-5xl">
                Professional Guidance for your <span className="italic text-[var(--gold)]">International </span>Journey.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                Expert support from "Application" to "Visa", helping you confidently achieve your dream of studying abroad with ease and success.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-luxury transition-all hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Message us for Free Consultation
                </a>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/*
              Stats live OUTSIDE hero-fade-in so the layout space is always
              reserved. The numbers animate via JS CountUp only — no CSS
              animation on the wrapper, so no size jump.
            */}
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4" ref={statsRef}>
              {stats.map((s) => (
                <StatCell key={s.label} num={s.num} suffix={s.suffix} label={s.label} active={statsActive} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-gold opacity-30 blur-xl" />
            <img
              src={aboutImg}
              alt="Professional traveler with passport in airport lounge"
              className="relative aspect-[4/5] w-full max-h-[60vh] md:max-h-[70vh] rounded-2xl object-cover shadow-luxury"
              loading="lazy"
              width={1080}
              height={1350}
            />
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-card p-6 shadow-luxury md:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-[var(--gold)]" />
                <div>
                  <div className="font-display text-xl font-semibold text-navy">100% Transparent</div>
                  <div className="text-xs text-muted-foreground">No hidden steps. No false claims.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-bold uppercase tracking-wide text-[var(--gold)]">About Us</p>
            <div className="mt-3 gold-divider" />
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Personal guidance, <em className="text-[var(--gold)]">until you Fly</em>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Apply 2 Fly, your dream is our responsibility. We don’t process applications. We champion them. Our consultants blend insider embassy expertise with genuine human care, turning complex visa rules into clear, doable steps.  

<br/><br/> From your first question to the final stamp in your passport, we’re with you: clarifying doubts, perfecting documents, prepping you for interviews, and supporting you even after you land.  
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Transparent case assessment. No false promises, just facts",
                "Precision file building. Every document, audit-ready",
                "Expert interview prep. Walk in confident, walk out approved",
                "Beyond arrival support. Because your journey doesn’t end at the airport",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-[var(--gold)]"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-secondary py-18 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-bold uppercase tracking-wide text-[var(--gold)]">Services</p>
            <h2 className="mt-2 font-sans text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Tailored visa solutions, expertly delivered.
            </h2>
            <p className="mt-4 text-muted-foreground">
              At Apply 2 Fly, a visa isn’t paperwork to us. it’s your future, your career, or your dream trip. That’s why we treat every application like our own.  
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-[var(--gold)]">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-[var(--gold)]"
                >
                  Get free consultation <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      {<section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xl font-bold uppercase tracking-wide text-[var(--gold)]">Destinations</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
                Where will your story begin?
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              We specialize in 15 high-demand countries. With deep expertise in each embassy's
              expectations, timelines, and approval criteria.
            </p>
          </div>

          {/* <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <article
                key={d.name}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                  }`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
                    {d.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                    {d.name}
                  </h3>
                </div>
              </article>
            ))}
          </div> */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {destinations.slice(0, 15).map((d, i) => (
    <a
      key={d.name}
      href={`/destinations#${nameToAnchor[d.name]}`}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
      } ${i >= 5 ? "hidden md:block" : "block"}`}
    >
      <img
        src={d.img}
        alt={d.name}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
      {/* Gold tint on hover */}
      <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
          {d.tag}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
          {d.name}
        </h3>
        {/* Slides up on hover */}
        <p className="mt-1 translate-y-2 text-xs font-medium text-white/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/80">
          View details →
        </p>
      </div>
    </a>
  ))}
</div>

{/* Mobile-only "See All" Button — keep unchanged */}
<div className="mt-10 flex justify-center md:hidden">
  <a
    href="/destinations"
    className="rounded-full border border-[var(--gold)] px-8 mb-8 py-3 text-sm font-semibold text-navy transition-all hover:bg-[var(--gold)] hover:text-white"
  >
    See all 15 Destinations
  </a>
</div>

        </div>
      </section> }

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--gold)]/15 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-bold uppercase tracking-wide text-[var(--gold)]">
              Client Stories
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Real journeys. Real approvals.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-[var(--gold)]/40"
              >
                <Quote className="h-8 w-8 text-[var(--gold)]" />
                <blockquote className="mt-5 text-sm leading-relaxed text-white/85">
                  "{t.text}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-white/10 pt-4">
                  <div className="font-display text-base font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 text-center">
            {[
              { icon: Globe2, label: "15 Countries" },
              { icon: Users, label: "100+ Clients" },
              { icon: ShieldCheck, label: "Serving Since 2024" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2">
                <b.icon className="h-6 w-6 text-[var(--gold)]" />
                <p className="text-xs uppercase tracking-wider text-white/70 sm:text-sm">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xl font-bold uppercase tracking-wide text-[var(--gold)]">
            Ready to begin?
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-6xl">
            Let's start your <em className="text-[var(--gold)]">visa journey</em> today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Send us a message on WhatsApp. Get an honest case assessment and a clear roadmap.
            Completely free, no obligation.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-8 py-5 text-base font-semibold text-white shadow-luxury transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Message on WhatsApp for Free Consultation
          </a>
        </div>
      </section>

      {/* Minimal scoped styles — only what is needed for the two fixes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-fade-in {
          opacity: 0;
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
          will-change: opacity, transform;
        }
      `}</style>
    </SiteLayout>
  );
}