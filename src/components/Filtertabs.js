import React, { useState } from "react";
/* eslint-disable */
function Tabs({ onAllListClick, onCompletedListClick, onActiveListClick }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-pressed="false"
        className="all-tabs"
        onClick={onAllListClick}
      >
        {/* aria-pressed turns button into toggle button  */}
        Show all tasks
      </button>
      <button
        type="button"
        aria-pressed="false"
        className="active-tabs"
        onClick={onActiveListClick}
      >
        Show Active tasks
      </button>
      <button
        type="button"
        aria-pressed="false"
        className="completed-tabs"
        onClick={onCompletedListClick}
      >
        Show Completed tasks
      </button>
    </>
  );
}
export default Tabs;
