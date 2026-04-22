// import { createFileRoute } from "@tanstack/react-router";
// import { CheckCircle2, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
// import { SiteLayout, PageHeader } from "@/components/SiteLayout";
// import { WhatsAppIcon } from "@/components/WhatsAppIcon";
// import { whatsappLink } from "@/lib/site";
// import aboutImg from "@/assets/about-traveler.jpg";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About Us. Apply 2 Fly Visa Consultants" },
//       {
//         name: "description",
//         content:
//           "Learn about Apply 2 Fly Visa Consultants. A trust-first visa consultancy guiding students and travelers from first inquiry to approved visa.",
//       },
//       { property: "og:title", content: "About Apply 2 Fly Visa Consultants" },
//       {
//         property: "og:description",
//         content:
//           "Trust-first, professional visa guidance for study and visit visas. Personal support until your visa is approved.",
//       },
//     ],
//   }),
//   component: AboutPage,
// });

// const values = [
//   { icon: ShieldCheck, title: "Trust First", desc: "Honest case assessments. We tell you what's truly possible. Never what you want to hear." },
//   { icon: Heart, title: "Personal Support", desc: "One dedicated consultant from your first WhatsApp message until your visa is in your hand." },
//   { icon: Sparkles, title: "Premium Files", desc: "Embassy-ready documentation, financial planning, and SOPs prepared with meticulous attention." },
//   { icon: Users, title: "Real Results", desc: "Built on testimonials and a track record of approvals across the USA, UK, Italy, Germany, and Hungary." },
// ];

// function AboutPage() {
//   return (
//     <SiteLayout>
//       <PageHeader
//         eyebrow="About Us"
//         title="A consultancy built on trust, not promises."
//         subtitle="We guide students and travelers through every step of the visa process. Clearly, professionally, and personally."
//       />

//       <section className="py-24">
//         <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
//           <div className="relative">
//             <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gradient-gold opacity-25 blur-xl" />
//             <img
//               src={aboutImg}
//               alt="Professional consultant with passport"
//               className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-luxury"
//               loading="lazy"
//               width={1080}
//               height={1600}
//             />
//           </div>
//           <div>
//             <p className="text-md font-bold uppercase tracking-wide text-[var(--gold)]">Our Story</p>
//             <div className="mt-3 gold-divider" />
//             <h2 className="mt-5 font-display text-4xl font-semibold text-navy md:text-5xl">
//               Built around one belief. <span className="text-[var(--gold)]">Clarity wins approvals</span>.
//             </h2>
//             <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
//               <p>
//                 Apply 2 Fly was founded to fix what most visa consultancies get wrong: rushed files,
//                 vague advice, and empty promises. We do the opposite. Every case begins with an
//                 honest assessment and ends with a documented, embassy-ready application.
//               </p>
//               <p>
//                 Our consultants have years of experience with the USA, UK, Italy and other high reputated countries. Handling study & visit visas. We invest the time to understand
//                 your goal, then engineer a file that tells your story credibly.
//               </p>
//               <p>
//                 We don't publish prices because every case is different. What we promise instead is
//                 a free, no-obligation consultation. Straight on WhatsApp.
//               </p>
//             </div>

//             <ul className="mt-8 space-y-3">
//               {[
//                 "Step-by-step guidance until approval",
//                 "Personal consultant for every client",
//                 "Transparent communication, always",
//                 "No fake claims, no shortcuts",
//               ].map((i) => (
//                 <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
//                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
//                   {i}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="bg-secondary py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">Our Values</p>
//             <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
//               What you can expect from us.
//             </h2>
//           </div>
//           <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {values.map((v) => (
//               <div key={v.title} className="rounded-2xl bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[var(--gold)]">
//                   <v.icon className="h-6 w-6" />
//                 </div>
//                 <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-luxury transition-transform hover:scale-105"
//             >
//               <WhatsAppIcon className="h-5 w-5" />
//               Message on WhatsApp for Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//     </SiteLayout>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle2, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import aboutVideo from "@/assets/about-video.mp4";
import suc1 from "@/assets/Success1.png";
import suc2 from "@/assets/success2.png";
import suc3 from "@/assets/success3.png";
import suc4 from "@/assets/success4.png";
import suc5 from "@/assets/success5.png";
import banner1 from "@/assets/Banner1.png"
import banner2 from "@/assets//Banner2.png"
import banner3 from "@/assets/Banner3.png"
import banner4 from "@/assets/Banner4.png"
import banner5 from "@/assets/Banner5.png"


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us. Apply 2 Fly Visa Consultants" },
      {
        name: "description",
        content:
          "Learn about Apply 2 Fly Visa Consultants. A trust-first visa consultancy guiding students and travelers from first inquiry to approved visa.",
      },
      { property: "og:title", content: "About Apply 2 Fly Visa Consultants" },
      {
        property: "og:description",
        content:
          "Trust-first, professional visa guidance for study and visit visas. Personal support until your visa is approved.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust First", desc: "Honest case assessments. We tell you what's truly possible. Never what you want to hear." },
  { icon: Heart, title: "Personal Support", desc: "One dedicated consultant from your first WhatsApp message until your visa is in your hand." },
  { icon: Sparkles, title: "Premium Files", desc: "Embassy-ready documentation, financial planning, and SOPs prepared with meticulous attention." },
  { icon: Users, title: "Real Results", desc: "Built on testimonials and a track record of approvals across the USA, UK, Italy and other well reputed countries." },
];

const slides = [suc1, suc2, suc3, suc4 , suc5];
const banners = [banner1, banner2, banner3, banner4 , banner5];

function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveSlide((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title="A consultancy built on trust, not promises."
        subtitle="We guide students and travelers through every step of the visa process. Clearly, professionally, and personally."
      />

      <section className="py-2">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative self-stretch flex items-center">
            <div className="absolute -left-4 top-40% h-[60%] w-full rounded-2xl bg-gradient-gold opacity-25 blur-xl" />
            <video
              src={aboutVideo}
              autoPlay
              loop
              playsInline
              controls
              className="relative w-full rounded-2xl object-contain shadow-luxury"
              style={{ height: "60%" }}
/>
          </div>
          <div>
            <p className="text-md font-bold uppercase tracking-wide text-[var(--gold)]">Our Story</p>
            <div className="mt-3 gold-divider" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-navy md:text-5xl">
              Built around one belief. <span className="text-[var(--gold)]">Clarity wins approvals</span>.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Apply 2 Fly was founded to fix what most visa consultancies get wrong: rushed files,
                vague advice, and empty promises. We do the opposite. Every case begins with an
                honest assessment and ends with a documented, embassy-ready application.
              </p>
              <p>
                Our consultants have years of experience with the USA, UK, Italy and other high reputated countries. Handling study & visit visas. We invest the time to understand
                your goal, then engineer a file that tells your story credibly.
              </p>
              <p>
                We don't publish prices because every case is different. What we promise instead is
                a free, no-obligation consultation. Straight on WhatsApp.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Step-by-step guidance until approval",
                "Personal consultant for every client",
                "Transparent communication, always",
                "No fake claims, no shortcuts",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">Our Work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Moments from our journey.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-luxury" style={{ aspectRatio: "16/7" }}>
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: activeSlide === i ? 1 : 0 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

            <button
              onClick={() => setActiveSlide((p) => (p - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-navy"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveSlide((p) => (p + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-navy"
              aria-label="Next"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: activeSlide === i ? "2rem" : "0.5rem",
                    background: activeSlide === i ? "var(--gold)" : "rgba(255,255,255,0.5)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs mt-20 font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">Our Office</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              Our Professional Environment.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-luxury" style={{ aspectRatio: "16/7" }}>
            {banners.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: activeSlide === i ? 1 : 0 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

            <button
              onClick={() => setActiveSlide((p) => (p - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-navy"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveSlide((p) => (p + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-navy"
              aria-label="Next"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: activeSlide === i ? "2rem" : "0.5rem",
                    background: activeSlide === i ? "var(--gold)" : "rgba(255,255,255,0.5)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">Our Values</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy md:text-5xl">
              What you can expect from us.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-[var(--gold)]">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-luxury transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message on WhatsApp for Free Consultation
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}