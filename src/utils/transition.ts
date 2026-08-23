/**
 * @link https://developer.chrome.com/blog/astro-view-transitions/
 * @link https://docs.astro.build/en/guides/view-transitions/
 */
export const buildTransactionName = {
  avatar: () => "Avatar",
  logo: () => "Logo",
  postCard: (slug: string) => `PostCard--${slug}`,
  postCardListHeader: (meta: string) =>
    `PostCardListHeader--${encodeURIComponent(meta)}`,
  tagTip: (tag: string) => `TagTip--${encodeURIComponent(tag)}`,
}
