import React from "react";

const LabelValue = ({ label, children, className = "", color = "" }) => {
  return (
    <div className={`flex flex-col gap-0.5 w-full ${className}`}>
      <span className="text-sm text-gray-500">{label}</span>
      <p
        className={`text-sm font-medium min-h-[20px] w-full break-words ${color}`}
      >
        {children}
      </p>
    </div>
  );
};

export default LabelValue;
