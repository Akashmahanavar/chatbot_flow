import React from "react";
import "../App.css";

export default function MessageBox() {
  return (
    <div
      style={{
        border: "1px solid #bbb",
        width: "200px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center ",
        cursor: "grab",
        borderRadius: "15px",
      }}
      className="dragDiv"
      draggable
    >
      <i className="bi bi-chat-left-text" />
      <div>Message</div>
    </div>
  );
}
