import type { CollectionEntry } from "astro:content";
import { sortByCreatedAt } from "./meta";
import * as R from "remeda";
type BlogEntry = CollectionEntry<"blog">;

export const selectRelatedEntryList = (entry: BlogEntry, candidateEntryList: BlogEntry[]): BlogEntry[] => {
  return R.pipe(
    candidateEntryList,
    list => R.filter(list, candidate => candidate.id !== entry.id),
    list => R.filter(list, candidate => entry.data.category === candidate.data.category),
    list => sortByCreatedAt(list),
    R.take(4),
  )
}