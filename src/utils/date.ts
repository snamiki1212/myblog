import type { CollectionEntry } from "astro:content";
type BlogEntry = CollectionEntry<"blog">;

export const renderDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return d.toISOString().split('T')[0];
}

export const renderOnlyOneDate = (entry: BlogEntry): { type: "createdAt" | "updatedAt", title: string } => {
  const createdAt = entry.data.createdAt
  const updatedAt = entry.data.updatedAt
  if (createdAt === updatedAt) {
    return { type: "createdAt", title: renderDate(createdAt) }
  } else {
    return { type: "updatedAt", title: renderDate(updatedAt) }
  }
}