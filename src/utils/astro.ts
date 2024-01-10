import { type CollectionEntry, getEntryBySlug } from "astro:content";

/****************************
 * Types
 ****************************/
export type BlogEntry = CollectionEntry<"blog">;

export type AboutEntry = CollectionEntry<"about">;

/****************************
 * Getters
 ****************************/
export const getAboutEntry = async () => await getEntryBySlug("about", "about");

