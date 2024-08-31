import React, { useState, useEffect, useCallback } from "react";
import { Position, Handle } from "reactflow";
import BaseNode from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  const extractVariables = useCallback((text) => {
    const regex = /\{\{(\w+)\}\}/g;
    return [...new Set(Array.from(text.matchAll(regex), (m) => m[1]))];
  }, []);

  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText, extractVariables]);

  return (
    <BaseNode>
      <BaseNode.Title>Text</BaseNode.Title>
      <BaseNode.InputField
        label="Text"
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
      />
      {variables.map((variable) => (
        <div key={variable} className="relative mb-6">
          <span className="text-sm text-light_purple ml-2 bg-highlight_purple border-[1px] border-dark_purple px-4 py-1 rounded-2xl">
            {variable}
          </span>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${variable}-input`}
            className="!w-2 !h-2 !bg-light_purple transform -translate-y-1/2 top-1/2"
          />
        </div>
      ))}
      <BaseNode.Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </BaseNode>
  );
};
