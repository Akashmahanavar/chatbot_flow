import React, { useContext } from "react";
import { DataEditContext } from "../context";

export default function EditableTextArea() {
  const { nodeId, nodes, setNodes } = useContext(DataEditContext);
  const nodeedit = nodes.find((data) => data.id === nodeId);

  const handleOnChange = (value) => {
    const newNodeData = { ...nodeedit, data: { label: value } };
    const newNodes = nodes.map((data) => {
      if (data.id === nodeId) {
        return newNodeData;
      } else return data;
    });
    setNodes(newNodes);
  };

  return (
    <textarea
      defaultValue={nodeedit.data.label}
      onChange={(e) => handleOnChange(e.target.value)}
      style={{
        border: "1px solid #bbb",
        width: "200px",
        height: "80px",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    />
  );
}
