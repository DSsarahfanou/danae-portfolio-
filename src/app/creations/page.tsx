import type { Metadata } from "next";
import Image from "next/image";
import { CreationGrid } from "@/components/creation-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Danae's Creations",
  description:
    "Danae's Creations : épices, pagnes, beignets, œufs panés et accessoires. Les créations de Sarah Danaé FANOU, disponibles à Abomey-Calavi et Cotonou.",
  alternates: {
    canonical: "/creations",
  },
};

const steps = [
  {
    title: "Choisissez",
    description:
      "Parcourez les créations et repérez ce qui vous fait envie. Les prix sont communiqués sur WhatsApp selon les quantités.",
  },
  {
    title: "Écrivez-moi",
    description:
      "Un message WhatsApp suffit : précisez le produit, la quantité et votre quartier. Je confirme la disponibilité.",
  },
  {
    title: "Recevez",
    description:
      "Retrait sur place ou livraison à Abomey-Calavi et Cotonou. Paiement à la remise, en toute confiance.",
  },
];

export default function CreationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-gold-400/[0.07] blur-[120px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-300">
                <span className="h-px w-8 bg-gold-400/60" />
                La marque
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Danae&apos;s
                <br />
                <span className="text-gradient-gold">Creations</span>
              </h1>
              <p className="mt-6 max-w-xl font-serif text-xl italic text-cream/90">
                Le goût, le style et le service — à la béninoise.
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist">
                Épices parfumées, pagnes soignés, beignets généreux, œufs panés
                croustillants et accessoires utiles : Danae&apos;s Creations
                rassemble ce que j&apos;aime vendre et partager. Chaque commande
                est préparée avec le même soin que je mets dans mes projets web.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Produits sélectionnés et préparés avec soin",
                  "Commande simple et rapide sur WhatsApp",
                  "Livraison à Abomey-Calavi et Cotonou",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-mist-light">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    "Bonjour Danae's Creations ! Je souhaite passer une commande.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_35px_-8px_rgba(242,201,93,0.85)]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Commander sur WhatsApp
                </a>
                <a
                  href={`tel:${site.phones[0].replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  Appeler
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative mx-auto max-w-md">
                <div className="relative overflow-hidden rounded-[2rem] border border-gold-400/20 bg-cream p-10">
                  <Image
                    src="/images/profile/logo-danaes-creations.png"
                    alt="Logo Danae's Creations"
                    width={1024}
                    height={1024}
                    className="mx-auto h-auto w-full max-w-xs object-contain mix-blend-multiply"
                  />
                </div>
                <div className="absolute bottom-4 right-4 rounded-xl border border-gold-400/30 bg-ink-950 px-4 py-2.5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist-light">
                    Atelier
                  </p>
                  <p className="font-display text-base font-semibold text-gold-300">
                    Abomey-Calavi
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-ink-900/40 py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Le catalogue"
              title={
                <>
                  Ce que je prépare,{" "}
                  <span className="text-gradient-gold">ce que je vends</span>
                </>
              }
              description="Les prix et les disponibilités sont communiqués directement sur WhatsApp : chaque commande est préparée à la demande."
            />
          </Reveal>
          <div className="mt-12">
            <CreationGrid />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Comment commander"
              title={
                <>
                  Trois étapes,{" "}
                  <span className="text-gradient-gold">zéro complication</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} className="h-full">
                <div className="h-full rounded-2xl border border-white/[0.08] bg-ink-800/40 p-7">
                  <span className="font-serif text-4xl italic text-gold-400/50">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold-400/20 bg-gradient-to-br from-ink-800 to-ink-950 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  Une commande spéciale ? Un événement ?
                </h3>
                <p className="mt-2 max-w-xl text-sm text-mist">
                  Beignets pour une réunion, pagnes pour une cérémonie, épices en
                  grande quantité : parlons-en, je m&apos;adapte.
                </p>
              </div>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-300"
              >
                Discuter sur WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
