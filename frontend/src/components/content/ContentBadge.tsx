import React from "react";

interface ContentBadgeProps {
  label: string;
}

export const ContentBadge = ({ label }: ContentBadgeProps) => {
  return (
    <div className="bg-slate-100 px-2 py-1 rounded-full text-[10px] font-medium text-slate-600 uppercase tracking-wider">
      {label}
    </div>
  );
}; 