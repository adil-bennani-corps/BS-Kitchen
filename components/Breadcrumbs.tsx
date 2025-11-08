import Link from 'next/link';

export type BreadcrumbsProps = {
  projectTitle: string;
  projectId: string;
};

export function Breadcrumbs({projectTitle, projectId}: BreadcrumbsProps) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bskitchen.be').replace(/\/$/, '');
  const trail = [
    {name: 'Accueil', href: '/'},
    {name: 'Réalisations', href: '/realisations'},
    {name: projectTitle, href: `/realisations/${projectId}`}
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`
    }))
  };

  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center justify-between">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal/70">
        {trail.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">›</span>}
            {index < trail.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass"
              >
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-charcoal">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
    </nav>
  );
}
