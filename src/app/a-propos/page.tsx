import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadIcon,
  SparkIcon,
  iconMap,
} from "@/components/icons";
import {
  education,
  languages,
  site,
  skillGroups,
  stats,
  timeline,
  values,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, compétences et vision de Sarah Danaé FANOU : développeuse web, designer graphique et administratrice réseaux basée à Abomey-Calavi, Bénin.",
  alternates: {
    canonical: "/a-propos",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-gold-400/[0.06] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
              <span className="h-px w-8 bg-gold-400/60" />
              À propos
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Derrière le code,
              <br />
              <span className="text-gradient-gold">une créatrice.</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800">
                  <Image
                    src="/images/profile/danae-portrait-2.jpg"
                    alt="Sarah Danaé FANOU"
                    fill
                    priority
                    sizes="(min-width: 1024px) 35vw, 90vw"
                    className="object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-lg font-semibold text-white">
                      {site.name}
                    </p>
                    <p className="mt-1 text-xs text-mist">{site.role}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/[0.08] bg-ink-800/50 p-5">
                  <dl className="space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-mist">Localisation</dt>
                      <dd className="text-right text-white">{site.location}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-mist">Email</dt>
                      <dd className="text-right">
                        <a
                          href={`mailto:${site.email}`}
                          className="break-all text-white transition-colors hover:text-gold-300"
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-mist">GitHub</dt>
                      <dd className="text-right">
                        <a
                          href={site.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-white transition-colors hover:text-gold-300"
                        >
                          DSsarahfanou
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <a
                    href="/cv-sarah-danae-fanou.pdf"
                    download
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gold-400/30 bg-gold-400/10 px-4 py-3 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-400/20"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-[15px] leading-relaxed text-mist-light">
                <p>
                  Je m&apos;appelle <span className="text-white">Sarah Danaé FANOU</span>.
                  Je suis née à Abomey-Calavi, au Bénin, et j&apos;ai grandi avec
                  une conviction simple : les choses utiles peuvent aussi être
                  belles.
                </p>
                <p>
                  J&apos;ai commencé par l&apos;informatique de gestion et
                  l&apos;administration des réseaux, avant de me spécialiser dans
                  le développement web. Très vite, le design est devenu une
                  évidence : un site ne se juge pas seulement à son code, mais à
                  la façon dont il accueille la personne qui l&apos;utilise.
                </p>
                <p>
                  Aujourd&apos;hui, je développe des applications avec{" "}
                  <span className="text-white">Laravel</span> et{" "}
                  <span className="text-white">Next.js</span>, je conçois des
                  identités visuelles avec Figma et Canva, et je gère des
                  infrastructures réseau. En parallèle, je fais vivre{" "}
                  <span className="text-white">Danae&apos;s Creations</span> : une
                  activité de vente d&apos;épices, de tissus et de douceurs.
                </p>
                <p>
                  Ce mélange n&apos;est pas un hasard. Vendre m&apos;a appris à
                  écouter ; le design, à clarifier ; le réseau, à être rigoureuse.
                  Le développement, lui, me permet de relier tout cela dans un
                  même produit.
                </p>

                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-2xl border border-white/[0.08] bg-ink-800/40 p-5"
                    >
                      <SparkIcon className="h-5 w-5 text-gold-300" />
                      <h3 className="mt-3 font-display text-base font-semibold text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300"
                  >
                    Travailler avec moi
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-900 p-6 text-center">
                  <dt className="font-display text-3xl font-semibold text-white">
                    {stat.value}
                    <span className="text-gold-400">.</span>
                  </dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-[0.16em] text-mist">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-white/[0.06] bg-ink-900/40 py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Expérience"
              title={
                <>
                  Le terrain,{" "}
                  <span className="text-gradient-gold">toujours</span>
                </>
              }
              description="Quatre stages, deux entreprises, des missions concrètes : c'est là que j'ai vraiment appris."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <ol className="relative space-y-10 border-l border-white/[0.1] pl-7">
                {timeline.map((item) => (
                  <li key={item.period} className="relative">
                    <span className="absolute -left-[2.1rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-gold-400" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                      {item.period}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-mist-light">{item.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {item.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-mist-light"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/[0.08] bg-ink-800/50 p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
                  Formation
                </h3>
                <ul className="mt-6 space-y-6">
                  {education.map((item) => (
                    <li key={item.title}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
                        {item.period}
                      </p>
                      <h4 className="mt-2 font-display text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-mist-light">{item.subtitle}</p>
                      <p className="mt-1 text-xs text-mist">{item.school}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
                    Langues
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {languages.map((language) => (
                      <li key={language.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white">{language.name}</span>
                          <span className="text-xs text-mist">{language.level}</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                            style={{ width: `${language.value}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Compétences"
              title={
                <>
                  Une boîte à outils{" "}
                  <span className="text-gradient-gold">complète</span>
                </>
              }
              description="Je ne prétends pas tout maîtriser. Je sais ce que je peux livrer seule, ce que j'apprends vite, et quand je dois demander de l'aide."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = iconMap[group.icon as keyof typeof iconMap];
              return (
                <Reveal key={group.title} delay={index * 80}>
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-ink-800/40 p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-mist-light"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold-400/20 bg-gold-400/[0.05] p-7 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  Envie de voir tout ça en action ?
                </h3>
                <p className="mt-2 text-sm text-mist">
                  Mes projets parlent mieux que ma liste de compétences.
                </p>
              </div>
              <Link
                href="/projets"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-300"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
