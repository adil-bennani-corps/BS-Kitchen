import projects from '@/data/projects.json';
import {Project} from '@/types/projects';

export function getAllProjects(): Project[] {
  return projects as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return (projects as Project[]).find((project) => project.id === id);
}

export function getRelatedProjects(
  currentId: string,
  style?: string,
  city?: string,
  limit = 3
): Project[] {
  const allProjects = projects as Project[];
  const filtered = allProjects.filter((project) => project.id !== currentId);

  const styleMatches = style
    ? filtered.filter((project) => project.style === style)
    : [];
  const cityMatches = city
    ? filtered.filter((project) => project.city === city && project.style !== style)
    : [];

  const combined: Project[] = [...styleMatches, ...cityMatches];

  if (combined.length < limit) {
    for (const project of filtered) {
      if (!combined.includes(project)) {
        combined.push(project);
      }
      if (combined.length >= limit) {
        break;
      }
    }
  }

  return combined.slice(0, limit);
}
