import type { Metadata } from "next";
import { ProjectFilters } from "@/components/project-filters";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les projets web de Sarah Danaé FANOU : Jaspe Library, Jaspe Academy, EWE MEDJI, AZOTCHE et Bénin Food. Applications Laravel, Next.js et sites vitrines.",
  alternates: {
    canonical: "/projets",
  },
};

export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[26rem] w-[26rem] rounded-full bg-gold-400/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-px w-8 bg-gold-400/60" />
            Portfolio
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Des projets construits
            <br />
            <span className="text-gradient-gold">avec du sens</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base">
            Cinq réalisations, du site vitrine de première année à la plateforme
            interne déployée en entreprise. Pour chacune : le contexte, mon rôle,
            les technologies et ce que j&apos;y ai appris.
          </p>
        </Reveal>

        <div className="mt-14">
          <ProjectFilters projects={projects} />
        </div>
      </div>
    </section>
  );
}
