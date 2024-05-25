import React, { useContext } from "react";
import "../App.css";
import { DataEditContext } from "../context";

export default function Header() {
  const { setEdit } = useContext(DataEditContext);

  return (
    <div
      style={{
        height: "10vh",
        width: "100vw",
        backgroundColor: "#d0ecfd88",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ marginLeft: "100px" }}>Flow Builder</div>
      <button
        onClick={() => setEdit(false)}
        style={{ marginRight: "100px" }}
        className="button-33"
      >
        Save changes
      </button>
    </div>
  );
}
