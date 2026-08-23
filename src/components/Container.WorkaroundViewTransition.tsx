import type { ReactNode } from "react";

/**
 * WORKAROUND
 *
 * I want to use Container.astro but view transition does not work because unknown behavior,
 * so useing this wrapped component by React.
 */
type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="max-w-(--breakpoint-lg) m-auto md:px-8">{children}</div>
  );
};
