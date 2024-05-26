import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { DataEditContext } from "../context";
import { areAllNodesConnected } from "../utils";

export default function Header() {
  const { setEdit, nodes, edges } = useContext(DataEditContext);

  const handleSave = () => {
    setEdit(false);
    const allConnected = areAllNodesConnected(nodes, edges);
    if (allConnected) {
      toast.success("Flow saved successfully!", {
        position: "top-center", // Use string directly
        autoClose: 3000, // 3 seconds
      });
    } else {
      toast.error("Can't save flow!", {
        position: "top-center", // Use string directly
        autoClose: 3000, // 3 seconds
      });
    }
  };

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
      <ToastContainer /> {/* Ensure ToastContainer is rendered */}
      <button
        onClick={handleSave}
        style={{ marginRight: "100px" }}
        className="button-33"
      >
        Save changes
      </button>
    </div>
  );
}
