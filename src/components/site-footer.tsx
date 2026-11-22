import Link from "next/link";
import { navigation, site } from "@/lib/data";
import { GithubIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-900">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-gold-400/[0.07] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 font-serif text-lg font-semibold text-gold-300">
                SD
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-white">
                  Sarah Danaé FANOU
                </span>
                <span className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-mist">
                  {site.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
              Développeuse web et designer graphique. Je conçois des expériences
              numériques utiles, soignées et pensées pour les personnes qui les
              utilisent.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Envoyer un email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-light transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <MailIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-light transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-light transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist-light transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-mist-light">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold-300"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/70" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phones[0].replace(/\s+/g, "")}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold-300"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/70" />
                  <span>
                    {site.phones[0]}
                    <br />
                    {site.phones[1]}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/70" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Sarah Danaé FANOU. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Conçu, designé et développé avec Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
