/**
 * @link https://developer.chrome.com/blog/astro-view-transitions/
 * @link https://docs.astro.build/en/guides/view-transitions/
 */
export const buildTransactionName = {
  avatar: () => "Avatar",
  logo: () => "Logo",
  postCard: (slug: string) => `PostCard--${slug}`,
  postCardListHeader: (meta: string) => `PostCardListHeader--${escape(meta)}`, // meta might be japanese so neet to escape for view-transition
  tagTip: (tag: string) => `TagTip--${escape(tag)}`,
}