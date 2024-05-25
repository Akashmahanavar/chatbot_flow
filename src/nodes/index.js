import ChatTextNode from "./ChatTextNode";
export const initialNodes = [
  {
    id: "1",
    type: "chat-texnode",
    position: { x: 0, y: 0 },
    data: { label: "Default Node" },
  },
];

export const nodeTypes = {
  "chat-texnode": ChatTextNode,
  // Add any of your custom nodes here!
};
