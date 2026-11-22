"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { ArrowRight, CheckIcon, WhatsAppIcon } from "@/components/icons";

const subjects = [
  "Création de site web",
  "Application métier",
  "Boutique en ligne",
  "Identité visuelle / design",
  "Commande Danae's Creations",
  "Autre demande",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Nouveau message");
    const message = String(data.get("message") ?? "");

    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-mist/60 transition-colors focus:border-gold-400/60 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.com"
            className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-mist/60 transition-colors focus:border-gold-400/60 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue={subjects[0]}
          className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white transition-colors focus:border-gold-400/60 focus:outline-none"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject} className="bg-ink-900">
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Parlez-moi de votre projet, de vos objectifs et de votre budget indicatif…"
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm leading-relaxed text-white placeholder:text-mist/60 transition-colors focus:border-gold-400/60 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_35px_-8px_rgba(242,201,93,0.85)]"
        >
          Envoyer le message
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
            "Bonjour Sarah Danaé ! J'ai vu votre portfolio et je souhaite discuter d'un projet.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>

      <p className="text-xs leading-relaxed text-mist">
        Le formulaire ouvre votre application de messagerie avec le message
        pré-rempli. Vous pouvez aussi m&apos;écrire directement à{" "}
        <a href={`mailto:${site.email}`} className="text-gold-300 hover:underline">
          {site.email}
        </a>
        .
      </p>

      {sent && (
        <p className="flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-3 text-sm text-emerald-300">
          <CheckIcon className="h-4 w-4 shrink-0" />
          Votre messagerie devrait s&apos;ouvrir. Merci pour votre message !
        </p>
      )}
    </form>
  );
}
