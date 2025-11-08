export type HowWeSolvedProps = {
  solutions?: string[];
};

export function HowWeSolved({solutions}: HowWeSolvedProps) {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-charcoal/10 bg-off-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-charcoal">Ce que nous avons résolu</h2>
      <ul className="mt-6 space-y-3 text-base text-charcoal/80">
        {solutions.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
