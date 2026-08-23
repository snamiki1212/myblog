import * as R from "remeda";

import { type BlogEntry } from "../utils/astro";

export const sortByCreatedAt = (entries: BlogEntry[]): BlogEntry[] =>
  R.sortBy(entries, (entry) => entry.data.createdAt);
