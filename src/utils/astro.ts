import { type CollectionEntry, getCollection } from "astro:content";

/****************************
 * Types
 ****************************/
export type BlogEntry = CollectionEntry<"blog">;

export type AboutEntry = CollectionEntry<"about">;

/****************************
 * Getters
 ****************************/
export const getAboutEntry = async () => (await getCollection("about"))[0];

export const getBlogEntryList = async () => await getCollection("blog");
