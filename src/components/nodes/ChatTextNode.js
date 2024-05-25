import { useContext } from "react";
import { Handle, Position } from "reactflow";
import { DataEditContext } from "../../context";

function ChatTextNode({ data, isConnectable, id }) {
  const { setEdit, setNodeId } = useContext(DataEditContext);
  return (
    <div
      className="text-updater-node"
      onClick={() => {
        setEdit(true);
        setNodeId(id);
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ width: "1px", height: "1px" }}
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
        style={{ width: "1px", height: "1px" }}
      />
    </div>
  );
}

export default ChatTextNode;
