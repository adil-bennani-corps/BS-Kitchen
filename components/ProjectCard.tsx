import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  materials: string[];
  image: string;
}

export default function ProjectCard({
  title,
  location,
  description,
  materials,
  image,
}: ProjectCardProps) {
  return (
    <div className="card group overflow-hidden p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Installation de cuisine à ${location}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-anthracite">{title}</h3>
          <span className="text-xs text-muted">{location}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {materials.map((material, index) => (
            <span
              key={index}
              className="badge text-xs"
            >
              {material}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
