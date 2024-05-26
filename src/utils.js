export const areAllNodesConnected = (nodes, edges) => {
  if (nodes.length === 0) return true; // If there are no nodes, consider them connected

  const nodeIds = new Set(nodes.map((node) => node.id));
  const visited = new Set();
  const stack = [nodes[0].id]; // Start traversal from the first node

  while (stack.length > 0) {
    const currentNodeId = stack.pop();
    if (!visited.has(currentNodeId)) {
      visited.add(currentNodeId);
      // Find all nodes connected to the current node
      const connectedNodes = edges
        .filter(
          (edge) =>
            edge.source === currentNodeId || edge.target === currentNodeId
        )
        .map((edge) =>
          edge.source === currentNodeId ? edge.target : edge.source
        );
      stack.push(...connectedNodes);
    }
  }

  // Check if we visited all nodes
  return visited.size === nodeIds.size;
};
