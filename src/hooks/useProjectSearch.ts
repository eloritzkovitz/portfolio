import { useMemo } from "react";
import projects from "../data/projectsData";

/**
 * Filter projects by name or tech
 * @param search - The search string
 * @returns Filtered list of projects
 */
export function useProjectSearch(search: string) {
  return useMemo(() => {
    if (!search.trim()) return projects;
    const lower = search.toLowerCase();
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.tech?.some((t: string) => t.toLowerCase().includes(lower))
    );
  }, [search]);
}
