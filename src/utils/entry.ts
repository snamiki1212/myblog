import * as R from "remeda";
import { toPostListUrl, toCategoryIndexUrl } from "../utils/url";
import { sortByCreatedAt } from "./meta";
import { LATEST_PAGE_SIZE, SHOW_CARD_SIZE } from "../constants/site";

import { type BlogEntry } from "../utils/astro";

export type PickedEntryInfo = {
  title: string;
  meta: string;
  total: number;
  entires: BlogEntry[];
  nextUrl: string;
};

export const selectRelatedEntryList = ({
  target,
  candidateEntryList,
  ignoreEntrySlugList,
}: {
  target: BlogEntry,
  candidateEntryList: BlogEntry[]
  ignoreEntrySlugList: string[]
}): BlogEntry[] => {
  return R.pipe(
    candidateEntryList,
    list => R.filter(list, candidate => candidate.id !== target.id),
    list => R.filter(list, candidate => candidate.data.category === target.data.category),
    list => R.filter(list, candidate => !ignoreEntrySlugList.includes(candidate.slug)),
    list => sortByCreatedAt(list),
    R.take(SHOW_CARD_SIZE),
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
      meta: category,
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
    meta: "NEW",
    total: entires.length,
    nextUrl: toPostListUrl(1),
    entires: latestEntries,
  };
  return [latest, ...list];
};