export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: Category;
  year: number;
  featured: boolean;
}

export type Category = "frontend" | "backend" | "fullstack";

export type SortField = "year" | "title";

export type SortOrder = "asc" | "desc";
