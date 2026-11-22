"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["Tous", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrer les projets par catégorie"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
              active === category
                ? "border-gold-400 bg-gold-400 text-ink-950"
                : "border-white/10 bg-white/[0.03] text-mist-light hover:border-gold-400/40 hover:text-gold-300",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-mist">
        {filtered.length} projet{filtered.length > 1 ? "s" : ""}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 2}
            className="h-full"
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-2xl border border-white/10 bg-ink-800/40 p-8 text-center text-sm text-mist">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}
