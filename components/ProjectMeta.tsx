import {Project} from '@/types/projects';

export type ProjectMetaProps = {
  project: Project;
};

const labelClasses = 'text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60';

export function ProjectMeta({project}: ProjectMetaProps) {
  return (
    <section className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-charcoal">Données chantier</h2>
      <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className={labelClasses}>Ville</dt>
          <dd className="mt-2 text-base font-medium text-charcoal">{project.city}</dd>
        </div>
        <div>
          <dt className={labelClasses}>Année</dt>
          <dd className="mt-2 text-base font-medium text-charcoal">{project.year}</dd>
        </div>
        <div>
          <dt className={labelClasses}>Style</dt>
          <dd className="mt-2 text-base font-medium capitalize text-charcoal">{project.style}</dd>
        </div>
        <div>
          <dt className={labelClasses}>Plan de travail</dt>
          <dd className="mt-2 text-base font-medium text-charcoal">{project.worktop}</dd>
        </div>
        <div>
          <dt className={labelClasses}>Matériaux</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.materials.map((material) => (
              <span
                key={material}
                className="inline-flex rounded-full bg-charcoal/5 px-3 py-1 text-sm font-medium capitalize text-charcoal"
              >
                {material}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className={labelClasses}>Électroménager</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.appliances.map((appliance) => (
              <span
                key={appliance}
                className="inline-flex rounded-full bg-charcoal/5 px-3 py-1 text-sm font-medium text-charcoal"
              >
                {appliance}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
