import React from "react";

const Scroll = props => {
  return (
    <div
      style={{ margin:"20px", overflowY: "scroll", birder: "1px solid black", height: "800px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
