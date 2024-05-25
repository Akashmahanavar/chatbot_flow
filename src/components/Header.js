import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div
      style={{
        height: "10vh",
        width: "100vw",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "100px" }}>Flow Builder</div>
      <button
        onClick={() => console.log("hello")}
        style={{ marginRight: "100px" }}
        className="button-33"
      >
        Save changes
      </button>
    </div>
  );
}
