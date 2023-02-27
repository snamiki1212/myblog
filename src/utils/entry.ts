import * as R from "remeda";
import type { CollectionEntry } from "astro:content";
import { toPostListUrl, toCategoryIndexUrl } from "../utils/url";
import { sortByCreatedAt } from "./meta";
import { LATEST_PAGE_SIZE } from "../constants/site";

type BlogEntry = CollectionEntry<"blog">;

type PickedEntryInfo = {
  title: string;
  total: number;
  entires: BlogEntry[];
  nextUrl: string;
};

export const selectRelatedEntryList = (entry: BlogEntry, candidateEntryList: BlogEntry[]): BlogEntry[] => {
  return R.pipe(
    candidateEntryList,
    list => R.filter(list, candidate => candidate.id !== entry.id),
    list => R.filter(list, candidate => entry.data.category === candidate.data.category),
    list => sortByCreatedAt(list),
    R.take(4),
  )
}

export const toPickedEntryInfoList = (entires: BlogEntry[], opt: { pageSize: number }): PickedEntryInfo[] => {
  const [latestEntries, remainingEntires] = R.splitAt(
    entires,
    opt.pageSize,
  );
  const obj = remainingEntires.reduce((prev, current) => {
    const category = current.data.category;
    if (prev[category]) {
      prev[category].push(current);
    } else {
      prev[category] = [current];
    }
    return prev;
  }, {} as Record<string, BlogEntry[]>);
  const list = Object.entries(obj)
    .map(([category, entries]) => ({
      title: category,
      entries,
      total: entries.length,
      nextUrl: toCategoryIndexUrl(category),
    }))
    .map((item) => ({
      ...item,
      entires: R.take(item.entries, LATEST_PAGE_SIZE),
    }));
  const latest: PickedEntryInfo = {
    title: "新着",
    total: entires.length,
    nextUrl: toPostListUrl(1),
    entires: latestEntries,
  };
  return [latest, ...list];
};