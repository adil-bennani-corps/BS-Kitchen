import {Metadata} from 'next';
import {notFound} from 'next/navigation';

import {BeforeAfter} from '@/components/BeforeAfter';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {HowWeSolved} from '@/components/HowWeSolved';
import {ImageGallery} from '@/components/ImageGallery';
import {ProjectHero} from '@/components/ProjectHero';
import {ProjectMeta} from '@/components/ProjectMeta';
import {RelatedProjects} from '@/components/RelatedProjects';
import {Testimonial} from '@/components/Testimonial';
import {getAllProjects, getProjectById, getRelatedProjects} from '@/lib/projects';


type PageParams = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({id: project.id}));
}

export function generateMetadata({params}: PageParams): Metadata {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Réalisation introuvable | B&S Kitchen',
      description: "Le projet recherché n'existe pas ou plus."
    };
  }

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bskitchen.be').replace(/\/$/, '');
  const description = project.result
    ? project.result
    : project.client_context
    ? project.client_context
    : `Installation et rénovation de cuisine ${project.style} à ${project.city}.`;

  return {
    title: `${project.title} — Réalisation | B&S Kitchen`,
    description,
    openGraph: {
      title: `${project.title} — Réalisation | B&S Kitchen`,
      description,
      url: `${baseUrl}/realisations/${project.id}`,
      type: 'article',
      images: project.images.length
        ? project.images.map((src) => ({url: `${baseUrl}${src}`, alt: `${project.title} à ${project.city}`}))
        : undefined
    }
  };
}

export default function ProjectDetailPage({params}: PageParams) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bskitchen.be').replace(/\/$/, '');
  const projectUrl = `${baseUrl}/realisations/${project.id}`;
  const relatedProjects = getRelatedProjects(project.id, project.style, project.city, 3);

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description:
      project.result ?? project.client_context ?? `Projet de cuisine ${project.style} à ${project.city} par B&S Kitchen`,
    image: project.images,
    url: projectUrl,
    location: {
      '@type': 'Place',
      name: project.city
    },
    material: project.materials,
    brand: project.appliances.map((appliance) => ({'@type': 'Brand', name: appliance})),
    datePublished: `${project.year}-01-01`,
    keywords: project.tags.join(', ')
  };

  return (
    <div className="space-y-12 py-16">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <Breadcrumbs projectTitle={project.title} projectId={project.id} />
        <ProjectHero project={project} />

        {project.client_context && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Contexte client</h2>
            <p className="text-base leading-relaxed text-charcoal/80">{project.client_context}</p>
          </section>
        )}

        {project.constraints && project.constraints.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Contraintes</h2>
            <ul className="space-y-3 text-base text-charcoal/80">
              {project.constraints.map((constraint) => (
                <li key={constraint} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <ProjectMeta project={project} />

        <HowWeSolved solutions={project.solutions} />

        {project.result && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-charcoal">Résultat</h2>
            <p className="text-base leading-relaxed text-charcoal/80">{project.result}</p>
          </section>
        )}

        <BeforeAfter beforeAfter={project.before_after} project={project} />

        <ImageGallery images={project.images} title={project.title} city={project.city} />

        <Testimonial testimonial={project.testimonial} />

        <RelatedProjects projects={relatedProjects} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd)}} />
    </div>
  );
}
