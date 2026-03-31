import type { Project, Category, SortField, SortOrder } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = [...projects];

  // Arama filtresi
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
    );
  }

  // Kategori filtresi
  if (category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  // Siralama
  result.sort((a, b) => {
    let comparison = 0;
    if (sortField === "year") {
      comparison = a.year - b.year;
    } else {
      comparison = a.title.localeCompare(b.title, "tr");
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return result;
}
