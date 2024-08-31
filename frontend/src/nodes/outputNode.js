import React, { useState } from "react";
import { Position } from "reactflow";
import BaseNode from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <BaseNode>
      <BaseNode.Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <BaseNode.Title>Output</BaseNode.Title>
      <BaseNode.InputField
        label="Name"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <BaseNode.SelectField
        label="Type"
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        options={[
          { value: "Text", label: "Text" },
          { value: "File", label: "Image" },
        ]}
      />
    </BaseNode>
  );
};
