import { type CollectionEntry, getCollection, getEntry } from "astro:content";

/****************************
 * Types
 ****************************/
export type BlogEntry = CollectionEntry<"blog">;

export type AboutEntry = CollectionEntry<"about">;

/****************************
 * Getters
 ****************************/
export const getAboutEntry = async () => await getEntry("about", "about");

export const getBlogEntryList = async () => await getCollection("blog");
