import { SNS_LIST } from "../constants/sns";

/**
 * Use React component instead of Astro because `sns.renderSvg()` does not work when using .astro file.
 */
export const SnsList = () => {
  return SNS_LIST.map((sns) => (
    <a
      key={sns.name}
      href={sns.url}
      target="_blank"
      rel="noreferrer"
      className="btn glass"
    >
      <div>{sns.renderSvg()}</div>
    </a>
  ));
};
