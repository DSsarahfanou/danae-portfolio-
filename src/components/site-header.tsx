"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation, site } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Adjust state when the route changes (no effect needed).
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-white/[0.07] bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 border-b-2 border-b-amber-50">
        <Link href="/" className="group flex items-center gap-3" aria-label="Retour à l'accueil">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 font-serif text-lg font-semibold text-gold-300 transition-colors group-hover:bg-gold-400/20">
            SD
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight text-white">
              S. Sarah Danaé
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-mist">
              Fanou
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-gold-300"
                  : "text-mist-light hover:text-white",
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_30px_-8px_rgba(242,201,93,0.8)] sm:inline-flex"
          >
            Me contacter
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-gold-400/40 hover:text-gold-300 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>


      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-5" aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors",
                isActive(item.href)
                  ? "bg-gold-400/10 text-gold-300"
                  : "text-mist-light hover:bg-white/[0.04] hover:text-white",
              )}
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] tracking-widest text-mist">
                0{index + 1}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-gold-400 px-4 py-3 text-sm font-semibold text-ink-950"
          >
            Démarrer un projet
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 text-center text-xs text-mist"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
