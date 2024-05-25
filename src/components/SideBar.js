import React, { useContext } from "react";
import MessageBox from "./MessageBox";
import { DataEditContext } from "../context";
import EditableTextArea from "./EditableTextArea";

export default function SideBar() {
  const { edit } = useContext(DataEditContext);
  return (
    <div
      style={{
        height: "90vh",
        width: "20vw",
        borderLeft: "1px solid #ddd",
        backgroundColor: "#d0ecfd66",
      }}
    >
      <div style={{ margin: "10px" }}>
        {!edit ? <MessageBox /> : <EditableTextArea />}
      </div>
    </div>
  );
}
