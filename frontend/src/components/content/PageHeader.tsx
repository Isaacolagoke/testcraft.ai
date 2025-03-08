import React from "react";
import { Button } from "@/components/ui/button/Button";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  onCreateClick: () => void;
}

export const PageHeader = ({ onCreateClick }: PageHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 py-4">
      <div className="px-1">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Your Content
        </h1>
        <p className="text-sm text-slate-500">
          Create and manage your content.
        </p>
      </div>
      <Button 
        onClick={onCreateClick}
        className="w-full sm:w-auto rounded-full bg-[#06545E] hover:bg-[#054851] transition-colors duration-200 h-9 px-3 py-1.5"
      >
        <Plus className="mr-1.5 h-3.5 w-3.5" />
        New Content
      </Button>
    </div>
  );
}; 