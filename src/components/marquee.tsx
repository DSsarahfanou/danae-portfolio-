type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const content = (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-sm font-medium uppercase tracking-[0.22em] text-mist-light/80">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400/60" aria-hidden />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`group relative flex overflow-hidden border-y border-white/[0.07] bg-ink-900/60 py-5 ${className ?? ""}`}
    >
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {content}
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {content}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
