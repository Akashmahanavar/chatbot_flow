import React from "react";
import MessageBox from "./MessageBox";

export default function SideBar() {
  return (
    <div
      style={{ height: "90vh", width: "20vw", borderLeft: "1px solid #ddd" }}
    >
      <div style={{ margin: "10px" }}>
        <MessageBox />
      </div>
    </div>
  );
}