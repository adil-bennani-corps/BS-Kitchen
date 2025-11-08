import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  slug,
  features,
}: ServiceCardProps) {
  return (
    <div className="card group hover:shadow-soft-lg transition-all duration-300">
      <h3 className="text-xl font-semibold text-anthracite mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-muted">
              <svg
                className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/services#${slug}`}
        className="inline-flex items-center text-sm font-semibold text-anthracite hover:text-accent transition-colors"
      >
        En savoir plus
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
