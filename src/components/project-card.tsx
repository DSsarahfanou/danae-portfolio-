import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "@/components/icons";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-800/60 card-hover",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-700">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs font-medium text-mist">
          <span>{project.year}</span>
          <ArrowUpRight className="h-4 w-4 text-gold-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-white transition-colors group-hover:text-gold-300">
          {project.title}
        </h3>
        <p className="mt-1 font-serif text-[15px] italic text-gold-300/80">
          {project.subtitle}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-mist">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-mist-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
