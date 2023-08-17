import React from "react";
import LeftPanel from "./sub-components/LeftPanel";
import RightPanel from "./sub-components/RightPanel";

function Container() {
  return (
    <div className="container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default Container;
