import { useCallback, useContext } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow";
import "./nodes/chat-textnode.css";

import "reactflow/dist/style.css";
import { DataEditContext } from "../context";
import { nodeTypes } from "./nodes";

export default function Flow() {
  const { nodes, setNodes, edges, setEdges } = useContext(DataEditContext);

  const { screenToFlowPosition } = useReactFlow(); // Get project method from useReactFlow

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary to allow a drop
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = event.target.getBoundingClientRect();
    const position = screenToFlowPosition({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const newNode = {
      id: `${+new Date()}`, // Use timestamp for unique ID
      type: "chat-texnode",
      position: position,
      data: { label: "default text" },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ backgroundColor: "#d0ecfd55" }}
    />
  );
}
