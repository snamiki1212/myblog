import React from "react";

/**
 * WORKAROUND
 *
 * I want to use Container.astro but view transition does not work because unknown behavior,
 * so useing this wrapped component by React.
 */
export const Container = ({ children }) => {
  return <div className="max-w-screen-lg m-auto md:px-8">{children}</div>;
};
