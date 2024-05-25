import React, { createContext, useState } from "react";
import { initialNodes } from "./components/nodes";
import { initialEdges } from "./components/edges";

export const DataEditContext = createContext();

const ContextProvider = ({ children }) => {
  const [edit, setEdit] = useState(false);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeId, setNodeId] = useState(null);

  return (
    <DataEditContext.Provider
      value={{
        edges,
        edit,
        nodeId,
        nodes,
        setEdges,
        setEdit,
        setNodeId,
        setNodes,
      }}
    >
      {children}
    </DataEditContext.Provider>
  );
};

export default ContextProvider;
