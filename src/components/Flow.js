import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
} from "reactflow";
import { initialNodes, nodeTypes } from "../nodes";
import { initialEdges } from "../edges";
import "../nodes/chat-textnode.css";

import "reactflow/dist/style.css";

export default function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const { screenToFlowPosition } = useReactFlow(); // Get project method from useReactFlow

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
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
      style={{ backgroundColor: "#d0ecfd44" }}
    />
  );
}
