import React, { useState } from "react";
/* eslint-disable */
function Tabs() {
  const [filterStatus, setFilterStatus] = useState(false);
  const updateFilter = () => {
    console.log("clicked on show tasks");
  };
  const updateActive = () => {
    console.log("clicked on active tasks");
  };
  const updateCompleted = () => {
    console.log("clicked on completed tasks");
  };
  return (
    <>
      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        value={filterStatus}
        onClick={updateFilter}
      >
        {/* aria-pressed turns button into toggle button  */}
        Show all tasks
      </button>
      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        value={filterStatus}
        onClick={updateActive}
      >
        Show Active tasks
      </button>
      <button
        type="button"
        aria-pressed="false"
        className="tabs"
        value={filterStatus}
        onClick={updateCompleted}
      >
        Show Completed tasks
      </button>
    </>
  );
}
export default Tabs;
