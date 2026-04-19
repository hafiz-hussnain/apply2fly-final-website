import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy pb-20 pt-40 text-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--gold)] opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        {eyebrow && (
          <p className="mb-4 text-xl font-bold uppercase tracking-wider text-[var(--gold)]">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance font-sans text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/75 md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-8 h-[2px] w-20 rounded bg-gradient-gold" />
      </div>
    </section>
  );
}
