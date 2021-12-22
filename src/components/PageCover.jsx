import React from "react";

const PageCover = React.forwardRef(({ children, type }, ref) => {
  return (
    <div className={`page-container ${type} `} ref={ref} data-density="hard">
      <div className={`page-cover page ${type} col`}>{children}</div>
    </div>
  );
});

export default PageCover;
