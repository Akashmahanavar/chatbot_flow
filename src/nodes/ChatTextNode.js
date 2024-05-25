import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function ChatTextNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>
        <label>
          <i className="bi bi-chat-left-text" />
          Send Message
          <i class="bi bi-whatsapp" />
        </label>
        <span>{"Default Node"}</span>
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
