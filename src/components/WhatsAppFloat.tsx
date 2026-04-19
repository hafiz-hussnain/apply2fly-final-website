import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      /* Added 'lg:hidden' to hide it on desktops. 
         Adjust 'lg' to 'md' if your hamburger menu appears earlier. 
      */
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-5 py-4 text-white shadow-luxury transition-all hover:scale-105 hover:shadow-gold lg:hidden"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Free Consultation</span>
    </a>
  );
}