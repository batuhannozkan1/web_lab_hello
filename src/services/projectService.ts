import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");
  if (!response.ok) {
    throw new Error(`Projeler yuklenemedi: ${response.status}`);
  }
  const data: Project[] = await response.json();
  return data;
}
