import React from "react";

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
      }}
      draggable
    >
      <i className="bi bi-chat-left-text" />
      <div>Message</div>
    </div>
  );
}
