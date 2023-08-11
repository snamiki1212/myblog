import { SNS_LIST } from "../constants/sns";

/**
 * Use React component instead of Astro because `sns.renderSvg()` does not work when using .astro file.
 */
export const FooterSmallerSns = () => {
  return SNS_LIST.map((sns) => (
    <a href={sns.url} target="_blank" className="btn">
      <div>{sns.renderSvg()}</div>
    </a>
  ));
};
