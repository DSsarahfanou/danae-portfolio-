import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  GithubIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sarah Danaé FANOU pour un site web, une application, une identité visuelle ou une commande Danae's Creations. Basée à Abomey-Calavi, Bénin.",
  alternates: {
    canonical: "/contact",
  },
};

const contactCards = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: MailIcon,
    hint: "Réponse sous 24 h",
  },
  {
    label: "WhatsApp",
    value: site.phones[0],
    href: `https://wa.me/${site.whatsapp}`,
    icon: WhatsAppIcon,
    hint: "Le plus rapide",
    external: true,
  },
  {
    label: "Téléphone",
    value: site.phones[1],
    href: `tel:${site.phones[1].replace(/\s+/g, "")}`,
    icon: PhoneIcon,
    hint: "Du lundi au samedi",
  },
  {
    label: "GitHub",
    value: "DSsarahfanou",
    href: site.github,
    icon: GithubIcon,
    hint: "Mon code public",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-32 top-16 h-[28rem] w-[28rem] rounded-full bg-gold-400/[0.07] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-400/60" />
            Contact
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Parlons de ce que
            <br />
            <span className="text-gradient-gold">vous voulez créer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
            Un site, une application, une identité visuelle ou une commande
            Danae&apos;s Creations : décrivez-moi votre besoin. Je vous réponds
            avec une proposition claire, un délai réaliste et un budget honnête.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-800/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-white">
                Envoyez-moi un message
              </h2>
              <p className="mt-2 text-sm text-mist">
                Les champs marqués d&apos;un astérisque sont obligatoires.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-ink-800/40 p-5 transition-colors hover:border-gold-400/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">
                        {card.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium text-white transition-colors group-hover:text-gold-300">
                        {card.value}
                      </span>
                      <span className="mt-1 block text-xs text-mist">{card.hint}</span>
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-mist transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300" />
                  </a>
                );
              })}

              <div className="rounded-2xl border border-white/[0.08] bg-ink-800/40 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">
                      Localisation
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {site.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-mist">
                  Disponible sur place à Abomey-Calavi et Cotonou, et à distance
                  partout ailleurs.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    Disponible
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-mist">
                  {site.availability}. Stages, missions freelance et
                  collaborations ponctuelles sont les bienvenus.
                </p>
              </div>

              <Link
                href="/creations"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-ink-800/40 p-5 transition-colors hover:border-gold-400/30"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">
                    Danae&apos;s Creations
                  </p>
                  <p className="mt-1 text-sm font-medium text-white group-hover:text-gold-300">
                    Voir les produits à commander
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
