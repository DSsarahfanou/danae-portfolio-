import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/marquee";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  MapPinIcon,
  SparkIcon,
  iconMap,
} from "@/components/icons";
import { projects, services, site, stats, values } from "@/lib/data";

const marqueeItems = [
  "Laravel",
  "Next.js",
  "React",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "Figma",
  "Canva",
  "UI / UX",
  "FTTH",
  "Danae's Creations",
];

const creationPreviews = [
  { src: "/images/creations/beignets-chocolat.jpg", alt: "Beignets fourrés au chocolat" },
  { src: "/images/creations/poisson-sec.jpg", alt: "Poisson fumé et séché" },
  { src: "/images/creations/tissu-pagne.png", alt: "Pagne et tissu aux motifs soignés" },
  { src: "/images/creations/accessoires-tech.png", alt: "Accessoires tech et batteries externes" },
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
        <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-white/[0.07] blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#2c4a8a]/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
    

            <h1 className="mt-7 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.35rem]">
              Sèdjrogandé Sarah Danaé
              <span className="mt-1 block text-gradient-gold">FANOU</span>
            </h1>

            <p className="mt-6 font-serif text-xl italic text-cream/90 sm:text-2xl">
              Administratrice Réseaux Informatique <span className="text-gold-400">&</span> Developpeuse Web
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist sm:text-base">
              Je suis titulaire d`&apos`; une Licence professionnelle en Administration Réseaux Informatique obtenue à l'Ecole Nationele d'Economie Appliquée et de Management (ENEAM).
              Je suis particulière passionnée par le developpement web et design graphique.
              Je conçois des applications web et des identités visuelles qui
              allient <span className="text-white">technique solide</span>,{" "}
              <span className="text-white">design soigné</span> et{" "}
              <span className="text-white">vraie compréhension du terrain</span>.
              Basée à Abomey-Calavi, je travaille avec des entreprises, des
              cabinets et des créateurs.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/projets"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_35px_-8px_rgba(242,201,93,0.85)]"
              >
                Découvrir mes projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
              >
                Discutons de votre projet
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-mist">
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4 text-gold-400/80" />
                {site.location}
              </span>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-300"
              >
                github.com/DSsarahfanou
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 border-t border-white/[0.08] pt-8 sm:grid-cols-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="sm:border-l sm:border-white/[0.08] sm:pl-5 sm:first:border-0 sm:first:pl-0">
                  <dt className="font-display text-2xl font-semibold text-white">
                    {stat.value}
                    <span className="text-gold-400">.</span>
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.14em] text-mist">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-gold-400/15 sm:-inset-5" />
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-gold-400/10 via-transparent to-[#3a5ea8]/10 blur-xl sm:-inset-5" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src="/images/profile/danae-portrait-2.jpg"
                alt="Portrait de Sarah Danaé FANOU"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="font-serif text-lg italic text-gold-200 sm:text-xl text-center">
                  Créer · Développer · Inspirer
                </p>
              </div>
            </div>

            <div className="absolute -left-3 top-10 hidden animate-float rounded-2xl glass px-4 py-3 sm:block lg:-left-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-mist">
                Stack favorite
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                Laravel · Next.js
              </p>
            </div>

            <div className="absolute -right-3 bottom-24 hidden animate-float-slow rounded-2xl glass px-4 py-3 sm:block lg:-right-7">
              <div className="flex items-center gap-2.5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-mist">
                    Design
                  </p>
                  <p className="font-display text-sm font-semibold text-white">
                    Figma · Canva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* SERVICES */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              
              eyebrow="Ce que je fais"
              title={
                <>
                  Quatre métiers,{" "}
                  <span className="text-gradient-gold">une même exigence</span>
                </>
              }
              description="Du code au design, du réseau à la vente : cette polyvalence me permet de comprendre un projet dans son ensemble, pas seulement sa partie visible."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Reveal key={service.title} delay={index * 80}>
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800/50 p-7 card-hover">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/[0.06] blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-mist-light"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative border-y border-white/[0.06] bg-ink-900/40 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Projets sélectionnés"
                title={
                  <>
                    Des idées devenues{" "}
                    <span className="text-gradient-gold">produits réels</span>
                  </>
                }
                description="Cinq projets, cinq contextes différents : entreprise, e-commerce, éducation, artisanat et culture. Chacun m'a appris quelque chose que j'utilise aujourd'hui."
              />
            </Reveal>
            <Link
              href="/projets"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
            >
              Tous les projets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90} className="h-full">
                <ProjectCard project={project} priority={index === 0} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIONS */}
      <section className="relative overflow-hidden bg-cream py-20 text-ink-950 sm:py-28">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#c96a3a]/15 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Image
              src="/images/profile/logo-danaes-creations.png"
              alt="Logo Danae's Creations"
              width={1024}
              height={1024}
              className="h-24 w-auto object-contain mix-blend-multiply sm:h-28"
            />
            <p className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-950/60">
              <span className="h-px w-8 bg-ink-950/30" />
              La marque
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Danae&apos;s Creations
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-950/70">
              Épices, pagnes, beignets, œufs panés, accessoires… Je vends ce que
              j&apos;aime : des produits qui rassemblent. Cette activité
              m&apos;apprend chaque jour à écouter, à présenter et à fidéliser —
              trois compétences que je remets directement au service de mes
              clients web.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Des produits sélectionnés avec soin",
                "Commande simple via WhatsApp",
                "Livraison à Abomey-Calavi et Cotonou",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-950 text-gold-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/creations"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-ink-800 hover:shadow-xl"
            >
              Découvrir la boutique
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {creationPreviews.map((item, index) => (
                <div
                  key={item.src}
                  className={`relative overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-950/5 shadow-lg ${
                    index % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                  } ${index === 1 ? "translate-y-6" : ""} ${index === 2 ? "-translate-y-2" : ""}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Parcours"
              title={
                <>
                  Trois ans à apprendre{" "}
                  <span className="text-gradient-gold">sur le terrain</span>
                </>
              }
              description="Licence en informatique de gestion, spécialité administration des réseaux. Quatre stages, deux entreprises, et beaucoup de nuits à coder."
            />
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-ink-800/50 p-6">
              <p className="font-serif text-lg italic text-cream/90">
                « J&apos;ai commencé par le réseau, puis le code, puis le design.
                Aujourd&apos;hui, je relie les trois. »
              </p>
              <Link
                href="/a-propos"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
              >
                En savoir plus sur moi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="relative space-y-8 border-l border-white/[0.1] pl-7">
              {[
                {
                  period: "2025 — 2026",
                  title: "Développeuse web & designer",
                  place: "Jaspe Technologies · EWE MEDJI · Jaspe Library",
                  text: "Plateformes e-commerce et e-learning, identité visuelle, déploiement fibre FTTH.",
                },
                {
                  period: "2024",
                  title: "Développement en équipe",
                  place: "KADOSH GROUP SARL · AZOTCHE",
                  text: "Marketplace artisanale avec Laravel, intégration de maquettes Figma et déploiement Vercel.",
                },
                {
                  period: "2023",
                  title: "Premiers pas",
                  place: "KADOSH GROUP SARL · Bénin Food",
                  text: "HTML, CSS, PHP : les fondamentaux, et le premier site mis en ligne.",
                },
              ].map((item) => (
                <li key={item.period} className="relative">
                  <span className="absolute -left-[2.1rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-gold-400" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-mist-light">{item.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/[0.06] bg-ink-900/40 py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Ma façon de travailler"
              title={
                <>
                  Le code est un moyen,{" "}
                  <span className="text-gradient-gold">pas une fin</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90} className="h-full">
                <article className="h-full rounded-2xl border border-white/[0.08] bg-ink-800/40 p-7">
                  <span className="font-serif text-4xl italic text-gold-400/50">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-16 text-center sm:px-16 sm:py-20">
              <div className="pointer-events-none absolute inset-0 bg-radial-gold" />
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                  Travaillons ensemble
                </p>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Un projet, une idée,
                  <br className="hidden sm:block" />{" "}
                  <span className="text-gradient-gold">une envie de créer ?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                  Site vitrine, application métier, boutique en ligne ou identité
                  visuelle : parlons de ce que vous voulez construire. Je réponds
                  sous 24 h.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_35px_-8px_rgba(242,201,93,0.85)]"
                  >
                    Démarrer la conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
                  >
                    Écrire sur WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
