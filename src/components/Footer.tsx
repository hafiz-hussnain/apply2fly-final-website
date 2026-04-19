import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-sans text-xl  text-[var(--gold)] font-bold">{SITE.short}</div>
                <div className="text-[14px] uppercase tracking-wide text-white/60">Visa Consultants</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              Step-by-step visa guidance until approval. Personal support for study and visit
              visas to 15+ Countries.
            </p>
            
          </div>

          <div>
            <h4 className="font-sans text-lg uppercase tracking-wide font-bold text-[var(--gold)]">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><Link to="/about" className="hover:text-[var(--gold)]">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[var(--gold)]">Services</Link></li>
              <li><Link to="/destinations" className="hover:text-[var(--gold)]">Destinations</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-lg uppercase tracking-wide font-bold text-[var(--gold)]">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--whatsapp)]" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-md text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved. <br/>- Developed by SeniByte Solutions </p>
        </div>
      </div>
    </footer>
  );
}
