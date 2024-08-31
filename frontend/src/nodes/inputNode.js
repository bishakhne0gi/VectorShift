import React, { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    <BaseNode>
      <BaseNode.Title>Input</BaseNode.Title>
      <BaseNode.InputField
        label="Name"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <BaseNode.SelectField
        label="Type"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        options={[
          { value: "Text", label: "Text" },
          { value: "File", label: "File" },
        ]}
      />
      <BaseNode.Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </BaseNode>
  );
};
