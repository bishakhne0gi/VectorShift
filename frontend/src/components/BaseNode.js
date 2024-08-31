import React from "react";
import { Handle } from "reactflow";

const BaseNode = ({ children, style }) => (
  <div className="bg-dark_grey border-[1px] border-highlight_grey rounded-md w-full h-full flex flex-col">
    {children}
  </div>
);

BaseNode.Title = ({ children }) => (
  <div className="text-xl font-bold text-light_purple bg-grey p-2">
    {children}
  </div>
);

BaseNode.Content = ({ children }) => (
  <div className="flex flex-col gap-2 w-full p-2">
    <div className="bg-grey p-2 rounded-lg text-sm text-[#ACACAC]">
      {children}
    </div>
  </div>
);

BaseNode.Handle = ({ type, position, id, style }) => (
  <Handle type={type} position={position} id={id} style={style} />
);

BaseNode.InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="p-2 flex flex-col gap-2">
    <label className="text-sm text-[#ACACAC]">{label}:</label>
    <textarea
      type={type}
      value={value}
      onChange={onChange}
      width={20}
      className="bg-grey p-2 rounded-lg text-sm focus:outline-none"
    />
  </div>
);

BaseNode.SelectField = ({ label, value, onChange, options }) => (
  <div className="p-2 flex flex-col gap-2">
    <label className="text-sm text-[#ACACAC]">{label}:</label>
    <select
      value={value}
      onChange={onChange}
      className="bg-grey p-2 rounded-lg text-sm focus:outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default BaseNode;
