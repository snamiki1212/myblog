import type { CollectionEntry } from "astro:content";
import * as R from "remeda";

type BlogEntry = CollectionEntry<"blog">;
type TagName = string;
type CategoryName = string;
export type MetaInfo = { title: string, num: number };

export const toTagEntry = (entries: BlogEntry[]): [TagName, BlogEntry[]][] => {
  return R.pipe(entries,
    R.map((entry) => entry.data.tags),
    R.flatten(),
    R.uniq(),
    R.map((tag) => {
      return [
        tag,
        entries.filter((entry) => {
          const thisTags = entry.data.tags;
          return thisTags.includes(tag);
        }),
      ];
    })
  )
};

export const toCategoryEntryList = (entires: BlogEntry[]): Array<([CategoryName, BlogEntry[]])> => {
  return R.pipe(
    entires,
    R.map((entry) => entry.data.category),
    R.uniq(),
    R.map((category) => (
      [category, entires.filter((entry) => {
        const thisCategory = entry.data.category;
        return thisCategory === category;
      })]
    )),
  )
}


export const toTagInfoList = (entries: BlogEntry[]): Array<MetaInfo> => {
  return R.pipe(
    entries,
    R.map(entry => entry.data.tags),
    R.flatten(),
    list => calcDuplicationNumber(list),
    R.sortBy(x => x.title)
  )
}


export const toCategoryInfoList = (entries: BlogEntry[]): Array<MetaInfo> => {
  return R.pipe(
    entries,
    R.map(entry => entry.data.category),
    calcDuplicationNumber,
    R.sortBy(x => x.title)
  );
}

const calcDuplicationNumber = (list: string[]): Array<MetaInfo> => {
  const record: Record<CategoryName, number> = {};
  const pair = list.reduce((prev, current) => {
    prev[current] = prev[current] === undefined ? 1 : prev[current] + 1;
    return { ...prev }
  }, record);
  return Object.entries(pair).map(([title, num]) => ({ title, num }));
}

export const renderMeta = (info: { title: string, num?: number }): string => {
  const num = info.num;
  const numStr = num ? `(${num})` : '';
  return `#${info.title}${numStr}`;
}

export const sortByCreatedAt = R.sortBy<BlogEntry>([x => x.data.createdAt, 'desc']);