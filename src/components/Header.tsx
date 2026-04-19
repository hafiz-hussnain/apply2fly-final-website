import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
        <Link to="/" className="flex items-center gap-0 group">
          <div className="flex h-18 w-18 items-center justify-center rounded-full transition-transform group-hover:rotate-12">
            <img src="/src/assets/logo.png" className="mt-5" alt="" />
          </div>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            <div className="font-medium text-xl font-semibold tracking-wide">{SITE.short}</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-75">Visa Consultants</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-md font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-navy" : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: scrolled
                  ? "text-sm font-semibold text-navy border-b-2 border-[var(--gold)] pb-1"
                  : "text-sm font-semibold text-white border-b-2 border-[var(--gold)] pb-1",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp Us
        </a>

        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Free WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
