/**
 * @link https://developer.chrome.com/blog/astro-view-transitions/
 * @link https://docs.astro.build/en/guides/view-transitions/
 */
export const buildTransactionName = {
  avatar: () => "avatar",
  logo: () => "logo",
  postCard: (slug: string) => `post-card__${slug}`,
}