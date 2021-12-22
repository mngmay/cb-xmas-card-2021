import React from "react";

const Page = React.forwardRef(({ children, pg }, ref) => {
  return (
    <div className={`page-container`} ref={ref}>
      <div className={`page page-${pg} col`}>{children}</div>
    </div>
  );
});

export default Page;
