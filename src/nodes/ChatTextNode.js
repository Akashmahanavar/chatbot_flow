import { Handle, Position } from "reactflow";

function ChatTextNode({ data, isConnectable, id }) {
  return (
    <div className="text-updater-node" onClick={() => console.log(id)}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>
        <label>
          <i className="bi bi-chat-left-text" />
          Send Message
          <i className="bi bi-whatsapp" />
        </label>
        <span>{data.label}</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default ChatTextNode;
