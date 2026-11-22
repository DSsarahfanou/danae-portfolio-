import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckIcon } from "@/components/icons";
import { projects } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Sarah Danaé FANOU`,
      description: project.summary,
      images: [{ url: project.cover, alt: project.coverAlt }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const meta = [
    { label: "Client", value: project.client },
    { label: "Année", value: project.year },
    { label: "Rôle", value: project.role },
    { label: "Catégorie", value: project.category },
  ];

  return (
    <article className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-gold-400/[0.05] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Link
          href="/projets"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition-colors hover:text-gold-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Tous les projets
        </Link>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">
              {project.category}
            </span>
            <span className="text-xs text-mist">{project.year}</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
            {project.title}
          </h1>
          <p className="mt-3 font-serif text-xl italic text-gold-300/90 sm:text-2xl">
            {project.subtitle}
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-mist-light sm:text-base">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              priority
              sizes="(min-width: 1152px) 1100px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label} className="bg-ink-900 p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mist">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white">
              Le projet
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-mist-light">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
                Technologies
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-mist-light"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/[0.08] bg-ink-800/60 p-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-300">
                Ce qui a été fait
              </h3>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-mist-light">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="mt-7 space-y-3 border-t border-white/[0.08] pt-6">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-gold-400/40 hover:text-gold-300"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              )}

              {project.links.length === 0 && (
                <p className="mt-7 rounded-xl border border-white/[0.08] bg-ink-950/50 px-4 py-3 text-xs leading-relaxed text-mist">
                  Projet interne à l&apos;entreprise : le code et les données ne
                  sont pas publics. Une démonstration peut être présentée sur
                  demande.
                </p>
              )}
            </div>
          </Reveal>
        </div>

        {project.gallery.length > 1 && (
          <div className="mt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-white">
                Aperçu de l&apos;interface
              </h2>
              <p className="mt-2 text-sm text-mist">
                Cliquez sur une image pour l&apos;agrandir.
              </p>
            </Reveal>
            <div className="mt-6">
              <ProjectGallery images={project.gallery} title={project.title} />
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-white/[0.08] pt-10">
          <Link
            href={`/projets/${nextProject.slug}`}
            className="group flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-ink-800/40 p-6 transition-colors hover:border-gold-400/30 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">
                Projet suivant
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-white transition-colors group-hover:text-gold-300">
                {nextProject.title}
              </p>
              <p className="mt-1 text-sm text-mist">{nextProject.subtitle}</p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
