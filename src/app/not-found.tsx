import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/[0.08] blur-[110px]" />

      <div className="relative mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <p className="font-display text-[6rem] font-semibold leading-none text-gradient-gold sm:text-[8rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
          Cette page n&apos;existe pas (encore).
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
          Le lien est peut-être ancien, ou la page a été déplacée. Retournons
          vers ce qui existe vraiment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
          >
            Voir les projets
          </Link>
        </div>
      </div>
    </section>
  );
}
