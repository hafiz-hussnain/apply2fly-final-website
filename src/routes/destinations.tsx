import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import usaImg from "@/assets/dest-usa.jpg";
import ukImg from "@/assets/dest-uk.jpg";
import italyImg from "@/assets/dest-italy.jpg";
import turkeyImg from "@/assets/turkeyImg.jpg";
import malaysiaImg from "@/assets/malaysiaImg.jpg";
import romaniaImg from "@/assets/romaniaImg.jpg";
import australiaImg from "@/assets/australiaImg.jpg";
import cyprusImg from "@/assets/cyprusImg.jpg";
import thailandImg from "@/assets/thailandImg.jpg";
import switzerlandImg from "@/assets/switzerlandImg.jpg";
import lithuaniaImg from "@/assets/lithuaniaImg.jpg";
import czechImg from "@/assets/czechImg.jpg";
import swedenImg from "@/assets/swedenImg.jpg";
import finlandImg from "@/assets/finlandImg.jpg";
import denmarkImg from "@/assets/denmarkImg.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations. 15 Countries | Apply 2 Fly" },
      {
        name: "description",
        content:
          "Specialist visa support for the USA, UK, Italy, Germany, and Hungary. For both study and visit visa applicants.",
      },
      { property: "og:title", content: "Destinations. Apply 2 Fly Visa Consultants" },
      {
        property: "og:description",
        content:
          "Visa expertise for the USA, UK, Italy, Germany, and Hungary, Study and visit applications.",
      },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { 
    name: "United States", 
    img: usaImg, 
    tag: "Study & Visit",
    blurb: "F-1 student visas and B1/B2 visit visas. Strong file building and interview prep tailored to consular expectations." 
  },
  { 
    name: "United Kingdom", 
    img: ukImg, 
    tag: "Study & Visit",
    blurb: "Tier 4 student visas and standard visitor visas. Specialized support for family visits with credible sponsorship documentation." 
  },
  { 
    name: "Italy", 
    img: italyImg, 
    tag: "Study & Visit",
    blurb: "Type D study visas and Schengen visit visas. Comprehensive guidance on university pre-enrollment and scholarship applications." 
  },
  { 
    name: "Turkey", 
    img: turkeyImg, 
    tag: "Study & Visit",
    blurb: "Bridging Europe and Asia with world-class universities and vibrant tourism. Fast-track processing for both student and visit categories." 
  },
  { 
    name: "Malaysia", 
    img: malaysiaImg, 
    tag: "Study & Visit",
    blurb: "A multicultural hub for affordable, high-quality education and tropical tourism. Ideal for students seeking dual-degree programs." 
  },
  { 
    name: "Romania", 
    img: romaniaImg, 
    tag: "Study & Visit",
    blurb: "Gateway to the EU with low cost of living and reputable medical and engineering programs. Perfect for history-rich tourism." 
  },
  { 
    name: "Australia", 
    img: australiaImg, 
    tag: "Study & Visit",
    blurb: "Top-tier education in a thriving economy. Specialist support for Subclass 500 student visas and Subclass 600 visitor visas." 
  },
  { 
    name: "Cyprus", 
    img: cyprusImg, 
    tag: "Study & Visit",
    blurb: "Mediterranean island charm combined with modern university campuses. Excellent success rates for international student admissions." 
  },
  { 
    name: "Thailand", 
    img: thailandImg, 
    tag: "Study & Visit",
    blurb: "A leading destination for hospitality studies and leisure. Streamlined visa paths for travelers looking to explore Southeast Asia." 
  },
  { 
    name: "Switzerland", 
    img: switzerlandImg, 
    tag: "Study & Visit",
    blurb: "The global center for finance and hospitality. Premium support for highly selective visa files and luxury travel itineraries." 
  },
  { 
    name: "Lithuania", 
    img: lithuaniaImg, 
    tag: "Study & Visit",
    blurb: "Fast-growing Baltic tech hub offering affordable EU degrees and a high quality of life for students and visitors alike." 
  },
  { 
    name: "Czech Republic", 
    img: czechImg, 
    tag: "Study & Visit",
    blurb: "Heart of Europe education with medieval charm. Expert handling of long-term study permits and short-term Schengen visits." 
  },
  { 
    name: "Sweden", 
    img: swedenImg, 
    tag: "Study & Visit",
    blurb: "World leader in innovation and sustainability. Tailored assistance for Master's programs and Nordic tourism experiences." 
  },
  { 
    name: "Finland", 
    img: finlandImg, 
    tag: "Study & Visit",
    blurb: "Consistently ranked as the world's happiest country. Specialized visa support for researchers, students, and winter tourism." 
  },
  { 
    name: "Denmark", 
    img: denmarkImg, 
    tag: "Study & Visit",
    blurb: "High educational standards and a focus on social well-being. Dedicated support for residency permits and Scandinavian travel." 
  },
];

function DestinationsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Destinations"
        title="Fifteen destinations. Deep expertise in each."
        subtitle="We focus on the countries we know best. So every file we send reflects what each embassy actually wants to see."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6 lg:px-10">
          {destinations.map((d, i) => (
            <article
              key={d.name}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src={d.img}
                  alt={d.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
                  Destination 0{i + 1}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">{d.name}</h2>
                <div className="mt-4 gold-divider" />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{d.blurb}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--gold)] hover:text-navy"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask about {d.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
