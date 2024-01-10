import * as R from "remeda";

import { type BlogEntry } from "../utils/astro.ts";

export const sortByCreatedAt = R.sortBy<BlogEntry>(x => x.data.createdAt);