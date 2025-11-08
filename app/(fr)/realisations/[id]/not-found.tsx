import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-charcoal">Réalisation introuvable.</h1>
      <p className="text-base text-charcoal/70">
        Le projet que vous recherchez n’est plus disponible ou a été déplacé.
      </p>
      <Link
        href="/fr/realisations"
        className="inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-off-white transition hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
      >
        Retour aux réalisations
      </Link>
    </div>
  );
}
