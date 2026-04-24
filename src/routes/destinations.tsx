import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { CheckCircle2, DollarSign, MapPin } from "lucide-react";
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
// new added images
import latviaImg from "@/assets/latviaImg.jpg";
import belgiumImg from "@/assets/belgiumImg.jpg";
import spainImg from "@/assets/spainImg.jpg";
import hungaryImg from "@/assets/hungaryImg.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations. 15+ Countries | Apply 2 Fly" },
      {
        name: "description",
        content:
          "Specialist visa support for 15+ countries. For both study and visit visa applicants.",
      },
      { property: "og:title", content: "Destinations. Apply 2 Fly Visa Consultants" },
      {
        property: "og:description",
        content:
          "Visa expertise for 15+ top destinations. Study and visit applications.",
      },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  {
    id: "united-states",
    name: "United States",
    flag: "🇺🇸",
    img: usaImg,
    tag: "Study & Visit",
    why: "The USA offers top-ranked universities and diverse academic programs, making it a leading choice worldwide.",
    benefits: [
      "Globally recognized degrees",
      "Wide range of programs",
      "Strong research opportunities",
      "Career growth potential",
    ],
    tuition: "$10,000 – $30,000/year",
    living: "$800 – $1,500/month",
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    img: ukImg,
    tag: "Study & Visit",
    why: "The UK is a top destination for world-class education and strong career opportunities with globally recognized universities.",
    benefits: [
      "2-year post-study work visa",
      "Short course duration",
      "High-quality education",
      "Strong job market",
    ],
    tuition: "£10,000 – £18,000/year",
    living: "£800 – £1,200/month",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    img: italyImg,
    tag: "Study & Visit",
    why: "Italy provides affordable European education with scholarship options and access to the Schengen region.",
    benefits: [
      "Scholarships available",
      "Low tuition fees",
      "Cultural experience",
      "European exposure",
    ],
    tuition: "€1,000 – €4,000/year",
    living: "€500 – €800/month",
  },
  {
    id: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    img: turkeyImg,
    tag: "Study & Visit",
    why: "Turkey is a smart choice for Pakistani students looking for affordable international education with European standards. Its universities offer a mix of modern education and rich cultural exposure.",
    benefits: [
      "Low tuition fees compared to Europe",
      "High visa success rate",
      "Many universities without IELTS",
      "Scholarship opportunities available",
      "Part-time work options",
    ],
    tuition: "$1,500 – $5,000/year",
    living: "$300 – $600/month",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    img: malaysiaImg,
    tag: "Study & Visit",
    why: "Malaysia is perfect for students who want quality education at a low cost in Asia with internationally recognized degrees.",
    benefits: [
      "Affordable study options",
      "Fast visa processing",
      "English-medium programs",
      "Safe and multicultural environment",
    ],
    tuition: "$2,000 – $6,000/year",
    living: "$300 – $500/month",
  },
  {
    id: "romania",
    name: "Romania",
    flag: "🇷🇴",
    img: romaniaImg,
    tag: "Study & Visit",
    why: "Romania offers budget-friendly European education with simple admission procedures, making it attractive for international students.",
    benefits: [
      "Low tuition fees",
      "Easy admission process",
      "European degree recognition",
      "Growing student community",
    ],
    tuition: "€2,000 – €6,000/year",
    living: "€300 – €600/month",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    img: australiaImg,
    tag: "Study & Visit",
    why: "Australia is known for its high-quality education and excellent post-study work opportunities.",
    benefits: [
      "Work while studying",
      "Post-study work visa",
      "PR pathways available",
      "Globally recognized degrees",
    ],
    tuition: "AUD 15,000 – 30,000/year",
    living: "AUD 1,200 – 2,000/month",
  },
  {
    id: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    img: cyprusImg,
    tag: "Study & Visit",
    why: "Cyprus is ideal for students seeking easy admission and a high visa success rate.",
    benefits: [
      "Simple visa process",
      "Affordable education",
      "English-taught programs",
      "Safe environment",
    ],
    tuition: "€3,000 – €8,000/year",
    living: "€400 – €700/month",
  },
  {
    id: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    img: thailandImg,
    tag: "Study & Visit",
    why: "Thailand is a great option for low-cost study with growing international education standards.",
    benefits: [
      "Budget-friendly",
      "Easy visa process",
      "English programs available",
      "Student-friendly lifestyle",
    ],
    tuition: "$2,000 – $5,000/year",
    living: "$300 – $600/month",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    img: switzerlandImg,
    tag: "Study & Visit",
    why: "Switzerland is famous for premium education, especially in hospitality and business.",
    benefits: [
      "World-class institutions",
      "High salary potential",
      "Internship opportunities",
      "Global exposure",
    ],
    tuition: "CHF 10,000 – 25,000/year",
    living: "CHF 1,200 – 2,000/month",
  },
  {
    id: "lithuania",
    name: "Lithuania",
    flag: "🇱🇹",
    img: lithuaniaImg,
    tag: "Study & Visit",
    why: "Lithuania offers affordable education in Europe with access to Schengen countries.",
    benefits: [
      "Low tuition fees",
      "Easy admission",
      "European degree",
      "Student-friendly environment",
    ],
    tuition: "€2,000 – €5,000/year",
    living: "€400 – €700/month",
  },
  {
    id: "czech-republic",
    name: "Czech Republic",
    flag: "🇨🇿",
    img: czechImg,
    tag: "Study & Visit",
    why: "Czech Republic provides quality education at a reasonable cost in central Europe.",
    benefits: [
      "Affordable living",
      "Good universities",
      "Central European location",
      "Cultural diversity",
    ],
    tuition: "€3,000 – €7,000/year",
    living: "€400 – €800/month",
  },
  {
    id: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    img: swedenImg,
    tag: "Study & Visit",
    why: "Sweden is known for its innovative education system and modern lifestyle.",
    benefits: [
      "High-quality education",
      "Work opportunities",
      "International environment",
      "Strong economy",
    ],
    tuition: "€8,000 – €15,000/year",
    living: "€800 – €1,200/month",
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    img: finlandImg,
    tag: "Study & Visit",
    why: "Finland offers one of the best education systems in the world with a safe environment.",
    benefits: [
      "Top-ranked education",
      "Safe and peaceful country",
      "Work opportunities",
      "Modern lifestyle",
    ],
    tuition: "€6,000 – €12,000/year",
    living: "€700 – €1,000/month",
  },
  {
    id: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    img: denmarkImg,
    tag: "Study & Visit",
    why: "Denmark is a great option for students seeking high-quality education and career opportunities in Europe.",
    benefits: [
      "Work while studying",
      "High living standards",
      "Strong job market",
      "Modern education system",
    ],
    tuition: "€6,000 – €16,000/year",
    living: "€800 – €1,200/month",
  },
  {
    id: "latvia",
    name: "Latvia",
    flag: "🇱🇻",
    img: latviaImg,
    tag: "Study & Visit",
    why: "Latvia is an emerging European study destination offering affordable education with access to the Schengen region. It is ideal for students looking for a peaceful environment and recognized European degrees.",
    benefits: [
      "Low tuition fees",
      "Easy admission process",
      "Schengen travel access",
      "Safe and student-friendly country",
    ],
    tuition: "€2,000 – €6,000/year",
    living: "€400 – €700/month",
  },
  {
    id: "belgium",
    name: "Belgium",
    flag: "🇧🇪",
    img: belgiumImg,
    tag: "Study & Visit",
    why: "Belgium is known for its high-quality education system and central location in Europe, making it a great choice for international students.",
    benefits: [
      "Globally recognized universities",
      "Multilingual study environment",
      "Strong career opportunities",
      "Central European location",
    ],
    tuition: "€3,000 – €9,000/year",
    living: "€700 – €1,200/month",
  },
  {
    id: "spain",
    name: "Spain",
    flag: "🇪🇸",
    img: spainImg,
    tag: "Study & Visit",
    why: "Spain offers a perfect balance of affordable education, vibrant lifestyle, and European exposure, making it popular among international students.",
    benefits: [
      "Low tuition fees",
      "Rich cultural experience",
      "English-taught programs available",
      "Student-friendly lifestyle",
    ],
    tuition: "€2,000 – €6,000/year",
    living: "€600 – €1,000/month",
  },
  {
    id: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    img: hungaryImg,
    tag: "Study & Visit",
    why: "Hungary is a top choice for students seeking affordable European education with scholarship opportunities, especially in medical and technical fields.",
    benefits: [
      "Low tuition fees",
      "Scholarships available (Stipendium Hungaricum)",
      "High-quality education",
      "Growing international student community",
    ],
    tuition: "€3,000 – €8,000/year",
    living: "€400 – €800/month",
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
        <div className="mx-auto max-w-7xl space-y-28 px-6 lg:px-10">
          {destinations.map((d, i) => (
            <article
              id={d.id}
              key={d.name}
              className={`grid gap-10 md:grid-cols-2 md:items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src={d.img}
                  alt={d.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                {/* Flag + tag badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-2xl">{d.flag}</span>
                  <span className="rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy">
                    {d.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--gold)]">
                  Destination {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
                  {d.name}
                </h2>
                <div className="mt-4 gold-divider" />

                {/* Why */}
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{d.why}</p>

                {/* Benefits */}
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {d.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Cost chips */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-sm">
                    <DollarSign className="h-4 w-4 text-[var(--gold)]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Tuition</p>
                      <p className="text-xs font-semibold text-navy">{d.tuition}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-sm">
                    <MapPin className="h-4 w-4 text-[var(--gold)]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Living/month</p>
                      <p className="text-xs font-semibold text-navy">{d.living}</p>
                    </div>
                  </div>
                </div>

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
