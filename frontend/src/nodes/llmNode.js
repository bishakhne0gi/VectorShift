// llmNode.js

import { Handle, Position } from "reactflow";
import BaseNode from "../components/BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <>
      <BaseNode>
        <BaseNode.Title>LLM</BaseNode.Title>
        <BaseNode.Content>This is a LLM.</BaseNode.Content>
        <BaseNode.Handle
          type="target"
          position={Position.Left}
          id={`${id}-system`}
          style={{ top: `${100 / 3}%` }}
        />
        <BaseNode.Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{ top: `${200 / 3}%` }}
        />
        <BaseNode.Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
        />
      </BaseNode>
    </>
  );
};
