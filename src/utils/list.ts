import * as R from "remeda";
import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

export const sortByCreatedAt = R.sortBy<BlogEntry>(x => x.data.createdAt);