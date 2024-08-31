// draggableNode.js

import { PlusIcon } from "lucide-react";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} cursor-grab px-6 py-2 flex items-center justify-center rounded-md bg-transparent border-[1px] border-dark_purple gap-2 hover:bg-highlight_purple`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <PlusIcon className="w-4 h-4 text-dark_purple" />
      <span className="text-sm md:text-base text-light_purple">{label}</span>
    </div>
  );
};
