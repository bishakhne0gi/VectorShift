import { VerifiedIcon } from "lucide-react";
import { DraggableNode } from "./draggableNode";

const nodeTypes = [
  { type: "customInput", label: "Input" },
  { type: "text", label: "Text" },
  { type: "llm", label: "LLM" },
  { type: "customOutput", label: "Output" },
];

export const PipelineToolbar = () => {
  return (
    <div className="flex  items-center justify-between p-4">
      <div className="flex flex-wrap gap-4">
        {nodeTypes.map((node) => (
          <DraggableNode key={node.type} type={node.type} label={node.label} />
        ))}
      </div>
      <div className="flex items-center gap-2 text-xl font-bold text-light_purple rotate-90 md:rotate-0">
        <div className="flex items-center">
          <VerifiedIcon className="w-4 h-4 mr-2 animate-pulse" />
          <span className="text-white animate-color-shift">Vector</span>
          <span className="animate-color-shift">Shift</span>
        </div>
      </div>
    </div>
  );
};
