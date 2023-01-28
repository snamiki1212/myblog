import { SNS_LIST } from "../constants/sns";

export const FooterSmallerSns = () => {
  return SNS_LIST.map((sns) => (
    <a href={sns.url} target="_blank">
      <div>{sns.renderSvg()}</div>
    </a>
  ));
};
