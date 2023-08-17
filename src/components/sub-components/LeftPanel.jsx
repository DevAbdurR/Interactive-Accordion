import React from "react";
import { ReactComponent as Image } from "../../assets/images/illustration-woman-online-desktop.svg";
// import { ReactComponent as FloatingImage } from "../../assets/images/illustration-box-desktop.svg";

function LeftPanel() {
  return (
    <>
      <div className="left-panel-container">
        <Image className="image" />
      </div>
      {/* <FloatingImage className="img" /> */}
    </>
  );
}

export default LeftPanel;
